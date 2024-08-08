import { addresses } from "../../constants/addresses";
import { LocationCard } from "./location-card";

export const WhoWeAre = () => {
  return (
    <div
      className="bg-gradient-to-r from-white to-zinc-100 w-full max-w-[1440px] flex flex-col items-center p-10"
      id="addresses"
    >
      <p>Unidades</p>
      <strong className="text-3xl">Onde Estamos</strong>
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {addresses.map((address) => {
          return <LocationCard key={address.street} {...address} />;
        })}
      </div>
    </div>
  );
};
