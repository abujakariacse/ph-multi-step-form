"use client";
import Stepper from "@/components/Stepper";
import StepperControl from "@/components/StepperControl";
import Final from "@/components/steps/Final";
import Health from "@/components/steps/Health";
import PersonalInfo from "@/components/steps/PersonalInfo";
import TravelPreference from "@/components/steps/TravelPreference";
import { StepperContext } from "@/contexts/StepperContext";
import { steps } from "@/utils/data";

import { useState } from "react";
export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({});

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <TravelPreference />;
      case 3:
        return <Health />;
      case 4:
        return <Final />;

      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="flex items-center justify-center min-h-screen pattern-bg">
      <div className="mx-auto rounded bg-transparent shadow-md md:w-8/12 p-5 border">
        <div className="grid grid-cols-12 gap-10 ">
          {/* Stepper */}
          <div className="w-full col-span-4 ">
            <Stepper />
          </div>

          {/* Content & Control */}
          <div className="col-span-8">
            <div className="min-h-[400px]">
              <StepperContext.Provider value={{ userData, setUserData }}>
                {displayStep(currentStep)}
              </StepperContext.Provider>
            </div>

            {currentStep !== steps.length && (
              <StepperControl
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
