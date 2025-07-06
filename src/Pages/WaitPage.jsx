import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WaitPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate("/quiz"), 1000);
        }
        return prev + 1;
      });
    }, 100); 

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#010a13] via-[#021524] to-[#010a13] text-cyan-200 relative overflow-hidden font-mono tracking-wide">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-cover pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/wave-lines.svg')] opacity-10 animate-pulse pointer-events-none" />

      <div className="relative z-10 border border-cyan-400/40 backdrop-blur-md rounded-2xl px-8 py-12 w-[90%] max-w-2xl bg-white/5 shadow-2xl animate-fade-in-fast">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-4 text-cyan-300 animate-pulse-fast">
          ⚡ INITIATING CYBOPUNK CHALLENGE ⚡
        </h1>

        <p className="text-center text-sm md:text-base text-gray-300 mb-10">
          Establishing encrypted tunnel... Preparing the digital battlefield...
        </p>

        <div className="bg-black/50 p-4 rounded-md text-green-400 text-sm font-mono h-40 overflow-hidden border border-green-500/20 shadow-inner animate-pulse-slow">
          <p> * Loading protocols...</p>
          <p> * Injecting questions...</p>
          <p> * Hacking score matrix...</p>
          <p> * Calibrating neural interface...</p>
          <p> * Boot sequence {progress}% complete</p>
        </div>

        <div className="mt-6 w-full bg-cyan-800/30 h-4 rounded-full overflow-hidden shadow-md border border-cyan-400/20">
          <div
            className="h-full bg-cyan-400 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-3 text-center text-xs text-cyan-400">DO NOT REFRESH - STAY FOCUSED</p>
      </div>
    </div>
  );
};

export default WaitPage;
