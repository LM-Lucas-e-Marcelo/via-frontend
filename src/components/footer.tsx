import logo from "../assets/logo_via.png";
import google from "../assets/footer/google.png";
import norton from "../assets/footer/norton.png";
import reclameaqui from "../assets/footer/reclameaqui.png";
import { services } from "../constants/services";
import { addresses } from "../constants/addresses";

export const Footer = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="p-10 border-t border-zinc-400 w-full flex justify-around sm:flex-row flex-col items-center gap-3 sm:items-start sm:gap-0">
        <section className="flex flex-col items-center gap-3">
          <img src={logo} alt="Via" className="w-[200px] ml-[-25px]" />
          <p className="max-w-[400px] text-center ml-[-25px]">
            A sua via para a confiança!
          </p>
          <div className="flex flex-col w-full">
            <strong>Fale conosco</strong>
            <a href="mailto:via@viavistoria.com.br">via@viavistoria.com.br</a>
          </div>
          <div className="flex flex-col gap-1">
            <strong>Unidades</strong>
            {addresses.map((addr) => (
              <a key={addr.cityAndNeigh} href={addr.mapUrl}>
                {addr.cityAndNeigh}
              </a>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <strong className="text-lg">Serviços</strong>
          <div className="flex flex-col gap-2">
            {services.map((service) => (
              <a
                key={service.title}
                href={`/services/${service.id}`}
                className="hover:underline"
              >
                {service.title}
              </a>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-2 p-5 rounded-md mt-[50px]">
          <h1 className="text-xl">Segurança e Qualidade</h1>
          <div className="flex gap-3 w-full justify-center sm:justify-normal items-center">
            <a href="https://www.sslshopper.com/ssl-checker.html#hostname=https://viavistoria.com.br">
              <img width={80} src={norton} />
            </a>
            <a
              href="https://www.instagram.com/viavistoriabiguacu/"
              className="mt-[-10px]"
            >
              <img width={100} src={reclameaqui} />
            </a>
            <a
              href="https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fviavistoria.com.br&hl=pt_BR"
              className="mt-[-10px]"
            >
              <img width={100} src={google} />
            </a>
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center p-6 border-t border-zinc-100">
        ©2024 Via. Todos os direitos reservados.
      </div>
    </div>
  );
};
