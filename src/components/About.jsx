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
          <svg
            viewBox="0 0 346 530"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[530px]"
          >
            <g clip-path="url(#clip0_10_181)">
              <motion.path
                d="M10.5723 528.769V181.726"
                stroke="url(#docking_line_1)"
                stroke-width="3"
                stroke-linecap="round"
              />
              <motion.path
                d="M219 108V132.397C219 199.431 176.872 253.771 124.905 253.771H75.381C39.8243 253.771 11 290.952 11 336.818V371"
                stroke="url(#docking_line_2)"
                stroke-width="3"
                stroke-linecap="round"
              />
              <circle cx="11" cy="177" r="5" fill="#D9D9D9" />
              <circle cx="218" cy="104" r="5" fill="#D9D9D9" />
            </g>
            <defs>
              <motion.linearGradient
                id="docking_line_1"
                x1="15.0361"
                y1="646"
                x2="15.0362"
                y2="220"
                gradientUnits="userSpaceOnUse"
                initial={{ gradientTransform: "rotate(0)" }}
                animate={{ gradientTransform: "rotate(75)" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeOut",
                }}
              >
                <stop stop-color="#D2A8FF" />
                <stop offset="0.0908581" stop-color="#A371F7" />
                <stop offset="0.50056" stop-color="#6639BA" />
                <stop offset="0.8908581" stop-color="#A371F7" />
              </motion.linearGradient>

              <motion.linearGradient
                id="docking_line_2"
                x1="-118"
                y1="546"
                x2="400.987"
                y2="-33.662"
                gradientUnits="userSpaceOnUse"
                initial={{ gradientTransform: "rotate(0)" }}
                animate={{ gradientTransform: "rotate(70)" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeIn",
                }}
              >
                <stop stop-color="#A371F7" />
                <stop offset="0.00733964" stop-color="#9E72D3" />
                <stop offset="0.251918" stop-color="#6639BA" stop-opacity="0" />
                <stop offset="0.325848" stop-color="#6639BA" />
                <stop offset="0.90733964" stop-color="#9E72D3" />
              </motion.linearGradient>
              <clipPath id="clip0_10_181">
                <rect width="346" height="530" fill="white" />
              </clipPath>
            </defs>
          </svg>
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
