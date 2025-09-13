import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TourTestimonialsSection() {
  const testimonials = [
    {
      name: "Sophia Martinez",
      title: "Traveler from Spain",
      quote:
        "The LA Adventure Tour was absolutely unforgettable! From the Walk of Fame to the Griffith Observatory, every stop was magical. I couldn’t stop taking pictures!",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=60",
    },
    {
      name: "James Anderson",
      title: "Visitor from UK",
      quote:
        "The 1:30-hour tour was perfect. We saw Hollywood, Rodeo Drive, and even celebrity homes. The guide was funny, knowledgeable, and made the whole trip enjoyable.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=60",
    },
    {
      name: "Aisha Khan",
      title: "Tourist from Dubai",
      quote:
        "If you want to see LA in style, this tour is the way to go. The sunset over the Los Angeles skyline was breathtaking. Highly recommend it to anyone visiting!",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20"
      style={{
        background: "linear-gradient(to right, #FEFE02, #FEFE02)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Voices from Our
            <span className="block bg-gradient-to-r from-[#FEFE02] to-[#FEFE02] bg-clip-text text-white">
              LA Adventure Tours
            </span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Hear from travelers who explored Los Angeles with us. Their stories
            capture the excitement, beauty, and unforgettable moments of our
            tours.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group"
            >
              <div
                className="rounded-3xl p-8 h-full bg-white flex flex-col transition-shadow duration-300"
                style={{
                  boxShadow:
                    "12px 12px 24px rgba(0, 0, 0, 0.15), -12px -12px 24px rgba(253, 247, 86, 0.3)",
                }}
              >
                {/* Avatar */}
                <div className="flex items-center mb-4">
                  <div
                    className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#FEFE02] transition-transform duration-300 group-hover:scale-110"
                    style={{
                      boxShadow:
                        "inset 2px 2px 4px rgba(0, 0, 0, 0.2), inset -2px -2px 4px rgba(253, 247, 86, 0.6)",
                    }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-black">{testimonial.title}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      style={{ color: "#FEFE02", fill: "#FEFE02" }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-black italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
