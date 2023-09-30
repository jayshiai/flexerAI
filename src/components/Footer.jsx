import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaSquareFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="w-screen h-[600px] md:h-[200px] p-8 flex flex-col md:flex-row justify-around md:justify-between items-center bg-black text-white">
        <div className="w-full md:w-1/3 h-1/3 md:h-full flex flex-col justify-center items-center md:items-start">
          <Image src="/assets/logo/iiitn_logo.svg" height={200} width={500} />
        </div>
        <div className="mt-[-25px]">
          Developed By :
          <Link href="https://jayshiai.github.io/" target="_blank">
            <Image src="/assets/logo/three_dubs.svg" height={150} width={350} />
          </Link>
        </div>
        <div className="flex flex-col w-full md:w-1/4">
          <div className="w-full h-1/2   flex  flex-col justify-center md:justify-start items-center md:items-end">
            <div className="flex flex-col justify-center md:justify-start items-center">
              <Image src="/assets/logo.png" height={75} width={75} alt="" />
              <div className=" font-black text-4xl cursor-pointer ml-6">
                <Link href="/">
                  <Image
                    src="/assets/logoText.png"
                    height={150}
                    width={150}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 mt-2 flex justify-around md:justify-end text-4xl items-center">
        <a
          className="hover:text-pink-400"
          href="https://instagram.com/tantrafiesta"
        >
          <FaInstagram />
        </a>
        <a className="hover:text-white ml-4" href="https://twitter.com/tf2k22">
          {" "}
          <FaXTwitter />
        </a>
        <a
          className="hover:text-red-700 ml-4"
          href="https://youtube.com/channel/UC7xty40bNXvYPw_nrOQPB1Q"
        >
          <FaYoutube />
        </a>
        <a
          className="hover:text-blue-600 ml-4"
          href="https://www.facebook.com/iiitntantra/"
        >
          <FaSquareFacebook />
        </a>
        <a
          className="hover:text-blue-800 ml-4"
          href="https://www.linkedin.com/company/tantrafiesta-iiitn/"
        >
          <FaLinkedin />
        </a>
      </div>
    </>
  );
};

export default Footer;
