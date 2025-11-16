import React from 'react';
import { motion } from 'framer-motion';
import Card from '../Components/Card';
import { Camera, Battery, Wind, Zap, Shield, Wifi } from 'lucide-react';

const Capabilities = () => {
  const droneCapabilities = [
    {
      title: "AeroVision X1",
      description: "Professional aerial photography drone with advanced stabilization and 8K recording capabilities. Perfect for cinematographers and content creators.",
      image: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=800&h=600&fit=crop",
      badge: "Best Seller",
      specs: [
        { icon: <Camera size={16} />, label: "Camera", value: "8K 60fps" },
        { icon: <Battery size={16} />, label: "Flight Time", value: "45 min" },
        { icon: <Wind size={16} />, label: "Max Speed", value: "72 km/h" },
        { icon: <Zap size={16} />, label: "Range", value: "15 km" }
      ],
      onLearnMore: () => console.log('AeroVision X1 - Learn More')
    },
    {
      title: "TacticalHawk Pro",
      description: "Industrial-grade inspection drone built for harsh environments. Thermal imaging and LiDAR equipped for precision surveying operations.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
      badge: "New",
      specs: [
        { icon: <Shield size={16} />, label: "Sensors", value: "Thermal + RGB" },
        { icon: <Battery size={16} />, label: "Flight Time", value: "38 min" },
        { icon: <Wind size={16} />, label: "Wind Resist", value: "45 km/h" },
        { icon: <Wifi size={16} />, label: "Range", value: "10 km" }
      ],
      onLearnMore: () => console.log('TacticalHawk Pro - Learn More')
    },
    {
      title: "SwiftRacer V2",
      description: "High-performance FPV racing drone with carbon fiber frame. Built for speed enthusiasts and competitive drone racing.",
      image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&h=600&fit=crop",
      specs: [
        { icon: <Camera size={16} />, label: "Camera", value: "4K 120fps" },
        { icon: <Battery size={16} />, label: "Flight Time", value: "18 min" },
        { icon: <Wind size={16} />, label: "Max Speed", value: "140 km/h" },
        { icon: <Zap size={16} />, label: "Response", value: "< 10ms" }
      ],
      onLearnMore: () => console.log('SwiftRacer V2 - Learn More')
    }
  ];

  return (
    <div id='capabilities' className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Title */}
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-white text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Capabilities</span>
        </motion.h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {droneCapabilities.map((drone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card {...drone} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capabilities;