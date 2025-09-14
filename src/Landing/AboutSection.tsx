

import { motion } from "framer-motion";
import { CheckCircle, Award, Shield, Clock, Globe } from "lucide-react"; // Added Globe icon

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Over 15 years of experience in international logistics and trade, ensuring smooth operations."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Advanced tracking systems and comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: Clock,
      title: "24/7 Dedicated Support",
      description: "Round-the-clock customer service and real-time shipment monitoring to keep you informed."
    },
    { // Added new feature
      icon: Globe,
      title: "Global Network & Reach",
      description: "An extensive network spanning continents, ensuring seamless and efficient international shipments."
    }
  ];

  const benefits = [
    "End-to-end logistics management",
    "Competitive pricing and transparent costs",
    "Real-time tracking and updates",
    "Expert customs clearance",
    "Flexible shipping solutions tailored to your needs", // Slightly enhanced description
    "Global partner network for unparalleled reach" // Slightly enhanced description
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                Why Choose
                <span className="block  text-[#f5092d] bg-clip-text ">
                  LA Tour?
                </span> {/* Changed to Dasfan Logistics for clarity */}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're not just a Tour company, we're your trusted partner in global trade. 
                Our commitment to excellence and innovation drives everything we do. {/* Enhanced description */}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                      boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#f5092d] flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div 
              className="rounded-3xl overflow-hidden"
              style={{
                boxShadow: '16px 16px 32px rgba(0, 0, 0, 0.1), -16px -16px 32px rgba(255, 255, 255, 0.8)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Diverse professional team collaborating in modern office"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6"
              style={{
                boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.1), -12px -12px 24px rgba(255, 255, 255, 0.8)'
              }}
              animate={{ 
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "loop", // Ensure smooth looping
                ease: "easeInOut"
              }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f5092d]">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>

            {/* Floating Customer Satisfaction Card */}
            <motion.div
              className="absolute -top-8 -right-8 bg-white rounded-2xl p-6"
              style={{
                boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.1), -12px -12px 24px rgba(255, 255, 255, 0.8)'
              }}
              animate={{ 
                y: [0, 10, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "loop", // Ensure smooth looping
                ease: "easeInOut"
              }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f5092d]">98%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
