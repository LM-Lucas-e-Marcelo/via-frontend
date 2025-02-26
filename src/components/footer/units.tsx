import { tv } from "tailwind-variants";
import { addresses } from "../../constants/addresses";
import { useState } from "react";
import { IoIosArrowDown } from "../../assets/icons";

const dropdownMenu = tv({
  base: "h-[0] overflow-hidden transition-all flex flex-col gap-2 sm:min-h-[310px]",
  variants: {
    isOpen: {
      true: "h-[340px]",
    },
  },
});

const arrowIcon = tv({
  base: "transition-all",
  variants: {
    isOpen: {
      true: "rotate-180",
    },
  },
});

export const FooterUnits = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleToggleDropdown = () => setOpenDropdown((prevState) => !prevState);

  return (
    <div className="flex flex-col gap-1 w-full">
      <strong className="text-lg hidden sm:block">Unidades</strong>
      <button
        className="text-left sm:hidden flex items-center gap-2"
        onClick={handleToggleDropdown}
      >
        <strong className="text-lg">Unidades</strong>
        <IoIosArrowDown
          className={arrowIcon({ isOpen: openDropdown })}
          size={20}
        />
      </button>
      <div className={dropdownMenu({ isOpen: openDropdown })}>
        {addresses.map((addr) => (
          <a
            className="hover:underline"
            key={addr.cityAndNeigh}
            href={`https://wa.me/${addr.whatsappNumber}`}
          >
            {addr.cityAndNeigh}
          </a>
        ))}
      </div>
    </div>
  );
};
