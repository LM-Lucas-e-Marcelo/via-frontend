import { ServiceCard } from "./service-card";
import { services } from "../../constants/services";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.2,
    },
  },
};

export const Services = () => {
  return (
    <motion.div
      className="w-full max-w-[1440px] flex flex-col items-center p-10"
      id="services"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <strong className="text-wherePrimary text-xl">VISTORIAS DETRAN</strong>
      <p className="text-xl text-center mb-10">
        Aqui você tem serviços de qualidade e segurança!
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        {services.map(({ id, title, description, icon, thumb }) => {
          return (
            <ServiceCard
              isPrecautionary
              id={id}
              key={id}
              title={title}
              description={description}
              icon={icon}
              img={thumb}
            />
          );
        })}
      </div>
    </motion.div>
  );
};
