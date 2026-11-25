import { useState } from "react";
import logo from "../public/logo.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleBurgerMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header
      className="flex justify-between items-center px-2 pt-5 pb-2.75 relative
    laptop:px-20"
    >
      <div id="logo-Container" className="flex items-center gap-1">
        <span>
          <img src={logo} alt="Streamix logo" className="h-8 laptop:h-10" />
        </span>
        <span className="font-bold laptop:text-2xl">
          Stream<span className="text-red-600">ix</span>
        </span>
      </div>
      <div
        id="menu"
        className={`text-xs rounded-xl [&>a:hover]:text-[#e50000] [&>a:hover]:duration-300 ${
          isOpen ? "" : "hidden"
        } bg-[#0F0F0F] grid grid-cols-2 grid-rows-2 relative p-2 gap-1 border-2 border-[#1F1F1F]
          laptop:flex laptop:gap-5 laptop:text-xl laptop:p-4
        `}
      >
        <a href="#home" className=" ">
          Home
        </a>

        <a href="#MoviesNShows" className="">
          Movies & Shows
        </a>

        <a href="#Support" className="">
          Support
        </a>

        <a href="#Subscriptions" className="">
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
