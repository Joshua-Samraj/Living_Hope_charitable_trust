import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowLeft } from 'lucide-react';
import { projects, Project } from '../data/projects';
import { categories } from '../data/categories';
import ProjectCard from '../components/ProjectCard';
import CategoryCard from '../components/CategoryCard';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate project count for each category
  const categoryProjectCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    categories.forEach(category => {
      counts[category.keyword] = projects.filter(
        project => project.category === category.keyword
      ).length;
    });
    return counts;
  }, []);

  // Filter projects based on search, status, and category
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
      
      const matchesCategory = !selectedCategory || project.category === selectedCategory;
      
      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [searchTerm, selectedStatus, selectedCategory]);

  const handleCategoryClick = (keyword: string) => {
    navigate(`/projects/${keyword}`); // Navigate to category route
    setSelectedCategory(keyword);
    setSearchTerm('');
    setSelectedStatus('all');
  };

  const handleBackToCategories = () => {
    navigate('/projects'); // Navigate back to main projects page
    setSelectedCategory(null);
    setSearchTerm('');
    setSelectedStatus('all');
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Back button handler
  const handleBackButton = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    handleBackToCategories();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16 bg-gray-50"
    >
      {/* Header */}
      <section className="relative py-20 text-white overflow-hidden">
  {/* Background image with overlay */}
  <div className="absolute inset-0">
    <img 
      src="https://ik.imagekit.io/vc42cyymbb/OUR_PROJECT.jpg?updatedAt=1754154501719"  // Replace with your image path
      alt="Community projects"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.h1
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold mb-4"
    >
      {selectedCategory 
        ? categories.find(cat => cat.keyword === selectedCategory)?.name || 'Our Projects'
        : 'Our Projects'
      }
    </motion.h1>
    <motion.p
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="text-lg md:text-xl max-w-3xl mx-auto px-4"
    >
      {selectedCategory
        ? categories.find(cat => cat.keyword === selectedCategory)?.description
        : 'Discover the impactful initiatives we\'re working on to create positive change in communities'
      }
    </motion.p>
  </div>
</section>

      {/* Back Button and Search/Filter */}
      {selectedCategory && (
        <section className="py-6 md:py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4">
              {/* Back Button */}
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                onClick={handleBackButton}
                onTouchEnd={handleBackButton}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 w-fit p-2 md:p-0"
              > 
                <ArrowLeft className="h-5 w-5" />
                <span className="hidden sm:inline">Back to Projects</span>
                <span className="sm:hidden">Back</span>
              </motion.button>

              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search within category..."
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
      )}

      {/* Categories Grid or Projects Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!selectedCategory ? (
            // Show Categories
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <CategoryCard
                    category={category}
                    onClick={() => handleCategoryClick(category.keyword)}
                    projectCount={categoryProjectCounts[category.keyword] || 0}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Show Projects
            <>
              {filteredProjects.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 md:py-16"
                >
                  <p className="text-lg md:text-xl text-gray-600">
                    No projects found matching your criteria.
                  </p>
                  <button
                    onClick={handleBackButton}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                  >
                    Back to Projects
                  </button>
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
            </>
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

export default Projects;