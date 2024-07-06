import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/SVKGProfile2.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  hidden1: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
  visible1: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
  
});

const Hero = () => {
  return (
    <div className="mt-10 border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Sreekar Vamsi Krishna.Gajula
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-3xl tracking-tight text-transparent bg-clip-text"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={container(1.2)}
              initial="hidden1"
              animate="visible1"
              src={profilePic}
              alt="Sreekar Vamsi Krishna.Gajula"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
