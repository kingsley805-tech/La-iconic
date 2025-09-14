

import { motion } from "framer-motion";
import { ArrowRight,  Ship, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";



export default function HeroSection() {

  const titleAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  

  return (
    <section className="relative min-h-screen mt-28 md:mt-20 md:pt-8 pb-32 bg-gray-100 flex items-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=2070&auto=format&fit=crop')" }}
        animate={{ scale: [1, 1.05, 1], transition: { duration: 20, repeat: Infinity, ease: "easeInOut" } }}
      ></motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-gray-100/80 to-transparent"></div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20"
        style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
          boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)'
        }}
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-16 h-16 rounded-full opacity-20"
        style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
          boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)'
        }}
        animate={{ 
          y: [0, 15, 0],
          x: [0, -10, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">





<div className="space-y-6">
  <motion.h1 
    className="text-5xl lg:text-7xl font-extrabold text-gray-800 leading-tight"
    variants={titleAnimation}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <motion.span className="inline-block">Discover</motion.span>
    <motion.span 
      className="block text-[#f5092d] bg-clip-text "
    >
      World-Class Tours,
    </motion.span>
    <motion.span className="text-4xl lg:text-5xl block">
      Seamlessly Guided.
    </motion.span>
  </motion.h1>

  <motion.p 
    className="text-xl text-gray-600 leading-relaxed max-w-lg"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.8 }}
  >
    From breathtaking landscapes to vibrant city escapes, our tours connect you 
    with unforgettable experiences. Let us be your guide to adventure, culture, 
    and exploration — wherever your journey takes you.
  </motion.p>
</div>


          

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="group rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
                style={{
                  background: 'linear-gradient(135deg, #f5092d 0%, #f5092d 100%)',
                  boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)',
                  border: 'none'
                }}
                 onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                onMouseDown={(e) => { e.currentTarget.style.boxShadow = 'inset 3px 3px 6px rgba(0, 0, 0, 0.2), inset -3px -3px 6px rgba(255, 255, 255, 0.7)'; }}
                onMouseUp={(e) => { e.currentTarget.style.boxShadow = '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)'; }}
              >
                Request a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content - Image */}
         <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mb-28 lg:-mb-18 lg:block"
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.1), -12px -12px 24px rgba(255, 255, 255, 0.8)',
              }}
            >
              <div className="flex flex-col">
                <video
                  src="https://www.pexels.com/download/video/33829470/"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-h-[300px] object-cover object-center rounded-t-lg shadow-md"
                />
                <img
                  src="https://media.istockphoto.com/id/2194137906/photo/griffith-observatory-during-sunrise-series-4.jpg?s=612x612&w=0&k=20&c=5I5jwn0EOds89j4A9cdWByw-o_t4JSueyGRqeTY62hM="
                  alt="A large, modern container ship at a busy port terminal with automated cranes"
                  className="w-full max-h-[300px] object-cover object-center rounded-b-lg shadow-md"
                />
              </div>
            </div>


          {/* Floating Animated Icons */}
          <motion.div
            className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-white flex items-center justify-center"
            style={{
              boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)'
            }}
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 }
            }}
          >
            <Ship className="w-8 h-8 text-[#f5092d]" />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -right-6 w-16 h-16 rounded-2xl bg-white flex items-center justify-center"
            style={{
              boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)'
            }}
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.2,
              rotate: -360,
              transition: { duration: 0.6 }
            }}
          >
            <Truck className="w-8 h-8 text-[#f5092d]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
