"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Function to handle scroll to set sticky class
  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  // Function to handle click outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  // Effect to handle body overflow
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Reset scrolling
    }
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full h-[68px] transition-all duration-300 ${
        sticky
          ? "shadow-md bg-white/95 dark:bg-darkheader/95 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10"
          : "shadow-none bg-transparent"
      }`}
    >
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) h-full flex items-center justify-between xl:gap-16 lg:gap-8 px-8 md:px-12">
        <div>
          <Logo />
        </div>
        <nav
          className={`hidden lg:flex grow items-center xl:justify-start justify-center space-x-8 text-15 ${
            !sticky && pathUrl === "/"
              ? "[&_a]:!text-white hover:[&_a]:!text-gray-300"
              : "text-midnight_text dark:text-white"
          }`}
        >
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white"
          >
            <svg
              viewBox="0 0 16 16"
              className={`hidden h-6 w-6 dark:block ${
                !sticky && pathUrl === "/" && "text-white"
              }`}
            >
              <path
                d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z"
                fill="#FFFFFF"
              />
            </svg>
            <svg
              viewBox="0 0 23 23"
              className={`h-8 w-8 text-dark dark:hidden ${
                !sticky && pathUrl === "/" && "text-white"
              }`}
            >
              <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
            </svg>
          </button>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block lg:hidden p-2 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 mt-0 ${
              !sticky && pathUrl === "/" ? "bg-white" : "bg-black dark:bg-white"
            }`}></span>
            <span className={`block w-6 h-0.5 mt-1.5 ${
              !sticky && pathUrl === "/" ? "bg-white" : "bg-black dark:bg-white"
            }`}></span>
            <span className={`block w-6 h-0.5 mt-1.5 ${
              !sticky && pathUrl === "/" ? "bg-white" : "bg-black dark:bg-white"
            }`}></span>
          </button>
        </div>
      </div>
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-[#ffffff] dark:bg-[#0c1225] shadow-2xl border-l border-gray-200 dark:border-white/10 transform transition-transform duration-300 max-w-xs z-[999] ${
          navbarOpen ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Menu
          </h2>
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="dark:text-white"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-start px-4 pt-2 pb-6">
          {headerData.map((item, index) => (
            <MobileHeaderLink
              key={index}
              item={item}
              onClose={() => setNavbarOpen(false)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
