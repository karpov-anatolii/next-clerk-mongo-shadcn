"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  const router = useRouter();

  useEffect(() => {
    const nav = document.querySelector("nav")!;
    const mobileNav = document.querySelector("nav.mobile-nav")!;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        nav.classList.add("scrolled");
        mobileNav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled");
      }
    });
  }, []);

  return (
    <nav>
      <div onClick={() => router.push("/")} className="logo">
        GD.
      </div>
      <ul className="flex-center gap-14 list-none m-0 text-white text-[16px] font-bold">
        {navLinks &&
          navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.route}>{link.label}</Link>
            </li>
          ))}

        <Button className="btn dark" onClick={() => router.push("/services")}>
          Enrol Now{" "}
        </Button>
        <div className="ml-[-30px]">
          <UserButton afterSignOutUrl="/" />
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
