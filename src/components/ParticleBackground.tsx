import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Particles = () => {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(1000 * 3);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <points ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#3B82F6"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

const ParticleBackground = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ pointerEvents: 'none' }}
    >
      <Canvas
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
