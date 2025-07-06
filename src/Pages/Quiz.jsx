import React from "react";

const Quiz = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020409] via-[#0a1a2f] to-[#00040d] text-white relative overflow-hidden font-sans">
  
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center opacity-10 pointer-events-none" />  
      <div className="absolute inset-0 z-0 bg-[url('/wave-lines.svg')] bg-repeat opacity-10 pointer-events-none animate-fade-in-slow" />

      
    </div>
  );
};

export default Quiz;
