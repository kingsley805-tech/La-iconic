import { motion } from "framer-motion";
import { MapPin, Camera, Globe, Heart, Star } from "lucide-react";
import { useState } from "react";

export default function SpecializedToursSection() {
    const [favorites, setFavorites] = useState(new Set());

    const tours = [
        { 
          icon: MapPin, 
          title: "Beverly Hills Tour Hub", 
          description: "Launch your LA adventure from our hub at 9850 W Olympic Blvd, Beverly Hills, CA 90211, USA, with curated city tours and premium experiences.", 
          price: ""
        },
        { 
          icon: Camera, 
          title: "Hollywood Star Tour", 
          description: "Explore iconic Hollywood landmarks, celebrity homes, and film locations with expert guides who share insider stories and secrets.", 
          price: ""
        },
        { 
          icon: Globe, 
          title: "Cultural LA Experience", 
          description: "Immerse yourself in LA's diverse neighborhoods, from Little Tokyo to Venice Beach, discovering authentic local culture and cuisine.", 
          price: ""
        },
        { 
          icon: Heart, 
          title: "Coastal Adventure Tour", 
          description: "Discover the beauty of California's coastline with scenic drives, beach activities, and breathtaking sunset viewpoints.", 
          price: ""
        }
    ];

    const toggleFavorite = (index: unknown) => {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(index)) {
            newFavorites.delete(index);
        } else {
            newFavorites.add(index);
        }
        setFavorites(newFavorites);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                        <span>Extraordinary </span>
                        <span className="bg-gradient-to-r from-[#FEFE02] to-[#FDF756] bg-clip-text text-transparent">
                            Unforgettable Tours
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Embark on unique adventures tailored to your passions, from iconic landmarks to hidden gems, with expert guides.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tours.map((tour, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                                transition: { type: 'spring', stiffness: 300 }
                            }}
                            className="group relative"
                        >
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full w-full flex flex-col relative overflow-hidden">
                                {/* Favorite Button */}
                               

                                {/* Icon Section */}
                                <div className="p-8 pb-4 flex justify-center">
                                    <motion.div
                                        className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#FEFE02] to-[#FDF756] shadow-lg"
                                        animate={{
                                            y: [0, -5, 0],
                                            rotate: [0, 2, -2, 0],
                                            transition: {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: index * 0.3
                                            }
                                        }}
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: [-5, 5, -3, 0],
                                            transition: { duration: 0.6 }
                                        }}
                                    >
                                        <tour.icon className="w-10 h-10 text-black" />
                                    </motion.div>
                                </div>

                                {/* Content Section */}
                                <div className="px-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-black mb-3 text-center">
                                        {tour.title}
                                    </h3>
                                    <p className="text-gray-600 text-center leading-relaxed mb-4 flex-1 text-sm">
                                        {tour.description}
                                    </p>
                                    
                                    
                                </div>

                               

                                {/* Hover Overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}