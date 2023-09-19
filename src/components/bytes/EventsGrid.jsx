"use client";
import { motion } from "framer-motion";
import { GoBriefcase } from "react-icons/go";
const EventsGrid = () => {
  return (
    <div className="flex lg:w-[75vw] h-screen mt-4 relative">
      <div className="w-[8%] text-3xl flex justify-center relative">
        <div className="flex flex-col justify-center items-center absolute h-full">
          <GoBriefcase className="mt-4 mb-8" />
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
            className="w-[3px] h-full rounded-xl"
          ></motion.div>
        </div>
      </div>
      <div className="w-full ">
        <div className="w-full"> EventsGrid</div>
      </div>
    </div>
  );
};

export default EventsGrid;
