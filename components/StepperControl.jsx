import { StepperContext } from "@/contexts/StepperContext";
import { useContext } from "react";

const StepperControl = () => {
  const { steps, currentStep, handleClick } = useContext(StepperContext);
  return (
    <div className="max-w-sm">
      <div
        className={`container flex justify-end gap-5 text-sm select-none border-none`}
      >
        {currentStep !== 1 && (
          <button
            onClick={() => handleClick()}
            className={`cursor-pointer text-secondary`}
          >
            Previous
          </button>
        )}

        <button
          type="submit"
          onClick={() => handleClick("next")}
          className="cursor-pointer rounded border bg-primary outline-none py-3 w-20 text-white transition duration-150 ease-in-out select-none text-sm font-medium"
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default StepperControl;
