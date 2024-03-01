import React from "react";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="hero-section">
          <div className="left ">
            <h1 className="raleway-black text-[50px] leading-[125%] ">
              Learn the art of <br />
              Game Dev
            </h1>
            <p className="text-[16px] font-normal leading-[200%] mb-[30px] w-[457px]">
              This is a comprehensive course on Game Development. You will learn
              everything from generating an idea to publishing your games to
              different platforms.
            </p>

            <Link href="/services">
              <Button className="btn light enrol-icon">Enrol Now</Button>
            </Link>
          </div>

          <div className="right ">
            <Image
              src="/images/hero-image.png"
              width={520}
              height={520}
              className="w-full h-[520px]"
              alt=""
            />
          </div>

          <div className="achievement-cards">
            <div className="achievement-card students-enrolled ">
              <div className="content">
                <div>
                  <h3>32K</h3>
                </div>

                <p>Students Enrolled</p>
              </div>
              <div className="bg"></div>
            </div>

            <div className="achievement-card overall-rating ">
              <div className="content">
                <div className="flex-center gap-3">
                  <h3>4.7</h3>
                  <Image
                    src="/images/emojione_star.svg"
                    width={42}
                    height={42}
                    className="flex-1 ml-[-24px] h-[42px]"
                    alt=""
                  />
                </div>
                <p>Overall Rating</p>
              </div>
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
