import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Users, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// ==========================================
// TOGGLE ANIMATION HERE
// Set to false during development to save CPU/Battery
// ==========================================
const ENABLE_COSMIC_ANIMATION = false; 

const CosmicNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Configuration
    const particleCount = 80;
    const connectDistance = 150;
    const particleSpeed = 0.5;

    // Handle Resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * particleSpeed;
        this.vy = (Math.random() - 0.5) * particleSpeed;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Using Living Hope Blue (tailwind blue-600) with opacity
        ctx.fillStyle = 'rgba(37, 99, 235, 0.4)'; 
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Check distance for connections
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Calculate opacity based on distance
            const opacity = 1 - distance / connectDistance;
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity * 0.2})`; // Faint blue lines
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

// Replace these with actual images from your trust
const heroImages = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070", // Kids/Charity

  "/image/projects/gallery/cancer/(3).jpg",
  "/image/projects/gallery/good_samariten/(1).png",

];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const stats = [
    { icon: Users, label: 'People Helped', value: '10,000+' },
    { icon: Globe, label: 'Communities Reached', value: '50+' },
    { icon: Heart, label: 'Projects Completed', value: '200+' },
  ];

  // Auto-slide effect for the hero gallery
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Changes image every 5 seconds

    return () => clearInterval(timer);
  }, []);

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
      className="min-h-screen relative bg-gray-50"
    >
      {/* Cosmic Network Background (If Enabled) */}
      {ENABLE_COSMIC_ANIMATION && <CosmicNetworkBackground />}

      {/* Hero Section with Gallery Slideshow */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0 bg-black">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Trust Activity"
            />
          </AnimatePresence>
          {/* Dark Overlay to make text readable */}
          <div className="absolute inset-0 bg-black/80 z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Living Hope
            <span className="block text-4xl md:text-5xl text-blue-400 mt-2 drop-shadow-md">
              Charitable Trust
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md"
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
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={scrollToSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300 z-20 drop-shadow-lg"
        >
          <ArrowDown className="h-8 w-8 animate-bounce" />
        </motion.button>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm relative z-10">
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
                className="text-center p-8 bg-white/90 shadow-sm rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
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
      <section className="py-20 bg-gradient-to-br from-blue-600/95 to-green-500/95 text-white relative z-10 backdrop-blur-sm">
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