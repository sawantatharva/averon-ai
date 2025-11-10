import * as THREE from "three";
import { extend } from "@react-three/fiber";

/* Custom shader material for soft gradient blob */
class BlobMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      /* Runtime uniforms */
      uniforms: {
        uTime: { value: 0 },
      },

      /* Pass UVs */
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,

      /* Soft radial gradient shader */
      fragmentShader: `
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv - 0.5;

          // Gradient endpoints
          vec3 color1 = vec3(0.7, 0.85, 1.0);  
          vec3 color2 = vec3(0.95, 0.75, 1.0);

          float dist = length(uv);

          // Horizontal blend
          vec3 color = mix(color1, color2, uv.x + 0.5);

          // Soft alpha falloff
          float alpha = smoothstep(0.5, 0.2, dist);

          gl_FragColor = vec4(color, alpha);
        }
      `,

      transparent: true,
    });
  }
}

/* Expose material to R3F JSX */
extend({ BlobMaterial });

export { BlobMaterial };