import logo from "../assets/logo_via.png";
import { AiOutlineFacebook, IoLogoInstagram, FiTwitter } from "../assets/icons";

export const Footer = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="p-10 border-t border-zinc-400 w-full flex justify-around sm:flex-row flex-col items-center gap-3 sm:items-start sm:gap-0">
        <section className="flex flex-col items-center gap-3">
          <img src={logo} alt="Via" />
          <p className="max-w-[400px] text-center">
            A Via tem como prioridade proporcionar sempre a melhor experiência
            aos seus clientes.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h1 className="text-xl">Nos siga nas redes sociais</h1>
          <div className="flex gap-3 w-full justify-center sm:justify-normal">
            <a href="https://www.instagram.com/viavistoriabiguacu/">
              <IoLogoInstagram size={30} />
            </a>
            <a href="https://www.instagram.com/viavistoriabiguacu/">
              <AiOutlineFacebook size={28} />
            </a>
            <a href="https://www.instagram.com/viavistoriabiguacu/">
              <FiTwitter size={26} />
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
