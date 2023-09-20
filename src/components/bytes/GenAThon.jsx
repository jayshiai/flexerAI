"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";
import { VscChromeMinimize, VscChromeClose } from "react-icons/vsc";
import Typewriter from "typewriter-effect";
const GenAThon = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const [tab, setTab] = useState(0);

  const activeButtonStyle = {
    opacity: 1,
  };
  //function to remove cursor
  const hideCursor = () => {
    const cursor = document.querySelector(".custom_cursor");
    console.log(cursor);
    cursor.style.opacity = 0;
  };
  const handleOnMove = (e) => {
    // Get card element dimensions
    const rect = cardRef.current.getBoundingClientRect();
    // Get mouse or touch position relative to card element
    const middleX = rect.width / 2;
    const middleY = rect.height / 2;

    const x = -1 * ((e.clientX - (rect.left + middleX)) / middleX) * 4;
    const y = -1 * ((e.clientY - (rect.top + middleY)) / middleY) * 4;

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
      }}
      className="eventCard w-full h-[400px]"
    >
      <div className="eventCard-content flex">
        <div className="w-1/2 pl-2 h-full flex flex-col justify-between">
          <div>
            <OrganiserBadge text="Elevate" />
            <div
              style={{
                "--c1": "#7b1fa2",
                "--c2": "#673ab7",
                "--c3": "#f48fb1",
              }}
              className="transText transBg mt-4 mb-8 font-bold text-6xl "
            >
              Gen-A-Thon
            </div>
            <div className="tracking-wider text-xl opacity-50">
              Elevate your skills and imagination at Gen-A-Thon: an exciting AI,
              ML, Web Development, and App Development Hackathon!
            </div>
          </div>
          <a className="w-[200px] h-[50px] mb-4  text-2xl  rounded-xl flex justify-center  items-center bg-[#7b1fa2] cursor-pointer">
            Register Now
          </a>
        </div>
        <div className="codeBlock w-1/2 border border-white/20 h-full relative ">
          <div className="nav border-b bg-[#101010] border-white/20 h-[10%] flex justify-between items-center px-2">
            <div className="list text-sm flex justify-around w-1/2 z-10">
              <button
                type="button"
                onClick={() => setTab(0)}
                style={tab === 0 ? activeButtonStyle : null}
                className="opacity-50"
              >
                Problems
              </button>
              <button
                type="button"
                onClick={() => setTab(1)}
                style={tab === 1 ? activeButtonStyle : null}
                className="opacity-50"
              >
                Terminal
              </button>
              <button
                type="button"
                onClick={() => setTab(2)}
                style={tab === 2 ? activeButtonStyle : null}
                className="opacity-50"
              >
                Output
              </button>
            </div>
            <div className="flex w-[40px] justify-between">
              <VscChromeMinimize className="opacity-50 hover:scale-150" />
              <VscChromeClose className="text-red-500 hover:scale-150" />
            </div>
          </div>
          <div className="code  bg-[#151515] h-[90%] relative">
            {tab == 0 && (
              <div className="absolute leading-loose text-sm p-2 top-0 left-0 h-full w-full">
                <Typewriter
                  options={{
                    delay: 15,
                    cursor: ".",
                    cursorClassName: "custom_cursor",
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pause(2500)
                      .typeString(
                        "<span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#79c0ff;'>Themes:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#ff7b72;'>- 1.</span> HealthTech Innovation<br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#ffa657;'>- 2.</span> Smart City Solutions<br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#79c0ff;'>Tracks:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#ff7b72;'>- 1.</span> AI-Driven Web Development<br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#ffa657;'>- 2.</span> ML-Enhanced App Development"
                      )
                      .callFunction(() => hideCursor())
                      .start();
                  }}
                />
              </div>
            )}
            {tab == 1 && (
              <div className="absolute leading-loose text-sm p-2 top-0 left-0 h-full w-full overflow-y-auto no-scrollbar">
                <Typewriter
                  options={{
                    delay: 15,
                    cursor: ".",
                    cursorClassName: "custom_cursor",
                  }}
                  onInit={(typewriter) => {
                    typewriter

                      .typeString(
                        "<span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#7ee787;'>Registration Date:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#ff7b72;'>- From</span> <span style='color:#ffa657;'>08-09-2023</span> <span style='color:#ff7b72;'>To</span> <span style='color:#ffa657;'>- 24-09-2023</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#7ee787;'>Round 1:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#79c0ff;'>- 24 September, 2023 (4:00 PM - 5:00 PM)</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#7ee787;'>Round 1 Result:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#79c0ff;'>- 24 September, 2023 (7:00 PM)</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#7ee787;'>Round 2:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#79c0ff;'>- 24 September, 2023 (11:59 PM)</span> <span style='color:#ffa657;'>(Problem Statements will be given)</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#7ee787;'>Round 2 Submission:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#79c0ff;'>- 28th September, 2023</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#7ee787;'>Round 2 Result:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#79c0ff;'>- 30th September, 2023</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#ff7b72;'>Grand Finale:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#ffa657;'>- 13th October, 2023</span> <span style='color:#ff7b72;'>and</span> <span style='color:#ffa657;'>14th October, 2023</span><br>"
                      )
                      .callFunction(() => hideCursor())
                      .start();
                  }}
                />
              </div>
            )}
            {tab == 2 && (
              <div className="absolute leading-loose text-sm p-2 top-0 left-0 h-full w-full">
                <Typewriter
                  options={{
                    delay: 15,
                    cursor: ".",
                    cursorClassName: "custom_cursor",
                  }}
                  onInit={(typewriter) => {
                    typewriter

                      .typeString(
                        "<span style='opacity:0.3;font-size:10px;'>[14.10.23]</span> <span style='font-weight: bold;color:#7ee787;'>Prizes :</span><br><span style='opacity:0.3;font-size:10px;'>[14.10.23]</span>   <span style='color:#79c0ff;'>--   #1  </span><span style='color:#ff7b72;'>Rs. 30,000</span><br><span style='opacity:0.3;font-size:10px;'>[14.10.23]</span><br><span style='opacity:0.3;font-size:10px;'>[14.10.23]</span>"
                      )
                      .pauseFor(2000)
                      .typeString(
                        " <span style='color:#ffa657;'>-- Certificates of participation for all attendees</span>"
                      )
                      .callFunction(() => hideCursor())
                      .start();
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenAThon;
