import React, { useState, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ArrowLeft } from 'lucide-react';
import { projects, Project } from '../data/projects';
import { categories } from '../data/categories';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const CategoryProjects = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Add refs to track touch events
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  const categoryProjects = projects.filter(project => project.category === category).reverse();

  const filteredProjects = useMemo(() => {
    return categoryProjects.filter(project => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }, [categoryProjects, searchTerm, selectedStatus]);

  // Enhanced click handler to prevent accidental navigation
  const handleProjectClick = (project: Project, event: React.MouseEvent | React.TouchEvent) => {
    // Prevent event from bubbling up
    event.preventDefault();
    event.stopPropagation();
    
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Touch event handlers to prevent accidental navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;

    const touch = e.changedTouches[0];
    const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
    const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);
    const deltaTime = Date.now() - touchStartRef.current.time;

    // If it's a swipe gesture (moved too much) or took too long, don't treat as click
    if (deltaX > 10 || deltaY > 10 || deltaTime > 500) {
      e.preventDefault();
      e.stopPropagation();
    }

    touchStartRef.current = null;
  };

  // Safe navigation handler
  const handleBackNavigation = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/projects');
  };

  if (!category) return null;
  const currentCategory = categories.find(cat => cat.keyword === category);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16 bg-gray-50"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        {currentCategory?.banner && (
          <div
            className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.2]"
            style={{ backgroundImage: `url(${currentCategory.banner})` }}
          />
        )}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4"
          >
            {currentCategory?.name || 'Projects'}
          </motion.h1>
        </div>
      </section>

      {/* Search/Filter */}
      <section className="py-6 md:py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <motion.button
              onClick={handleBackNavigation}
              onTouchEnd={handleBackNavigation}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 w-fit p-2 md:p-0 touch-manipulation"
              whileTap={{ scale: 0.95 }}
              style={{ touchAction: 'manipulation' }}
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to All Projects</span>
            </motion.button>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md w-full">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ touchAction: 'manipulation' }}
                />
              </div>

              <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
                <Filter className="h-5 w-5 text-gray-600 hidden md:block" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-auto"
                  style={{ touchAction: 'manipulation' }}
                >
                  <option value="all">All Projects</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 md:py-16"
            >
              <p className="text-lg md:text-xl text-gray-600">
                No projects found in this category.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={(e) => handleProjectClick(project, e)}
                  onTouchEnd={(e) => {
                    // Only handle touch end if it's a valid tap
                    if (touchStartRef.current) {
                      const touch = e.changedTouches[0];
                      const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
                      const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);
                      const deltaTime = Date.now() - touchStartRef.current.time;

                      if (deltaX <= 10 && deltaY <= 10 && deltaTime <= 500) {
                        handleProjectClick(project, e);
                      }
                    }
                  }}
                  className="cursor-pointer"
                  style={{ touchAction: 'manipulation' }}
                >
                  <ProjectCard project={project} onClick={() => {}} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </motion.div>
  );
};

export default CategoryProjects;