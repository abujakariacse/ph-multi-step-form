"use client";

import React, { useContext, useState } from "react";
import InputField from "../InputField";
import Select from "../Select";
import CustomDatePicker from "../CustomDatePicker";
import { StepperContext } from "@/contexts/StepperContext";
import { accommodations } from "@/utils/data";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { travelPreferenceSchema } from "@/schema/zodValidationSchema";

const TravelPreference = () => {
  const { userData, setUserData, handleFormSubmit } =
    useContext(StepperContext);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(travelPreferenceSchema),
    defaultValues: {
      departureDate: userData?.departureDate
        ? new Date(userData.departureDate)
        : null,
      returnDate: userData?.returnDate ? new Date(userData.returnDate) : null,
    },
  });

  return (
    <div>
      <div className="">
        <h1 className="text-heading font-medium text-slate-80000 ">
          Travel Preference
        </h1>
        <p className="text-xs text-secondary py-2 ">
          Please provide departure date, return date, accommdation preference,
          special request
        </p>
      </div>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-4 py-4"
      >
        <div>
          <Controller
            rules={{ required: "Depature date is required" }}
            control={control}
            name={"departureDate"}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomDatePicker
                handleChange={(date) => {
                  onChange(date);
                  setValue("departureDate", date, { shouldValidate: true });
                }}
                handleBlur={onBlur}
                selected={value}
                name="departureDate"
                value={userData?.departureDate}
              >
                Departure Date
              </CustomDatePicker>
            )}
          />
          <p className="text-xs text-red-500 py-1">
            {errors?.departureDate?.message}
          </p>
        </div>
        <div>
          <Controller
            rules={{ required: "Return date is required" }}
            control={control}
            name={"returnDate"}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <CustomDatePicker
                handleChange={(date) => {
                  onChange(date);
                  setValue("returnDate", date, { shouldValidate: true });
                }}
                handleBlur={onBlur}
                selected={value}
                name="returnDate"
                value={userData?.returnDate}
              >
                Return Date
              </CustomDatePicker>
            )}
          />
          <p className="text-xs text-red-500 py-1">
            {errors?.returnDate && errors?.returnDate?.message}
          </p>
        </div>

        <div className="">
          <Select
            register={register}
            label="Accommodation Preference"
            name="accommodation"
            placeholder={"Select an accommodation"}
            options={accommodations}
            value={userData?.accommodation}
          />
          <p className="text-xs text-red-500 py-1">
            {errors?.accommodation && "Please select an accommodation "}
          </p>
        </div>

        <div className="">
          <InputField
            name={"specialRequest"}
            placeholder={"e.g. Something special"}
            value={userData?.specialRequest}
            register={register}
          >
            Special Request
          </InputField>
          <p className="text-xs text-red-500 py-1">
            {errors?.specialRequest && "Special Request is required"}
          </p>
        </div>
        <input type="submit" value="Submit" className="hidden" />
      </form>
    </div>
  );
};

export default TravelPreference;
