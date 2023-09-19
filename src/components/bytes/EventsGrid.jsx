"use client";
import { motion } from "framer-motion";
import { GoBriefcase } from "react-icons/go";
import React, { useEffect, useRef } from "react";
import EventCardShort from "./EventCardShort";
const EventsGrid = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    // Get cards element reference
    const cards = cardsRef.current;
    // Define mousemove handler function
    const handleOnMove = (e) => {
      // Loop through card elements
      for (const card of cards.children) {
        // Get card element dimensions
        const rect = card.getBoundingClientRect();
        // Get mouse position relative to card element
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Set CSS variables for mouse position
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      }
    };
    // Add event listener for mousemove events
    cards.addEventListener("mousemove", handleOnMove);
    // Return a cleanup function that removes event listener
    return () => {
      cards.removeEventListener("mousemove", handleOnMove);
    };
  }, []);

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
        <div
          id="eventCards"
          ref={cardsRef}
          className=" w-full max-w-[916px] grid grid-cols-3 gap-2"
        >
          <EventCardShort />
          <EventCardShort />
          <EventCardShort />
          <EventCardShort />
          <EventCardShort />
          <EventCardShort />
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
