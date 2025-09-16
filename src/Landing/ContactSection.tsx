"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

import { useState } from "react";

import { Send, User, Mail, Users, MessageCircle } from 'lucide-react';





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
        Plan Your <span className="bg-gradient-to-r from-[#f5092d] to-[#f5092d] bg-clip-text text-transparent">LA Adventure</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Ready to explore Los Angeles like never before? Reach out to book your tour or ask us anything about your upcoming trip.
      </p>
    </motion.div>

    {/* Main Content - Flex Container */}
    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 min-h-[600px] p-4">
      {/* Globe Section */}
      <div className="flex-1 py-20 dark:bg-black bg-transparent  rounded-3xl flex items-center justify-center">
        <div className="mx-auto text-center">
          <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
            Remote{" "}
            <span className="text-neutral-400">
              {"Connectivity".split("").map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </p>
          <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
            Break free from traditional boundaries. Work from anywhere, at the comfort of your own studio apartment. Perfect for Nomads and Travellers.
          </p>
          <WorldMap
            dots={[
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 rounded-3xl flex items-center justify-center p-4" style={{ backgroundColor: '#f5092d' }}>
        <div className="w-full max-w-md">
          {/* Form Container */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:scale-105"
            style={{
              backgroundColor: 'white',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Decorative Elements */}
            <div
              className="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-10"
              style={{ backgroundColor: '#f5092d' }}
            ></div>
            <div
              className="absolute -bottom-10 -left-10 w-16 h-16 rounded-full opacity-10"
              style={{ backgroundColor: '#f5092d' }}
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
                      background: `linear-gradient(135deg, #f5092d 0%, #f5092d 100%)`,
                      opacity: focusedField === 'name' ? 0.1 : 0,
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
                      background: `linear-gradient(135deg, #f5092d 0%, #f5092d 100%)`,
                      opacity: focusedField === 'email' ? 0.1 : 0,
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
                      background: `linear-gradient(135deg, #f5092d 0%, #f5092d 100%)`,
                      opacity: focusedField === 'guests' ? 0.1 : 0,
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
                      background: `linear-gradient(135deg, #f5092d 0%, #f5092d 100%)`,
                      opacity: focusedField === 'message' ? 0.1 : 0,
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
                  background: `linear-gradient(135deg, #f5092d 0%, #f5092d 100%)`,
                  boxShadow: '0 8px 25px rgba(254, 254, 2, 0.3)',
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
                backgroundColor: '#f5092d',
                animationDelay: '0s',
                animationDuration: '3s',
              }}
            ></div>
            <div
              className="absolute top-3/4 right-1/3 w-1 h-1 rounded-full opacity-40 animate-bounce"
              style={{
                backgroundColor: '#f5092d',
                animationDelay: '1s',
                animationDuration: '2s',
              }}
            ></div>
            <div
              className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full opacity-20 animate-bounce"
              style={{
                backgroundColor: '#f5092d',
                animationDelay: '2s',
                animationDuration: '2.5s',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}