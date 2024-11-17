import { useState, useEffect,  } from 'react';
import img1 from "D:/websites/restaurant/src/assets/hall_1.jpg"
import img2 from "D:/websites/restaurant/src/assets/Carou_1.jpg"
import img3 from "D:/websites/restaurant/src/assets/Carou_2.jpg"
import gsap from 'gsap';
import "/src/Style.css"

const slides = [
  { id: 1, url: img1, caption: 'RESTAURANT NAME' },
  { id: 2, url: img2, caption: 'BEST STOP FOR YOUR CRAVINGS' },
  { id: 3, url: img3, caption: 'EXPLORE THE BEST TASTE WITH US' },
];

const Home = () => {
  

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    
   
   gsap.fromTo(".slide", { x: 300, opacity: 1 }, { x: 0, opacity: 1 ,duration:2});
  }, [currentSlide]);

  useEffect(() => {
   
   gsap.fromTo(".orderBtn", { x:-1000, opacity: 0 ,duration:0.5 ,ease: "power2.in"}, { x: 0, opacity: 2 ,duration:1 ,});
  }, [currentSlide]);

 

  // Function to auto-change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    },20000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        className={` absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={slide.url}
          alt={slide.caption}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col">
          <h1  className="text-white text-5xl font-bold slide">{slide.caption}</h1>
           {/* Order Now Button */}
           <a
              href="#order"
              className="orderBtn mt-4 px-6 py-3  text-xl font-semibold rounded-lg  transition duration-300"
              style={{ zIndex: 10 }} // Ensure the button is on top
            >
              Order Now
            </a>
        </div>
      </div>
    ))}
 
    {/* Navigation Buttons */}
    <div className="absolute inset-0 flex justify-between items-center px-4">
      <button
        onClick={() =>
          setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
        }
        className="text-white text-4xl   bg-opacity-50 hover:bg-opacity-75 px-2 py-1 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
        className="text-white text-4xl  bg-opacity-50 hover:bg-opacity-75 px-1.5 py-0.25 rounded-full"
      >
        &gt;
      </button>
    </div>
  
    {/* Indicators */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {slides.map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            index === currentSlide ? 'bg-white' : 'bg-gray-900'
          }`}
        ></div>
      ))}
    </div>
    
  </section>
  
  
  );
};

export default Home;