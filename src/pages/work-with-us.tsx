import { WorkWithUsForm } from "../components/work-with-us-form";
import workWithUsImg from "../assets/work-with-us.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const WorkWithUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="w-full">
      <div className="mt-[60px] md:mt-[102px]">
        <div className="bg-[#052b54] w-[100%] overflow-hidden cursor-pointer -mt-1">
          <motion.img
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: isInView ? 0 : 50 }}
            transition={{ duration: 1 }}
            src={workWithUsImg}
            alt="franchise"
            className="bg-primary h-full w-full object-position-sm object-cover"
          />
        </div>
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
