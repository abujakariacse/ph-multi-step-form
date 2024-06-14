"use client";
import Stepper from "@/components/Stepper";
import StepperControl from "@/components/StepperControl";
import Health from "@/components/steps/Health";
import PersonalInfo from "@/components/steps/PersonalInfo";
import TravelPreference from "@/components/steps/TravelPreference";

import { useState } from "react";
export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  console.log({ currentStep });
  const steps = [
    "Personal Information",
    "Travel Preference",
    "Health & Safety",
    "Complete",
  ];

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto rounded bg-white shadow-md md:w-8/12 p-5 border">
        <div className="grid grid-cols-12 gap-10 ">
          {/* Stepper */}
          <div className="w-full col-span-4 ">
            <Stepper />
          </div>

          {/* Content & Control */}
          <div className="col-span-8">
            <div>
              {/* <PersonalInfo /> */}
              {/* <TravelPreference /> */}
              <Health />
            </div>
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
