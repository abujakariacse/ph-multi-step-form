import { StepperContext } from "@/contexts/StepperContext";
import { useContext } from "react";

export default function Final() {
  const { userData, setUserData, setCurrentStep } = useContext(StepperContext);

  return (
    <div className="container  h-[400px] flex justify-center items-center">
      <div className="flex flex-col items-center ">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center ">
          <h4 className="mt-3 text-3xl font-semibold uppercase text-primary text-heading">
            Congratulations!
          </h4>
          <p className=" text-secondary text-xs">
            Your data has been submitted
          </p>

          <div className="my-4">
            <button
              onClick={() => {
                setCurrentStep(1);
                setUserData({});
              }}
              className="justify-end cursor-pointer rounded bg-primary font-medium py-2.5 w-32   text-white transition duration-150 ease-in-out hover:bg-[#BDFF85] hover:text-slate-700  select-none text-sm"
            >
              Go to home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
