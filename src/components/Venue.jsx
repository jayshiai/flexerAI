"use client";
import * as THREE from "three";
import Tag from "./bytes/Tag";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./Sphere";
import { MdOutlineEmojiEvents } from "react-icons/md";
const Venue = () => {
  //   const scene = new THREE.Scene();

  //   //creating our sphere
  //   const geometry = new THREE.SphereGeometry(3, 64, 64);
  //   const material = new THREE.MeshStandardMaterial({
  //     color: "#00ff83",
  //   });

  //   const mesh = new THREE.Mesh(geometry, material);

  //   scene.add(mesh);
  //   //sizes
  //   const sizes = {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   };

  //   //light
  //   const light = new THREE.PointLight(0xffffff, 1, 100);
  //   light.position.set(0, 10, 10);
  //   scene.add(light);
  //   //camera
  //   const camera = new THREE.PerspectiveCamera(
  //     45,
  //     sizes.width / sizes.height,
  //     0.1,
  //     100
  //   );
  //   camera.position.z = 20;
  //   scene.add(camera);

  //   //Renderer
  //   const canvas = document.querySelector(".webgl");

  //   const renderer = new THREE.WebGLRenderer({ canvas });
  //   renderer.setSize(sizes.width, sizes.height);
  //   renderer.setPixelRatio(2);
  //   renderer.render(scene, camera);

  //   //controls
  //   const controls = new OrbitControls(camera, canvas);
  //   controls.enableDamping = true;
  //   controls.enablePan = false;
  //   controls.enableZoom = false;
  //   controls.autoRotate = true;
  //   controls.autoRotateSpeed = 5;

  //   //resize
  //   window.addEventListener("resize", () => {
  //     //update sizes
  //     sizes.width = window.innerWidth;
  //     sizes.height = window.innerHeight;
  //     //update camera
  //     camera.aspect = sizes.width / sizes.height;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(sizes.width, sizes.height);
  //   });

  //   const loop = () => {
  //     controls.update();
  //     renderer.render(scene, camera);
  //     window.requestAnimationFrame(loop);
  //   };
  //   loop();

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
        <Tag text="Venue" icon={<HiArrowRight />} />

        <div className="w-full">
          <Canvas>
            <ambientLight />
            <pointLight position={[0, 10, 10]} />
            <Sphere />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Venue;
