import { FranchiseForm } from "../components/franchise-form";
import { FranchiseCard } from "../components/franchise/franchise-card";
import { franchises } from "../constants/franchises";

export const Franchise = () => {
  return (
    <div className="mt-[60px] md:mt-[102px]">
      <div className="relative">
        <img
          className="h-[250px] object-fill md:h-auto"
          src="/franchise-banner.png"
          alt="Já imaginou ter seu próprio negócio?"
        />
        <a
          href="#franchise-form"
          className="mt-5 bg-gradient-to-b from-wherePrimary to-whereSecondary text-white px-5 py-2 hover:opacity-90 absolute bottom-[7%] left-[15%] z-50"
        >
          Seja um franqueado
        </a>
      </div>
      <div
        className="w-full max-w-[1440px] m-auto flex flex-col items-center p-10"
        id="franchise"
      >
        <p>Área para Franqueados - Via Vistoria</p>
        <strong className="text-2xl sm:text-3xl text-primary">
          Suporte Personalizado
        </strong>
        <p className="text-center mt-1">
          Na Via Vistoria, oferecemos um suporte completo e contínuo para nossos
          franqueados, desde o treinamento inicial até a gestão diária da
          unidade.
          <br />
          Explore abaixo as áreas em que nosso suporte se destaca:
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {franchises.map((franchise) => {
            return <FranchiseCard key={franchise.title} {...franchise} />;
          })}
        </div>
        <FranchiseForm />
      </div>
    </div>
  );
};
