import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingHearts = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(20)].map((_, i) => (
        <Sphere
          key={i}
          args={[0.1, 8, 8]}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
        >
          <MeshDistortMaterial
            color={i % 2 === 0 ? "#EF4444" : "#F59E0B"}
            attach="material"
            distort={0.4}
            speed={2}
            transparent
            opacity={0.7}
          />
        </Sphere>
      ))}
    </group>
  );
};

const DonationAnimation = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingHearts />
      </Canvas>
    </div>
  );
};

export default DonationAnimation;