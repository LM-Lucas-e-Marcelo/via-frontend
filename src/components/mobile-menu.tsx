import { VariantProps, tv } from "tailwind-variants";

const mobileMenu = tv({
  base: "fixed top-0 left-[-1000px] bg-gradient-to-r from-white to-zinc-100 w-full h-screen mt-[60px] transition-all md:hidden",
  variants: {
    isOpen: {
      true: "left-0",
    },
  },
});

export const MobileMenu = ({ isOpen }: VariantProps<typeof mobileMenu>) => {
  return (
    <div className={mobileMenu({ isOpen })}>
      <nav>
        <ul className="flex flex-col">
          <li>
            <a
              href="/"
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#whoAreWe"
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Quem somos
            </a>
          </li>
          <li>
            <a
              href="/#services"
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Serviços
            </a>
          </li>
          {/* <li
            className={listItem()}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <a>Contato</a>
            <div className={dropdown({ isOpen: showDropdown })}>
              <a className={dropdownItem()} href={`https://wa.me/48991494123`}>
                Biguaçu
              </a>
              <a className={dropdownItem()} href={`https://wa.me/48991763476`}>
                Cocal do Sul
              </a>
              <a className={dropdownItem()} href={`https://wa.me/47992565690`}>
                Ilhota
              </a>
            </div>
          </li> */}
          <li>
            <a
              href="/where-are-we"
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Onde estamos
            </a>
          </li>
          <li>
            <a
              href="/franchise"
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Franquia
            </a>
          </li>
          <li>
            <a
              href="/franchise"
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Fale conosco
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
