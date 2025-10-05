import { useState, useEffect, useCallback } from "react";
import logo from "../assets/iconic.webp";
import { Star, Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Clock } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; 

// Import optimized sections
import HeroSection from "../Landing/HeroSection";
import ServicesSection from "../Landing/ServicesSection";
import ExperienceSection from "../Landing/ExperienceSection";
import SpecializedLogisticsSection from "../Landing/SpecializedLogisticsSection";
import GlobalNetworkSection from "../Landing/GlobalNetworkSection";
import WhyChooseUsSection from "../Landing/WhyChooseUsSection";
import TestimonialsSection from "../Landing/TestimonialsSection";
import ContactSection from "../Landing/ContactSection";
import About from '../Landing/AboutSection';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

 const currentYear = new Date().getFullYear();

  // Show loader for a few seconds then show content
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

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

  const navLinks = [
    "Services",
    "About",
    "Experience",
    "Network",
    "Why Us",
    "Testimonials",
    "Contact",
  ];

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    handleLinkClick();
  }, [handleLinkClick]);

  if (!showContent) {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <DotLottieReact
            src="https://lottie.host/b152639c-6d77-4eca-81f0-1211408e5777/2fN6vtwn3k.lottie"
            loop
            autoplay
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
    );
  }
        
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex justify-between items-center">
                {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f5092d] shadow-lg">
                    <img
                      src={logo}
                  alt="Iconic Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">
                LA <Star className="inline text-[#f5092d] w-5 h-5" /> Iconic
                    </span>
            </div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex space-x-8">
                  {navLinks.map((item) => (
                <button
                      key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="text-white hover:text-[#f5092d] font-medium transition-colors duration-200"
                    >
                      {item}
                </button>
                  ))}
                </div>

                {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <a
                href="https://widgets.bokun.io/online-sales/2c4ad054-cded-4501-8eea-8863cf22683c/experience/1076736"
                className="bg-[#f5092d] hover:bg-[#e00826] text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                Book Now
              </a>
            </div>

                {/* Mobile Menu Button */}
            <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#f5092d] transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
              </div>
            </div>

        {/* Mobile Menu */}
              {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={handleLinkClick} />
            <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-gray-900 to-black shadow-2xl z-50">
                    <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                        <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f5092d]">
                      <img src={logo} alt="Iconic Logo" className="h-6 w-auto object-contain" />
                    </div>
                    <span className="text-lg font-bold text-white">LA Iconic</span>
                        </div>
                  <button onClick={handleLinkClick} className="text-white/80 hover:text-white">
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                <div className="flex-1 px-6 py-6">
                        <nav className="space-y-4">
                    {navLinks.map((item) => (
                      <button
                              key={item}
                        onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                        className="block w-full text-left py-3 px-4 text-white hover:text-[#f5092d] hover:bg-gray-800 rounded-lg font-medium transition-colors duration-200"
                            >
                              {item}
                      </button>
                          ))}
                        </nav>
                  
                  <div className="mt-8">
                    <a
                      href="https://widgets.bokun.io/online-sales/2c4ad054-cded-4501-8eea-8863cf22683c/experience/1076736"
                      className="block w-full bg-[#f5092d] hover:bg-[#e00826] text-white text-center py-3 rounded-xl font-semibold transition-colors duration-200"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
                        </div>
                      </div>
                    </div>
              )}
      </nav>

          {/* Main Content */}
      <main>
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
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
            <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f5092d]">
                  <img src={logo} alt="Iconic Logo" className="h-8 w-auto object-contain" />
                </div>
                <span className="text-xl font-bold text-white">LA Iconic</span>
            </div>
            
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Experience the magic of Los Angeles through unforgettable tours. From Hollywood glamour to hidden gems.
            </p>
            
            {/* Social Links */}
              <div className="flex space-x-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                    className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-[#f5092d] transition-colors duration-200"
                >
                    <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Tours Section */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Popular Tours</h3>
            <ul className="space-y-3">
              {[
                "Hollywood Walk of Fame",
                "Celebrity Homes Tour", 
                "Downtown LA Historic",
                "Griffith Observatory",
                "Venice Beach & Santa Monica"
              ].map((item, index) => (
                <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-[#f5092d] transition-colors duration-200 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Gallery", 
                "Reviews",
                "Book Now",
                "FAQ"
              ].map((item, index) => (
                <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-[#f5092d] transition-colors duration-200 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Get In Touch</h3>
            
            <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#f5092d] mt-0.5" />
                <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">Phone</p>
                    <a href="tel:+13106005176" className="text-white hover:text-[#f5092d] transition-colors duration-200">
                    (310) 600-5176
                  </a>
                </div>
              </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#f5092d] mt-0.5" />
                <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">Email</p>
                    <a href="mailto:losangelesiconictourllc@gmail.com" className="text-white hover:text-[#f5092d] transition-colors duration-200 text-sm">
                    losangelesiconictourllc@gmail.com
                  </a>
                </div>
              </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#f5092d] mt-0.5" />
                <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">Hours</p>
                  <p className="text-white text-sm">Mon – Sun: 8 AM – 2 AM</p>
                </div>
              </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#f5092d] mt-0.5" />
                <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">Address</p>
                  <p className="text-white text-sm">9850 W Olympic Blvd<br />Beverly Hills, CA<br />Pickup center: 471 S Roxbury Dr, Beverly Hills, CA 90212</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
              © {currentYear} Los Angeles Iconic Tour LLC. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-[#f5092d] transition-colors duration-200">
                Privacy Policy
              </a>
                <a href="#" className="text-gray-400 hover:text-[#f5092d] transition-colors duration-200">
                Terms of Service
              </a>
                <a href="#" className="text-gray-400 hover:text-[#f5092d] transition-colors duration-200">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>
  );
}