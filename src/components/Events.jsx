"use client";
import Tag from "./bytes/Tag";
import { HiArrowRight } from "react-icons/hi";
import { FiCode } from "react-icons/fi";
import { motion } from "framer-motion";
const Events = () => {
  return (
    <div className="flex lg:w-[75vw]">
      <div className="w-[10%] text-3xl flex justify-center">
        <div className="flex flex-col justify-center items-center absolute">
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
            className="w-[3px] h-[400px] rounded-xl"
          ></motion.div>
        </div>
      </div>
      <div>
        <Tag text="Events" icon={<HiArrowRight />} />
        <div className="text-[85px] font-semibold mt-7 mb-3">
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
          <div className="flex justify-between mt-3 items-center w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Events;
