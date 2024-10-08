
import { IoLogoWhatsapp, MdEmail } from "../../assets/icons";
export const ContactButton = () => {
  return (
    <div className="flex gap-3">
      <a href="https://wa.me/00000000000">
        <IoLogoWhatsapp className="text-primary" size={24} />
      </a>
      <a href="mailto:via@viavistoria.com.br">
        <MdEmail className="text-primary" size={26} />
      </a>
    </div>
  );
};
