"use client";

import React, { useState } from "react";
import InputField from "../InputField";
import Select from "../Select";
import CustomDatePicker from "../CustomDatePicker";

const TravelPreference = () => {
  const accommodations = [
    {
      value: "SH",
      label: "Space Hotel",
    },
    {
      value: "MB",
      label: "Martian Base",
    },
  ];
  const [formData, setFormData] = useState({
    departureDate: new Date(),
    returnDate: new Date(),
    accommodation: null,
    specialRequest: "",
  });

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

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can access all form data from formData object
    console.log("Form data:", formData);
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
            selected={formData.departureDate}
            handleChange={handleDateChange}
          >
            Departure Date
          </CustomDatePicker>
        </div>
        <div>
          <CustomDatePicker
            name={"returnDate"}
            selected={formData.returnDate}
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
            value={formData.accommodation}
            handleChange={handleInputChange}
          />
        </div>

        <div className="">
          <InputField
            name={"specialRequest"}
            placeholder={"e.g. Something special"}
            value={formData.specialRequest}
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
