/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 vandal.gltf 
Author: xxchelxx (https://sketchfab.com/xxchelxx)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/vandal-0dd5c4e5342a42d9b6969b7f4e6ac69e
Title: VANDAL
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Vandal(props) {
  const { nodes, materials } = useGLTF("/assets/vandal.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.AK_S0_MI}
        position={[0, 0.159, -0.06]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.AK_S0_MI}
        position={[0, 0.191, 0.218]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
}

useGLTF.preload("/assets/vandal.gltf");
