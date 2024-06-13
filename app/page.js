import StepControl from "@/components/StepControl";
import Health from "@/components/steps/Health";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto rounded bg-white pb-2 shadow-md md:w-1/2 p-4 ">
        <div className="grid grid-cols-12 ">
          {/* Stepper */}
          <div className="w-full col-span-3">Stepper</div>

          {/* Content & Control */}
          <div className="col-span-9">
            <div>
              <Health />
            </div>
            <StepControl />
          </div>
        </div>
      </div>
    </div>
  );
}
