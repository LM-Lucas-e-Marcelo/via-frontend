import modelCarMobile from "../assets/model-car.png";
import { Button } from "./button";
import { motion } from "framer-motion";

export const Hero = () => {
  const handleRedirect = () => {
    window.open("/services/7", "_self");
  };
  return (
    <div className="w-full bg-[url(/banner-hero.png)] p-10 pb-0 bg-cover bg-center flex items-center justify-center">
      <div className="w-full max-w-[1440px] min-h-[400px] mt-[74px] flex items-center justify-around flex-col gap-10 md:gap-0 md:flex-row">
        <motion.div
          className="flex flex-col gap-2 sm:gap-4 max-w-[600px]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="sm:text-3xl text-2xl font-bold uppercase text-zinc-900">
            Antes de investir no carro dos seus sonhos, deixe a VIA analisar
            cada detalhe.
          </h1>
          <h2 className="text-lg sm:text-xl text-zinc-900">
            Com a nossa análise completa, você faz a escolha certa. <br /> A VIA
            te ajuda a enxergar além do óbvio!
          </h2>
          <Button onClick={handleRedirect} isSmall>
            Saiba mais
          </Button>
        </motion.div>

        <motion.img
          className="w-[300px] mb-10 md:mb-0"
          src={modelCarMobile}
          alt="a white car"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};
