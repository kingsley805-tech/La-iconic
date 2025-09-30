import { useState, useEffect } from "react";
import logo from "../assets/iconic.webp";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { X, Clock, Star, Phone, Mail,  MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

import HeroSection from "../Landing/HeroSection";
import ServicesSection from "../Landing/ServicesSection";
import ExperienceSection from "../Landing/ExperienceSection";
import SpecializedLogisticsSection from "../Landing/SpecializedLogisticsSection";
import GlobalNetworkSection from "../Landing/GlobalNetworkSection";
import WhyChooseUsSection from "../Landing/WhyChooseUsSection";
import TestimonialsSection from "../Landing/TestimonialsSection";
import ContactSection from "../Landing/ContactSection";
import About from '../Landing/AboutSection';
import Notfound from '../Landing/404';
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const currentYear = new Date().getFullYear();
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);
  const [showContent, setShowContent] = useState(false);
  {/**useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 8000); // 8 seconds

    return () => clearTimeout(timer); // cleanup on unmount
  }, []); */}


  useEffect(() => {
  const timer = setTimeout(() => {
    setShowContent(true);
  }, 90 * 24 * 60 * 60 * 1000); // ~3 months (90 days) in milliseconds

  return () => clearTimeout(timer); // cleanup on unmount
}, []);

  const navLinks = [
    "Services",
    "About",
    "Experience",
    "Network",
    "Why Us",
    "Testimonials",
    "Contact",
  ];

  return (
    <>
    {/** <div className="flex items-center justify-center min-h-screen w-full px-4">
          <DotLottieReact
            src="https://lottie.host/b152639c-6d77-4eca-81f0-1211408e5777/2fN6vtwn3k.lottie"
            loop
            autoplay
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div> */}
      {!showContent ? (
      
        <Notfound />
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          {/* Navigation */}
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
            style={{
              boxShadow:
                scrollY > 50
                  ? "inset 0 2px 4px rgba(255, 107, 53, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.05)"
                  : "none",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex justify-between items-center">
                {/* Logo */}
                <motion.div
                  className="flex items-center space-x-2 sm:space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-8 h-8 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl"
                    style={{
                      color: "#f5092d",
                      boxShadow:
                        "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px #f5092d",
                    }}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                      boxShadow:
                        "6px 6px 12px rgba(253, 247, 86, 0.5), -6px -6px 12px #f5092d",
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={logo}
                      alt="iconic Logo"
                      className="h-8 sm:h-12 w-auto object-contain filter brightness-110 contrast-110"
                      style={{
                        imageRendering: "crisp-edges",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </motion.div>
                  <span className="flex items-center text-xl sm:text-2xl font-bold text-gray-800 space-x-2">
                    <span className="text-white font-bold flex items-center">
                      LA <Star className="text-[#f5092d]" />
                    </span>
                    <span className="text-[#f5092d] font-bold">Iconic</span>
                  </span>
                </motion.div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex space-x-8">
                  {navLinks.map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-white hover:text-[#f5092d] font-medium transition-colors duration-300"
                      whileHover={{
                        y: -2,
                        scale: 1.05,
                        color: "#f5092d",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>

                {/* Desktop CTA Button */}
                <motion.div
                  className="hidden lg:block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="rounded-xl px-6 py-3 text-white hover:text-red-800 text-center font-semibold transition-all duration-300 bg-[#f5092d]"
                    style={{
                      boxShadow:
                        "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.8)",
                      border: "none",
                    }}
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <a href="https://widgets.bokun.io/online-sales/2c4ad054-cded-4501-8eea-8863cf22683c/experience/1076736">Book Now</a>
                    
                  </Button>
                </motion.div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-lg text-gray-700 hover:text-[#f5092d] hover:bg-gray-200 transition-colors duration-200"
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle mobile menu"
                  >
                    <motion.div
                      animate={isMobileMenuOpen ? "open" : "closed"}
                      className="w-6 h-6 relative"
                    >
                      <motion.span
                        variants={{
                          closed: { rotate: 0, y: 0 },
                          open: { rotate: 45, y: 8 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 left-0 w-6 h-0.5 bg-current transform origin-center"
                      />
                      <motion.span
                        variants={{
                          closed: { opacity: 1 },
                          open: { opacity: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-2 left-0 w-6 h-0.5 bg-current"
                      />
                      <motion.span
                        variants={{
                          closed: { rotate: 0, y: 0 },
                          open: { rotate: -45, y: -8 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-4 left-0 w-6 h-0.5 bg-current transform origin-center"
                      />
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                  />

                  {/* Mobile Menu */}
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="fixed top-0 right-0 h-full w-80 max-w-[85vw] shadow-2xl lg:hidden z-50"
                    style={{
  background: "linear-gradient(135deg, rgba(253,247,86,0.9) 0%, rgba(254,254,2,0.9) 100%)",
}}

                  >
                    <div className="flex flex-col h-full">
                      {/* Mobile Menu Header */}
                      <div className="flex items-center justify-between p-6 border-b border-white/20">
                        <div className="flex items-center space-x-3">
                           {/* Logo */}
                <motion.div
                  className="flex items-center space-x-2 sm:space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-8 h-8 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl"
                    style={{
                      color: "#f5092d",
                      boxShadow:
                        "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px #f5092d",
                    }}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                      boxShadow:
                        "6px 6px 12px rgba(253, 247, 86, 0.5), -6px -6px 12px #f5092d",
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={logo}
                      alt="iconic Logo"
                      className="h-10 sm:h-12 w-auto object-contain filter brightness-110 contrast-110"
                      style={{
                        imageRendering: "crisp-edges",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </motion.div>
                  <span className="flex items-center text-xl sm:text-2xl font-bold text-gray-800 space-x-2">
                    <span className="text-white font-bold flex items-center">
                      LA <Star className="text-[#f5092d]" />
                    </span>
                    <span className="text-white font-bold">Iconic</span>
                  </span>
                </motion.div>
                        </div>
                        <button
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                          aria-label="Close mobile menu"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Mobile Menu Links */}
                      <div className="flex-1 px-6 py-6 bg-black">
                        <nav className="space-y-4">
                          {navLinks.map((item, index) => (
                            <motion.a
                              key={item}
                              href={`#${item.toLowerCase().replace(" ", "-")}`}
                              onClick={handleLinkClick}
                              className="block py-3 px-4 text-white hover:text-yellow-100 hover:bg-white/10 rounded-lg font-medium transition-colors duration-200"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {item}
                            </motion.a>
                          ))}
                        </nav>
                        {/* Mobile CTA Button */}
                        <div className="p-6 border-t border-white/20">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              className="w-full rounded-xl px-6 py-3 text-center font-semibold transition-all duration-300 bg-white text-[#f5092d] hover:bg-orange-50 border-none"
                              onClick={() => {
                                handleLinkClick();
                                const contactSection =
                                  document.getElementById("contact");
                                if (contactSection) {
                                  contactSection.scrollIntoView({
                                    behavior: "smooth",
                                  });
                                }
                              }}
                            >
                              Get Quote
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.nav>

          {/* Main Content */}
          <main className="">
            <HeroSection />
            <ServicesSection />
            <ExperienceSection />
            <SpecializedLogisticsSection />
            <GlobalNetworkSection />
            <About />
            <WhyChooseUsSection />
            <TestimonialsSection />
            <ContactSection />
          </main>

          {/* Footer */}
        
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(254,254,2,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                  className="flex items-center space-x-2 sm:space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-8 h-8 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl"
                    style={{
                      color: "#f5092d",
                      boxShadow:
                        "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px #f5092d",
                    }}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                      boxShadow:
                        "6px 6px 12px rgba(253, 247, 86, 0.5), -6px -6px 12px #f5092d",
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={logo}
                      alt="iconic Logo"
                      className="h-8 sm:h-12 w-auto object-contain filter brightness-110 contrast-110"
                      style={{
                        imageRendering: "crisp-edges",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </motion.div>
                  <span className="flex items-center text-xl sm:text-2xl font-bold text-gray-800 space-x-2">
                    <span className="text-white font-bold flex items-center">
                      LA <Star className="text-[#f5092d]" />
                    </span>
                    <span className="text-[#f5092d] font-bold">Iconic</span>
                  </span>
                </motion.div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Experience the magic of Los Angeles through unforgettable tours. From Hollywood glamour to hidden gems.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-gray-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#f5092d] hover:text-gray-900 transition-all duration-300 group border border-gray-600/30"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Tours Section */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold mb-6 text-white relative">
              Popular Tours
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#f5092d] to-transparent" />
            </h3>
            <ul className="space-y-3">
              {[
                "Hollywood Walk of Fame",
                "Celebrity Homes Tour", 
                "Downtown LA Historic",
                "Griffith Observatory",
                "Venice Beach & Santa Monica"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-[#f5092d] transition-colors duration-300 text-sm group flex items-center">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-[#f5092d] transition-colors duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 text-white relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#f5092d] to-transparent" />
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Gallery", 
                "Reviews",
                "Book Now",
                "FAQ"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-[#f5092d] transition-colors duration-300 text-sm group flex items-center">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-[#f5092d] transition-colors duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold mb-6 text-white relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#f5092d] to-transparent" />
            </h3>
            
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gray-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center mt-0.5 border border-gray-600/30">
                  <Phone className="w-4 h-4 text-[#f5092d]" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide font-medium">Phone</p>
                  <a href="tel:+13106005176" className="text-white hover:text-[#f5092d] transition-colors duration-300">
                    (310) 600-5176
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gray-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center mt-0.5 border border-gray-600/30">
                  <Mail className="w-4 h-4 text-[#f5092d]" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide font-medium">Email</p>
                  <a href="mailto:losangelesiconictourllc@gmail.com" className="text-white hover:text-[#f5092d] transition-colors duration-300 text-sm break-all">
                    losangelesiconictourllc@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gray-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center mt-0.5 border border-gray-600/30">
                  <Clock className="w-4 h-4 text-[#f5092d]" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide font-medium">Hours</p>
                  <p className="text-white text-sm">Mon – Sun: 8 AM – 2 AM</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gray-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center mt-0.5 border border-gray-600/30">
                  <MapPin className="w-4 h-4 text-[#f5092d]" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide font-medium">Address</p>
                  <p className="text-white text-sm">9850 W Olympic Blvd<br />Beverly Hills, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Los Angeles Iconic Tour LLC. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-[#f5092d] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-[#f5092d] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-[#f5092d] transition-colors duration-300">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  
        </div>
      )}
    </>
  );
}
