"use client";

import React, { useState, useMemo, useContext } from "react";
import InputField from "../InputField";
import countryList from "react-select-country-list";
import Select from "../Select";
import CustomDatePicker from "../CustomDatePicker";
import { StepperContext } from "@/contexts/StepperContext";

const PersonalInfo = () => {
  const { userData, setUserData } = useContext(StepperContext);

  // Fetch country options using useMemo for optimization
  const options = useMemo(() => countryList().getData(), []);

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Function to handle date picker change
  const handleDateChange = (name, date) => {
    setUserData({
      ...userData,
      [name]: date,
    });
  };

  // Form submission handler (example)
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {/* Section for Personal Info */}
      <div className="">
        <h1 className="text-2xl font-medium text-slate-80000">Personal Info</h1>
        <p className="text-xs text-gray-500 py-1">
          Please provide your name, birth date, nationality, email address,
          phone
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-4">
        <div className="">
          <InputField
            name={"name"}
            placeholder={"e.g. Abu Jakaria"}
            value={userData?.name}
            handleChange={handleInputChange}
          >
            Full Name
          </InputField>
        </div>

        <div>
          <CustomDatePicker
            name={"birthdate"}
            selected={userData.birthdate}
            handleChange={handleDateChange}
          >
            Birthdate
          </CustomDatePicker>
        </div>

        <div className="">
          <Select
            label="Nationality"
            name={"country"}
            placeholder={"Select a country"}
            options={options}
            value={userData.country}
            handleChange={handleInputChange}
          />
        </div>

        <div className="">
          <InputField
            name={"email"}
            placeholder={"e.g. abujakaria316@gmail.com"}
            type={"email"}
            value={userData.email}
            handleChange={handleInputChange}
          >
            Email Address
          </InputField>
        </div>

        <div className="">
          <InputField
            name={"phone"}
            placeholder={"e.g. 01316460386"}
            type={"tel"}
            value={userData.phone}
            handleChange={handleInputChange}
          >
            Phone
          </InputField>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
