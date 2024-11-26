import viaSticky from "../assets/sticky-via.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="bg-[url(/security-bg.png)] w-full" ref={ref}>
      <div className="max-w-[1440px] w-full flex m-auto p-10 items-center justify-center gap-10 flex-col md:flex-row md:gap-48">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: isInView ? 0 : -100 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold mb-1">
            Com a VIA seu serviço é 100% seguro!
          </h1>
          <p className="text-3xl">
            Seguimos todas as normas de <br /> qualidade determinadas pelos{" "}
            <br /> órgãos competentes.
          </p>
        </motion.div>
        <motion.img
          src={viaSticky}
          alt="logo via"
          width={220}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: isInView ? 0 : 100 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}
