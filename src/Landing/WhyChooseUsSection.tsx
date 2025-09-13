import { motion } from "framer-motion";
import { MapPin, Users, Globe2 } from "lucide-react";

export default function WhyChooseUsSection() {
  const pillars = [
    {
      icon: MapPin,
      title: "Smart Travel Solutions",
      description:
        "Our innovative platform delivers real-time itinerary updates, personalized travel suggestions, and seamless trip management.",
    },
    {
      icon: Users,
      title: "Expert Travel Advisors",
      description:
        "Our dedicated team of travel experts designs customized journeys and shares local insights for memorable adventures.",
    },
    {
      icon: Globe2,
      title: "Worldwide Adventures, Local Expertise",
      description:
        "Discover our global network of destinations, enriched by local guides who bring deep cultural knowledge to your travels.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-20"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <div className="max-w-3xl text-left">
            <h2 className="text-4xl lg:text-5xl flex flex-col md:flex-row items-center md:space-x-2 font-bold text-black mb-6 leading-tight">
              <span>LA Tours</span>
              <span className="block bg-gradient-to-r from-[#FEFE02] to-[#FEFE02] bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-black leading-relaxed">
              We're more than a travel agency; we're your partners in creating
              unforgettable journeys. Discover the essence of our commitment to
              your travel dreams.
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                boxShadow:
                  "16px 16px 32px rgba(0, 0, 0, 0.2), -16px -16px 32px rgba(254, 254, 2, 0.2)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Travel team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 group"
                whileHover={{
                  x: 10,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {/* Icon Box */}
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1"
                  style={{
                    background:
                      "linear-gradient(135deg, #FEFE02 0%, #FEFE02 100%)",
                    boxShadow:
                      "4px 4px 8px rgba(0, 0, 0, 0.15), -4px -4px 8px rgba(254, 254, 2, 0.3)",
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -10, 10, -5, 0],
                    boxShadow:
                      "6px 6px 12px rgba(0,0,0,0.3), -6px -6px 12px rgba(253,247,86,0.4)",
                    transition: { duration: 0.6 },
                  }}
                  animate={{
                    y: [0, -3, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    },
                  }}
                >
                  <pillar.icon className="w-8 h-8 text-black" />
                </motion.div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-[#FEFE02] transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-black leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
