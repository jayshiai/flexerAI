"use client";
import Tag from "./bytes/Tag";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { MdOutlineEmojiEvents } from "react-icons/md";
const Events = () => {
  return (
    <div className="flex lg:w-[75vw] ">
      <div className="w-[8%] text-3xl flex justify-center relative ">
        <div className="flex flex-col justify-center items-center absolute h-full">
          <MdOutlineEmojiEvents className="mb-16 md:mb-4 block lg:hidden" />
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
        <Tag text="Events" icon={<HiArrowRight />} />

        <div className="tracking-wider font-light text-2xl sm:text-3xl mt-16 w-[80%]  mb-16">
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

export default Events;
