"use client";
import { motion } from "framer-motion";

import { useState } from "react";

import { Send, User, Mail, Users, MessageCircle } from 'lucide-react';



import dynamic from "next/dynamic";

const World = dynamic(() => import("../components/ui/globe").then((m) => m.World), {
  ssr: true,
});
export default function ContactSection() {
  
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      guests: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };
const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#FEFE02",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "#FEFE02",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#FEFE02", "#FEFE02", "#FEFE02"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ]
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-100 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Plan Your <span className="bg-gradient-to-r from-[#FEFE02] to-[#FEFE02] bg-clip-text text-transparent">LA Adventure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to explore Los Angeles like never before? Reach out to book your tour or ask us anything about your upcoming trip.
          </p>
        </motion.div>

        {/* Main Content - Flex Container */}
        
      </div>


<div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 min-h-screen p-4">
  {/* Globe Section */}
  <div className="flex-1 flex items-center justify-center relative w-full min-h-[600px] lg:min-h-[600px]">
    <div className="w-full h-full relative overflow-hidden px-4">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="div"
      >
       
      </motion.div>
      <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent  z-40" />
      <div className="absolute w-full -bottom-20 h-full z-10">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  </div>
<div className="min-h-screen rounded-3xl flex items-center justify-center p-4" style={{ backgroundColor: '#FEFE02' }}>
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Form Container */}
        <div 
          className="rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:scale-105"
          style={{
            backgroundColor: 'white',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Decorative Elements */}
          <div 
            className="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-10"
            style={{ backgroundColor: '#FEFE02' }}
          ></div>
          <div 
            className="absolute -bottom-10 -left-10 w-16 h-16 rounded-full opacity-10"
            style={{ backgroundColor: '#FEFE02' }}
          ></div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-2">Get in Touch</h2>
            <p className="text-gray-600">Tell us about your tour plans</p>
          </div>

          <div className="space-y-6">
            {/* Name Field */}
            <div className="relative group">
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300 group-focus-within:text-black z-10" />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-gray-100 bg-gray-50 text-black placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-black focus:bg-white focus:shadow-lg"
                />
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    background: `linear-gradient(135deg, #FEFE02 0%, #FEFE02 100%)`,
                    opacity: focusedField === 'name' ? 0.1 : 0 
                  }}
                ></div>
              </div>
            </div>

            {/* Email Field */}
            <div className="relative group">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300 group-focus-within:text-black z-10" />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-gray-100 bg-gray-50 text-black placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-black focus:bg-white focus:shadow-lg"
                />
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    background: `linear-gradient(135deg, #FEFE02 0%, #FEFE02 100%)`,
                    opacity: focusedField === 'email' ? 0.1 : 0 
                  }}
                ></div>
              </div>
            </div>

            {/* Guests Field */}
            <div className="relative group">
              <div className="relative">
                <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300 group-focus-within:text-black z-10" />
                <input
                  type="number"
                  placeholder="Number of Guests"
                  value={formData.guests}
                  onChange={(e) => handleInputChange('guests', e.target.value)}
                  onFocus={() => setFocusedField('guests')}
                  onBlur={() => setFocusedField('')}
                  className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-gray-100 bg-gray-50 text-black placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-black focus:bg-white focus:shadow-lg"
                  min="1"
                />
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    background: `linear-gradient(135deg, #FEFE02 0%, #FEFE02 100%)`,
                    opacity: focusedField === 'guests' ? 0.1 : 0 
                  }}
                ></div>
              </div>
            </div>

            {/* Message Field */}
            <div className="relative group">
              <div className="relative">
                <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-gray-400 transition-colors duration-300 group-focus-within:text-black z-10" />
                <textarea
                  placeholder="Tell us about the tour you are interested in..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 bg-gray-50 text-black placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-black focus:bg-white focus:shadow-lg resize-none min-h-[120px]"
                ></textarea>
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    background: `linear-gradient(135deg, #FEFE02 0%, #FEFE02 100%)`,
                    opacity: focusedField === 'message' ? 0.1 : 0 
                  }}
                ></div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full h-16 rounded-2xl text-black text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center group relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, #FEFE02 0%, #FEFE02 100%)`,
                boxShadow: '0 8px 25px rgba(254, 254, 2, 0.3)'
              }}
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full"></div>
              
              <span className="relative z-10 flex items-center">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Floating particles for extra flair */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full opacity-30 animate-bounce"
            style={{ 
              backgroundColor: '#FEFE02',
              animationDelay: '0s',
              animationDuration: '3s'
            }}
          ></div>
          <div 
            className="absolute top-3/4 right-1/3 w-1 h-1 rounded-full opacity-40 animate-bounce"
            style={{ 
              backgroundColor: '#FEFE02',
              animationDelay: '1s',
              animationDuration: '2s'
            }}
          ></div>
          <div 
            className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full opacity-20 animate-bounce"
            style={{ 
              backgroundColor: '#FEFE02',
              animationDelay: '2s',
              animationDuration: '2.5s'
            }}
          ></div>
        </div>
      </div>
    </div>
 
</div>
       
    </section>
  );
}