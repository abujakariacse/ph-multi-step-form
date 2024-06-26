"use client";
import Stepper from "@/components/Stepper";
import StepperControl from "@/components/StepperControl";
import Final from "@/components/steps/Final";
import Health from "@/components/steps/Health";
import PersonalInfo from "@/components/steps/PersonalInfo";
import TravelPreference from "@/components/steps/TravelPreference";
import { StepperContext } from "@/contexts/StepperContext";
import { steps } from "@/utils/data";
import { AnimatePresence, motion } from "framer-motion";

import { useMeasure } from "@uidotdev/usehooks";

import { useEffect, useState } from "react";
export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({});

  const [ref, { width, height }] = useMeasure();

  const handleFormSubmit = (data) => {
    setUserData({
      ...userData,
      ...data,
    });
    setCurrentStep((prevStep) => prevStep + 1);
  };

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

  const handleClick = async (direction) => {
    event.preventDefault();
    if (direction === "next") {
      document
        .querySelector("form")
        .dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
    } else {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  useEffect(() => {
    if (currentStep === steps.length) {
      fetch("/api/travel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [currentStep, steps.length]);

  return (
    <div className=" bg-[url('/bodyBg.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          animate={{ height: `${height + 50}px` }}
          transition={{ duration: 0.5 }}
          className="mx-auto rounded-lg bg-white md:w-8/12 "
        >
          <div ref={ref} className="md:grid md:grid-cols-12 md:gap-10 p-5 ">
            {/* Stepper */}
            <div className="w-full col-span-5 flex md:gap-16 md:justify-normal justify-center">
              <Stepper steps={steps} currentStep={currentStep} />
              <div className="w-0.5 bg-accent my-auto h-96 hidden md:block"></div>
            </div>

            {/* Content & Control */}
            <StepperContext.Provider
              value={{
                userData,
                setUserData,
                setCurrentStep,
                currentStep,
                steps,
                handleFormSubmit,
                handleClick,
              }}
            >
              <div className="col-span-6">
                <AnimatePresence mode="popLayout">
                  <div className="min-h-[400px]  ">
                    {displayStep(currentStep)}
                  </div>

                  {currentStep !== steps.length && <StepperControl />}
                </AnimatePresence>
              </div>
            </StepperContext.Provider>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
