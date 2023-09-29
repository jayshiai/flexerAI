"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Innovation Oasis";
  const organizer = "UDYAM";
  const theme = ["#7b1fa2", "#673ab7", "#f48fb1"];
  const rewards = "Revealing Soon";
  const data = [["Revealing Soon", ""]];
  const url =
    "https://unstop.com/hackathons/gen-a-thon-tantrafiesta-23-iiit-nagpur-760544";
  const details =
    " Innovation Oasis is an event that fosters innovation and collaboration, encouraging aspiring entrepreneurs to unleash their creativity.";
  const paragraph =
    "Calling all innovative and business-minded students to join Overdrive – Innovation Oasis, an event tailor-made for those with a passion for entrepreneurship and creative thinking. This competition is your platform to showcase your innovative ideas and provide practical solutions to real-world challenges. This event targets students passionate about business and innovation, aiming to inspire creative thinking, practical problem-solving, and entrepreneurial spirit. Participants must outline their startup's challenges, customer value, market research, product description, and revenue model. The event fosters innovation, collaboration, and entrepreneurship, encouraging aspiring entrepreneurs to unleash their creativity and transform ideas into successful ventures. Innovation Oasis is your oasis of opportunity in the world of business and innovation, so don't miss your chance to make your mark!";
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-black text-white">
      <div className=" w-[80vw] mt-28 flex flex-col items-center">
        <Header
          theme={theme}
          title={title}
          organizer={organizer}
          details={details}
          url={url}
        >
          <motion.div
            animate={{
              y: [-10, 10, -10],

              transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 3,
              },
            }}
            className=" md:ml-[100px] bg-transparent h-full w-full flex flex-col justify-center"
          >
            <Image
              src="/assets/banner/innov_banner.svg"
              height={300}
              width={400}
            />
          </motion.div>
        </Header>
        <EventData
          paragraph={paragraph}
          data={data}
          theme={theme}
          rewards={rewards}
        />

        <Contact />
      </div>
    </div>
  );
};

export default page;
