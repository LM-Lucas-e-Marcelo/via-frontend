import { useState } from "react";
import { precautionaryServices } from "../../constants/precautionary-services";
import { services } from "../../constants/services";
import { tv } from "tailwind-variants";
import { IoIosArrowDown } from "../../assets/icons";

const dropdownMenu = tv({
  base: "h-[0] overflow-hidden transition-all flex flex-col gap-2 sm:min-h-[180px]",
  variants: {
    isOpen: {
      true: "h-[180px]",
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

export const FooterServices = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleToggleDropdown = () => setOpenDropdown((prevState) => !prevState);

  return (
    <section className="flex flex-col gap-3 min-w-[260px]">
      <strong className="text-lg hidden sm:block">Serviços</strong>
      <button
        className="text-left sm:hidden flex items-center gap-2"
        onClick={handleToggleDropdown}
      >
        <strong className="text-lg ">Serviços</strong>
        <IoIosArrowDown
          className={arrowIcon({ isOpen: openDropdown })}
          size={20}
        />
      </button>
      <div className={dropdownMenu({ isOpen: openDropdown })}>
        {services.map((service) => (
          <a
            key={service.title}
            href={`/services/${service.id}`}
            className="hover:underline"
          >
            {service.title}
          </a>
        ))}
        {precautionaryServices.map((service) => (
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
  );
};
