import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Sphere = () => {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} scale={1.5}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial color="#00ff83" />
    </mesh>
  );
};

export default Sphere;
