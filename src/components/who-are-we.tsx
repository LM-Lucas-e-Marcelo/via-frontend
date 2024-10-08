import image from "../assets/about-us.png";

export const WhoAreWe = () => {
  return (
    <div
      className="w-full max-w-[1440px] flex items-center p-10 gap-3 justify-around flex-wrap"
      id="whoAreWe"
    >
      <div className="sm:max-w-[50%]">
        <strong className="text-2xl sm:text-3xl mb-5 block text-primary">
          Quem Somos
        </strong>
        <p>
          Somos uma rede catarinense de vistoria veicular, com experiência de
          mais de 400 mil laudos emitidos ao longo de 10 anos. Nossa trajetória
          é marcada pela excelência na prestação dos serviços, garantindo
          segurança e tranquilidade aos clientes em cada negociação de veículo.
          Em 2024 nasceu a Via Vistoria Veicular, um importante passo de
          transformação do negócio em franqueadora. Nosso compromisso é expandir
          essa segurança a todos os catarinenses, proporcionando um serviço de
          vistoria veicular confiável em todo o estado.
        </p>
      </div>
      <img src={image} width={400} alt="sobre nós" />
    </div>
  );
};
