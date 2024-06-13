const Stepper = () => {
  return (
    <div className="bg-[#483EFF] p-5 rounded-sm">
      <div className="">
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex size-9 items-center justify-center rounded-full border-2 border-white text-white">
                1
              </div>
            </div>
            <div className="h-full w-px bg-gray-600 "></div>
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-sm text-white">Step 1</p>
            <p className="text-white font-medium">Personal Info</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white dark:text-slate-200"
                >
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="pt-1 ">
            <p className="mb-2 text-sm  text-white dark:text-slate-300">
              Ready
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
