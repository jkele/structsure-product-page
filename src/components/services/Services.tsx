import { Checkmark } from "@/src/icons/Checkmark";

export const Services = () => {
  return (
    <div className="flex flex-row justify-center gap-[180px] mt-[70px] mb-[150px]">
      <div className="flex flex-col">
        <Checkmark className="self-center" />
        <p className="text-[26px] w-[160px] text-center">
          organize & update in real time
        </p>
      </div>
      <div className="flex flex-col">
        <Checkmark className="self-center" />
        <p className="text-[26px] w-[160px] text-center">
          share with teammates anywhere, anytime
        </p>
      </div>
      <div className="flex flex-col">
        <Checkmark className="self-center" />
        <p className="text-[26px] w-[160px] text-center">
          archive projects for later revision
        </p>
      </div>
      <div className="flex flex-col">
        <Checkmark className="self-center" />
        <p className="text-[26px] w-[160px] text-center">
          add pictures & details for precision
        </p>
      </div>
    </div>
  );
};
