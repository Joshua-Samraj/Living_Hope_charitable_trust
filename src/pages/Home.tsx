import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Users, Globe, Heart, Calendar, Image as ImageIcon, ChevronRight, Home as HomeIcon, AlertTriangle, TrendingUp, Share2, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
  "/image/projects/gallery/good_samariten/patti.jpeg",
];

const emergencyImages = [
  "image/projects/gallery/good_samariten/patti.jpeg",
  "image/projects/gallery/good_samariten/(1).jpg",
  "image/projects/gallery/good_samariten/(1).png",
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentEmergencyImageIndex, setCurrentEmergencyImageIndex] = useState(0);
  const [showLandDetails, setShowLandDetails] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const statsScrollRef = useRef<HTMLDivElement>(null);
  const projectsScrollRef = useRef<HTMLDivElement>(null);
  const emergencyRef = useRef<HTMLElement>(null);
  const location = useLocation();

  const featuredProjectIds = ['1', '15', '24']; 

  const featuredProjects = projects.filter(project => 
    featuredProjectIds.includes(project.id)
  );

  const targetAmount = 15000000; 
  const currentAmount = 100000; 
  const progressPercentage = Math.min((currentAmount / targetAmount) * 100, 100);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  useEffect(() => {
    if (location.pathname === '/emergency' || location.hash === '#emergency') {
      const scrollToEmergency = () => {
        if (emergencyRef.current) {
          emergencyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setShowLandDetails(true);
        }
      };

      scrollToEmergency();
      const timer = setTimeout(scrollToEmergency, 500);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  const handleShare = async () => {
    const url = `${window.location.origin}${window.location.pathname}emergency`;
    const shareData = {
      title: 'Emergency Need - Living Hope Charitable Trust',
      text: 'Your immediate support is required for our critical development project.',
      url: url
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const emergencyTimer = setInterval(() => {
      setCurrentEmergencyImageIndex((prevIndex) => (prevIndex + 1) % emergencyImages.length);
    }, 4000);
    return () => clearInterval(emergencyTimer);
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
      className="min-h-screen relative bg-gray-50 overflow-x-hidden"
    >
      <Helmet>
        <title>Home page | Living Hope Charitable Trust | Empowering Communities</title>
        <meta 
          name="description" 
          content="Founded in 2020, Living Hope Charitable Trust is dedicated to supporting rural education, cancer patients, and humanitarian aid. Join our mission today." 
        />
        <meta name="keywords" content="Trust in Tirunelveli, NGO Melapalayam, Living Hope Trust, Charity Tamil Nadu" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://living-hope-charitable-trust.vercel.app/" />
        <meta property="og:title" content="Living Hope Charitable Trust" />
        <meta property="og:description" content="Supporting rural education, humanitarian aid, and community development." />
        <meta property="og:image" content="https://ik.imagekit.io/vc42cyymbb/logo.png?updatedAt=1754075020511" /> 
      </Helmet>
      {ENABLE_COSMIC_ANIMATION && <CosmicNetworkBackground />}

      <section className="relative h-[80svh] md:h-[100svh] flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 z-0 bg-black">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
              alt="Trust Activity"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>

        <div className="relative z-20 px-4 max-w-7xl mx-auto w-full pt-16 md:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="text-left">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg leading-tight"
              >
                Living Hope
                <span className="block text-2xl sm:text-4xl md:text-5xl text-blue-400 mt-2">Charitable Trust</span>
              </motion.h1>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start items-center mt-6 md:mt-8">
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

          </div>
        </div>

        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => scrollToRef(aboutRef)}
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white z-20"
        >
          <ArrowDown className="h-6 w-6 md:h-8 md:w-8" />
        </motion.button>
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
              We are committed to restoring hope and dignity to the destitutes, orphans, widows, physically challenged individuals, and vulnerable children and youth, by rehabilitating and empowering them through residential care, quality education, and sustainable livelihood opportunities.
            </p>
            <Link to="/about">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-colors duration-300 shadow-lg text-sm md:text-base">
                Read Our Story
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="emergency" ref={emergencyRef} className="py-12 md:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20">
        <div className="flex flex-col items-center justify-center mb-6 md:mb-8 text-center relative group">
          <div className="flex items-center space-x-3 mb-1.5 md:mb-2">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <AlertTriangle className="text-red-600 h-6 w-6 md:h-8 md:w-8 drop-shadow-md" />
            </motion.div>
            
            <div className="flex items-center">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 uppercase tracking-tight">
                Emergency need
              </h2>
              <button 
                onClick={handleShare}
                className="ml-4 p-1.5 md:p-2 bg-white shadow-sm hover:shadow-md border border-gray-200 rounded-full transition-all group-hover:opacity-100 md:opacity-0"
                title="Share this section"
              >
                {isCopied ? <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500" /> : <Share2 className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />}
              </button>
            </div>

            <motion.div 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            >
              <AlertTriangle className="text-red-600 h-6 w-6 md:h-8 md:w-8 drop-shadow-md" />
            </motion.div>
          </div>
          <p className="text-gray-600 font-semibold text-sm md:text-base">Your immediate support is required for our critical development project.</p>
        </div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="w-full relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-[2.5rem] blur-lg opacity-40 animate-pulse"></div>

          <div className="relative bg-gray-900 border border-red-500/30 p-4 md:p-6 lg:p-8 rounded-3xl shadow-2xl overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 to-orange-500"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              
              <div className="relative h-60 md:h-80 lg:h-full lg:min-h-[450px] w-full rounded-2xl overflow-hidden group-hover:shadow-lg transition-shadow">
                <AnimatePresence initial={false}>
                  <motion.img 
                    key={currentEmergencyImageIndex}
                    src={emergencyImages[currentEmergencyImageIndex]}
                    alt="Sanctuary Development Site" 
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 flex items-center z-10">
                  <div className="p-2 md:p-3 bg-red-500/30 backdrop-blur-md rounded-full border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.5)] mr-3 md:mr-4">
                    <HomeIcon className="text-white h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-wide">Living Hope Anbu Illam</h3>
                </div>
              </div>

              <div 
                onClick={() => setShowLandDetails(!showLandDetails)}
                className="flex flex-col justify-center cursor-pointer"
              >
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h4 className="text-red-400 font-bold tracking-wider uppercase text-sm md:text-base">Project Status</h4>
                  <ChevronRight className={`text-gray-400 h-6 w-6 md:h-8 md:w-8 transition-transform duration-300 ${showLandDetails ? 'rotate-90' : ''}`} />
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-0.5 md:mb-1">Funds Raised</p>
                      <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold">{formatCurrency(currentAmount)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-0.5 md:mb-1">Target Goal</p>
                      <p className="text-red-400 text-base md:text-lg lg:text-xl font-bold">₹1.5 Crores</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800/80 rounded-full h-2 md:h-3 overflow-hidden border border-white/5 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-red-600 to-orange-500 h-full rounded-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_ease-in-out_infinite]"></div>
                    </motion.div>
                  </div>
                  <div className="flex justify-between items-center mt-2 md:mt-3">
                    <span className="text-orange-400 text-xs font-bold flex items-center bg-orange-500/10 px-2 py-1 rounded-md">
                      <TrendingUp className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1 md:mr-1.5" /> {progressPercentage.toFixed(1)}% Funded
                    </span>
                    <span className="text-gray-400 text-[10px] md:text-xs font-medium">Join {Math.floor(currentAmount / 2500)} supporters</span>
                  </div>
                </div>
                
                <AnimatePresence mode="wait">
                  {!showLandDetails && (
                    <motion.p 
                      key="summary"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-300 text-sm md:text-base font-medium mt-2"
                    >
                      Help us secure a permanent facility. Click to learn how your contribution builds a home for those requiring critical, long-term care.
                    </motion.p>
                  )}

                  {showLandDetails && (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3 md:space-y-4 pt-2"
                    >
                      <p className="text-red-100 text-sm md:text-base leading-relaxed font-medium">
                        We are acquiring land to establish a comprehensive care facility with a singular purpose: providing shelter, specialized medical care, and dignity to vulnerable populations.
                      </p>
                      <ul className="space-y-2 md:space-y-3 bg-black/30 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/5">
                        <li className="flex items-start">
                          <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-white text-xs md:text-sm lg:text-base">Long-term palliative and recovery housing for <strong className="text-pink-300 font-bold">oncology patients</strong> undergoing treatment.</span>
                        </li>
                        <li className="flex items-start">
                          <Heart className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-white text-xs md:text-sm lg:text-base">A clinical recovery ward for <strong className="text-green-300 font-bold">unhoused individuals requiring acute wound care</strong> and rehabilitation.</span>
                        </li>
                        <li className="flex items-start">
                          <Heart className="h-4 w-4 md:h-5 md:w-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-white text-xs md:text-sm lg:text-base">A secure, assisted-living environment for <strong className="text-purple-300 font-bold">elderly individuals without family support</strong>.</span>
                        </li>
                      </ul>
                      <div className="pt-3 mt-3 md:pt-4 md:mt-4 border-t border-red-500/30">
                        <Link to="/donation" onClick={(e) => e.stopPropagation()}>
                          <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-extrabold py-3 md:py-3.5 text-base md:text-lg rounded-xl transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] flex items-center justify-center transform hover:-translate-y-1">
                            Contribute to the Development Fund
                          </button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section ref={projectsRef} className="py-12 md:py-24 bg-gray-50 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Projects</h2>
            <Link to="/projects" className="hidden md:flex items-center text-blue-600 font-semibold hover:underline">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div ref={projectsScrollRef} className="flex overflow-x-auto pb-6 md:pb-0 md:grid md:grid-cols-3 gap-4 md:gap-6 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
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
              className="bg-gray-600 text-white rounded-xl shadow-md overflow-hidden text-left flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
                    ${project.status === 'completed' ? 'bg-green-100/90 text-green-800' 
                    : project.status === 'active' ? 'bg-blue-100/90 text-blue-800' 
                    : 'bg-orange-100/90 text-orange-800'}`}
                  >
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <span className="text-[10px] md:text-xs font-bold text-blue-300 uppercase mb-1.5 md:mb-2 tracking-wider">
                  {project.category}
                </span>
                <h4 className="font-bold text-base md:text-lg mb-1.5 md:mb-2 text-white line-clamp-1 md:line-clamp-2">
                  {project.title}
                </h4>
                <p className="text-gray-200 text-xs md:text-sm flex-grow line-clamp-2 mb-3">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-3 border-t border-gray-500 flex justify-between items-center text-xs md:text-sm">
                  <span className="text-gray-300 flex items-center">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1"/> 
                    <span className="truncate max-w-[120px]">{project.date}</span>
                  </span>
                  <span className="text-blue-300 font-medium flex items-center group-hover:underline">
                    Details <ChevronRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
          <div className="mt-6 md:hidden text-center">
            <Link to="/projects" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-bold shadow-md">
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
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </motion.div>
  );
};

export default Home;