"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";

const MobileNav = () => {
  const router = useRouter();
  const handlerClose = () => {
    document
      .querySelector(".mobile-menu-container")!
      .classList.remove("active");
  };

  return (
    <>
      <nav className="mobile-nav">
        <div onClick={() => router.push("/")} className="logo">
          GD.
        </div>
        <div className="flex-center">
          <div
            onClick={() =>
              document
                .querySelector(".mobile-menu-container")!
                .classList.add("active")
            }
            className="menu-icon"
          >
            <Image
              src="/images/menu-smartphone.svg"
              width={40}
              height={40}
              alt=""
            />
          </div>
          <div className="ml-[20px]">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
      <div className="mobile-menu-container">
        <div
          onClick={handlerClose}
          className="absolute top-[32px] right-[100px] cursor-pointer"
        >
          <Image src="/images/close-menu.svg" width={24} height={24} alt="" />
        </div>
        <ul onClick={handlerClose} className="flex-center flex-col">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/our-work">Our Work</Link>
          </li>
          <li>
            <Button
              className="btn light"
              onClick={() => router.push("/services")}
            >
              Enrol Now
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
