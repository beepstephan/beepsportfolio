import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { Mesh } from "three";

function DiamondGlow() {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = a * 0.2;

      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(a * 2) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.2, 2]} />
      <meshStandardMaterial
        color={"#ffffff"}
        metalness={0.9}
        roughness={0.05}
        emissive={"#88ccff"}
        emissiveIntensity={1}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

export default function DiamondGlowScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <DiamondGlow />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </div>
  );
}