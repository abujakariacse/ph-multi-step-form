"use client";

import React, { useContext, useState } from "react";
import InputField from "../InputField";
import Select from "../Select";
import CustomDatePicker from "../CustomDatePicker";
import { StepperContext } from "@/contexts/StepperContext";
import { accommodations } from "@/utils/data";

const TravelPreference = () => {
  const { userData, setUserData } = useContext(StepperContext);

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

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="">
        <h1 className="text-2xl font-medium text-slate-80000">
          Travel Preference
        </h1>
        <p className="text-xs text-gray-500 py-1">
          Please provide departure date, return date, accommdation preference,
          special request
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-4">
        <div>
          <CustomDatePicker
            name={"departureDate"}
            selected={userData.departureDate}
            handleChange={handleDateChange}
          >
            Departure Date
          </CustomDatePicker>
        </div>
        <div>
          <CustomDatePicker
            name={"returnDate"}
            selected={userData.returnDate}
            handleChange={handleDateChange}
          >
            Return Date
          </CustomDatePicker>
        </div>

        <div className="">
          <Select
            label="Accommodation Preference"
            name={"accommodation"}
            placeholder={"Select an accommodation"}
            options={accommodations}
            value={userData.accommodation}
            handleChange={handleInputChange}
          />
        </div>

        <div className="">
          <InputField
            name={"specialRequest"}
            placeholder={"e.g. Something special"}
            value={userData.specialRequest}
            handleChange={handleInputChange}
          >
            Special Request
          </InputField>
        </div>
      </form>
    </div>
  );
};

export default TravelPreference;
