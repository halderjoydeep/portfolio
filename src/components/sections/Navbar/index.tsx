"use client";

import logo from "@/assets/logo.svg";
import { firstName, githubLink, lastName, navLinks } from "@/lib/constants";
import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);

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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="text-[18px] font-bold text-white">
            {firstName}&nbsp;{lastName}
          </p>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={cn("text-[18px] font-medium hover:text-[#915EFF]", {
                "text-[#915EFF]": active === link.title,
                "text-secondary": active !== link.title,
              })}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <Link
          href={githubLink}
          target="_blank"
          className="hidden items-center justify-center rounded-3xl border-2 border-accent px-5 py-1 font-semibold text-accent transition-all hover:bg-accent hover:text-white md:flex"
        >
          Github
        </Link>

        {/* Mobile Nav Links */}
        <div className="sm:hidden">
          <MobileMenu active={active} setActive={setActive} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
