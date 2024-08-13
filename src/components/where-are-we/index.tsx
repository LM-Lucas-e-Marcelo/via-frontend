import { addresses } from "../../constants/addresses";
import { LocationCard } from "./location-card";

export const WhereAreWe = () => {
  return (
    <div
      className="w-full max-w-[1440px] flex flex-col items-center p-10"
      id="whereAreWe"
    >
      <p>Unidades</p>
      <strong className="text-2xl sm:text-3xl">Onde Estamos</strong>
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {addresses.map((address) => {
          return <LocationCard key={address.street} {...address} />;
        })}
      </div>
    </div>
  );
};
