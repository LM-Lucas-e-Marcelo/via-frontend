import logo from "../../assets/logo_via.png";
import google from "../../assets/footer/google.png";
import norton from "../../assets/footer/norton.png";
import certified from "../../assets/footer/certified.png";
import { FooterServices } from "./services";
import { FooterUnits } from "./units";

export const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="p-10 border-t border-zinc-400 w-full flex justify-around sm:flex-row flex-col items-center gap-3 sm:items-start sm:gap-0">
        <section className="flex flex-col items-center gap-3 min-w-[260px]">
          <img src={logo} alt="Via" className="w-[200px] ml-[-25px]" />
          <p className="max-w-[400px] text-center ml-[-25px]">
            A sua via para a confiança!
          </p>
          <div className="flex flex-col w-full">
            <strong>
              <a href="/work-with-us">Trabalhe conosco</a>
            </strong>
          </div>
          <div className="flex flex-col w-full">
            <strong>Fale conosco</strong>
            <a href="mailto:via@viavistoria.com.br">via@viavistoria.com.br</a>
          </div>
          <FooterUnits />
        </section>
        <FooterServices />
        <section className="flex flex-col gap-2 p-5 rounded-md mt-[50px]">
          <h1 className="text-xl">Segurança e Qualidade</h1>
          <div className="flex gap-3 w-full justify-center sm:justify-normal items-center">
            <a href="https://www.sslshopper.com/ssl-checker.html#hostname=https://viavistoria.com.br">
              <img width={80} src={norton} alt="logo norton" />
            </a>
            <a
              href="https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fviavistoria.com.br&hl=pt_BR"
              className="mt-[-10px]"
            >
              <img width={100} src={google} alt="logo google" />
            </a>
            <img
              className="w-[50px] mt-[-10px]"
              src={certified}
              alt="certificado 9001"
            />
          </div>
        </section>
      </div>
      <div className="md:hidden flex items-center justify-center p-6 border-t border-zinc-100 text-center">
        ©️2025 Via Vistoria Veicular Ltda <br /> Todos os direitos reservados.
      </div>
      <div className="md:flex hidden items-center justify-center p-6 border-t border-zinc-100 text-center">
        ©️2025 Via Vistoria Veicular Ltda – Todos os direitos reservados.
      </div>
    </div>
  );
};
