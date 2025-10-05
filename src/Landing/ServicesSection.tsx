import { motion } from "framer-motion";
import { Star, Camera,  CheckCircle } from "lucide-react";
import Card from './PlaceCard'
import ho from '../assets/ho.jpg'
import bee from '../assets/bee.jpg'

export default function ToursSection() {
  const tours = [
    {
      icon: Star,
      title: "Hollywood & Beyond Tour",
      description: "Discover the glitz and glamour of Los Angeles with our iconic 1:30 hour tour departing hourly.",
      image: ho,
      features: [
        "Hollywood Walk of Fame",
        "TCL Chinese Theatre & Dolby Theatre",
        "Sunset Boulevard & Rodeo Drive",
        "Griffith Observatory & LA Skyline Views"
      ]
    },
    {
      icon: Camera,
      title: "Beverly Hills & Coastal Highlights",
      description: "Experience LA luxury and scenic beauty on this 1:30 hour tour departing hourly.",
      image: bee,
      features: [
        "Griffith Park & Hollywood Sign Views",
        "Beverly Hills Gardens & Streets",
        "Santa Monica Beach & Venice Canals",
        "Famous Movie Locations & Art Murals"
      ]
    }
  ];

  const featureListAnimation = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };
  const featureItemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 mt-10">
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="flex justify-center mb-16"
>
  <div className="max-w-3xl text-left">
    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
      Discover Your LA 
      <span className="bg-gradient-to-r from-[#f5092d] to-[#f5092d] bg-clip-text text-transparent"> Journey</span>
    </h2>
    <p className="text-xl text-gray-600 leading-relaxed">
      Experience Los Angeles in a whole new way with our exciting 90-minute tours—running every hour and guided by locals who make the city come alive.
    </p>
  </div>
</motion.div>



        <div className="grid lg:grid-cols-2 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                boxShadow: '16px 16px 32px rgba(0, 0, 0, 0.12), -16px -16px 32px rgba(255, 255, 255, 0.95)',
                transition: { type: 'spring', stiffness: 300 } 
              }}
              className="group cursor-pointer rounded-3xl p-8 h-full bg-white flex flex-col"
              style={{
                boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.08), -12px -12px 24px rgba(255, 255, 255, 0.9)'
              }}
            >
              <div 
                className="w-full h-48 rounded-2xl mb-6 overflow-hidden"
                style={{ boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.8)' }}
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <motion.div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #f5092d 0%, #f5092d 100%)',
                  boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)'
                }}
                whileHover={{
                  rotate: [0, -15, 15, -10, 0],
                  scale: 1.15,
                  boxShadow: '8px 8px 16px rgba(255, 107, 53, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.9)',
                  transition: { duration: 0.6 }
                }}
                animate={{
                  y: [0, -3, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }
                }}
              >
                <tour.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#f5092d] transition-colors duration-300">
                {tour.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">{tour.description}</p>
              <motion.div 
                className="mt-auto space-y-3 pt-4 border-t border-gray-200"
                variants={featureListAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                 {tour.features.map(feature => (
                   <motion.div 
                     key={feature} 
                     className="flex items-center gap-2" 
                     variants={featureItemAnimation}
                     whileHover={{ x: 5, transition: { type: "spring", stiffness: 300 } }}
                   >
                     <motion.div
                       whileHover={{ 
                         rotate: 360,
                         scale: 1.2,
                         transition: { duration: 0.5 }
                       }}
                     >
                       <CheckCircle className="w-5 h-5 text-[#f5092d]" />
                     </motion.div>
                     <span className="text-gray-700">{feature}</span>
                   </motion.div>
                 ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <Card />
    </section>
  );
}