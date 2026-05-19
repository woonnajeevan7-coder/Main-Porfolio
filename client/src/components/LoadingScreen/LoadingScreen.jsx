import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="loading-screen-container"
    >
      {/* Background Texture */}
      <div className="noise-bg" />

      {/* Long Fazers Background */}
      <div className="longfazers">
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Loader Component Container */}
      <div className="relative w-full max-w-2xl h-[300px] flex items-center justify-center">
        <div className="loader">
          <span>
            <span />
            <span />
            <span />
            <span />
          </span>
          <div className="base">
            <span />
            <div className="face" />
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="z-20 text-center mt-4 space-y-4">
        <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-black uppercase animate-pulse px-4">
          PREPARING THE EXPERIENCE
        </h1>
        <p className="text-black/60 font-bold tracking-[0.4em] uppercase text-[10px]">
          Synchronizing with JEEVAN'S global neural networks
        </p>

        {/* Progress Bar Mockup */}
        <div className="w-48 h-1 bg-gray-200 rounded-full mx-auto mt-12 overflow-hidden relative border border-black/5">
          <div className="h-full bg-black w-1/3 animate-progress" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-12 flex flex-col items-start space-y-1 opacity-60">
        <div className="flex items-center space-x-2 text-[10px] font-black">
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
          <span className="text-black">SYSTEMS NOMINAL</span>
        </div>
        <div className="text-[9px] text-black/80 uppercase tracking-tighter font-bold">
          X-RAY DELTA 4.0 // VECTOR PROTOCOL
        </div>
      </div>

      <div className="absolute top-12 right-12 text-right opacity-60">
        <div className="text-[10px] text-black font-black uppercase tracking-widest">
          LATENCY: 14ms
        </div>
      </div>

      {/* Branding */}
      <div className="absolute top-12 left-12">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-black flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 bg-white clip-zap" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap text-black">
            ENTERING INTO JEEVAN'S PORTFOLIO
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
