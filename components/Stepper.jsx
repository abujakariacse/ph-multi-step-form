import { useEffect, useRef, useState } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];

    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div key={index} className="flex">
        <div className="mr-4 flex flex-col items-center">
          <div>
            <div
              className={`flex size-9 items-center justify-center rounded-full border-2 ${
                step?.completed ? "border-primary" : "border-circle"
              }  ${step?.completed ? " bg-primary" : "bg-transparent"}`}
            >
              {step?.completed ? (
                <span className="text-white">&#10003;</span>
              ) : (
                <span className="text-secondary"> {index + 1}</span>
              )}
            </div>
          </div>
          <div
            className={`h-full  w-[1.5px]  ${
              step?.completed ? "bg-primary" : "bg-circle"
            } ${index === steps.length - 1 ? "hidden" : "block"} `}
          ></div>
        </div>
        <div className="pt-1 pb-8">
          <p className="mb-2 text-xs text-secondary">Step {index + 1}</p>
          <p className="text-secondary text-sm">{step?.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="p-5 rounded-sm">
      <div className="">{stepsDisplay}</div>
    </div>
  );
};

export default Stepper;
