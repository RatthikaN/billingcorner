import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './FeaturesGrid.css';

interface Feature {
  image: string;
  title: string;
  desc: string;
}

interface FeaturesGridProps {
  features: Feature[];
  initialCount?: number;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features, initialCount = 9 }) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, features.length));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier
      }
    },
  };

  return (
    <div className="features-grid-container relative">
      <motion.div 
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <AnimatePresence mode="popLayout">
          {features.slice(0, visibleCount).map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card group"
              variants={itemVariants}
              layout
            >
              <div className="feature-image-container">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="feature-image" 
                  loading="lazy"
                />
                <div className="feature-overlay" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visibleCount < features.length && (
        <motion.div 
          className="load-more-container"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* <button className="load-more-btn" onClick={showMore}>
            Load More Features
          </button> */}
        </motion.div>
      )}
    </div>
  );
};

export default FeaturesGrid;
