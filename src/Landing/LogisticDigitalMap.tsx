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

interface TravelRoute {
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
    { id: '1', name: 'Paris', x: 50, y: 28, visitors: '19.1M', country: 'France', status: 'open' },
    { id: '2', name: 'Bangkok', x: 68, y: 48, visitors: '22.8M', country: 'Thailand', status: 'open' },
    { id: '3', name: 'London', x: 49, y: 27, visitors: '19.2M', country: 'UK', status: 'open' },
    { id: '4', name: 'New York', x: 20, y: 35, visitors: '13.6M', country: 'USA', status: 'open' },
    { id: '5', name: 'Rome', x: 52, y: 32, visitors: '10.3M', country: 'Italy', status: 'crowded' },
    { id: '6', name: 'Dubai', x: 58, y: 42, visitors: '16.7M', country: 'UAE', status: 'open' },
    { id: '7', name: 'Tokyo', x: 74, y: 32, visitors: '12.9M', country: 'Japan', status: 'open' },
    { id: '8', name: 'Barcelona', x: 50, y: 30, visitors: '9.0M', country: 'Spain', status: 'open' },
    { id: '9', name: 'Sydney', x: 80, y: 65, visitors: '5.3M', country: 'Australia', status: 'open' },
    { id: '10', name: 'Istanbul', x: 55, y: 35, visitors: '13.4M', country: 'Turkey', status: 'open' },
  ];

  const routes: TravelRoute[] = [
    { id: '1', from: { x: 50, y: 28 }, to: { x: 20, y: 35 }, name: 'Europe-USA', volume: '8.5M visitors/year' },
    { id: '2', from: { x: 68, y: 48 }, to: { x: 74, y: 32 }, name: 'Southeast Asia-Japan', volume: '6.2M visitors/year' },
    { id: '3', from: { x: 50, y: 28 }, to: { x: 52, y: 32 }, name: 'Intra-Europe', volume: '12.1M visitors/year' },
    { id: '4', from: { x: 58, y: 42 }, to: { x: 55, y: 35 }, name: 'Middle East-Turkey', volume: '4.8M visitors/year' },
    { id: '5', from: { x: 74, y: 32 }, to: { x: 80, y: 65 }, name: 'Japan-Australia', volume: '3.9M visitors/year' },
  ];

  const alerts: Alert[] = [
    { id: '1', location: 'Paris', status: 'warning', message: 'High tourist volume at landmarks', icon: '⚠️', color: 'black' },
    { id: '2', location: 'Sydney', status: 'normal', message: 'Normal tourist flow', icon: '✅', color: 'black' },
    { id: '3', location: 'Rome', status: 'critical', message: 'Crowding at Colosseum', icon: '🔴', color: 'black' },
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
  const getRouteStyle = (route: TravelRoute) => {
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
              {/* Travel Routes */}
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