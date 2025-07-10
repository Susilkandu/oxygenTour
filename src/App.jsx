import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaMountain, FaPlaneDeparture, FaParachuteBox, FaHelicopter,  FaChevronLeft, FaChevronRight } from "react-icons/fa";

import logo from "../public/logo.png";

import paragliding from "../public/paragliding.jpg";
import trekking from "../public/trekking.jpg";
import mountBiking from "../public/mountBiking.jpg";
import chitwanNationalPark from "../public/chitawan.jpg";
import bungyJumping from "../public/bungyJumping.jpg";
import hillswView from "../public/hillsView.jpg";
import mustang from "../public/mustang.jpg";
import kedarnath from "../public/kedarnath.jpg";
import banarash from "../public/banaras.jpg";
import dulikhel from "../public/dulikhel.jpg";
import ranimahal from "../public/ranimahal.jpg";
import baseCamp from "../public/baseCamp.jpg";

//Main Crousal photos

import rafting from "../public/rafting.jpg"
import vally from "../public/vally.jpg"


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  const carousalPhotos = [paragliding, vally, ]
   const [index, setIndex] = useState(0);

    // Auto slide every 2 sec
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setIndex(index === 0 ? carousalPhotos.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === carousalPhotos.length - 1 ? 0 : index + 1);
  };

  // destinations
  const destinations = [
    { name: "Paragliding in Pokhara", photo: paragliding },
    { name: "Trekking & Mountaineering", photo: trekking },
    { name: "White-Water Rafting", photo: rafting },
    { name: "Mountain Biking", photo: mountBiking },
    { name: "Jungle Safari in Chitwan", photo: chitwanNationalPark },
    { name: "Bungee Jumping", photo: bungyJumping },
    { name: "Scenic Hill Views", photo: hillswView },
    { name: "Mustang Adventure", photo: mustang },
    { name: "Spiritual Kedarnath", photo: kedarnath },
    { name: "Historic Banaras", photo: banarash },
    { name: "Dulikhel Peace Retreat", photo: dulikhel },
    { name: "Rani Mahal Heritage", photo: ranimahal },
  ];

  const nepalTourPackages = [
    { id: 1, title: "Everest Base Camp Trek", duration: "14 Days", price: "$1,499", img: baseCamp },
    { id: 2, title: "Annapurna Circuit Adventure", duration: "12 Days", price: "$1,299", img: hillswView },
    { id: 3, title: "Kathmandu Heritage Tour", duration: "5 Days", price: "$599", img: dulikhel },
    { id: 4, title: "Chitwan Wildlife Safari", duration: "4 Days", price: "$499", img: chitwanNationalPark },
    { id: 5, title: "Paragliding Safari", duration: "6 Days", price: "$799", img: paragliding },
  ];
    const reviews = [
    {
      name: "Vicencia",
      country: "USA",
      text: "One of the best trekking experiences ever! Oxygen Tours planned everything perfectly. Highly recommended!",
      photo:"https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
    },
    {
      name: "Liam Smith",
      country: "UK",
      text: "Super professional guides, great hospitality and amazing memories. Will visit Nepal again with them!",
      photo:"https://i.pinimg.com/736x/08/67/87/0867876844df73f00bf9f7125b52071e.jpg"
    },
    {
      name: "Eckhart Tolle",
      country: "German",
      text: "I felt very safe and comfortable. Beautiful places, smooth booking and amazing team!",
      photo:"https://media.gettyimages.com/id/76775660/photo/berlin-writer-and-spiritual-teacher-eckhart-tolle-lectures-during-a-reading-on-september-15.jpg?s=612x612&w=0&k=20&c=bT2ImfHCjuWcKzuPUdQbCDDh5q4eFDNEplGvfAl2PVc="
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        headerRef.current.classList.add("shadow-md");
      } else {
        headerRef.current.classList.remove("shadow-md");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* HEADER */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md flex items-center justify-between px-8 py-4 z-50 border-b border-gray-200 transition-shadow"
      >
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Oxygen Tours" className="w-10 h-10 rounded-full saturate-150" />
          <h1 className="text-2xl font-bold text-indigo-800 tracking-tight">Oxygen Tours</h1>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {["Trekking", "Tours", "Adventure", "Heli"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-700 transition">{item}</a>
          ))}
        </nav>
        <button className="md:hidden text-3xl" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

    {/* BACKDROP */}
<div
  className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
  onClick={toggleSidebar}
/>

{/* SIDEBAR */}
<aside
  className={`fixed top-0 right-0 h-full w-72 bg-[#ffffffd6] backdrop-blur-2xl shadow-xl transform transition-transform duration-500 z-50 ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="flex flex-col p-8 space-y-6 h-full">
    {/* Close button */}
    <button
      onClick={toggleSidebar}
      className="self-end text-gray-600 hover:text-black transition"
    >
      <FaTimes size={24} />
    </button>

    {/* Menu */}
    <nav className="flex flex-col space-y-4 text-lg font-medium">
      {["Trekking", "Tours", "Adventure", "Heli"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={toggleSidebar}
          className="text-gray-800 hover:text-indigo-700 hover:translate-x-1 transition-transform duration-300"
        >
          {item}
        </a>
      ))}
    </nav>

    <div className="mt-auto">
      <a
        href="https://wa.me/+977985‑1225400"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full transition"
      >
        Chat on WhatsApp
      </a>
    </div>
  </div>
</aside>


   {/* HERO */}
<section className="relative pt-20">
  <div className="h-screen w-full relative overflow-hidden">
       {carousalPhotos.map((photo, i) => (
        <img
          key={i}
          src={photo}
          alt="Hero Slide"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      {/* Text */}
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 4 }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
    >
      <h2 className="text-5xl md:text-7xl font-bold stroke-3  text-white mb-6 drop-shadow-lg ">
        Discover Himalayan Wonders
      </h2>
    </motion.div>

      {/* Left button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-30 hover:bg-black/70 transition"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Right button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-30 hover:bg-black/70 transition"
      >
        <FaChevronRight size={24} />
      </button>


  </div>
</section>

{/* About */}
<section className="py-20 px-4 text-center bg-gradient-to-b from-green-50 to-white">
  <h3 className="text-3xl font-bold mb-6">About Oxygen Tours</h3>
  <p className="max-w-3xl mx-auto mb-8 text-lg">
    We are Pokhara’s trusted adventure experts providing unforgettable trekking, tours and aerial experiences across the Himalayas.
  </p>

  <div className="flex flex-wrap justify-center gap-8 text-violet-700 text-5xl mb-8">
    <FaMountain className="hover:scale-110 transition" />
    <FaPlaneDeparture className="hover:scale-110 transition" />
    <FaParachuteBox className="hover:scale-110 transition" />
    <FaHelicopter className="hover:scale-110 transition" />
  </div>

  <a
    href="https://wa.me/919876543210" // 👉 अपना WhatsApp 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105"
  >
    Chat with Us on WhatsApp
  </a>
</section>
      {/* DESTINATIONS */}
      <motion.section className="py-24 px-4 max-w-6xl mx-auto" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <h3 className="text-4xl font-bold text-center mb-12">Top Destinations</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <img src={d.photo} alt={d.name} className="w-full h-52 object-cover" />
              <div className="p-4 bg-white">
                <h4 className="text-xl font-semibold">{d.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

{/* PACKAGES */}
<motion.section
  className="py-24 px-4 bg-gradient-to-br from-[#edf4ed] to-[#f9fafc]"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2 }}
>
  <h3 className="text-4xl font-bold text-center mb-16">
    Best Nepal Tour Packages
  </h3>

  <div className="grid gap-10 max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {nepalTourPackages.map(({ id, title, duration, price, img }) => (
      <motion.div
        key={id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: id * 0.1 }}
        className="group border rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer"
      >
        {/* Aspect ratio box */}
        <div className="w-full aspect-[4/3] overflow-hidden relative">
          <img
            src={img}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div className="p-6 flex flex-col">
          <h4 className="text-2xl font-semibold text-gray-800 mb-2">
            {title}
          </h4>
          <p className="text-sm text-gray-500 mb-1 italic">{duration}</p>
          <div className="flex justify-between items-center mt-auto">
            <p className="text-lg font-bold">{price}</p>
            <button className="text-sm font-medium bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition cursor-pointer"
            onClick={() =>
    window.open(
      `https://wa.me/+977 985‑1225400?text=${encodeURIComponent(
        `Hello, I am interested in booking the ${title} package.`
      )}`,
      "_blank"
    )
  }>
              Reserve Now
            </button>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>

    {/* Reviews */}
        <section className="py-20 px-4 bg-gradient-to-r from-sky-50 to-indigo-50 overflow-hidden">
      <h3 className="text-4xl font-bold text-center text-indigo-800 mb-12">What Our Travelers Say</h3>

      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white p-6 rounded-2xl shadow hover:shadow-xl transition border border-indigo-100 flex flex-col items-center"
            >
              <img
                src={review.photo}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-indigo-500"
              />
              <p className="text-gray-600 italic mb-4 text-center">"{review.text}"</p>
              <h4 className="text-lg font-semibold text-indigo-700">{review.name}</h4>
              <span className="text-sm text-gray-500">{review.country}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

      {/* form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-white bg-opacity-90 p-8 rounded-lg shadow max-w-lg w-full m-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Destination"
            className="p-3 border rounded"
          />
          <input
            type="text"
            placeholder="Activity"
            className="p-3 border rounded"
          />
          <input
            type="text"
            placeholder="Duration"
            className="p-3 border rounded"
          />
          <input
            type="number"
            placeholder="Budget ($)"
            className="p-3 border rounded"
          />
        </div>
        <button className="w-full mt-4 bg-indigo-700 hover:bg-green-600 text-white py-3 rounded transition">
          Book Now
        </button>
      </motion.form>
      {/* NEWS */}
      <motion.section className="py-20 px-4 max-w-6xl mx-auto" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <h3 className="text-3xl font-bold text-center mb-12">Latest Travel Insights</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {nepalTourPackages.map((i) => (
            <div key={i.id} className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition">
              <img src={i.img} alt={i.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2">{i.title} Tips</h4>
                <p className="text-sm text-gray-600">Insider tips to plan your dream Himalayan adventure smoothly.</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>


      {/* FOOTER */}
      <footer className="bg-indigo-700 text-white text-center py-6">
        <p>&copy; 2025 Oxygen Tours & Travels | Pokhara, Nepal</p>
      </footer>
    </div>
  );
}
