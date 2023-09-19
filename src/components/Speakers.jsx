"use client";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Tag from "./bytes/Tag";
import { LuHeartHandshake } from "react-icons/lu";
import SpeakersGrid from "./SpeakersGrid";
const Speakers = () => {
  return (
    <div className="flex w-screen lg:w-[75vw] mt-4 ">
      <div className="w-[8%] text-3xl flex justify-center relative ">
        <div className="flex flex-col justify-center items-center absolute h-full">
          <LuHeartHandshake className="mt-4 mb-8" />
          <motion.div
            style={{
              background: `linear-gradient( #0C14CB 10%, #0C14CB 50%,  #188ABA)`,
            }}
            animate={{ opacity: [0.4, 1] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }}
            className="w-[3px] h-full  rounded-xl"
          ></motion.div>
        </div>
      </div>
      <div className="w-full">
        <Tag text="Speakers" icon={<HiArrowRight />} />

        <SpeakersGrid />
      </div>
    </div>
  );
};

export default Speakers;
