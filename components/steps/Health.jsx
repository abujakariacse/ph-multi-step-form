"use client";
import { StepperContext } from "@/contexts/StepperContext";
import InputField from "../InputField";
import { useContext, useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { healthSchema } from "@/schema/zodValidationSchema";
const Health = () => {
  const { userData, setUserData, handleFormSubmit } =
    useContext(StepperContext);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(healthSchema),
  });

  return (
    <div>
      <div>
        <h1 className="text-2xl font-medium text-slate-800 text-heading text-center md:text-left">
          Health & Safety
        </h1>
        <p className="text-xs text-secondary py-2 text-center md:text-left">
          Please provide health declaration, emergency contact, medical
          condition, special request
        </p>
      </div>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-4 py-4"
      >
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
              {...register("healthDeclaration", {
                required: "Please select health condition",
              })}
            />
            <i className="pl-2 not-italic">Yes</i>
          </label>

          <label className="flex text-gray-700 rounded-md px-3 py-2 my-2 text-sm cursor-pointer border">
            <input
              type="radio"
              name="healthDeclaration"
              value="No"
              {...register("healthDeclaration", {
                required: "Please select health condition",
              })}
            />
            <i className="pl-2 not-italic">No</i>
          </label>

          <p className="text-xs text-red-500 py-1">
            {errors?.healthDeclaration?.message}
          </p>
        </div>

        <div>
          <InputField
            name="emergencyContact"
            placeholder="e.g. 01787944147"
            value={userData?.emergencyContact}
            register={register}
            type="number"
          >
            Emergency Contact
          </InputField>
          <p className="text-xs text-red-500 py-1">
            {errors?.emergencyContact && errors?.emergencyContact?.message}
          </p>
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
            {...register("healthCondition", {
              maxLength: {
                value: 256,
                message: "Health Condition should not exceed 256 characters",
              },
            })}
            name="healthCondition"
            id="healthCondition"
            rows="3"
            maxLength="256"
            value={userData?.healthCondition}
            placeholder="Eg. Suffering from fever till 5 days with headache.  [Max 256 chars]"
            className="rounded-sm resize-none p-4 border bg-white border-solid border-black/10 focus:outline-none text-sm w-full placeholder:text-xs"
          />

          <p className="text-xs text-red-500 py-1">
            {errors?.healthCondition?.message}
          </p>
        </div>
        <input type="submit" value="Submit" className="hidden" />
      </form>
    </div>
  );
};

export default Health;
