"use client";

import React, { useMemo, useContext } from "react";
import InputField from "../InputField";
import countryList from "react-select-country-list";
import Select from "../Select";
import CustomDatePicker from "../CustomDatePicker";
import { StepperContext } from "@/contexts/StepperContext";
import { useForm, Controller } from "react-hook-form";
import { personalInfoSchema } from "@/schema/zodValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const PersonalInfo = ({}) => {
  const { userData, handleFormSubmit } = useContext(StepperContext);
  const options = useMemo(() => countryList().getData(), []);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      birthdate: userData?.birthdate ? new Date(userData.birthdate) : null,
    },
  });

  return (
    <div>
      <div>
        <h1 className="text-heading font-semibold text-slate-80000 text-center md:text-left">
          Personal Info
        </h1>
        <p className="text-xs text-zinc-300 py-2 text-center md:text-left">
          Please provide your name, birth date, nationality, email address,
          phone
        </p>
      </div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-4 py-4"
      >
        <div>
          <InputField
            name={"name"}
            placeholder={"e.g. Abu Jakaria"}
            value={userData?.name}
            register={register}
          >
            Full Name
          </InputField>
          <p className="text-xs text-red-500 py-1">
            {errors?.name && "Name is required"}
          </p>
        </div>
        <div>
          <Controller
            rules={{ required: "Birthdate is required" }}
            control={control}
            name="birthdate"
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomDatePicker
                handleChange={(date) => {
                  onChange(date);
                  setValue("birthdate", date, { shouldValidate: true });
                }}
                handleBlur={onBlur}
                selected={value}
                name="birthdate"
                value={userData?.birthdate}
              >
                Birthdate
              </CustomDatePicker>
            )}
          />
          <p className="text-xs text-red-500 py-1">
            {errors?.birthdate && errors?.birthdate?.message}
          </p>
        </div>
        <div>
          <Select
            register={register}
            label="Nationality"
            name={"country"}
            placeholder={"Select a country"}
            options={options}
            value={userData?.country}
          />
          <p className="text-xs text-red-500 py-1">
            {errors?.country && "Select a country"}
          </p>
        </div>
        <div>
          <InputField
            name={"email"}
            placeholder={"e.g. abujakaria316@gmail.com"}
            value={userData?.email}
            register={register}
          >
            Email Address
          </InputField>
          <p className="text-xs text-red-500 py-1">
            {errors?.email && "Email is required"}
          </p>
        </div>
        <div>
          <InputField
            name={"phone"}
            placeholder={"e.g. 01316460386"}
            value={userData?.phone}
            register={register}
          >
            Phone
          </InputField>
          <p className="text-xs text-red-500 py-1">
            {errors?.phone && errors?.phone?.message}
          </p>
        </div>
        <button type="submit" className="hidden">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
