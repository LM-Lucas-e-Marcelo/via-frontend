import cautelar from "../assets/franchises/cautelar.webp";
import logo from "../assets/franchises/logo.png";
import site from "../assets/franchises/site.webp";
import { WhatsappButton } from "../components/whatsapp-button";

interface ViaVistoriasProps {
  whatsapp: string;
  localization: string;
  mapAddress?: string;
  whatsappNumber?: string;
  hasPrecautionary: boolean;
  route: string;
}

export const ViaVistorias = ({
  localization,
  whatsapp,
  mapAddress,
  whatsappNumber,
  hasPrecautionary,
  route,
}: ViaVistoriasProps) => {
  const isCriciumaRoute = route === "/criciuma";
  return (
    <div className="w-full bg-gradient-to-b from-black to-zinc-600 h-full flex flex-col justify-between">
      <header className="pt-10 pb-0 flex items-center justify-center">
        <img src={logo} width={300} alt="logo via" />
      </header>
      <div className="max-w-[1440px] m-auto flex flex-col items-center justify-center gap-6 p-4 sm:p-10">
        <a href={`https://wa.me/${whatsappNumber}`}>
          <img
            src={whatsapp}
            alt="Banner verde com o número de whatsapp"
            className="rounded-xl w-[100%] max-w-[1022px] sm:w-[90%] m-auto hover:scale-110 transition-all"
          />
        </a>
        <a href={mapAddress}>
          <img
            src={localization}
            alt="banner verde com a localização da vistoria"
            className="rounded-xl w-[100%] sm:w-[90%] m-auto hover:scale-110 transition-all"
          />
        </a>
        {hasPrecautionary && (
          <a href={`https://wa.me/${whatsappNumber}`}>
            <img
              src={cautelar}
              alt="banner preto com uma chamada para revisão cautelar"
              className="rounded-xl w-[100%] sm:w-[90%] m-auto hover:scale-110 transition-all"
            />
          </a>
        )}
        <a href="https://viavistoria.com.br/">
          <img
            src={site}
            alt="banner preto com uma chamada para o site da via vistoria"
            className="rounded-xl w-[100%] sm:w-[90%] m-auto hover:scale-110 transition-all"
          />
        </a>
      </div>
      <footer className="flex bg-zinc-900 flex-col items-center text-white justify-center text-center sm:p-10 py-10 px-2 text-sm p-2 sm:text-md">
        <img src={logo} alt="logo via" width={150} className="mb-5" />
        {isCriciumaRoute ? (
          <>
            <strong className="sm:text-lg">
              VIA VISTORIA VEICULAR - CNPJ: 24.876.973/0001-57
            </strong>
            <p className="mt-2 sm:text-base text-xs">
              Rua Coronel Marcos Rovaris, 755, Pio Corrêa, Criciúma/SC{" "}
              <br className="sm:hidden" /> CEP: 88811-532
            </p>
            <p className="mt-2 sm:text-base text-xs">
              Telefone / Whatsapp:{" "}
              <a href={`https://wa.me/${whatsappNumber}`}>(48) 3433-3107</a>
            </p>
            <p className="mt-10 border-t border-zinc-700 w-full pt-5">
              ©️2025 – Todos os direitos reservados.
            </p>
          </>
        ) : (
          <p>©️2025 – Todos os direitos reservados.</p>
        )}
      </footer>
      {isCriciumaRoute && <WhatsappButton whatsappNumber={whatsappNumber} />}
    </div>
  );
};
