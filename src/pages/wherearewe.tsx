import { useState, useMemo } from "react";
import { LocationCard } from "../components/where-are-we/location-card";
import { addresses } from "../constants/addresses";
import { Select } from "../components/select";
import { AnimatePresence, motion } from "framer-motion";

export const WhereAreWe = () => {
  const [selectedCity, setSelectedCity] = useState("");

  const cities = useMemo(
    () => [...new Set(addresses.map((a) => a.city))].sort(),
    [],
  );

  const filteredAddresses = useMemo(
    () =>
      selectedCity
        ? addresses.filter((a) => a.city === selectedCity)
        : addresses,
    [selectedCity],
  );

  const cityOptions = useMemo(
    () => [
      { name: "Todas", value: "" },
      ...cities.map((c) => ({ name: c, value: c })),
    ],
    [cities],
  );

  return (
    <div className="mt-[60px] md:mt-[102px] w-full">
      <div
        className="w-full max-w-[1440px] flex flex-col items-center p-10 min-h-[65vh] m-auto"
        id="whereAreWe"
      >
        <p>Unidades</p>
        <strong className="text-2xl sm:text-3xl text-primary text-center">
          Encontre a Via Vistoria mais próxima de você.
        </strong>

        <div className="w-full max-w-xs mt-6">
          <Select
            label="Filtrar por cidade"
            options={cityOptions}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          />
        </div>

        <motion.div className="flex flex-wrap gap-4 justify-center mt-6">
          <AnimatePresence>
            {filteredAddresses.map((address) => (
              <motion.div
                key={address.street}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <LocationCard {...address} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
