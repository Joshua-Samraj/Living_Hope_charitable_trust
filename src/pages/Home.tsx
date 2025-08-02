import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Users, Globe, Heart } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Link } from 'react-router-dom';


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
      {/* <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry> */}
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

const Home = () => {
  const stats = [
    { icon: Users, label: 'People Helped', value: '10,000+' },
    { icon: Globe, label: 'Communities Reached', value: '50+' },
    { icon: Heart, label: 'Projects Completed', value: '200+' },
  ];

  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Particle Canvas */}
        <div className="absolute inset-0 -z-10">
          <Canvas camera={{ position: [0, 0, 5] }} style={{ background: 'transparent' }}>
            <Particles />
          </Canvas>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
          >
            Living Hope
            <span className="block text-4xl md:text-5xl text-blue-600 mt-2">
              Charitable Trust
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Empowering Lives, Uplifting Communities
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/projects">
              <button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={scrollToSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          <ArrowDown className="h-8 w-8 animate-bounce" />
        </motion.button>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since our founding in 2020, we've been making a difference in communities across the region
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Founded by Jose Sam in 2020, Living Hope Charitable Trust is dedicated to supporting
              rural education, humanitarian aid, and community development initiatives that create
              lasting positive change.
            </p>
            <Link to="/about">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg">
                Read Our Story
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
