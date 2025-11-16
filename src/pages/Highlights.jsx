import React from "react";

const Highlights = () => {
  return (
    <div id="highlights" className="min-h-screen bg-white text-blue-900 flex items-center justify-center px-5 py-20">
      <div className="max-w-6xl w-full grid gap-24">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center text-blue-800 tracking-tight">
          Highlights
        </h1>

        {/* Highlights */}
        <div className="grid gap-10">
          
          {/* Item 1 */}
          <div className="flex items-center gap-6 p-6 border-l-4 border-blue-500 transition-all duration-300 hover:bg-blue-50 hover:translate-x-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-900 flex items-center justify-center text-4xl">
              🚁
            </div>
            <p className="text-2xl leading-relaxed font-medium">
              Revolutionizing medical logistics with advanced UAV technology
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-6 p-6 border-l-4 border-blue-500 transition-all duration-300 hover:bg-blue-50 hover:translate-x-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-900 flex items-center justify-center text-4xl">
              ⚡
            </div>
            <p className="text-2xl leading-relaxed font-medium">
              Rapid delivery of critical healthcare supplies to remote regions
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-6 p-6 border-l-4 border-blue-500 transition-all duration-300 hover:bg-blue-50 hover:translate-x-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-900 flex items-center justify-center text-4xl">
              🔧
            </div>
            <p className="text-2xl leading-relaxed font-medium">
              Innovative, reliable, and mission-ready drone systems
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-6 p-6 border-l-4 border-blue-500 transition-all duration-300 hover:bg-blue-50 hover:translate-x-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-900 flex items-center justify-center text-4xl">
              🌍
            </div>
            <p className="text-2xl leading-relaxed font-medium">
              Engineering solutions that bridge technology and humanitarian needs
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Highlights;
