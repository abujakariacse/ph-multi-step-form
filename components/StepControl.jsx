const StepControl = () => {
  return (
    <div className="max-w-sm">
      <div className={`container flex justify-between`}>
        <button
          className={`cursor-pointer rounded border-2 border-slate-700 bg-white py-2 w-32 font-semibold uppercase text-slate-700 transition duration-150 ease-in-out hover:bg-red-500 hover:border-red-500 hover:text-white `}
        >
          Back
        </button>

        <button className="justify-end cursor-pointer rounded bg-slate-700 py-2 w-32 font-semibold uppercase text-white transition duration-150 ease-in-out hover:bg-green-500 hover:text-white">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default StepControl;
