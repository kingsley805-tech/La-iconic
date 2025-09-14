import React, { useState, useEffect } from "react";
import { IoLocationSharp, IoClose, IoHeart, IoHeartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

// Define interfaces for type safety
interface Place {
  img: string;
  title: string;
  location: string;
  description: string;
  price: string;
  type: string;
}

interface PlaceCardProps extends Place {
  index: number;
  handleOrderPopup: () => void;
  handleBookNow: (place: Place) => void;
}

interface OrderPopupProps {
  orderPopup: boolean;
  setOrderPopup: (value: boolean) => void;
  selectedPlace: Place | null;
}

interface BookingConfirmationProps {
  showBooking: boolean;
  setShowBooking: (value: boolean) => void;
  bookedPlace: Place | null;
}

// Initialize AOS-like animation system
const initAOS = (): void => {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aos-animate");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, observerOptions);

  document.querySelectorAll("[data-aos]").forEach((el) => {
    observer.observe(el);
  });
};

// PlaceCard Component
const PlaceCard: React.FC<PlaceCardProps> = ({
  img,
  title,
  location,
  description,
  price,
  type,
  handleOrderPopup,
  index,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
     <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 },
      }}
      className="shadow-lg transition-all duration-500 hover:shadow-2xl cursor-pointer rounded-xl overflow-hidden group relative flex flex-col h-full"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)",
        border: "1px solid rgba(254, 254, 2, 0.15)",
      }}
    >
      {/* Subtle accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5092d]/5 via-transparent to-transparent pointer-events-none" />

      {/* Decorative corner accent */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#f5092d]/20 to-transparent rounded-br-full" />

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="mx-auto h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";
          }}
        />

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all transform hover:scale-110 shadow-md border border-gray-200/50"
        >
          {isFavorite ? (
            <IoHeart className="text-[#f5092d] text-xl" />
          ) : (
            <IoHeartOutline className="text-gray-600 text-xl" />
          )}
        </button>

        {/* Type Label */}
        <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20">
          {type}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col justify-between flex-1 p-5 space-y-3 relative">
        {/* Title + Info */}
        <div onClick={handleOrderPopup} className="cursor-pointer">
          <h1 className="line-clamp-1 font-bold text-xl text-black">
            {title}
          </h1>
          <div className="flex items-center gap-2 opacity-80 mt-1">
            <IoLocationSharp className="text-red-500" />
            <span className="text-gray-700">{location}</span>
          </div>
          <p className="line-clamp-2 text-gray-600 text-sm mt-2">
            {description}
          </p>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between border-t border-gray-200/60 pt-3 mt-auto">
          <p className="text-sm text-gray-600">Starting from</p>
          <p className="text-2xl font-bold text-black drop-shadow-sm">
            ${price}
          </p>
        </div>

        {/* Book Now Button */}
        <button className=" bg-gradient-to-r w-20  text-white from-black to-black hover:from-[#f5092d] hover:to-[#f5092d]  py-1 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg border border-[#f5092d]/30">
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

// OrderPopup Component
const OrderPopup: React.FC<OrderPopupProps> = ({ orderPopup, setOrderPopup, selectedPlace }) => {
  if (!selectedPlace) return null;

  return (
    <div
      className={`${
        orderPopup ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-300`}
    >
      <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all duration-300">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{selectedPlace.title}</h2>
          <button
            onClick={() => setOrderPopup(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>
        <img
          src={selectedPlace.img}
          alt={selectedPlace.title}
          loading="lazy"
          className="w-full h-48 object-cover rounded-lg mb-4"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"; // Fallback image
          }}
        />
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <IoLocationSharp className="text-[#f5092d]" />
            <span>{selectedPlace.location}</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{selectedPlace.description}</p>
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-sm text-gray-500">{selectedPlace.type}</span>
            <span className="text-2xl font-bold text-[#f5092d]">${selectedPlace.price}</span>
          </div>
          <button
            onClick={() => setOrderPopup(false)}
            className="w-full bg-gradient-to-r from-[#f5092d] to-[#f5092d] hover:from-[#f5092d] hover:to-[#f5092d] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Book This Destination
          </button>
        </div>
      </div>
    </div>
  );
};

// BookingConfirmation Component
const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  showBooking,
  setShowBooking,
  bookedPlace,
}) => {
  if (!bookedPlace) return null;

  return (
    <div
      className={`${
        showBooking ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-300`}
    >
      <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-xl max-w-lg w-full mx-4 transform transition-all duration-300">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-[#f5092d] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[#f5092d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your trip to <span className="font-semibold text-[#f5092d]">{bookedPlace.title}</span> has been booked
            successfully.
          </p>

          <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg mb-6 text-left">
            <div className="flex items-center gap-2 mb-2">
              <IoLocationSharp className="text-red-500" />
              <span className="font-semibold">{bookedPlace.location}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{bookedPlace.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{bookedPlace.type}</span>
              <span className="text-xl font-bold text-green-600">${bookedPlace.price}</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setShowBooking(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Continue Exploring
            </button>
            <p className="text-xs text-gray-500">A confirmation email will be sent to you shortly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// WorldPlacesShowcase Component
const WorldPlacesShowcase: React.FC = () => {
  const [orderPopup, setOrderPopup] = useState<boolean>(false);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showBooking, setShowBooking] = useState<boolean>(false);
  const [bookedPlace, setBookedPlace] = useState<Place | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [visibleItems, setVisibleItems] = useState<number>(9);

  useEffect(() => {
    setTimeout(() => {
      initAOS();
    }, 100);
  }, [visibleItems]); // Re-run initAOS when visibleItems changes

  const handleOrderPopup = (place: Place): void => {
    setSelectedPlace(place);
    setOrderPopup(true);
  };

  const handleBookNow = (place: Place): void => {
    setBookedPlace(place);
    setShowBooking(true);
  };

  const handleViewMore = (): void => {
    setVisibleItems((prev) => prev + 9);
  };

  const worldPlaces: Place[] = [
    {
      img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=500&q=80",
      title: "Angkor Wat",
      location: "Siem Reap, Cambodia",
      description: "Temple complex in Cambodia and the largest religious monument in the world.",
      price: "37",
      type: "Temple"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1737792868340-ca7c164d86e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      title: "Hollywood Walk of Fame",
      location: "Los Angeles, USA",
      description: "Famous sidewalk with over 2,700 stars honoring celebrities in entertainment industry.",
      price: "45",
      type: "Cultural Landmark"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1693236731045-5148457c0491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpbmVzZSUyMFRoZWF0cmV8ZW58MHx8MHx8fDA%3D",
      title: "TCL Chinese Theatre",
      location: "Hollywood, USA",
      description: "Historic movie palace famous for celebrity handprints and footprints in concrete.",
      price: "35",
      type: "Historic Theater"
    },
    {
      img: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGhlYXRyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Dolby Theatre",
      location: "Hollywood, USA",
      description: "Home of the Academy Awards ceremony, featuring state-of-the-art sound technology.",
      price: "55",
      type: "Entertainment Venue"
    },
    {
      img: "https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=500&q=80",
      title: "Sunset Boulevard",
      location: "Los Angeles, USA",
      description: "Iconic street stretching from downtown LA to the Pacific, famous for nightlife and music scene.",
      price: "40",
      type: "Historic Street"
    },
    {
      img: "https://media.istockphoto.com/id/501484266/photo/rodeo-drive-sign-with-palm-trees-in-beverly-hills.jpg?s=612x612&w=0&k=20&c=f4p7oxi0KigoEJvhZNxEZHCeXuC1AT0M8WiwtnlZdwU=",
      title: "Rodeo Drive",
      location: "Beverly Hills, USA",
      description: "World-famous luxury shopping street with high-end boutiques and designer stores.",
      price: "50",
      type: "Luxury Shopping"
    },
    {
      img: "https://media.istockphoto.com/id/909093718/vector/antique-photograph-of-worlds-famous-sites-ocean-avenue-long-branch.jpg?s=612x612&w=0&k=20&c=qXXok4dmFC6LNYcIpHHW84r1bE8jnAX_KrtE_rVFSJs=",
      title: "Downtown LA Historic Sites",
      location: "Los Angeles, USA",
      description: "Historic core of LA featuring architectural gems, museums, and cultural landmarks.",
      price: "60",
      type: "Historic District"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661964261790-d2d6b62014a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENlbGVicml0aWVzfGVufDB8fDB8fHww",
      title: "Celebrity Homes Tour",
      location: "Beverly Hills, USA",
      description: "Guided tour through exclusive neighborhoods to see famous celebrity mansions and estates.",
      price: "85",
      type: "Celebrity Tour"
    },
    {
      img: "https://images.unsplash.com/photo-1572975165711-e9636eba67fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R3JpZmZpdGglMjBPYnNlcnZhdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Griffith Observatory",
      location: "Los Angeles, USA",
      description: "Iconic observatory offering stunning views of LA skyline and the Hollywood Sign.",
      price: "25",
      type: "Observatory"
    },
    {
      img: "https://images.unsplash.com/photo-1638059957884-2faffe7b6943?q=80&w=817&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "LA Skyline Viewpoints",
      location: "Los Angeles, USA",
      description: "Best spots to capture breathtaking panoramic views of the sprawling Los Angeles cityscape.",
      price: "30",
      type: "Scenic Viewpoint"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1732738372625-8dc6a664ec78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
      title: "Hollywood Photo Tour",
      location: "Hollywood, USA",
      description: "Professional photo opportunities at iconic Hollywood locations with expert guidance.",
      price: "75",
      type: "Photo Experience"
    },
    {
      img: "https://images.unsplash.com/photo-1581390114939-946f9a890a7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SG9sbHl3b29kfGVufDB8fDB8fHww",
      title: "Hollywood & Beyond Tour",
      location: "Los Angeles, USA",
      description: "Comprehensive 1.5-hour guided tour covering Hollywood highlights and celebrity hotspots.",
      price: "95",
      type: "Guided Tour"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1663013514560-a30fbd137865?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFyayUyMEFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Griffith Park Adventure",
      location: "Los Angeles, USA",
      description: "Explore one of the largest urban parks in North America with hiking trails and attractions.",
      price: "35",
      type: "Nature Park"
    },
    {
      img: "https://images.unsplash.com/photo-1600617548211-a4b3d8e79369?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmV2ZXJseSUyMEhpbGxzfGVufDB8fDB8fHww",
      title: "Beverly Hills Highlights",
      location: "Beverly Hills, USA",
      description: "Luxury neighborhood tour featuring upscale shopping, dining, and celebrity hotspots.",
      price: "70",
      type: "Luxury Tour"
    },
    {
      img: "https://images.unsplash.com/photo-1648596363724-45115e354b87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEhvbGx5d29vZCUyMFNpZ24lMjBWaWV3c3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Hollywood Sign Views",
      location: "Los Angeles, USA",
      description: "Best vantage points to see and photograph the world-famous Hollywood Sign.",
      price: "40",
      type: "Iconic Landmark"
    },
    {
      img: "https://images.unsplash.com/photo-1709316124677-0b19280d00f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3Vuc2V0JTIwU3RyaXB8ZW58MHx8MHx8fDA%3D",
      title: "Sunset Strip Experience",
      location: "West Hollywood, USA",
      description: "Famous nightlife district with historic music venues, clubs, and restaurants.",
      price: "55",
      type: "Nightlife District"
    },
    {
      img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2FyZGVuc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Beverly Hills Gardens",
      location: "Beverly Hills, USA",
      description: "Beautiful landscaped streets and gardens in America's most exclusive neighborhood.",
      price: "45",
      type: "Garden Tour"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFNob3BwaW5nfGVufDB8fDB8fHww",
      title: "Luxury Boutique Shopping",
      location: "Beverly Hills, USA",
      description: "Exclusive shopping experience at world-renowned designer boutiques and luxury stores.",
      price: "80",
      type: "Shopping Experience"
    },
    {
      img: "https://media.istockphoto.com/id/2223004939/photo/shocked-family-having-fun-while-watching-3d-movie-in-theatre.jpg?s=612x612&w=0&k=20&c=Wqcu1VvSy3YI-RQ4xREMR8756xynxNRwe3PA1PJzp7g=",
      title: "Movie Locations Tour",
      location: "Los Angeles, USA",
      description: "Visit famous filming locations from blockbuster movies and TV shows throughout LA.",
      price: "90",
      type: "Film Tour"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1710030733249-5d7c34509f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Uml2ZXJ8ZW58MHx8MHx8fDA%3D",
      title: "LA River & Art District",
      location: "Los Angeles, USA",
      description: "Explore vibrant street art murals and the revitalized LA River area with local artists.",
      price: "65",
      type: "Art & Culture"
    },
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhY2h8ZW58MHx8MHx8fDA%3D",
      title: "Santa Monica Beach",
      location: "Santa Monica, USA",
      description: "Beautiful Pacific coastline with the famous Santa Monica Pier and pristine sandy beaches.",
      price: "50",
      type: "Beach Experience"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1675670738535-479c28cdb50f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJvYXJkd2Fsa3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Venice Canals & Boardwalk",
      location: "Venice, USA",
      description: "Unique canal system and vibrant boardwalk featuring street performers and local vendors.",
      price: "45",
      type: "Waterfront District"
    },
    {
      img: "https://media.istockphoto.com/id/2160438957/photo/friendly-teacher-reading-a-book-to-pupils-during-literature-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=zzMSxvDDBSj1YrZicwSu1t2N7pf1Ey-p32v76i2Uzbc=",
      title: "LA Insider Stories Tour",
      location: "Los Angeles, USA",
      description: "Behind-the-scenes stories and local secrets shared by knowledgeable LA guides.",
      price: "75",
      type: "Storytelling Tour"
    },
    {
      img: "https://images.unsplash.com/photo-1678266561093-324802646fb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2FudG9yaW5pfGVufDB8fDB8fHww",
      title: "Santorini",
      location: "Greece",
      description: "Beautiful white-washed buildings overlooking the stunning Aegean Sea with breathtaking sunsets.",
      price: "1299",
      type: "Island Paradise"
    },
    {
      img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFjaHUlMjBQaWNjaHV8ZW58MHx8MHx8fDA%3D",
      title: "Machu Picchu",
      location: "Peru",
      description: "Ancient Incan citadel set high in the Andes Mountains, one of the New Seven Wonders of the World.",
      price: "899",
      type: "Historical Site"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1694475476616-7e9a2c0c3927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmFuZmYlMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8fDA%3D",
      title: "Banff National Park",
      location: "Canada",
      description: "Pristine wilderness with turquoise lakes, snow-capped mountains, and abundant wildlife.",
      price: "799",
      type: "Nature Reserve"
    },
    {
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Bali",
      location: "Indonesia",
      description: "Tropical paradise with lush rice terraces, ancient temples, and world-class beaches.",
      price: "699",
      type: "Tropical Island"
    },
    {
      img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Tm9ydGhlcm4lMjBMaWdodHN8ZW58MHx8MHx8fDA%3D",
      title: "Northern Lights",
      location: "Iceland",
      description: "Witness the magical Aurora Borealis dancing across the night sky in this Nordic wonderland.",
      price: "1199",
      type: "Natural Phenomenon"
    },
    {
      img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGFqJTIwTWFoYWx8ZW58MHx8MHx8fDA%3D",
      title: "Taj Mahal",
      location: "India",
      description: "Magnificent white marble mausoleum, a UNESCO World Heritage site and symbol of eternal love.",
      price: "599",
      type: "Monument"
    },
    {
      img: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3dpc3MlMjBBbHBzfGVufDB8fDB8fHww",
      title: "Swiss Alps",
      location: "Switzerland",
      description: "Majestic mountain peaks, pristine lakes, and charming alpine villages in the heart of Europe.",
      price: "1499",
      type: "Mountain Range"
    },
    {
      img: "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R3JlYXQlMjBCYXJyaWVyJTIwUmVlZnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Great Barrier Reef",
      location: "Australia",
      description: "World's largest coral reef system with incredible marine biodiversity and crystal-clear waters.",
      price: "1399",
      type: "Marine Wonder"
    },
    {
      img: "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGV0cmF8ZW58MHx8MHx8fDA%3D",
      title: "Petra",
      location: "Jordan",
      description: "Ancient archaeological wonder carved into rose-red cliffs, known as the 'Rose City'.",
      price: "849",
      type: "Archaeological Site"
    },
    {
      img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
      title: "Maldives",
      location: "Indian Ocean",
      description: "Luxury overwater bungalows surrounded by crystal-clear lagoons and pristine white beaches.",
      price: "2299",
      type: "Luxury Resort"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hlcnJ5JTIwQmxvc3NvbXN8ZW58MHx8MHx8fDA%3D",
      title: "Cherry Blossoms",
      location: "Japan",
      description: "Experience the magical sakura season with pink blossoms covering ancient temples and modern cities.",
      price: "1099",
      type: "Cultural Experience"
    },
    {
      img: "https://images.unsplash.com/photo-1558517286-8a9cb0b8c793?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGF0YWdvbmlhfGVufDB8fDB8fHww",
      title: "Patagonia",
      location: "Chile & Argentina",
      description: "Dramatic landscapes of glaciers, mountains, and endless plains at the end of the world.",
      price: "1699",
      type: "Adventure Destination"
    },
    {
      img: "https://images.unsplash.com/photo-1707410436230-d4b2fba910e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFNlcmVuZ2V0aXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Serengeti",
      location: "Tanzania",
      description: "Witness the Great Migration and incredible wildlife in Africa's most famous national park.",
      price: "1899",
      type: "Wildlife Safari"
    },
    {
      img: "https://images.unsplash.com/photo-1533656338503-b22f63e96cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW1hbGZpJTIwQ29hc3R8ZW58MHx8MHx8fDA%3D",
      title: "Amalfi Coast",
      location: "Italy",
      description: "Stunning coastal towns perched on cliffs overlooking the Mediterranean Sea.",
      price: "1199",
      type: "Coastal Paradise"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1664304492320-8359efcaad38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JlYXQlMjBXYWxsfGVufDB8fDB8fHww",
      title: "Great Wall",
      location: "China",
      description: "Ancient fortification stretching thousands of miles across mountains and deserts.",
      price: "699",
      type: "Historical Wonder"
    },
    {
      img: "https://images.unsplash.com/photo-1696537380062-e6275d9a3c8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Tm9yd2VnaWFuJTIwRmpvcmRzfGVufDB8fDB8fHww",
      title: "Norwegian Fjords",
      location: "Norway",
      description: "Dramatic waterfalls cascading into deep blue fjords surrounded by towering cliffs.",
      price: "1399",
      type: "Natural Wonder"
    },
    {
      img: "https://images.unsplash.com/photo-1570097703229-b195d6dd291f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWlmZmVsJTIwVG93ZXJ8ZW58MHx8MHx8fDA%3D",
      title: "Eiffel Tower",
      location: "Paris, France",
      description: "Iconic wrought-iron lattice tower on the Champ de Mars, named after the engineer Gustave Eiffel.",
      price: "25",
      type: "Landmark"
    },
    {
      img: "https://images.unsplash.com/photo-1655417591786-32c3833be1a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHlyYW1pZCUyMG9mJTIwR2l6YXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Great Pyramid of Giza",
      location: "Giza, Egypt",
      description: "The oldest and largest of the three pyramids in the Giza pyramid complex.",
      price: "30",
      type: "Ancient Wonder"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1681803531285-75db948035d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3RhdHVlJTIwb2YlMjBMaWJlcnR5fGVufDB8fDB8fHww",
      title: "Statue of Liberty",
      location: "New York, USA",
      description: "A colossal neoclassical sculpture on Liberty Island in New York Harbor.",
      price: "25",
      type: "Monument"
    },
    {
      img: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3lkbmV5JTIwT3BlcmElMjBIb3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Sydney Opera House",
      location: "Sydney, Australia",
      description: "A multi-venue performing arts centre at Sydney Harbour.",
      price: "40",
      type: "Architectural Marvel"
    },
    {
      img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29sb3NzZXVtfGVufDB8fDB8fHww",
      title: "Colosseum",
      location: "Rome, Italy",
      description: "An oval amphitheatre in the centre of the city of Rome.",
      price: "16",
      type: "Historical Site"
    },
    {
      img: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R3JhbmQlMjBDYW55b258ZW58MHx8MHx8fDA%3D",
      title: "Grand Canyon",
      location: "Arizona, USA",
      description: "A steep-sided canyon carved by the Colorado River.",
      price: "35",
      type: "Natural Wonder"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661963907351-3903b963a766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFZpY3RvcmlhJTIwRmFsbHN8ZW58MHx8MHx8fDA%3D",
      title: "Victoria Falls",
      location: "Zambia/Zimbabwe",
      description: "One of the world's largest waterfalls.",
      price: "50",
      type: "Waterfall"
    },
    {
      img: "https://images.unsplash.com/photo-1559344465-ac6ad8e59943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmlhZ2FyYSUyMEZhbGxzfGVufDB8fDB8fHww",
      title: "Niagara Falls",
      location: "Canada/USA",
      description: "Massive waterfalls on the Niagara River.",
      price: "25",
      type: "Waterfall"
    },
    {
      img: "https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW1hem9uJTIwUmFpbmZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Amazon Rainforest",
      location: "South America",
      description: "Vast tropical rainforest occupying the drainage basin of the Amazon River.",
      price: "200",
      type: "Rainforest"
    },
    {
      img: "https://images.unsplash.com/photo-1489573280374-2e193c63726c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2FoYXJhJTIwRGVzZXJ0fGVufDB8fDB8fHww",
      title: "Sahara Desert",
      location: "Africa",
      description: "Largest hot desert in the world.",
      price: "100",
      type: "Desert"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW91bnQlMjBFdmVyZXN0fGVufDB8fDB8fHww",
      title: "Mount Everest",
      location: "Nepal/Tibet",
      description: "Earth's highest mountain above sea level.",
      price: "3000",
      type: "Mountain"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1664304481949-7342698006f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW50YXJjdGljYXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Antarctica",
      location: "Antarctica",
      description: "Earth's southernmost continent.",
      price: "5000",
      type: "Polar Region"
    },
    {
      img: "https://images.unsplash.com/photo-1706957614198-8d2e5f0ed6ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R2FsYXBhZ29zJTIwSXNsYW5kc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Galapagos Islands",
      location: "Ecuador",
      description: "Archipelago of volcanic islands distributed on either side of the equator in the Pacific Ocean.",
      price: "1000",
      type: "Island Group"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1697730034915-1a8b88f57257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVhZCUyMFNlYXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Dead Sea",
      location: "Jordan/Israel",
      description: "Salt lake bordered by Jordan to the east and Israel and the West Bank to the west.",
      price: "50",
      type: "Salt Lake"
    },
    {
      img: "https://media.istockphoto.com/id/949851300/photo/small-venetian-canal-venice-italy.jpg?s=612x612&w=0&k=20&c=SIgasazQARcYbS7vNZD9GpuUvYOHZpYFICNY2qbjUAk=",
      title: "Venice Canals",
      location: "Venice, Italy",
      description: "Series of canals in Venice, Italy.",
      price: "80",
      type: "Cityscape"
    },
    {
      img: "https://media.istockphoto.com/id/2152551306/photo/london-cityscape-with-houses-of-parliament-and-big-ben-tower-uk.jpg?s=612x612&w=0&k=20&c=VyFGspHOtYmeq61ztCyccz31I4RttV14Ore1QYd5xG0=",
      title: "Big Ben",
      location: "London, UK",
      description: "Nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster.",
      price: "0",
      type: "Clock Tower"
    },
    {
      img: "https://media.istockphoto.com/id/2170363356/photo/mount-fuji-from-scenic-gardens-and-lakes.jpg?s=612x612&w=0&k=20&c=rGIH1o4hTm2tUIkpuoaXgfUAvy6k27vgYYnniUMy1WI=",
      title: "Mount Fuji",
      location: "Japan",
      description: "Active stratovolcano on Honshū in Japan.",
      price: "10",
      type: "Volcano"
    },
    {
      img: "https://media.istockphoto.com/id/2023775352/photo/parthenon-and-acropolis-in-athens-greece.jpg?s=612x612&w=0&k=20&c=V8_w7rn_te7D6BFHvndqXxAwIoOBZI3XHiJJZfG5d28=",
      title: "Acropolis",
      location: "Athens, Greece",
      description: "Ancient citadel located on a rocky outcrop above the city of Athens.",
      price: "20",
      type: "Ancient Site"
    },
    {
      img: "https://media.istockphoto.com/id/2153081657/photo/drone-view-of-stonehenge-and-wiltshire-countryside-in-england-uk-the-stone-circle-dates-to.jpg?s=612x612&w=0&k=20&c=Za1wGt9HWdIiJVwrmuiga6MFtUAYuW7nG_x0RC9hSJA=",
      title: "Stonehenge",
      location: "Wiltshire, UK",
      description: "Prehistoric monument in Wiltshire, England.",
      price: "20",
      type: "Megalith"
    },
    
    {
      img: "https://media.istockphoto.com/id/1872274401/photo/angkor-wat-temple-siem-reap-cambodia.jpg?s=612x612&w=0&k=20&c=6vUS8UcyKcrThGIe44MeF1k9ISZ5jJKbk6dlK_FsQFY=",
      title: "Angkor Wat",
      location: "Siem Reap, Cambodia",
      description: "Temple complex in Cambodia and the largest religious monument in the world.",
      price: "37",
      type: "Temple"
    }
  ];

  const filteredPlaces: Place[] = worldPlaces.filter(
    (place) =>
      place.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <style>
        {`
          [data-aos] {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          
          [data-aos].aos-animate {
            opacity: 1;
            transform: translateY(0);
          }
          
          [data-aos="fade-up"] {
            transform: translateY(50px);
          }
          
          [data-aos="fade-down"] {
            transform: translateY(-50px);
          }
          
          [data-aos="fade-left"] {
            transform: translateX(50px);
          }
          
          [data-aos="fade-right"] {
            transform: translateX(-50px);
          }
          
          [data-aos="zoom-in"] {
            transform: scale(0.8);
          }
          
          [data-aos].aos-animate[data-aos="fade-up"],
          [data-aos].aos-animate[data-aos="fade-down"],
          [data-aos].aos-animate[data-aos="fade-left"],
          [data-aos].aos-animate[data-aos="fade-right"] {
            transform: translate(0, 0);
          }
          
          [data-aos].aos-animate[data-aos="zoom-in"] {
            transform: scale(1);
          }
        `}
      </style>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
        

          <div className="mb-12 flex my-20 flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Our Packages</h2>
            <span className="hidden md:block h-6 w-px bg-gray-300 dark:bg-gray-600"></span>
            <p className="text-lg text-gray-500 dark:text-gray-400">Search Your Destination</p>
            <div className="relative w-full max-w-md">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 dark:text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-1.85z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search destination..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-slate-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f5092d] focus:border-[#f5092d] shadow-sm hover:shadow-md transition-all duration-300"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredPlaces.slice(0, visibleItems).map((place, index) => (
              <PlaceCard
                key={`${place.title}-${index}`}
                {...place}
                index={index}
                handleOrderPopup={() => handleOrderPopup(place)}
                handleBookNow={handleBookNow}
              />
            ))}
          </div>

          {visibleItems < filteredPlaces.length && (
            <div className="flex justify-center mt-16 ">
              <button
                onClick={handleViewMore}
                className="bg-[#f5092d] hover:bg-[#f5092d] text-white py-1 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View More
              </button>
            </div>
          )}
        </div>

        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} selectedPlace={selectedPlace} />
        <BookingConfirmation showBooking={showBooking} setShowBooking={setShowBooking} bookedPlace={bookedPlace} />
      </div>
    </>
  );
};

export default WorldPlacesShowcase;