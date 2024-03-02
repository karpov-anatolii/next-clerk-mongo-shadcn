"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Courses = () => {
  const router = useRouter();
  return (
    <section className="courses-section">
      <div className="wrapper">
        <h2 className="light">Our Courses</h2>
        <div className="course-cards">
          <div className="course-card">
            <Image
              src="/images/rectangle-1.png"
              className="course-img"
              width={260}
              height={260}
              alt=""
            />
            <div className="info">
              <h3>Game Design Essentials</h3>
              <div className="duration">
                8 Hrs
                {/* <img src="images/Clock.svg" alt="" /> */}
              </div>
            </div>
          </div>

          <div className="course-card">
            <Image
              src="/images/rectangle-2.png"
              className="course-img"
              width={260}
              height={260}
              alt=""
            />
            <div className="info">
              <h3>Unity Game Engine Fundamentals</h3>
              <div className="duration">
                15 Hrs
                {/* <img src="images/Clock.svg" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
        <Button onClick={() => router.push("/services")} className="btn light">
          All Courses
        </Button>
      </div>
    </section>
  );
};

export default Courses;
