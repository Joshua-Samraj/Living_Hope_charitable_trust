// src/components/Particles.tsx
import React, { useRef, useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const particles = 3000;
    const pos = new Float32Array(particles * 3);
    for (let i = 0; i < particles * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#4f46e5"
          size={0.05}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Particles;
