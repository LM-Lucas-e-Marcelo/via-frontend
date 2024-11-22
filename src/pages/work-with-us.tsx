import { motion } from "framer-motion";
import { WorkWithUsForm } from "../components/work-with-us-form";

export const WorkWithUs = () => {
  return (
    <div className="w-full">
      <div className="mt-[60px] md:mt-[102px]">
        <motion.div
          className="w-full max-w-[1440px] m-auto flex flex-col items-center p-10"
          id="franchise"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <strong className="text-2xl sm:text-3xl text-primary mb-5">
            Conheça nossas oportunidades!
          </strong>

          <p className="max-w-[600px]">
            Na Via Vistoria, acreditamos que o sucesso começa com uma equipe
            comprometida e apaixonada pelo que faz. Se você busca uma
            oportunidade de crescimento em um ambiente dinâmico e está preparado
            para garantir segurança e confiança aos nossos clientes, o seu lugar
            é aqui!
          </p>

          <WorkWithUsForm />
        </motion.div>
      </div>
    </div>
  );
};
