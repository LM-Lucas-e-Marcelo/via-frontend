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
          Com experiência de mais 400 mil laudos emitidos ao longo de 12 anos, a
          Via Franqueadora nasceu em 2024, com o compromisso de oferecer um
          serviço confiável e padronizado em todo estado, garantindo segurança e
          tranquilidade aos clientes em cada negociação de veículo.
        </p>
      </div>
      <img src={image} width={400} alt="sobre nós" />
    </div>
  );
};
