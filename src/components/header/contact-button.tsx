import { useState } from "react";
import { BiSupport } from "../../assets/icons";
import { Button } from "../button";
import { tv } from "tailwind-variants";

const contactButton = tv({
  base: "bg-white border-0 border-zinc-200 fixed z-[999999] flex flex-col right-[40px] top-[50px] rounded-md h-[0] overflow-hidden transition-all",
  variants: {
    isOpen: {
      true: "h-[85px] border",
    },
  },
});

export const ContactButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

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
          className="p-2 text-center hover:underline border-b border-zinc-200"
          href="mailto:via@viavistoria.com.br"
        >
          via@viavistoria.com.br
        </a>
        <a
          className="p-2 text-center hover:underline"
          href="https://wa.me/00000000000"
        >
          {'(00)0000-0000'}
        </a>
      </div>
    </div>
  );
};
