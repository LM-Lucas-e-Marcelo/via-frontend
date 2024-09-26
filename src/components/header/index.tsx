import logo from "../../assets/logo_via.png";
import { tv } from "tailwind-variants";
import { FiX, RxHamburgerMenu } from "../../assets/icons";
import { MobileMenu } from "../mobile-menu";
import { useState } from "react";
import { motion } from "framer-motion";
import { ContactButton } from "./contact-button";

const headerStyles = tv({
  slots: {
    container:
      "w-full flex items-center justify-center fixed bg-white flex-col z-40 p-",
    header:
      "w-full flex items-center justify-between py-4 max-w-[1440px] gap-20 px-10 z-30",
    list: "items-center gap-4 md:flex hidden gap-12",
    navItem: "hover:underline",
  },
});

const { container, header, list, navItem } = headerStyles();

export const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleToggleMobileMenu = () =>
    setOpenMobileMenu((prevState) => !prevState);

  return (
    <div className={container()}>
      <header className={header()}>
        <a href="/">
          <img width={150} src={logo} alt="VIA" />
        </a>
        {openMobileMenu ? (
          <button
            onClick={handleToggleMobileMenu}
            className="text-red-500 md:hidden"
          >
            <FiX size={30} />
          </button>
        ) : (
          <button onClick={handleToggleMobileMenu} className="md:hidden">
            <RxHamburgerMenu size={24} />
          </button>
        )}
        <MobileMenu isOpen={openMobileMenu} />
      </header>

      <motion.nav
        className="bg-gradient-to-b from-black to-zinc-600 w-full px-10 text-white items-center justify-center py-2 hidden md:flex z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ul className={list()}>
          <li>
            <a className={navItem()} href="/">
              Início
            </a>
          </li>
          <li>
            <a className={navItem()} href="/#whoAreWe">
              Quem somos
            </a>
          </li>
          <li className={navItem()}>
            <a href="/#services">Serviços</a>
          </li>
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
        </ul>
      </motion.nav>
      {/* Coloque o botão aqui */}
      <ContactButton />
    </div>
  );
};
