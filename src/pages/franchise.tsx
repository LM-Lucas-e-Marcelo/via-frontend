import { FranchiseForm } from "../components/franchise-form";
import { FranchiseCard } from "../components/franchise/franchise-card";
import { FranchiseSection } from "../components/franchise/franchise-section";
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
    <div className="w-full">
      <div className="mt-[60px] md:mt-[102px] max-w-[1440px] m-auto">
        <FranchiseSection />
        <motion.div
          className="w-full max-w-[1440px] m-auto flex flex-col items-center p-10"
          id="franchise"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>Área para Franqueados - Via Vistoria</p>
          <strong className="text-2xl sm:text-3xl text-primary">
            PARA O FRANQUEADO
          </strong>

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
