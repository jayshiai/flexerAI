"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";
import Link from "next/link";
import { motion } from "framer-motion";
const EventCardTall = ({ organizer, title, details, theme }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleOnMove = (e) => {
    // Get card element dimensions
    const rect = cardRef.current.getBoundingClientRect();
    // Get mouse or touch position relative to card element
    const middleX = rect.width / 2;
    const middleY = rect.height / 2;

    const x = -1 * ((e.clientX - (rect.left + middleX)) / middleX) * 3;
    const y = -1 * ((e.clientY - (rect.top + middleY)) / middleY) * 3;

    // Update position state

    setRotation({ x, y });
  };

  // Define a function that resets the rotation state to zero
  const handleOnLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  useEffect(() => {
    // Get card element reference
    const card = cardRef.current;
    // Add event listeners for mousemove, touchmove, and mouseleave events
    card.addEventListener("mousemove", handleOnMove);
    card.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
    card.addEventListener("mouseleave", handleOnLeave);
    // Return a cleanup function that removes event listeners
    return () => {
      card.removeEventListener("mousemove", handleOnMove);
      card.removeEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
      card.removeEventListener("mouseleave", handleOnLeave);
    };
  }, []);
  return (
    <div
      ref={cardRef}
      style={{
        "--rotateY": `${rotation.x}deg`,
        "--rotateX": `${-rotation.y}deg`,
        "--gradientBefore": `${theme[1]}33`,
        "--gradientAfter": `${theme[1]}aa`,
      }}
      className="eventCard w-3/4 md:w-full row-span-1 md:row-span-2 h-[800px] select-none"
    >
      <div className="eventCard-content flex flex-col justify-between">
        <div className="w-full pl-2 flex flex-col items-start ">
          <OrganiserBadge text={organizer} theme={theme[0]} />
          <div
            style={{
              "--c1": `${theme[0]}`,
              "--c2": `${theme[1]}`,
              "--c3": `${theme[2]}`,
            }}
            className="transText transBg mt-4 mb-8 font-bold text-4xl  md:text-6xl z-10"
          >
            {title}
          </div>
          <div className="tracking-wider text-xl opacity-50 -z-10">
            {details}
          </div>
        </div>
        <Link href="www.youtube.com">
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{
              backgroundColor: `${theme[1]}`,
            }}
            className=" w-[150px] text-center p-2 text-xl m-2 rounded-2xl "
          >
            Learn More
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default EventCardTall;
