import { LocationCard } from "../components/where-are-we/location-card";
import { addresses } from "../constants/addresses";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const WhereAreWe = () => {
  return (
    <div className="mt-[60px] md:mt-[102px] w-full">
      <div
        className="w-full max-w-[1440px] flex flex-col items-center p-10 min-h-[65vh]"
        id="whereAreWe"
      >
        <p>Unidades</p>
        <strong className="text-2xl sm:text-3xl text-primary">
          Onde Estamos
        </strong>
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {addresses.map((address) => {
            return <LocationCard key={address.street} {...address} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};
