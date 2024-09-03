import React from "react";
import { Button } from "../ui/button";
import { FaBookOpen } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-[42rem] w-full bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center overflow-hidden">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white opacity-90 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Semi-transparent overlay for better text visibility */}
      <div className="absolute inset-0 bg-white bg-opacity-60"></div>

      {/* Grid-like flowing purple beams in the background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Add multiple lines to create a grid effect */}
        <div className="beam"></div>
        <div className="beam"></div>
        <div className="beam"></div>
        <div className="beam"></div>
        <div className="beam"></div>
      </div>

      <div className="flex flex-col relative items-center text-center">
        <div className="text-4xl sm:text-7xl  font-bold relative py-8">
          <p className="text-black">Make it Personal</p>
          <p className="bg-gradient-to-r sm:text-6xl from-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl font-bold">
            Protect every Byte
          </p>
        </div>

        <div className="flex flex-col items-center mt-3 font-semibold text-lg justify-center">
          <p className="text-2xl">
            Maya Data Privacy: The First Intelligent Data Utility Engine
          </p>
          <p className="text-xl">
            GDPR compliant, anonymizes PII without leaving the source;
          </p>
          <p className="text-lg">
            retains data meaning with realistic equivalents.
          </p>
          <p className="text-base">
            Includes smart data cleansing and automation.
          </p>
        </div>
        <div className="mt-12 flex gap-8">
          <Button>Start Anonymising</Button>
          <Button className="bg-white text-black hover:shadow-md hover:bg-white hover:text-black hover:shadow-purple-200 flex gap-3 border">
            <FaBookOpen />
            Documentation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
