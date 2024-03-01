import App from "@/components/App";
import Courses from "@/components/Courses";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Testimonials />
      <Courses />
      <App />
    </>
  );
};

export default Home;
