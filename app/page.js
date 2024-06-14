import StepControl from "@/components/StepControl";
import Stepper from "@/components/Stepper";
import PersonalInfo from "@/components/steps/PersonalInfo";
import TravelPreference from "@/components/steps/TravelPreference";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto rounded bg-white shadow-md md:w-8/12 p-5">
        <div className="grid grid-cols-12 gap-10 shadow-xl">
          {/* Stepper */}
          <div className="w-full col-span-4 ">
            <Stepper />
          </div>

          {/* Content & Control */}
          <div className="col-span-8">
            <div>
              {/* <PersonalInfo /> */}
              <TravelPreference />
            </div>
            <StepControl />
          </div>
        </div>
      </div>
    </div>
  );
}
