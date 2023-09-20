"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";
const Algorithma = () => {
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
        "--gradientBefore": `#ffbe0b33`,
        "--gradientAfter": `#ffbe0baa`,
      }}
      className="eventCard w-full h-full"
    >
      <div className="eventCard-content p-2">
        <OrganiserBadge text="DotSlash" theme="#fb5607" />
        <div
          style={{
            "--c1": "#ffbe0b",
            "--c2": "#fb5607",
            "--c3": "#fcbf49",
          }}
          className="transText transBg mt-4 mb-7 font-bold pb-1 text-6xl z-10"
        >
          Algorithma
        </div>
        <div className="tracking-wider text-xl opacity-50 w-1/2">
          An ICPC-type contest that offers a platform for every coding geek out
          there, to hone their coding skills and compete with the rising coders.
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Algorithma;
