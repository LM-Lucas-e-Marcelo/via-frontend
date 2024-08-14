import { franchises } from "../../constants/franchises";
import { FranchiseCard } from "./franchise-card";

export const Franchise = () => {
  return (
    <div
      className="w-full max-w-[1440px] flex flex-col items-center p-10"
      id="franchise"
    >
      <p>Área para Franqueados - Via Vistoria</p>
      <strong className="text-2xl sm:text-3xl">Suporte Personalizado</strong>
      <p className="text-center">
        Na Via Vistoria, oferecemos um suporte completo e contínuo para nossos
        franqueados, desde o treinamento inicial até a gestão diária da unidade.
        Explore abaixo as áreas em que nosso suporte se destaca:
      </p>
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {franchises.map((franchise) => {
          return <FranchiseCard key={franchise.title} {...franchise} />;
        })}
      </div>
    </div>
  );
};
