import { precautionaryServices } from "../constants/precautionary-services";
import { ServiceCard } from "./services/service-card";
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

export const PrecautionaryInspection = () => {
  return (
    <div className="w-full bg-zinc-200 flex justify-center">
      <motion.div
        className="w-full max-w-[1440px] flex flex-col items-center p-10"
        id="services"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <strong className="text-primary text-xl">VISTORIA CAUTELAR</strong>
        <p className="text-xl text-center mb-10">
          Aqui você tem serviços de qualidade e segurança! A vistoria cautelar
          serve para documentar o estado do veículo, relatando potenciais
          problemas, adulterações ou irregularidades que poderiam passar
          despercebidas. Para a segurança na negociação de veículos seminovos, é
          primordial a análise realizada na vistoria cautelar para assegurar o
          histórico, procedência e estado atual do veículo.
        </p>

        <strong className="text-md text-center">
          NA VIA VOCÊ ENCONTRA QUATRO TIPOS DE VISTORIA CAUTELAR
        </strong>
        <p className="text-md text-center mb-10">
          Escolha a que mais se adequa à sua necessidade:
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          {precautionaryServices.map(
            ({ id, title, description, icon, thumb }) => {
              return (
                <ServiceCard
                  id={id}
                  key={id}
                  title={title}
                  description={description}
                  icon={icon}
                  img={thumb}
                />
              );
            }
          )}
        </div>
      </motion.div>
    </div>
  );
};
