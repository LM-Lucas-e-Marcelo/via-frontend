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
          Somos a <strong>maior rede catarinense de vistoria veicular</strong>,
          com mais de 400 mil laudos emitidos ao longo de 10 anos de atuação.
          Nossa trajetória é marcada pela busca incessante pela excelência na
          prestação de serviços, garantindo a segurança e a tranquilidade de
          nossos clientes em cada negociação veicular.
          <br />
          <br />
          Em 2024, demos um importante passo rumo à transformação do nosso
          negócio ao lançar a Via Vistoria Veicular, uma nova fase que marca o
          início da nossa operação como <strong>franquia.</strong> Nosso
          compromisso é expandir essa segurança a todos os catarinenses,
          proporcionando um serviço de vistoria veicular confiável e acessível
          em todo o estado.
        </p>
      </div>
      <img src={image} width={400} alt="sobre nós" />
    </div>
  );
};
