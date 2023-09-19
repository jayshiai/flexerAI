"use client";
import { HiArrowRight } from "react-icons/hi";
import Tag from "./bytes/Tag";
import { useState, useEffect } from "react";
import { FiCode } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
const About = () => {
  const [height, setHeight] = useState((250 / 1200) * window.innerWidth - 125);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to state
      var marginEdit = (250 / 1200) * window.innerWidth - 125;

      setHeight(marginEdit);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="flex lg:w-[75vw] mb-24"
      style={{ marginTop: `-${height}px` }}
    >
      <div className="w-[10%] text-3xl flex justify-center">
        <div
          className="flex flex-col justify-center items-center absolute "
          style={{
            transform: `translate(0,${height + 5}px)`,
          }}
        >
          <FiCode />
          <motion.div
            style={{
              background: `linear-gradient(#d2a8ff, #a371f7 10%, #0C14CB 50%,  #188ABA)`,
            }}
            animate={{ opacity: [0.4, 1] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }}
            className="w-[3px] h-[500px] rounded-xl"
          ></motion.div>
        </div>
      </div>
      <div>
        <Tag text="About" icon={<HiArrowRight />} />
        <div className="text-7xl font-semibold mt-7 mb-3">
          TantraFiest is here!
        </div>
        <div className="text-3xl  w-[80%] opacity-50 mb-16">
          the annual science and technology festival of the Indian Institute of
          Information Technology, Nagpur is back!
        </div>
        <a className="w-[300px] h-[70px] mb-16 text-5xl rounded-xl flex justify-center  items-center bg-[#BE30D5] cursor-pointer">
          Get Started
        </a>
        <div>
          <p className=" tracking-widest font-light opacity-30">
            Sponsored by leading organisations
          </p>
          <div className="flex justify-between mt-3 items-center w-1/2">
            <Image src="/assets/sponsor1.png" height={50} width={97} />
            <Image src="/assets/sponsor2.png" height={50} width={143} />
            <Image src="/assets/sponsor3.png" height={37} width={84} />
            <Image src="/assets/sponsor4.png" height={31} width={124} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
