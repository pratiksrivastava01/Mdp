import About from "@/components/About";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/Navbar";
import Sponsor from "@/components/Sponsor";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <Hero />
      <Sponsor />
      <About />
      <div>Footer</div>
    </div>
  );
};

export default Page;
