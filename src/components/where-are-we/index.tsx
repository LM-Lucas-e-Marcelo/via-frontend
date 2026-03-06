import { useRef } from "react";
import mapImage from "../../assets/map.png";
import { motion, useInView } from "framer-motion";
import buttonIcon from '../../assets/icons/button-icon.png'

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
      <div className="max-w-[1440px] m-auto p-10 flex items-center justify-center gap-24 flex-col md:flex-row md:gap-32 md:max-h-[420px]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: isInView ? 0 : -100 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl text-white font-bold md:text-5xl">
            Quando o assunto é <br /> confiança, o caminho <br /> leva à VIA!
          </h1>
          <p className="text-white text-2xl mt-4 text-wra">
            Estamos em diversas cidades de <br/>
            <strong className="text-[#83caff]">Santa Catarina</strong> para te atender.
          </p>

            <button
              onClick={handleRedirect}
              className="mt-10 bg-white rounded-full text-zinc-900 py-1 pr-3 pl-2 hover:opacity-90 flex items-center gap-2 md:text-lg text-md"
            >
              <img src={buttonIcon} alt="icon" className="w-8 h-6" />
              Encontre uma unidade <strong>perto de você.</strong>
            </button>

        </motion.div>
        <motion.img
          src={mapImage}
          alt="desenho de um mapa"
          width={520}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: isInView ? 0 : 100 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};
