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
        dropdown: " h-[125px]",
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
        <a href="#">
          <img width={100} src={logo} alt="VIIA" />
        </a>
        <nav>
          <ul className={list()}>
            <li>
              <a className={navItem()} href="home">
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
              <a href="contact">Contato</a>
              <div className={dropdown({ isOpen: showDropdown })}>
                <a className={dropdownItem()} href="contact">
                  Biguaçu
                </a>
                <a className={dropdownItem()} href="contact">
                  Barreiros
                </a>
                <a className={dropdownItem()} href="contact">
                  Governador
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
