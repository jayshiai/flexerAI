import { HiArrowRight } from "react-icons/hi";
import Tag from "./bytes/Tag";
const About = () => {
  return (
    <div className="ml-[10%]  lg:w-[75vw] lg:translate-y-[-20vh]">
      <Tag text="About" icon={<HiArrowRight />} />
      <div></div>
    </div>
  );
};

export default About;
