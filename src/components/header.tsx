import logo from "../assets/logo_via.png";
import { tv } from "tailwind-variants";
import { BiSupport } from "../assets/icons";
import { Button } from "./button";

const headerStyles = tv({
  slots: {
    container:
      "w-full flex items-center justify-center fixed bg-white flex-col z-50",
    header:
      "w-full flex items-center justify-between py-4 max-w-[1440px] gap-20 px-10",
    list: "items-center gap-4 md:flex hidden gap-12",
    navItem: "hover:underline",
    listItem: "relative",
    dropdown:
      "absolute flex flex-col  bg-white min-w-40 rounded-md overflow-hidden h-[0] transition-all",
    dropdownItem: "p-2 hover:bg-zinc-50",
  },
  variants: {
    isOpen: {
      true: {
        dropdown: " h-[123px]",
      },
    },
  },
});

const { container, header, list, navItem } = headerStyles();

export const Header = () => {
  return (
    <div className={container()}>
      <header className={header()}>
        <a href="/">
          <img width={150} src={logo} alt="VIA" />
        </a>
        <div className="gap-3 items-center hidden md:flex">
          <BiSupport size={30} />
          <Button>Fale conosco</Button>
        </div>
      </header>
      <nav className="bg-gradient-to-b from-black to-zinc-600 w-full px-10 text-white items-center justify-center py-2 hidden md:flex">
        <ul className={list()}>
          <li>
            <a className={navItem()} href="/">
              Início
            </a>
          </li>
          <li className={navItem()}>
            <a href="/#services">Serviços</a>
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
            <a className={navItem()} href="/where-are-we">
              Onde estamos
            </a>
          </li>
          <li>
            <a className={navItem()} href="/franchise">
              Franquia
            </a>
          </li>
          <li>
            <a className={navItem()} href="#whoAreWe">
              Quem somos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
