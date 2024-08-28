import mapImage from "../../assets/map.png";

export const WhereAreWe = () => {
  const handleRedirect = () => {
    window.open("/where-are-we", "_self");
  };
  return (
    <div className="w-full bg-[url(/where.png)] bg-cover">
      <div className="max-w-[1440px] m-auto p-10 flex items-center justify-center gap-10 flex-col md:flex-row md:gap-48">
        <div>
          <h1 className="text-3xl text-white font-bold md:text-5xl">
            Sua via para a confiança <br /> tem endereço certo!
          </h1>
          <p className="text-white text-xl mt-4 text-wra ">
            Estamos presentes em diversas cidades de{" "}
            <strong>Santa Catarina.</strong>
          </p>
          <div className="flex items-center justify-center">
            <button
              onClick={handleRedirect}
              className="mt-5 bg-gradient-to-b from-wherePrimary to-whereSecondary text-white px-5 py-2 hover:opacity-90"
            >
              Encontre uma unidade perto de você
            </button>
          </div>
        </div>
        <img src={mapImage} alt="desenho de um mapa" width={400} />
      </div>
    </div>
  );
};
