import { useRef } from "react";
import mapImage from "../../assets/map.png";
import { motion, useInView } from "framer-motion";

export const WhereAreWe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleRedirect = () => {
    window.open("/where-are-we", "_self");
  };
  return (
    <div
      className="w-full bg-[url(/where.png)] bg-cover md:max-h-[420px]"
      ref={ref}
    >
      <div className="max-w-[1440px] m-auto p-10 flex items-center justify-center gap-10 flex-col md:flex-row md:gap-48 md:max-h-[420px]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: isInView ? 0 : -100 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl text-white font-bold md:text-5xl">
            Sua via para a confiança <br /> tem endereço certo!
          </h1>
          <p className="text-white text-xl mt-4 text-wra ">
            Estamos presentes em diversas cidades de{" "}
            <strong>Santa Catarina.</strong>
          </p>
          <div className="flex items-center justify-center">
            <button
              onClick={handleRedirect}
              className="mt-5 bg-primary text-white px-5 py-2 hover:opacity-90"
            >
              Encontre uma unidade perto de você
            </button>
          </div>
        </motion.div>
        <motion.img
          src={mapImage}
          alt="desenho de um mapa"
          width={460}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: isInView ? 0 : 100 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};
