"use client";

import React, { useMemo, useContext } from "react";
import InputField from "../InputField";
import countryList from "react-select-country-list";
import Select from "../Select";
import CustomDatePicker from "../CustomDatePicker";
import { StepperContext } from "@/contexts/StepperContext";

import { useForm, Controller } from "react-hook-form";

const PersonalInfo = () => {
  const { userData, setUserData } = useContext(StepperContext);

  // Fetch country options using useMemo for optimization
  const options = useMemo(() => countryList().getData(), []);

  const onSubmit = (data) => {
    setUserData({
      ...userData,
      ...data,
    });
  };

  console.log({ userData }, "line 25");

  const {
    control,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  return (
    <div>
      <div className="">
        <h1 className="text-heading font-semibold text-slate-80000">
          Personal Info
        </h1>
        <p className="text-xs text-zinc-300 py-2">
          Please provide your name, birth date, nationality, email address,
          phone
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 py-4"
      >
        <div className="">
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
                handleChange={onChange}
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
            {errors?.birthdate?.message}
          </p>
        </div>

        <div className="">
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

        <div className="">
          <InputField
            name={"email"}
            placeholder={"e.g. abujakaria316@gmail.com"}
            type={"email"}
            value={userData?.email}
            register={register}
          >
            Email Address
          </InputField>
          <p className="text-xs text-red-500 py-1">
            {errors?.email && "Email is required"}
          </p>
        </div>

        <div className="">
          <InputField
            name={"phone"}
            placeholder={"e.g. 01316460386"}
            type={"number"}
            value={userData?.phone}
            register={register}
          >
            Phone
          </InputField>
          <p className="text-xs text-red-500 py-1">
            {errors?.phone && "Phone is required"}
          </p>
        </div>
        <input type="submit" value="Test" />
      </form>
    </div>
  );
};

export default PersonalInfo;
