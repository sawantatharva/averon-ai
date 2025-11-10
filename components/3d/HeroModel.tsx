"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Group, Mesh } from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

type HeroModelProps = {
  scale?: number;
  colorA?: string; // base color
  colorB?: string; // soft emissive color
};

export default function HeroModel({
  scale = 2.2,
  colorA = "#BBDEF2",
  colorB = "#D1AAD7",
}: HeroModelProps) {
  const group = useRef<Group>(null!);

  // Make sure the file lives at /public/models/Brain.glb
  const { scene } = useGLTF("/models/brain.glb");

  // Apply a unified soft material (two-tone look via emissive)
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(colorA),
          emissive: new THREE.Color(colorB),
          emissiveIntensity: 0.25,
          metalness: 0.15,
          roughness: 0.35,
        });
        (child as Mesh).material = mat;
        (child as Mesh).castShadow = false;
        (child as Mesh).receiveShadow = false;
      }
    });
  }, [scene, colorA, colorB]);

  // Idle, subtle rotation
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.2;
  });

  // Memo the scene so React doesn't reattach events/materials every render
  const model = useMemo(() => scene, [scene]);

  return (
    <group ref={group} scale={scale} dispose={null}>
      <primitive object={model} />
    </group>
  );
}

useGLTF.preload("/models/brain.glb");