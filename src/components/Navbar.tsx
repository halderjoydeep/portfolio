"use client";

import close from "@/assets/close.svg";
import logo from "@/assets/logo.svg";
import menu from "@/assets/menu.svg";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { navLinks } from "@/lib/constants";
import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(mobileMenuRef, () => {
    setIsMenuOpen(false);
  });

  useEffect(() => {
    function handleScroll() {
      const scrollAmount = window.scrollY;
      if (scrollAmount > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-20 flex w-full items-center py-5",
        styles.paddingX,
        {
          "bg-transparent": !scrolled,
          "bg-primary": scrolled,
        },
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative h-9 w-9">
            <Image
              src={logo}
              fill
              priority
              alt="Joydeep Halder's portfolio logo of letter J"
            />
          </div>
          <p className="text-[18px] font-bold text-white">
            Joydeep&nbsp;Halder
          </p>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={cn("text-[18px] font-medium hover:text-white", {
                "text-white": active === link.title,
                "text-secondary": active !== link.title,
              })}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Links */}
        <div className="sm:hidden" ref={mobileMenuRef}>
          <div
            className="relative h-7 w-7 cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Image
              src={isMenuOpen ? close : menu}
              fill
              priority
              alt="Menu Icon for navbar links"
            />
          </div>

          {isMenuOpen && (
            <div className="black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6">
              <ul className="flex list-none flex-col items-end justify-end gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={cn("text-[16px] font-medium hover:text-white", {
                      "text-white": active === link.title,
                      "text-secondary": active !== link.title,
                    })}
                    onClick={() => {
                      setActive(link.title);
                      setIsMenuOpen(false);
                    }}
                  >
                    <Link href={`#${link.id}`}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
