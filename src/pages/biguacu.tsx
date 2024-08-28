import whatsapp from "../assets/biguacu/whatsapp.png";
import localization from "../assets/biguacu/localization.png";
import cautelar from "../assets/biguacu/cautelar.png";

export const ViaVistoriaBiguacu = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-zinc-600 h-screen flex flex-col justify-between">
      <div className="max-w-[1440px] m-auto flex flex-col items-center justify-center gap-6 p-4 sm:p-10">
        <a href="https://wa.me/48991494123">
          <img
            src={whatsapp}
            alt="Banner verde com o número de whatsapp"
            className="rounded-xl w-[100%] sm:w-[90%] m-auto hover:scale-110 transition-all"
          />
        </a>
        <a href="https://www.google.com/maps/place/R.+C%C3%B4nego+Rodolfo+Machado,+1000+-+Rio+Caveiras,+Bigua%C3%A7u+-+SC,+88161-732/@-27.5064736,-48.6670961,14.58z/data=!4m6!3m5!1s0x95274c3bc4256687:0xd8aa1ff4adcd8118!8m2!3d-27.5055183!4d-48.6530734!16s%2Fg%2F11gdg5j99v?entry=ttu">
          <img
            src={localization}
            alt="banner verde com a localização da vistoria"
            className="rounded-xl w-[100%] sm:w-[90%] m-auto hover:scale-110 transition-all"
          />
        </a>
        <a href="/services/5">
          <img
            src={cautelar}
            alt="banner preto com uma chamada para revisão cautelar"
            className="rounded-xl w-[100%] sm:w-[90%] m-auto hover:scale-110 transition-all"
          />
        </a>
      </div>
      <footer className="h-[90px] bg-zinc-900 text-white flex flex-col items-center justify-center text-center p-10">
        <p>
          ©2024 Via Vistoria. Todos os direitos reservados.
          <br /> CNPJ: 99.999.999/9999-99
        </p>
      </footer>
    </div>
  );
};
