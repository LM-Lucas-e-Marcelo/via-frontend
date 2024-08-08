import whiteCar from "../assets/white-car.png";

export const Hero = () => {
  return (
    <div className="w-full max-w-[1440px] h-[400px] bg-gradient-to-r from-white to-zinc-100 mt-[74px] flex items-center justify-around p-10">
      <div className="flex flex-col gap-4 max-w-[600px]">
        <h1 className="text-3xl font-bold uppercase">
          Antes de investir no carro dos seus sonhos, deixe a VIA analisar cada
          detalhe.
        </h1>
        <h4 className="text-xl">
          Com a nossa análise completa, você faz a escolha certa e dirige
          tranquilo. A VIA te ajuda a enxergar além do óbvio!
        </h4>
      </div>
      <img className="w-[300px]" src={whiteCar} alt="a white car" />
    </div>
  );
};
