import React, { useState, useMemo } from 'react';
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

  // Filter projects by category
  const categoryProjects = projects.filter(project => 
    project.category === category
  );

  // Filter projects based on search and status
  const filteredProjects = useMemo(() => {
    return categoryProjects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
      
      return matchesSearch && matchesStatus;
    });
  }, [categoryProjects, searchTerm, selectedStatus]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleBackToProjects = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.nativeEvent instanceof MouseEvent || e.nativeEvent instanceof TouchEvent) {
      e.nativeEvent.stopImmediatePropagation();
    }
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
    >
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-green-500 text-white">
        {/* Background Image with overlay */}
        {/* {currentCategory?.image && (
          <div
            className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.4]"
            style={{ backgroundImage: `url(${currentCategory.image})` }}
          />
        )} */}

        {/* Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {currentCategory?.name || 'Projects'}
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto px-4"
          >
            {currentCategory?.description || ''}
          </motion.p>
        </div>
      </section>

      {/* Back Button and Search/Filter */}
      <section className="py-6 md:py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            
            <div className="relative">
              <motion.button
                onClick={() => navigate('/projects')}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 w-fit p-2 md:p-0"
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to All Projects</span>
              </motion.button>


            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md w-full">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
                <Filter className="h-5 w-5 text-gray-600 hidden md:block" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-auto"
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
                >
                  <ProjectCard 
                    project={project} 
                    onClick={handleProjectClick}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </AnimatePresence>
    </motion.div>
  );
};

export default CategoryProjects;