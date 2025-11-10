"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PresentationControls,
  Float,
  ContactShadows,
  AdaptiveDpr,
} from "@react-three/drei";
import HeroModel from "../3d/HeroModel";

export default function HeroCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 1.5]} // cap DPR to avoid GPU blowups
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight intensity={1} position={[6, 6, 6]} />

        <Suspense fallback={null}>
          {/* Touch/drag to rotate (limits like Scale) */}
        <PresentationControls
          global
          snap
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 8, Math.PI / 8]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          spring={{ mass: 1, tension: 170, friction: 26 }}
        >
          <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
            <HeroModel scale={2.4} />
          </Float>
        </PresentationControls>


          {/* Soft shadow "halo" */}
          <ContactShadows
            opacity={0.15}
            scale={15}
            blur={2.2}
            far={10}
            resolution={256}
            frames={1}
            position={[0, -1.2, 0]}
          />

          {/* Lightweight HDRI (keep res modest to avoid context loss) */}
          <Environment preset="city" resolution={256} />
        </Suspense>

        {/* Dynamically lowers DPR on weak GPUs */}
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}