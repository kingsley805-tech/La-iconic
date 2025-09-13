
import { motion } from "framer-motion";

import LogisticsDigital from "../Landing/LogisticDigitalMap"

export default function GlobalNetworkSection() {
    return (
        <section id="network" className="py-20 bg-gray-100 ">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-5"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-100/95 to-gray-100"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="flex justify-center mb-16"
>
  <div className="max-w-3xl text-left">
   
    <h2 className="text-4xl lg:text-5xl flex flex-col md:flex-row items-center md:space-x-2 font-bold text-gray-800 mb-6 leading-tight">
      <span>Our Unrivaled</span>
      <span className="block bg-gradient-to-r from-[#FDF756] to-[#FEFE02] bg-clip-text text-transparent">
     Tour Network
      </span>
    </h2>
    <p className="text-xl text-gray-600 leading-relaxed">
      Connecting destinations, cultures, and adventures. Our global network of expert-guided tours ensures your journey is always unforgettable.
    </p>
  </div>
</motion.div>
            </div>
            <LogisticsDigital/>
        </section>
    );
}
