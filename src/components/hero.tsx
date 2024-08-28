import whiteCar from "../assets/white-car.svg";
import { Button } from "./button";

export const Hero = () => {
  return (
    <div className="w-full bg-[url(/banner-hero.svg)] p-10 pb-0 bg-cover bg-center flex items-center justify-center">
      <div className="w-full max-w-[1440px] min-h-[400px] mt-[74px] flex items-center justify-around flex-col gap-10 md:gap-0 md:flex-row">
        <div className="flex flex-col gap-2 sm:gap-4 max-w-[600px]">
          <h1 className="sm:text-3xl text-2xl font-bold uppercase">
            Antes de investir no carro dos seus sonhos, deixe a VIA analisar
            cada detalhe.
          </h1>
          <h2 className="text-lg sm:text-xl">
            Com a nossa análise completa, você faz a escolha certa e dirige
            tranquilo. A VIA te ajuda a enxergar além do óbvio!
          </h2>
          <Button isSmall>Saiba mais</Button>
        </div>
        <img className="w-[350px]" src={whiteCar} alt="a white car" />
      </div>
    </div>
  );
};
