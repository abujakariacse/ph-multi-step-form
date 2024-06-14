"use client";
import { StepperContext } from "@/contexts/StepperContext";
import InputField from "../InputField";
import { useContext, useState } from "react";

const Health = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleRadioChange = (event) => {
    setUserData({
      ...userData,
      healthDeclaration: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userData?.healthDeclaration) {
      alert("Please select a health declaration.");
      return;
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-medium text-slate-800 text-heading">
          Health & Safety
        </h1>
        <p className="text-xs text-secondary py-2">
          Please provide health declaration, emergency contact, medical
          condition, special request
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-4">
        <div className="max-w-sm">
          <label
            className="block text-slate-700 mb-2 text-xs"
            htmlFor="healthDeclaration"
          >
            Health Declaration
            <span className="text-red-500 italic">*</span>
          </label>
          <label className="flex text-gray-700 rounded-md px-3 border py-2 my-2 text-sm cursor-pointer">
            <input
              type="radio"
              name="healthDeclaration"
              value="Yes"
              checked={userData?.healthDeclaration === "Yes"}
              onChange={handleRadioChange}
            />
            <i className="pl-2 not-italic">Yes</i>
          </label>

          <label className="flex text-gray-700 rounded-md px-3 py-2 my-2 text-sm cursor-pointer border">
            <input
              type="radio"
              name="healthDeclaration"
              value="No"
              checked={userData?.healthDeclaration === "No"}
              onChange={handleRadioChange}
            />
            <i className="pl-2 not-italic">No</i>
          </label>
        </div>

        <div>
          <InputField
            name="emergencyContact"
            placeholder="e.g. 01787944147"
            value={userData?.emergencyContact}
            handleChange={handleInputChange}
            type="number"
          >
            Emergency Contact
          </InputField>
        </div>

        <div className="max-w-sm">
          <label
            className="block text-slate-700 mb-2 text-xs"
            htmlFor="healthCondition"
          >
            Health Condition{" "}
            <span className="text-xs italic">(if applicable)</span>{" "}
          </label>
          <textarea
            name="healthCondition"
            id="healthCondition"
            rows="3"
            maxLength="256"
            value={userData?.healthCondition}
            onChange={handleInputChange}
            placeholder="Eg. Suffering from fever till 5 days with headache.  [Max 256 chars]"
            className="rounded-sm resize-none p-4 border bg-white border-solid border-black/10 focus:outline-none text-sm w-full placeholder:text-xs"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Health;
