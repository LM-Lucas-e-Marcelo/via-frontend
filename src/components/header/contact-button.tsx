import { useState } from "react";
import { BiSupport } from "../../assets/icons";
import { Button } from "../button";
import { tv } from "tailwind-variants";

const contactButton = tv({
  base: "bg-gradient-to-b from-black to-zinc-600 fixed z-[999999] flex flex-col w-[150px] right-[40px] top-[45px] rounded-md text-white h-[0] overflow-hidden transition-all",
  variants: {
    isOpen: {
      true: "h-[95px]",
    },
  },
});

export const ContactButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  console.log(showDropdown);
  return (
    <div
      className="absolute z-[999999] block right-10 top-[14px]"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="gap-3 items-center hidden md:flex">
        <BiSupport size={30} />
        <Button>Fale conosco</Button>
      </div>
      <div className={contactButton({ isOpen: showDropdown })}>
        <a
          className="p-2 pt-4 text-center hover:underline"
          href="mailto:via@viavistoria.com.br"
        >
          Email
        </a>
        <a
          className="p-2 text-center hover:underline"
          href="https://wa.me/00000000000"
        >
          Whatsapp
        </a>
      </div>
    </div>
  );
};
