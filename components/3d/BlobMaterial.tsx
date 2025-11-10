import * as THREE from "three";
import { extend } from "@react-three/fiber";

class BlobMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv - 0.5;

          // Scale-style gradient colors
          vec3 color1 = vec3(0.7, 0.85, 1.0);  // color A (light blue)
        vec3 color2 = vec3(0.95, 0.75, 1.0); // color B (lavender/pink)

          float dist = length(uv);

          vec3 color = mix(color1, color2, uv.x + 0.5);

          // soft edges
          float alpha = smoothstep(0.5, 0.2, dist);

          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
    });
  }
}

extend({ BlobMaterial });

export { BlobMaterial };