import { useState, useEffect, type JSX } from 'react';
import { AlertCircle, Wrench } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function NotFoundPage(): JSX.Element {
  const [glitchActive, setGlitchActive] = useState<boolean>(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i: number): Particle => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);

    // Random glitch effect
    const glitchInterval: NodeJS.Timeout = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect: DOMRect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
    });
  };

  return (
    <div 
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 0, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Floating particles */}
      {particles.map((particle: Particle) => (
        <div
          key={particle.id}
          className="absolute bg-red-500 rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Red glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* 404 Number with parallax */}
        <div 
          className="relative mb-8"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        >
          <h1 
            className={`text-9xl md:text-[200px] font-black text-red-600 leading-none select-none ${glitchActive ? 'glitch' : ''}`}
            style={{
              textShadow: '0 0 20px rgba(220, 38, 38, 0.8), 0 0 40px rgba(220, 38, 38, 0.6)',
              animation: 'pulse 2s ease-in-out infinite'
            }}
          >
            404
          </h1>
          {glitchActive && (
            <>
              <h1 
                className="absolute top-0 left-0 text-9xl md:text-[200px] font-black text-red-400 leading-none select-none opacity-70"
                style={{ transform: 'translate(-5px, 0)' }}
              >
                404
              </h1>
              <h1 
                className="absolute top-0 left-0 text-9xl md:text-[200px] font-black text-red-800 leading-none select-none opacity-70"
                style={{ transform: 'translate(5px, 0)' }}
              >
                404
              </h1>
            </>
          )}
        </div>

        {/* Alert Icon with rotation */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <AlertCircle 
              className="w-20 h-20 text-red-500"
              style={{ animation: 'spin 3s linear infinite' }}
            />
            <div className="absolute inset-0 bg-red-500 rounded-full filter blur-xl opacity-50 animate-ping" />
          </div>
        </div>

        {/* Error message */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ animation: 'fadeInUp 1s ease-out' }}>
          Page Not Found
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ animation: 'fadeInUp 1s ease-out 0.2s backwards' }}>
          The page you're looking for seems to have vanished into the digital void.
        </p>

        {/* Engineer solution box */}
        <div 
          className="bg-gradient-to-r from-red-950 to-black border-2 border-red-600 rounded-lg p-6 mb-10 backdrop-blur-sm"
          style={{ 
            animation: 'fadeInUp 1s ease-out 0.4s backwards',
            boxShadow: '0 0 30px rgba(220, 38, 38, 0.3)'
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Wrench className="w-6 h-6 text-red-500 animate-bounce" />
            <p className="text-white font-semibold text-lg">To solve this issue</p>
          </div>
          <p className="text-gray-300">
            See the <span className="text-red-500 font-bold">engineer</span> for final solutions
          </p>
        </div>

        {/* Action buttons */}
        
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .glitch {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
}