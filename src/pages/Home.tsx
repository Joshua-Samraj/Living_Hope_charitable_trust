import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Users, Globe, Heart, Calendar, Image as ImageIcon, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects'; 
import { Helmet } from 'react-helmet-async';

const ENABLE_COSMIC_ANIMATION = true; 

const CosmicNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 40 : 80;
    const connectDistance = isMobile ? 100 : 150;
    const particleSpeed = 0.5;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number; y: number; vx: number; vy: number; radius: number;
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
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(37, 99, 235, 0.4)'; 
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < connectDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = 1 - distance / connectDistance;
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity * 0.2})`;
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

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />;
};

const heroImages = [
  "/image/projects/gallery/cancer/(1).jpg",
  "/image/projects/gallery/hunger/(1).jpg",
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const statsScrollRef = useRef<HTMLDivElement>(null);
  const projectsScrollRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Users, label: 'People Helped', value: '10,000+' },
    { icon: Globe, label: 'Communities Reached', value: '50+' },
    { icon: Heart, label: 'Projects Completed', value: '200+' },
  ];

  const featuredProjectIds = ['1', '15', '24','30','31','32','36','37']; 

  const featuredProjects = projects.filter(project => 
    featuredProjectIds.includes(project.id)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const setupAutoScroll = (container: HTMLDivElement | null, speed: number) => {
      if (!container) return () => {};

      let interval: ReturnType<typeof setInterval>;

      const startScroll = () => {
        interval = setInterval(() => {
          if (container.scrollWidth > container.clientWidth) {
            const maxScroll = container.scrollWidth - container.clientWidth;
            if (container.scrollLeft >= maxScroll - 10) {
              container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
              const child = container.firstElementChild as HTMLElement;
              const scrollAmount = child ? child.offsetWidth + 16 : container.clientWidth * 0.8;
              container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
          }
        }, speed);
      };

      startScroll();

      const pause = () => clearInterval(interval);
      const resume = () => { pause(); startScroll(); };

      container.addEventListener('mouseenter', pause);
      container.addEventListener('mouseleave', resume);
      container.addEventListener('touchstart', pause, { passive: true });
      container.addEventListener('touchend', resume);

      return () => {
        clearInterval(interval);
        container.removeEventListener('mouseenter', pause);
        container.removeEventListener('mouseleave', resume);
        container.removeEventListener('touchstart', pause);
        container.removeEventListener('touchend', resume);
      };
    };

    const cleanupStats = setupAutoScroll(statsScrollRef.current, 3500);
    const cleanupProjects = setupAutoScroll(projectsScrollRef.current, 4000);

    return () => {
      cleanupStats();
      cleanupProjects();
    };
  }, []);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative bg-gray-50 dark:bg-slate-900 overflow-x-hidden"
    >
      <Helmet>
        <title>Home page | Living Hope Charitable Trust | Empowering Communities</title>
      <meta 
          name="description" 
          content="Founded in 2020, Living Hope Charitable Trust is dedicated to supporting rural education, cancer patients, and humanitarian aid. Join our mission today." 
        />
        <meta name="keywords" content="Charity, NGO, Cancer Aid, Rural Education, Food Donation, India Trust, Volunteer" />
        
        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://living-hope-charitable-trust.vercel.app/" />
        <meta property="og:title" content="Living Hope Charitable Trust" />
        <meta property="og:description" content="Supporting rural education, humanitarian aid, and community development." />
        <meta property="og:image" content="https://ik.imagekit.io/vc42cyymbb/logo.png?updatedAt=1754075020511" /> {/* Use your actual logo or hero image URL */}

        
      </Helmet>
      {ENABLE_COSMIC_ANIMATION && <CosmicNetworkBackground />}

      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden z-10">
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
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto w-full pt-16 md:pt-0">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg leading-tight"
          >
            Living Hope
            <span className="block text-2xl sm:text-4xl md:text-5xl text-blue-400 mt-2">Charitable Trust</span>
          </motion.h1>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-6 md:mt-8">
            <button 
              onClick={() => scrollToRef(aboutRef)}
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Our Mission
            </button>
            <Link to="/donation" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg">
                Donate Now
              </button>
            </Link>
          </div>
        </div>

        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => scrollToRef(statsRef)}
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white z-20"
        >
          <ArrowDown className="h-6 w-6 md:h-8 md:w-8" />
        </motion.button>
      </section>

      <section ref={statsRef} className="py-10 md:py-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm relative z-10 border-b dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={statsScrollRef} className="flex overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-3 gap-4 md:gap-8 snap-x snap-mandatory hide-scrollbar">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[80vw] sm:min-w-[45vw] md:min-w-0 snap-center text-center p-6 md:p-8 bg-white dark:bg-slate-800 shadow-sm rounded-2xl border border-gray-100 dark:border-slate-700 flex flex-col justify-center"
              >
                <stat.icon className="h-8 w-8 md:h-10 md:w-10 text-blue-600 mx-auto mb-3 md:mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">{stat.value}</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="py-12 md:py-20 bg-gradient-to-br from-blue-600/95 to-green-500/95 text-white relative z-10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Mission</h2>
            <p className="text-base md:text-xl mb-6 md:mb-8 mx-auto opacity-90 leading-relaxed">
              Founded by Jose Sam in 2020, Living Hope Charitable Trust is dedicated to supporting
              rural education, humanitarian aid, and community development initiatives that create
              lasting positive change.
            </p>
            <Link to="/about">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-colors duration-300 shadow-lg text-sm md:text-base">
                Read Our Story
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section ref={projectsRef} className="py-12 md:py-24 bg-gray-50 dark:bg-slate-900 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
            <Link to="/projects" className="hidden md:flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div ref={projectsScrollRef} className="flex overflow-x-auto pb-6 md:pb-0 md:grid md:grid-cols-4 gap-4 md:gap-6 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[85vw] sm:min-w-[45vw] md:min-w-0 snap-center"
              >
                <Link 
                  to={`/projects/${project.category.toLowerCase()}`}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden text-left flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-40 md:h-48 w-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover" 
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 md:top-3 md:right-3">
                       <span className={`px-2 py-1 rounded-full text-[10px] md:text-xs font-semibold shadow-sm backdrop-blur-md
                        ${project.status === 'completed' ? 'bg-green-100/90 text-green-800 dark:bg-green-900/80 dark:text-green-300' 
                        : project.status === 'active' ? 'bg-blue-100/90 text-blue-800 dark:bg-blue-900/80 dark:text-blue-300' 
                        : 'bg-orange-100/90 text-orange-800 dark:bg-orange-900/80 dark:text-orange-300'}`}
                      >
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 md:p-5 flex flex-col flex-grow">
                    <span className="text-[10px] md:text-xs font-bold text-blue-600 dark:text-blue-400 uppercase mb-1.5 md:mb-2 tracking-wider">
                      {project.category}
                    </span>
                    <h4 className="font-bold text-base md:text-lg mb-1.5 md:mb-2 dark:text-white line-clamp-1 md:line-clamp-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm flex-grow line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto pt-3 border-t border-gray-100 dark:border-slate-700 flex justify-between items-center text-xs md:text-sm">
                      <span className="text-gray-500 dark:text-gray-400 flex items-center">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1"/> 
                        <span className="truncate max-w-[120px]">{project.date}</span>
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-medium flex items-center group-hover:underline">
                        Details <ChevronRight className="w-3 h-3 ml-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 md:hidden text-center">
            <Link to="/projects" className="inline-block bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-8 py-3 rounded-full text-sm font-bold shadow-md">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-indigo-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">See Our Impact in Action</h2>
            <p className="text-indigo-200 text-sm md:text-base max-w-md">View photos from our recent field visits, medical camps, and community events.</p>
          </div>
          <Link to="/gallery" className="w-full md:w-auto flex items-center justify-center bg-white text-indigo-900 px-6 py-3 md:py-3.5 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg">
            <ImageIcon className="mr-2 h-5 w-5" /> Open Gallery
          </Link>
        </div>
      </section>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
};

export default Home;