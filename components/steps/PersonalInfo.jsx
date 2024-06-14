"use client";

import React, { useState, useMemo } from "react";
import InputField from "../InputField";
import countryList from "react-select-country-list";
import Select from "../Select";
import CustomDatePicker from "../CustomDatePicker";

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: new Date(),
    country: "",
    email: "",
    phone: "",
  });

  // Fetch country options using useMemo for optimization
  const options = useMemo(() => countryList().getData(), []);
  console.log(options);

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle date picker change
  const handleDateChange = (name, date) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

  // Form submission handler (example)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can access all form data from formData object
    console.log("Form data:", formData);
    // You can further process or submit this data as needed
  };

  console.log(formData);

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
            value={formData.name}
            handleChange={handleInputChange}
          >
            Full Name
          </InputField>
        </div>

        <div>
          <CustomDatePicker
            name={"birthdate"}
            selected={formData.birthdate}
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
            value={formData.country}
            handleChange={handleInputChange}
          />
        </div>

        <div className="">
          <InputField
            name={"email"}
            placeholder={"e.g. abujakaria316@gmail.com"}
            type={"email"}
            value={formData.email}
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
            value={formData.phone}
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
