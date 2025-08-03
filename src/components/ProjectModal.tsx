import React from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, MapPin, Users, CheckCircle } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project || !isOpen) return null;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'upcoming':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-34 md:h-100 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-3xl font-bold text-gray-800">{project.title}</h2>
            <div className="flex items-center">
              <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${getStatusColor(project.status)}`}>
                {getStatusIcon(project.status)}
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-600" />
              <span>{project.beneficiaries.toLocaleString()} beneficiaries</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-600" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              <span>{project.date}</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">{project.fullDescription}</p>
          </div>
          
          {project.status && (
            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Support As</h3>
              <p className="text-blue-700 mb-4">
                Watch a video about this project by clicking the link below.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                  Donate Now
                </button>
                
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200">
                  Volunteer
                </button> */}
                <a href={project.link.toLocaleString()}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
      >
         Link
      </a>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;