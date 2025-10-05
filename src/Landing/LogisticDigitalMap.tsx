import React, { useState, useEffect, useRef } from 'react';

// Type definitions
interface Destination {
  id: string;
  name: string;
  x: number;
  y: number;
  visitors: string;
  country: string;
  status: 'open' | 'crowded' | 'restricted';
}

interface TourRoute {
  id: string;
  from: { x: number; y: number };
  to: { x: number; y: number };
  name: string;
  volume: string;
}

interface Metrics {
  dailyVisitors: string;
  activeRoutes: number;
  attractionRating: string;
}

interface Alert {
  id: string;
  location: string;
  status: 'warning' | 'normal' | 'critical';
  message: string;
  icon: string;
  color: string;
}

interface TooltipData {
  content: string;
  x: number;
  y: number;
  visible: boolean;
}

const TourismWorldMap: React.FC = () => {
  // State management
  const [tooltip, setTooltip] = useState<TooltipData>({
    content: '',
    x: 0,
    y: 0,
    visible: false,
  });

  const [metrics, setMetrics] = useState<Metrics>({
    dailyVisitors: '1.8M',
    activeRoutes: 632,
    attractionRating: '92.5%',
  });

  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Static data
  const destinations: Destination[] = [
  { id: '1', name: 'Hollywood Walk of Fame', x: 20, y: 35, visitors: '10M', country: 'USA', status: 'open' },
  { id: '2', name: 'Griffith Observatory & Park', x: 22, y: 32, visitors: '7.5M', country: 'USA', status: 'open' },
  { id: '3', name: 'Santa Monica Pier & Beach', x: 18, y: 38, visitors: '12M', country: 'USA', status: 'open' },
  { id: '4', name: 'Venice Beach & Canals', x: 19, y: 40, visitors: '8M', country: 'USA', status: 'open' },
  { id: '5', name: 'Rodeo Drive, Beverly Hills', x: 21, y: 34, visitors: '5M', country: 'USA', status: 'crowded' },
  { id: '6', name: 'Malibu Coastline', x: 16, y: 36, visitors: '4M', country: 'USA', status: 'open' },
  { id: '7', name: 'Universal Studios Hollywood', x: 23, y: 31, visitors: '11M', country: 'USA', status: 'open' },
  { id: '8', name: 'The Getty Center', x: 20, y: 33, visitors: '6M', country: 'USA', status: 'open' },
  { id: '9', name: 'Downtown LA Skyline', x: 24, y: 37, visitors: '9M', country: 'USA', status: 'open' },
  { id: '10', name: 'Catalina Island Day Trip', x: 26, y: 42, visitors: '1M', country: 'USA', status: 'open' },
];

const routes: TourRoute[] = [
  { id: '1', from: { x: 20, y: 35 }, to: { x: 22, y: 32 }, name: 'Hollywood Griffith Park', volume: '2M visitors/year' },
  { id: '2', from: { x: 18, y: 38 }, to: { x: 19, y: 40 }, name: 'Santa Monica Venice Boardwalk', volume: '5M visitors/year' },
  { id: '3', from: { x: 21, y: 34 }, to: { x: 16, y: 36 }, name: 'Beverly Hills Malibu Coast', volume: '1.2M visitors/year' },
  { id: '4', from: { x: 23, y: 31 }, to: { x: 24, y: 37 }, name: 'Universal Studios Downtown LA', volume: '3.5M visitors/year' },
  { id: '5', from: { x: 20, y: 33 }, to: { x: 26, y: 42 }, name: 'Getty Center Catalina Island', volume: '800k visitors/year' },
];

const alerts: Alert[] = [
  { id: '1', location: 'Rodeo Drive, Beverly Hills', status: 'warning', message: 'High traffic & luxury shopping crowds', icon: '⚠️', color: 'black' },
  { id: '2', location: 'Santa Monica Pier & Beach', status: 'normal', message: 'Normal beach flow, busy evenings', icon: '✅', color: 'black' },
  { id: '3', location: 'Hollywood Walk of Fame', status: 'critical', message: 'Heavy crowding at star-lined sidewalks', icon: '🔴', color: 'black' },
];


  // Event handlers
  const handleDestinationHover = (destination: Destination, event: React.MouseEvent) => {
    const content = `
      <strong>${destination.name}</strong><br>
      Country: ${destination.country}<br>
      Visitors/Year: ${destination.visitors}<br>
      Status: ${destination.status}
    `;
    setTooltip({
      content,
      x: event.pageX + 10,
      y: event.pageY - 10,
      visible: true,
    });
  };

  const handleDestinationLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (tooltip.visible) {
      setTooltip((prev) => ({
        ...prev,
        x: event.pageX + 10,
        y: event.pageY - 10,
      }));
    }

    // Update mouse position for background effect
    setMousePosition({
      x: event.clientX / window.innerWidth,
      y: event.clientY / window.innerHeight,
    });
  };

  // Calculate route styles
  const getRouteStyle = (route: TourRoute) => {
    const deltaX = route.to.x - route.from.x;
    const deltaY = route.to.y - route.from.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;

    return {
      left: `${route.from.x}%`,
      top: `${route.from.y}%`,
      width: `${distance}%`,
      transform: `rotate(${angle}deg)`,
      transformOrigin: 'left center',
    };
  };

  // Update metrics periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        dailyVisitors: (parseFloat(prev.dailyVisitors) + (Math.random() - 0.5) * 0.1).toFixed(1) + 'M',
        activeRoutes: prev.activeRoutes + Math.floor((Math.random() - 0.5) * 10),
        attractionRating: (parseFloat(prev.attractionRating) + (Math.random() - 0.5) * 0.1).toFixed(1) + '%',
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="w-screen bg-white h-screen relative overflow-hidden font-sans text-white"
        onMouseMove={handleMouseMove}
      >
        {/* Header */}
        <div className="absolute top-5 left-1/2 sm:left-5 transform -translate-x-1/2 sm:translate-x-0 z-50 bg-white bg-opacity-70 p-4 rounded-xl backdrop-blur-md text-center sm:text-left w-[90vw] sm:w-auto">
          <h1 className="text-xl sm:text-2xl mb-1 bg-clip-text text-[#f5092d] font-bold">
            Global Tourism Network
          </h1>
          <p className="text-sm opacity-80 text-black">Real-time travel routes and destination data</p>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-full overflow-hidden">
          <div className="w-full h-full relative bg-gradient-to-r from-yellow-50 to-yellow-100">
            {/* Tourism Layer */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {/* Tour Routes */}
              {routes.map((route, index) => (
                <div
                  key={route.id}
                  className="absolute h-0.5 opacity-70"
                  style={{
                    ...getRouteStyle(route),
                    background: 'linear-gradient(90deg, transparent 0%, #f5092d 20%, #f5092d 80%, transparent 100%)',
                    animation: `flow 3s linear infinite`,
                    animationDelay: `${index * 0.5}s`,
                  }}
                />
              ))}

              {/* Destinations */}
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className={`absolute w-3 h-3 rounded-full cursor-pointer pointer-events-auto transition-all duration-300 hover:scale-150 ${
                    destination.status === 'crowded' ? 'bg-[#f5092d]' : destination.status === 'restricted' ? 'bg-[#f5092d]' : 'bg-[#f5092d]'
                  }`}
                  style={{
                    left: `${destination.x}%`,
                    top: `${destination.y}%`,
                    background:
                      destination.status === 'open'
                        ? 'radial-gradient(circle, black 0%, #f5092d 100%)'
                        : destination.status === 'crowded'
                        ? 'radial-gradient(circle, #f5092d 0%, #f5092d 100%)'
                        : 'radial-gradient(circle, #f5092d 0%, #f5092d 100%)',
                    boxShadow: `0 0 15px rgba(59, 130, 246, 0.8)`,
                    animation: 'pulse 2s infinite',
                  }}
                  onMouseEnter={(e) => handleDestinationHover(destination, e)}
                  onMouseLeave={handleDestinationLeave}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Data Panel */}
        <div className="absolute hidden md:block top-5 right-5 w-80 bg-black bg-opacity-80 pb-6 rounded-2xl p-5 backdrop-blur-md border border-white border-opacity-10 max-h-[80vh] overflow-y-auto">
          {/* Global Tourism Volume */}
          <div className="flex items-center justify-center">
            <div className="bg-white bg-opacity-10 mb-4 p-4 rounded-xl border-l-4 border-[#f5092d]">
              <h3 className="text-lg mb-2 text-[#f5092d] font-semibold">Global Tourism Volume</h3>
              <div className="flex justify-between mb-1">
                <span className="text-black">Daily Visitors:</span>
                <span className="font-bold text-[#f5092d]">{metrics.dailyVisitors}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-black">Active Routes:</span>
                <span className="font-bold text-[#f5092d]">{metrics.activeRoutes}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">Attraction Rating:</span>
                <span className="font-bold text-[#f5092d]">{metrics.attractionRating}</span>
              </div>
            </div>
          </div>

          {/* Top Travel Routes */}
       {/* Top Travel Routes (Los Angeles) */}
<div className="bg-white bg-opacity-10 mb-4 p-4 rounded-xl border-l-4 border-[#f5092d]">
  <h3 className="text-lg mb-2 text-[#f5092d] font-semibold">Top Travel Routes</h3>
  <p className="text-sm leading-relaxed text-black">
    <strong className="text-[#f5092d]">1.</strong> Hollywood ⇆ Griffith Observatory: 2M visitors/year
  </p>
  <p className="text-sm leading-relaxed text-black">
    <strong className="text-[#f5092d]">2.</strong> Santa Monica Pier ⇆ Venice Beach: 5M visitors/year
  </p>
  <p className="text-sm leading-relaxed text-black">
    <strong className="text-[#f5092d]">3.</strong> Beverly Hills ⇆ Malibu Coastline: 1.2M visitors/year
  </p>
</div>

{/* Top Destinations (Los Angeles) */}
<div className="bg-white bg-opacity-10 mb-4 p-4 rounded-xl border-l-4 border-[#f5092d]">
  <h3 className="text-lg mb-2 text-[#f5092d] font-semibold">Top Destinations</h3>
  <p className="text-sm leading-relaxed text-black">
    <strong className="text-[#f5092d]">Hollywood Walk of Fame:</strong> 10M visitors
  </p>
  <p className="text-sm leading-relaxed text-black">
    <strong className="text-[#f5092d]">Santa Monica Pier & Beach:</strong> 12M visitors
  </p>
  <p className="text-sm leading-relaxed text-black">
    <strong className="text-[#f5092d]">Griffith Observatory & Park:</strong> 7.5M visitors
  </p>
  <p className="text-sm leading-relaxed text-black">
    <strong className="text-[#f5092d]">Universal Studios Hollywood:</strong> 11M visitors
  </p>
</div>


          {/* Current Alerts */}
          <div className="bg-white bg-opacity-10 p-4 rounded-xl border-l-4 border-[#f5092d]">
            <h3 className="text-lg mb-2 text-[#f5092d] font-semibold">Current Alerts</h3>
            {alerts.map((alert) => (
              <p key={alert.id} className="text-sm leading-relaxed" style={{ color: alert.color }}>
                {alert.icon} {alert.location}: {alert.message}
              </p>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-5 left-5 bg-black bg-opacity-80 p-4 rounded-xl backdrop-blur-md">
          <div className="flex items-center mb-2">
            <div className="w-5 h-1 mr-3 rounded bg-[#f5092d]"></div>
            <span className="text-sm">Major Destinations</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-5 h-1 mr-3 rounded bg-[#f5092d]"></div>
            <span className="text-sm">Travel Routes</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-1 mr-3 rounded bg-[#f5092d]"></div>
            <span className="text-sm">High Traffic</span>
          </div>
        </div>

        {/* Tooltip */}
        {tooltip.visible && (
          <div
            className="absolute bg-black bg-opacity-90 text-white p-3 rounded-lg text-xs pointer-events-none z-50 border border-[#f5092d] transition-opacity duration-300"
            style={{
              left: tooltip.x,
              top: tooltip.y,
              opacity: tooltip.visible ? 1 : 0,
            }}
            dangerouslySetInnerHTML={{ __html: tooltip.content }}
          />
        )}

        {/* CSS Animations */}
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
          }
          
          @keyframes flow {
            0% { background-position: -100px 0; }
            100% { background-position: 100px 0; }
          }
        `}</style>
      </div>

      {/* Data Panel - Mobile/Tablet Only */}
      <div className="block md:hidden mx-auto mt-6 mb-6 w-[90%] bg-black bg-opacity-80 pb-6 rounded-2xl p-5 backdrop-blur-md border border-white border-opacity-10 max-h-[80vh] overflow-y-auto">
        {/* Global Tourism Volume */}
        <div className="flex items-center justify-center">
          <div className="bg-white bg-opacity-10 mb-4 p-4 rounded-xl border-l-4 border-[#f5092d] w-full">
            <h3 className="text-lg mb-2 text-[#f5092d] font-semibold">Global Tourism Volume</h3>
            <div className="flex justify-between mb-1">
              <span className="text-black">Daily Visitors:</span>
              <span className="font-bold text-[#f5092d]">{metrics.dailyVisitors}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="text-black">Active Routes:</span>
              <span className="font-bold text-[#f5092d]">{metrics.activeRoutes}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black">Attraction Rating:</span>
              <span className="font-bold text-[#f5092d]">{metrics.attractionRating}</span>
            </div>
          </div>
        </div>

        {/* Top Travel Routes */}
        <div className="bg-white bg-opacity-10 mb-4 p-4 rounded-xl border-l-4 border-[#f5092d]">
          <h3 className="text-lg mb-2 text-[#f5092d] font-semibold">Top Travel Routes</h3>
          <p className="text-sm leading-relaxed text-black">
            <strong className="text-[#f5092d]">1.</strong> Europe-USA: 8.5M visitors/year
          </p>
          <p className="text-sm leading-relaxed text-black">
            <strong className="text-[#f5092d]">2.</strong> Southeast Asia-Japan: 6.2M visitors/year
          </p>
          <p className="text-sm leading-relaxed text-black">
            <strong className="text-[#f5092d]">3.</strong> Intra-Europe: 12.1M visitors/year
          </p>
        </div>

        {/* Top Destinations */}
        <div className="bg-white bg-opacity-10 mb-4 p-4 rounded-xl border-l-4 border-[#f5092d]">
          <h3 className="text-lg mb-2 text-[#f5092d] font-semibold">Top Destinations</h3>
          <p className="text-sm leading-relaxed text-black">
            <strong className="text-[#f5092d]">Bangkok:</strong> 22.8M visitors
          </p>
          <p className="text-sm leading-relaxed text-black">
            <strong className="text-[#f5092d]">Paris:</strong> 19.1M visitors
          </p>
          <p className="text-sm leading-relaxed text-black">
            <strong className="text-[#f5092d]">London:</strong> 19.2M visitors
          </p>
          <p className="text-sm leading-relaxed text-black">
            <strong className="text-[#f5092d]">Dubai:</strong> 16.7M visitors
          </p>
        </div>

        {/* Current Alerts */}
        <div className="bg-white bg-opacity-10 p-4 rounded-xl border-l-4 border-[#f5092d]">
          <h3 className="text-lg mb-2 text-[#f5092d] font-semibold">Current Alerts</h3>
          {alerts.map((alert) => (
            <p key={alert.id} className="text-sm leading-relaxed" style={{ color: alert.color }}>
              {alert.icon} {alert.location}: {alert.message}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default TourismWorldMap;