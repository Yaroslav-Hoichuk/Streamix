import { useState } from "react";
import logo from "../public/logo.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleBurgerMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="flex justify-between items-center px-2 pt-5 pb-2.75 relative">
      <div id="logo-Container" className="flex items-center gap-1">
        <span>
          <img src={logo} alt="Streamix logo" className="h-8" />
        </span>
        <span className="font-bold">
          Stream<span className="text-red-600">ix</span>
        </span>
      </div>
      <div
        id="menu"
        className={`font-bold text-xs ${
          isOpen ? "grid grid-cols-2 grid-rows-2 relative top-2" : "hidden"
        } md:flex md:static md:flex-row md:p-0 md:shadow-none md:gap-4`}
      >
        <a href="#home" className="col-span-1 row-span-1">
          Home
        </a>
        <a href="#MoviesNShows" className="col-span-1 row-span-1">
          Movies & Shows
        </a>
        <a href="#Support" className="col-span-1 row-2">
          Support
        </a>
        <a href="#Subscriptions" className="row-2 col-span-2">
          Subscriptions
        </a>
      </div>
      <nav className="flex items-center gap-4">
        <button onClick={toggleBurgerMenu} className="md:hidden" aria-expanded={isOpen}>
          <span className="material-symbols-outlined">{"menu"}</span>
        </button>
      </nav>
    </header>
  );
}
