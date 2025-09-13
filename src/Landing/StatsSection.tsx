import React, { useRef, useEffect } from "react";
import { Users, Package, Globe, Clock } from "lucide-react";

// Helper function to parse the number and its suffix from the stat string
const parseStatNumber = (str: string) => {
  const match = str.match(/^([\d.]+)([A-Za-z%+]*)?$/);
  if (match) {
    const value = parseFloat(match[1]);
    const suffix = match[2] || '';
    return { value, suffix };
  }
  return { value: 0, suffix: '' }; // Fallback
};

// Component to animate a number
interface AnimatedNumberProps {
  value: number;
  suffix: string;
  index: number;
}

function AnimatedNumber({ value, suffix, index }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1500; // 1.5 seconds
      const delay = index * 150; // Stagger delay
      const startTime = Date.now() + delay;

      const animate = () => {
        const now = Date.now();
        if (now < startTime) {
          requestAnimationFrame(animate);
          return;
        }

        const progress = Math.min((now - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = value * easeOut;
        
        setDisplayValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, [isVisible, value, index]);

  const formatNumber = (num: number) => {
    if (value % 1 !== 0) {
      return (Math.round(num * 10) / 10).toLocaleString('en-US', { 
        minimumFractionDigits: 1, 
        maximumFractionDigits: 1 
      });
    }
    return Math.round(num).toLocaleString('en-US');
  };

  return (
    <div
      ref={nodeRef}
      className="text-4xl lg:text-5xl font-bold text-[#FEFE02] mb-2"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.8s ease ${index * 0.1}s`
      }}
    >
      <span>{formatNumber(displayValue)}</span>{suffix}
    </div>
  );
}

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  number: string;
  label: string;
  description: string;
}

export default function StatsSection() {
  const stats: Stat[] = [
    {
      icon: Users,
      number: "500+",
      label: "Global Partners",
      description: "Trusted logistics partners worldwide"
    },
    {
      icon: Package,
      number: "50K+",
      label: "Shipments Delivered",
      description: "Successfully completed deliveries"
    },
    {
      icon: Globe,
      number: "120+",
      label: "Countries Served",
      description: "Global reach and connectivity"
    },
    {
      icon: Clock,
      number: "99.9%",
      label: "On-time Delivery",
      description: "Reliable and punctual service"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="text-center mb-16"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            animation: 'fadeInUp 0.8s ease forwards'
          }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-[#FEFE02] to-[#FEFE02] bg-clip-text text-transparent"> Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our numbers speak for themselves. See why businesses worldwide choose Dasfan for their logistics needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{
                opacity: 0,
                transform: 'scale(0.8)',
                animation: `fadeInScale 0.6s ease ${index * 0.1}s forwards`
              }}
            >
              <div 
                className="rounded-3xl p-8 bg-white transition-all duration-500 hover:scale-105"
                style={{
                  boxShadow: '12px 12px 24px rgba(255, 107, 53, 0.1), -12px -12px 24px rgba(255, 255, 255, 0.9)'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.boxShadow = '8px 8px 16px rgba(255, 107, 53, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.95)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.boxShadow = '12px 12px 24px rgba(255, 107, 53, 0.1), -12px -12px 24px rgba(255, 255, 255, 0.9)';
                }}
              >
                {/* Icon */}
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                    boxShadow: '6px 6px 12px rgba(255, 107, 53, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.8)'
                  }}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </div>

                {/* Number - Now animated using the new AnimatedNumber component */}
                <AnimatedNumber 
                  value={parseStatNumber(stat.number).value} 
                  suffix={parseStatNumber(stat.number).suffix} 
                  index={index} 
                />

                {/* Label */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}