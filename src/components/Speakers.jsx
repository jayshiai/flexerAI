"use client";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Tag from "./bytes/Tag";
import { LuHeartHandshake } from "react-icons/lu";
const Speakers = () => {
  return (
    <div className="flex lg:w-[75vw] mt-4 ">
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

        <div className="tracking-wider font-light text-3xl mt-16 w-[80%]  mb-16">
          <span className=" text-green-500">
            Tantrafiesta hosts a plethora of social initiatives and outreach
            programs
          </span>{" "}
          such as hackathons, coding contests, robo-races, debates, and
          seminars.
        </div>
      </div>
    </div>
  );
};

export default Speakers;
