import { useMemo, useEffect } from "react";
import cautelar from "../assets/franchises/cautelar.webp";
import logo from "../assets/franchises/logo.png";
import site from "../assets/franchises/site.webp";
import { WhatsappButton } from "../components/whatsapp-button";
import { addresses } from "../constants/addresses";
interface ViaVistoriasProps {
  whatsapp: string;
  localization: string;
  mapAddress?: string;
  whatsappNumber?: string;
  hasPrecautionary: boolean;
  id: string;
  cnpj: string;
  route: string
}

export const ViaVistorias = ({
  localization,
  whatsapp,
  mapAddress,
  whatsappNumber,
  hasPrecautionary,
  id,
  cnpj,
  route
}: ViaVistoriasProps) => {

  const currentFranchise = useMemo(
    () => addresses.find((adress) => adress.id === id),
    [id]
  );

  useEffect(() => {
    if (route === '/riomaina') {
      // Adiciona o script do Google Tag Manager
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16990081302';
      document.head.appendChild(script1);

      // Adiciona o script de configuração do gtag
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16990081302');
      `;
      document.head.appendChild(script2);

      // Cleanup function para remover os scripts quando o componente for desmontado
      return () => {
        const scripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
        scripts.forEach(script => script.remove());
        
        const gtagScripts = document.querySelectorAll('script');
        gtagScripts.forEach(script => {
          if (script.innerHTML.includes('gtag(')) {
            script.remove();
          }
        });
      };
    }
  }, [route]);
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

        <>
          <strong className="sm:text-lg">
            VIA VISTORIA VEICULAR - CNPJ: {cnpj}
          </strong>
          <p className="mt-2 sm:text-base text-xs max-w-[350px] sm:w-full">
            {currentFranchise?.street}
          </p>
          <p className="mt-2 sm:text-base text-xs">
            Telefone / Whatsapp:{" "}
            <a href={`https://wa.me/${whatsappNumber}`}>
              {currentFranchise?.phoneNumber}
            </a>
          </p>
          <p className="mt-10 border-t border-zinc-700 w-full pt-5">
            ©️2025 – Todos os direitos reservados.
          </p>
        </>
      </footer>
      <WhatsappButton whatsappNumber={whatsappNumber} />
    </div>
  );
};
