"use client";
import React, { useMemo } from "react";
import InputField from "../InputField";
import countryList from "react-select-country-list";
import Select from "../Select";
import CustomDatePicker from "../CustomDatePicker";

const Health = () => {
  const options = useMemo(() => countryList().getData(), []);
  console.log(options);

  return (
    <div>
      <div className="">
        <h1 className="text-2xl font-medium text-slate-80000">Personal Info</h1>
        <p className="text-xs text-gray-500 py-1">
          Please provide your name, birth date, nationality, email address,
          phone
        </p>
      </div>
      {/* Input fields */}
      <div className="flex flex-col gap-4 py-4">
        <div className="">
          <InputField name={"name"} placeholder={"e.g. Abu Jakaria"}>
            Full Name
          </InputField>
        </div>

        <div>
          <CustomDatePicker name={"birthdate"}>Birthdate</CustomDatePicker>
        </div>

        <div className="">
          <Select
            label="Nationality"
            name={"country"}
            placeholder={"Select a country"}
            options={options}
          />
        </div>

        <div className="">
          <InputField
            name={"email"}
            placeholder={"e.g. abujakaria316@gmail.com"}
            type={"email"}
          >
            Email Address
          </InputField>
        </div>

        <div className="">
          <InputField
            name={"phone"}
            placeholder={"e.g. 01316460386"}
            type={"number"}
          >
            Phone
          </InputField>
        </div>
      </div>
    </div>
  );
};

export default Health;
