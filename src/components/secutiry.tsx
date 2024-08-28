import viaSticky from "../assets/sticky-via.png";
import detranLogo from "../assets/detran-logo.png";

export function Security() {
  return (
    <div className="bg-[url(/security-bg.png)] w-full">
      <div className="max-w-[1440px] w-full flex m-auto p-10 items-center justify-center gap-10 flex-col md:flex-row md:gap-48">
        <div>
          <h1 className="text-3xl font-bold mb-1">
            Com a VIA seu serviço é 100% seguro!
          </h1>
          <p className="text-3xl">
            Seguimos todas as normas de <br /> qualidade determinadas pelos{" "}
            <br /> órgãos competentes.
          </p>
          <span className="flex gap-3 mt-4 text-zinc-500 items-center">
            Vistoria veicular credenciada pelo{" "}
            <img
              alt="logo detran"
              src={detranLogo}
              className="shrink-0 w-[60px] h-[15px] md:w-[100px] md:h-[auto]"
            />
          </span>
        </div>
        <img src={viaSticky} alt="logo via" width={300} />
      </div>
    </div>
  );
}
