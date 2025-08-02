import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2
      }
    },
    end: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const loadingCircleVariants = {
    start: {
      y: "0%"
    },
    end: {
      y: "100%"
    }
  };

  const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut"
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      
      <motion.div
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
        className="flex space-x-4"
      >
        {[1, 2, 3].map((item) => (
          <motion.span
            key={item}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
            className="w-4 h-4 bg-blue-500 rounded-full"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;