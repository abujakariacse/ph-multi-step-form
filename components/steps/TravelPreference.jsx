"use client";

import React, { useContext, useState } from "react";
import InputField from "../InputField";
import Select from "../Select";
import CustomDatePicker from "../CustomDatePicker";
import { StepperContext } from "@/contexts/StepperContext";
import { accommodations } from "@/utils/data";

import { useForm, Controller } from "react-hook-form";

const TravelPreference = () => {
  const { userData, setUserData } = useContext(StepperContext);
  console.log(userData);
  const {
    control,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUserData({
      ...userData,
      ...data,
    });
  };

  return (
    <div>
      <div className="">
        <h1 className="text-heading font-medium text-slate-80000">
          Travel Preference
        </h1>
        <p className="text-xs text-secondary py-2">
          Please provide departure date, return date, accommdation preference,
          special request
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 py-4"
      >
        <div>
          <Controller
            rules={{ required: "Depature date is required" }}
            control={control}
            name={"departureDate"}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <CustomDatePicker
                handleChange={onChange}
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
                handleChange={onChange}
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
            {errors?.returnDate?.message}
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
        <input type="submit" value="Test" />
      </form>
    </div>
  );
};

export default TravelPreference;
