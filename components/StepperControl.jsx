const StepperControl = ({ steps, currentStep, handleClick }) => {
  return (
    <div className="max-w-sm">
      <div
        className={`container flex ${
          currentStep > 1 ? "justify-between" : "justify-end"
        }`}
      >
        {currentStep !== 1 && (
          <button
            onClick={() => handleClick()}
            className={`cursor-pointer rounded border-2 border-slate-700 bg-white py-2 w-32 font-semibold uppercase text-slate-700 transition duration-150 ease-in-out hover:bg-red-500 hover:border-red-500 hover:text-white select-none `}
          >
            Back
          </button>
        )}

        <button
          onClick={() => handleClick("next")}
          className="justify-end cursor-pointer rounded bg-slate-700 py-2 w-32 font-semibold uppercase text-white transition duration-150 ease-in-out hover:bg-green-500 hover:text-white select-none"
        >
          {currentStep === steps.length - 1 ? "Submit Info" : "Next Step"}
        </button>
      </div>
    </div>
  );
};

export default StepperControl;