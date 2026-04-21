"use client";
import { useState } from "react";
import { HeaderItem } from "../../../../types/menu";

const MobileHeaderLink: React.FC<{
  item: HeaderItem;
  onClose?: () => void;
}> = ({ item, onClose }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const offset = 68;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      onClose?.();
    }
  };

  return (
    <div className="relative w-full">
      <a
        href={item.href}
        onClick={(e) => {
          if (item.submenu) {
            e.preventDefault();
            setSubmenuOpen(!submenuOpen);
          } else {
            handleClick(e, item.href);
          }
        }}
        className="flex items-center justify-between w-full py-3 px-1 text-midnight_text dark:text-white font-medium border-b border-gray-100 dark:border-white/10 hover:text-primary dark:hover:text-primary transition-colors duration-200"
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25em"
            height="1.25em"
            viewBox="0 0 24 24"
            className={`transition-transform duration-200 ${submenuOpen ? "rotate-180" : ""}`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </a>
      {submenuOpen && item.submenu && (
        <div className="pl-3 py-1 bg-gray-50 dark:bg-white/5 rounded-lg my-1">
          {item.submenu.map((subItem, index) => (
            <a
              key={index}
              href={subItem.href}
              onClick={(e) => handleClick(e, subItem.href)}
              className="block py-2 px-2 text-sm text-midnight_text dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
            >
              {subItem.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
