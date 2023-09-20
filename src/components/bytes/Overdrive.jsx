"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";
import GunsCanvas from "../GunsCanvas";
import { Vandal } from "./Vandal";
import { Classic } from "./Classic";
import { Knife } from "./Knife";
import { TbSquareRotatedFilled } from "react-icons/tb";
const Overdrive = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [selection, setSelection] = useState(0);
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
        "--gradientBefore": `#3ac96133`,
        "--gradientAfter": `#3ac961aa`,
      }}
      className="eventCard w-full row-span-2 h-[800px]"
    >
      <div className="eventCard-content flex relative">
        <div
          className={`
        ${selection == 0 ? "block" : "hidden"}
        absolute top-0 left-0 h-full w-full`}
        >
          <GunsCanvas item={<Knife position={[0, -0.2, -1.75]} />} />
        </div>
        <div
          className={`
        ${selection == 1 ? "block" : "hidden"}
        absolute top-0 left-0 h-full w-full`}
        >
          <GunsCanvas item={<Classic />} />
        </div>
        <div
          className={`
        ${selection == 2 ? "block" : "hidden"}
        absolute top-0 left-0 h-full w-full`}
        >
          <GunsCanvas item={<Vandal />} />
        </div>
        <div className="w-full pl-2 flex flex-col items-start ">
          <OrganiserBadge text="TF Management" theme="#BD3944" />
          <div
            style={{
              "--c1": "#FD4556",
              "--c2": "#BD3944",
              "--c3": "#D62964",
            }}
            className="transText transBg mt-4 mb-8 font-bold text-6xl z-10"
          >
            OverDrive
          </div>
          <div className="tracking-wider text-xl opacity-50 -z-10">
            The Overdrive Valorant Showdown is a collegiate esports tournament
            that seeks to create a platform for students to showcase their
            gaming skills, strategic prowess, and teamwork in the popular
            tactical shooter game, Valorant
          </div>
          <div className="w-full  h-full mt-4 rounded-2xl  flex justify-between items-center ">
            <div className="menu h-3/4 flex flex-col justify-around">
              <div className="flex justify-between items-center">
                <TbSquareRotatedFilled />
                Round 1
              </div>
              <div>Round 2</div>
              <div>Play</div>
            </div>
            <div className=" loadout pt-8 z-20 h-full w-2/5">
              <div
                onClick={() => setSelection(0)}
                className="h-1/4 relative my-2 group border-y border-l transition-all duration-500 border-white/20 bg-white/10 hover:bg-white/20 hover:cursor-pointer flex justify-center items-center"
              >
                <img
                  className="w-3/4 group-hover:scale-110"
                  src="/assets/knife.webp"
                  alt="Knife"
                />
                <div className="absolute bottom-0 left-0 text-xs mb-2 flex">
                  <img className="ml-2" src="/assets/creds.webp" alt="Creds" />
                  <p className="ml-2 tracking-wider">Free</p>
                </div>
              </div>
              <div
                onClick={() => setSelection(1)}
                className="h-1/4 relative my-2 group border-y border-l transition-all duration-500 border-white/20 bg-white/10 hover:bg-white/20 hover:cursor-pointer flex justify-center items-center"
              >
                <img
                  className="w-2/4 group-hover:scale-110"
                  src="/assets/classic.webp"
                  alt="Classic"
                />
                <div className="absolute bottom-0 left-0 text-xs mb-2 flex">
                  <img className="ml-2" src="/assets/creds.webp" alt="Creds" />
                  <p className="ml-2 tracking-wider">Free</p>
                </div>
              </div>
              <div
                onClick={() => setSelection(2)}
                className="h-1/4 relative my-2 group border-y border-l transition-all duration-500 border-white/20 bg-white/10 hover:bg-white/20 hover:cursor-pointer flex justify-center items-center"
              >
                <img
                  className="w-3/4 group-hover:scale-110"
                  src="/assets/vandal.webp"
                  alt="Vandal"
                />
                <div className="absolute bottom-0 left-0 text-xs mb-2 flex">
                  <img className="ml-2" src="/assets/creds.webp" alt="Creds" />
                  <p className="ml-2 tracking-wider">2,900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overdrive;
