import { VariantProps, tv } from "tailwind-variants";

const mobileMenu = tv({
  base: "fixed top-0 left-[-1000px] bg-gradient-to-r from-white to-zinc-100 w-full h-screen mt-[60px] transition-all md:hidden",
  variants: {
    isOpen: {
      true: "left-0",
    },
  },
});

// const dropdownMenu = tv({
//   base: "h-[0] overflow-hidden transition-all bg-zinc-100",
//   variants: {
//     isOpen: {
//       true: "h-[130px]",
//     },
//   },
// });

interface MobileMenuProps extends VariantProps<typeof mobileMenu> {
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div className={mobileMenu({ isOpen })}>
      <nav>
        <ul className="flex flex-col">
          <li>
            <a
              onClick={onClose}
              href="/"
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Início
            </a>
          </li>
          <li>
            <a
              onClick={onClose}
              href="#whoAreWe"
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Quem somos
            </a>
          </li>
          <li>
            <a
              onClick={onClose}
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
              onClick={onClose}
              href="/where-are-we"
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Onde estamos
            </a>
          </li>
          <li>
            <a
              onClick={onClose}
              href="/franchise"
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Franquia
            </a>
          </li>
          <li>
            <a
              onClick={onClose}
              href="/work-with-us"
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Franquia
            </a>
          </li>
          {/* <li>
            <button
              type="button"
              onClick={handleToggleDropdown}
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Fale conosco
            </button>
            <div className={dropdownMenu({ isOpen: showDropdown })}>
              <a
                href="mailto:via@viavistoria.com.br"
                className="p-5 text-center border-b border-zinc-200 w-full block"
              >
                via@viavistoria.com.br
              </a>
              <a
                href="https://wa.me/00000000000"
                className="p-5 text-center border-b border-zinc-200 w-full block"
              >
                {"(00) 0000-0000"}
              </a>
            </div>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};
