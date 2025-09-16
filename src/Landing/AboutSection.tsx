import { motion } from "framer-motion";
import { CheckCircle, Award, Shield, Clock, Users, MapPin, Star } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Expert Local Guides",
      description: "Passionate guides with deep knowledge of LA's history, culture, and hidden gems."
    },
    {
      icon: Shield,
      title: "Safe & Comfortable",
      description: "Modern vehicles, professional drivers, and comprehensive safety measures for your peace of mind."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Multiple daily tours with customizable itineraries to fit your schedule and interests."
    },
    {
      icon: MapPin,
      title: "Iconic Locations",
      description: "Visit all the must-see spots from Hollywood to Santa Monica with insider access."
    }
  ];

  const benefits = [
    "Hollywood Walk of Fame & TCL Chinese Theatre",
    "Scenic drives through Beverly Hills",
    "Santa Monica Pier & Venice Beach",
    "Griffith Observatory & Hollywood Sign views",
    "Local dining and shopping recommendations",
    "Small groups for personalized experience"
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                About Us
                <span className="block text-[#f5092d] mt-2">
                  Experience Los Angeles Like Never Before
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Los Angeles Iconic Tour is dedicated to showing visitors the very best of LA. 
                Our knowledgeable guides make every tour engaging and fun, sharing insider stories 
                and local tips to bring the city to life.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-0"
                >
                  <div 
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #f5092d 0%, #ff4757 100%)',
                      boxShadow: '4px 4px 12px rgba(245, 9, 45, 0.3)'
                    }}
                  >
                    <feature.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-1 lg:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-2 lg:gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#f5092d] flex-shrink-0 mt-0.5" />
                    <span className="text-sm lg:text-base text-gray-700 leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - LA Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div 
              className="rounded-2xl lg:rounded-3xl overflow-hidden"
              style={{
                boxShadow: '16px 16px 32px rgba(0, 0, 0, 0.1), -16px -16px 32px rgba(255, 255, 255, 0.8)'
              }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1697730143625-cc36da7bc150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TG9zJTIwQW5nZWxlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Los Angeles cityscape with Hollywood sign and palm trees"
                className="w-full h-64 sm:h-80 lg:h-[500px] xl:h-[600px] object-cover"
              />
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-xl"
              animate={{ 
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#f5092d] flex items-center justify-center">
                  <Users className="w-6 h-6 mr-2" />
                  500+
                </div>
                <div className="text-xs lg:text-sm text-gray-600 whitespace-nowrap">Happy Visitors</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-xl"
              animate={{ 
                y: [0, 10, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#f5092d] flex items-center justify-center">
                  <Star className="w-6 h-6 mr-2" />
                  4.9
                </div>
                <div className="text-xs lg:text-sm text-gray-600 whitespace-nowrap">Average Rating</div>
              </div>
            </motion.div>

            {/* Additional floating element for mobile */}
            <motion.div
              className="absolute bottom-4 right-4 bg-white rounded-xl p-3 shadow-lg sm:hidden"
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <div className="text-center">
                <div className="text-lg font-bold text-[#f5092d]">15+</div>
                <div className="text-xs text-gray-600">Years</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional content section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 lg:mt-20 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-6">
            Discover LA's Best Kept Secrets
          </h3>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed px-4">
            Whether you're visiting for the first time or returning to explore more, we ensure a safe, 
            memorable, and enjoyable experience. Our tours cover the city's most famous landmarks, 
            from the Hollywood Walk of Fame to Santa Monica Pier, with fascinating history and insider 
            stories that bring LA to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}