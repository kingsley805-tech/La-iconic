import { motion } from "framer-motion";
import {
  
  Calendar,
  Users2,
  TrendingUp,
  Globe,
  ShieldCheck,
  
} from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      icon: Calendar,
      number: "25+",
      label: "Years of Exploration",
      description:
        "Over two decades of crafting unforgettable travel experiences worldwide.",
      startColor: "#f5092d",
      endColor: "#f5092d",
    },
    {
      icon: Users2,
      number: "2000+",
      label: "Expert Guides",
      description:
        "Passionate travel experts, local guides ensuring authentic adventures.",
      startColor: "#f5092d",
      endColor: "#f5092d",
    },
    {
      icon: TrendingUp,
      number: "500K+",
      label: "Happy Travelers",
      description:
        "Half a million explorers have trusted us for their dream vacations.",
      startColor: "#f5092d",
      endColor: "#f5092d",
    },
    {
      icon: Globe,
      number: "150+",
      label: "Destinations Explored",
      description:
        "From iconic landmarks to hidden gems, we connect you to the world’s wonders.",
      startColor: "#f5092d",
      endColor: "#f5092d",
    },
  ];


  const certifications = [
    { name: "ASTA Certified", description: "American Society of Travel Advisors" },
    { name: "IATA Accredited", description: "International Air Transport Association" },
    { name: "GSTC Member", description: "Global Sustainable Tourism Council" },
    {
      name: "Beverly Hills Tour Hub",
      description:
        "Launch your LA adventure with exclusive tours starting from our hub at 9850 W Olympic Blvd, Beverly Hills, CA 90211, USA.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-20"
        >
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              <span>Two Decades of </span>
              <span className="block bg-gradient-to-r from-[#f5092d] to-[#f5092d] bg-clip-text text-transparent">
                Travel Excellence
              </span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              From our roots in Ghana to adventures across the globe, our journey
              is defined by passion, discovery, and a commitment to creating
              unforgettable travel memories.
            </p>
          </div>
        </motion.div>

        {/* Experience Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-28">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="text-center h-full"
            >
              <div
                className="rounded-3xl p-8 bg-white h-full w-full flex flex-col justify-between transition-all duration-500 shadow-xl hover:shadow-2xl"
                style={{
                  boxShadow:
                    "10px 10px 20px rgba(0, 0, 0, 0.08), -10px -10px 20px rgba(255, 255, 255, 0.9)",
                }}
              >
                <motion.div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${exp.startColor}, ${exp.endColor})`,
                  }}
                  whileHover={{
                    rotate: [0, -10, 10, -5, 0],
                    scale: 1.1,
                    transition: { duration: 0.6 },
                  }}
                  animate={{
                    y: [0, -5, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <exp.icon className="w-10 h-10 text-black" />
                </motion.div>

                <motion.div
                  className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#f5092d] to-[#f5092d] bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  {exp.number}
                </motion.div>

                <h3 className="text-lg font-bold text-black mb-3">
                  {exp.label}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        {/**
         * 
         * <div className="mb-28">
          <motion.h3
            className="text-3xl font-bold text-center text-black mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Journey Through Time
          </motion.h3>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#f5092d] to-[#f5092d] rounded-full"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`w-full max-w-md ${
                    index % 2 === 0 ? "text-right mr-8" : "text-left ml-8"
                  }`}
                >
                  <motion.div
                    className="rounded-2xl p-6 bg-white shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      boxShadow:
                        "12px 12px 24px rgba(0, 0, 0, 0.1), -12px -12px 24px rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      }`}
                    >
                      <motion.div
                        className="w-10 h-10 rounded-xl bg-[#f5092d]/30 flex items-center justify-center"
                        whileHover={{
                          rotate: 360,
                          scale: 1.2,
                          backgroundColor: "#f5092d",
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <milestone.icon className="w-5 h-5 text-black" />
                      </motion.div>
                      <span className="text-2xl font-bold text-[#f5092d]">
                        {milestone.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-black mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #f5092d 0%, #f5092d 100%)",
                    boxShadow:
                      "0 0 0 4px white, 0 0 0 8px rgba(254, 254, 2, 0.3)",
                  }}
                  whileHover={{
                    scale: 1.5,
                    boxShadow:
                      "0 0 0 6px white, 0 0 0 12px rgba(254, 254, 2, 0.4)",
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div> **/}
        

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-20"
        >
          <h3 className="text-3xl font-bold text-center text-black mb-16">
            Industry Certifications & Compliance
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="text-center p-8 rounded-2xl bg-white shadow-lg"
              >
                <motion.div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f5092d] to-[#f5092d] flex items-center justify-center mx-auto mb-4"
                  whileHover={{
                    rotate: [0, -5, 5, 0],
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                >
                  <ShieldCheck className="w-8 h-8 text-black" />
                </motion.div>
                <h4 className="font-bold text-black mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-700">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
