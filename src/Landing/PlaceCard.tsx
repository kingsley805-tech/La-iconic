import React, { useState} from "react";
import { IoLocationSharp, IoClose, IoHeart, IoHeartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import china from "../assets/Chinese .jpg"
import santa from "../assets/santa monica.jpg"
import dolby from "../assets/dolby.jpg"
import walk from '../assets/walk.jpg'
import bev from '../assets/bev.jpg'


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

// PlaceCard Component
const PlaceCard: React.FC<PlaceCardProps> = ({
  img,
  title,
  location,
  description,
  
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
          <p className="text-sm flex flex-col font-bold text-black drop-shadow-sm">
            <span>Adults:1 x $60.00</span>
<span>Children:1 x $45.00</span>
          </p>
        </div>

        {/* Book Now Button */}
        <button className=" bg-gradient-to-r w-24  text-white from-[#f5092d] to-[#f5092d] hover:from-black hover:to-[#f5092d]  py-1 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg border border-[#f5092d]/30">
          
          <a href="https://widgets.bokun.io/online-sales/2c4ad054-cded-4501-8eea-8863cf22683c/experience/1076736">Book Now</a>
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


  const handleOrderPopup = (place: Place): void => {
    setSelectedPlace(place);
    setOrderPopup(true);
  };

  const handleBookNow = (place: Place): void => {
    setBookedPlace(place);
    setShowBooking(true);
  };

 
  const worldPlaces: Place[] = [
    {
      img: walk,
      title: "Hollywood Walk of Fame",
      location: "Los Angeles, USA",
      description: "Famous sidewalk with over 2,700 stars honoring celebrities in entertainment industry.",
      price: "45",
      type: "Cultural Landmark"
    },
    {
      img: china,
      title: "TCL Chinese Theatre",
      location: "Hollywood, USA",
      description: "Historic movie palace famous for celebrity handprints and footprints in concrete.",
      price: "35",
      type: "Historic Theater"
    },
    {
      img: dolby,
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
      img: "https://images.unsplash.com/photo-1572975165711-e9636eba67fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R3JpZmZpdGglMjBPYnNlcnZhdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Griffith Observatory & LA Skyline Views",
      location: "Los Angeles, USA",
      description: "Iconic observatory offering stunning views of LA skyline and the Hollywood Sign.",
      price: "25",
      type: "Observatory"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1663013514560-a30fbd137865?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFyayUyMEFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Griffith Park & Hollywood Sign Views",
      location: "Los Angeles, USA",
      description: "Explore one of the largest urban parks in North America with hiking trails and attractions.",
      price: "35",
      type: "Nature Park"
    },
    {
      img: bev,
      title: "Beverly Hills Gardens & Streets",
      location: "Beverly Hills, USA",
      description: "Beautiful landscaped streets and gardens in America's most exclusive neighborhood.",
      price: "45",
      type: "Garden Tour"
    },
    {
      img: santa,
      title: "Santa Monica Beach & Venice Canals",
      location: "Santa Monica, USA",
      description: "Beautiful Pacific coastline with the famous Santa Monica Pier and pristine sandy beaches.",
      price: "50",
      type: "Beach Experience"
    },
    {
      img: "https://media.istockphoto.com/id/2223004939/photo/shocked-family-having-fun-while-watching-3d-movie-in-theatre.jpg?s=612x612&w=0&k=20&c=Wqcu1VvSy3YI-RQ4xREMR8756xynxNRwe3PA1PJzp7g=",
      title: "Famous Movie Locations",
      location: "Los Angeles, USA",
      description: "Visit famous filming locations from blockbuster movies and TV shows throughout LA.",
      price: "90",
      type: "Film Tour"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1710030733249-5d7c34509f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Uml2ZXJ8ZW58MHx8MHx8fDA%3D",
      title: "Art Murals",
      location: "Los Angeles, USA",
      description: "Explore vibrant street art murals and the revitalized LA River area with local artists.",
      price: "65",
      type: "Art & Culture"
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
            {filteredPlaces.slice().map((place, index) => (
              <PlaceCard
                key={`${place.title}-${index}`}
                {...place}
                index={index}
                handleOrderPopup={() => handleOrderPopup(place)}
                handleBookNow={handleBookNow}
              />
            ))}
          </div>

         
        </div>

        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} selectedPlace={selectedPlace} />
        <BookingConfirmation showBooking={showBooking} setShowBooking={setShowBooking} bookedPlace={bookedPlace} />
      </div>
    </>
  );
};

export default WorldPlacesShowcase;