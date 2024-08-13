import { franchises } from "../../constants/franchises";
import { FranchiseCard } from "./franchise-card";

export const Franchise = () => {
  return (
    <div
      className="w-full max-w-[1440px] flex flex-col items-center p-10"
      id="franchise"
    >
      <p>Franquia</p>
      <strong className="text-2xl sm:text-3xl">Suporte Oferecido</strong>
      <p className="text-center">
        Aqui na Via, o franqueado recebe treinamento inicial e todo o suporte
        para gestão do negócio no dia a dia. <br /> Confira abaixo mais sobre o
        suporte oferecido pela franqueadora para toda a rede
      </p>
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {franchises.map((franchise) => {
          return <FranchiseCard key={franchise.title} {...franchise} />;
        })}
      </div>
    </div>
  );
};
