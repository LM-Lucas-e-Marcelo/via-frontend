import { FranchiseForm } from "../components/franchise-form";
import { FranchiseCard } from "../components/franchise/franchise-card";
import { franchises } from "../constants/franchises";
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

export const Franchise = () => {
  return (
    <div className="w-full md:p-10">
      <div className="mt-[60px] md:mt-[102px] max-w-[1440px] m-auto">
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            className="w-[90%] h-[150px] md:h-[auto] md:w-[1100px] m-auto mt-10 rounded-md"
            src="/franchise-banner.png"
            alt="Já imaginou ter seu próprio negócio?"
          />
          <a
            href="#franchise-form"
            className="mt-5 bg-gradient-to-b from-wherePrimary to-whereSecondary text-white px-5 md:py-2 md:text-md text-sm p-1 hover:opacity-90 absolute md:bottom-[10%] md:left-[30%] bottom-[7%] left-[15%] z-40"
          >
            Seja um franqueado
          </a>
        </motion.div>
        <motion.div
          className="w-full max-w-[1440px] m-auto flex flex-col items-center p-10"
          id="franchise"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>Área para Franqueados - Via Vistoria</p>
          <strong className="text-2xl sm:text-3xl text-primary">
            Suporte Personalizado
          </strong>
          <p className="text-center mt-1">
            Na Via Vistoria, oferecemos um suporte completo e contínuo para
            nossos franqueados, desde o treinamento inicial até a gestão diária
            da unidade.
            <br />
            Explore abaixo as áreas em que nosso suporte se destaca:
          </p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center mt-6"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {franchises.map((franchise) => {
              return <FranchiseCard key={franchise.title} {...franchise} />;
            })}
          </motion.div>
          <FranchiseForm />
        </motion.div>
      </div>
    </div>
  );
};
