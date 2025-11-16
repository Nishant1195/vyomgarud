import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Card = ({ 
  title, 
  description, 
  image, 
  specs = [], 
  badge,
  onLearnMore,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative bg-slate-900/80 backdrop-blur-sm overflow-hidden shadow-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Badge */}
      {badge && (
        <motion.div 
          className="absolute top-6 right-6 z-10 bg-cyan-400 text-slate-900 px-4 py-1.5 text-xs font-bold uppercase tracking-wide"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          {badge}
        </motion.div>
      )}

      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-3xl font-bold text-white mb-4">
          {title}
        </h3>

        <p className="text-slate-300 mb-8 leading-relaxed text-base h-[4.5rem] overflow-hidden">
          {description}
        </p>

        {/* Specs Grid */}
        {specs.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-8">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-cyan-400 mt-0.5 flex-shrink-0">
                  {spec.icon}
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">{spec.label}</div>
                  <div className="text-white font-semibold text-base">{spec.value}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        {onLearnMore && (
          <motion.button
            onClick={onLearnMore}
            className="w-full bg-cyan-400 text-slate-900 font-bold py-4 px-6 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02, backgroundColor: "#22d3ee" }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Learn More</span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight size={20} />
            </motion.div>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default Card;