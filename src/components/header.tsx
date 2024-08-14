import { useState } from "react";
import logo from "../assets/logo.svg";
import { tv } from "tailwind-variants";

const headerStyles = tv({
  slots: {
    container:
      "w-full flex items-center justify-center fixed border-b border-zinc-100 z-10 bg-white",
    header:
      "w-full flex items-center justify-between py-4 px-10 max-w-[1440px]",
    list: "items-center gap-4 md:flex hidden",
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

const { container, header, list, listItem, navItem, dropdown, dropdownItem } =
  headerStyles();

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={container()}>
      <header className={header()}>
        <a href="/">
          <img width={100} src={logo} alt="VIA" />
        </a>
        <nav>
          <ul className={list()}>
            <li>
              <a className={navItem()} href="/">
                Início
              </a>
            </li>
            <li className={navItem()}>
              <a href="#services">Serviços</a>
            </li>
            <li
              className={listItem()}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <a>Contato</a>
              <div className={dropdown({ isOpen: showDropdown })}>
                <a
                  className={dropdownItem()}
                  href={`https://wa.me/48991494123`}
                >
                  Biguaçu
                </a>
                <a
                  className={dropdownItem()}
                  href={`https://wa.me/48991763476`}
                >
                  Cocal do Sul
                </a>
                <a
                  className={dropdownItem()}
                  href={`https://wa.me/47992565690`}
                >
                  Ilhota
                </a>
              </div>
            </li>
            <li>
              <a className={navItem()} href="#whereAreWe">
                Onde estamos
              </a>
            </li>
            <li>
              <a className={navItem()} href="#franchise">
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
      </header>
    </div>
  );
};
