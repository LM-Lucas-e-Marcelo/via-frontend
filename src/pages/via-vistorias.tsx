import cautelar from "../assets/franchises/cautelar.webp";
import logo from "../assets/franchises/logo.png";
import site from "../assets/franchises/site.webp";

interface ViaVistoriasProps {
  whatsapp: string;
  localization: string;
  mapAddress?: string;
  whatsappNumber?: string;
}

export const ViaVistorias = ({
  localization,
  whatsapp,
  mapAddress,
  whatsappNumber,
}: ViaVistoriasProps) => {
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
            className="rounded-xl w-[100%] sm:w-[90%] m-auto hover:scale-110 transition-all"
          />
        </a>
        <a href={mapAddress}>
          <img
            src={localization}
            alt="banner verde com a localização da vistoria"
            className="rounded-xl w-[100%] sm:w-[90%] m-auto hover:scale-110 transition-all"
          />
        </a>
        <a href="https://wa.me/48991920452">
          <img
            src={cautelar}
            alt="banner preto com uma chamada para revisão cautelar"
            className="rounded-xl w-[100%] sm:w-[90%] m-auto hover:scale-110 transition-all"
          />
        </a>
        <a href="https://viavistoria.com.br/">
          <img
            src={site}
            alt="banner preto com uma chamada para o site da via vistoria"
            className="rounded-xl w-[100%] sm:w-[90%] m-auto hover:scale-110 transition-all"
          />
        </a>
      </div>
      <footer className="flex bg-zinc-900 flex-col items-center text-white justify-center text-center sm:p-10 py-10 px-2">
        <img src={logo} alt="logo via" width={150} className="mb-5" />
        <p>©️2025 – Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};
