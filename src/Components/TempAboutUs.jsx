import { useEffect, useRef } from "react";
import img from "../assets/Carou_2.jpg"
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



const AboutUs = () => {
 
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    // GSAP Animations for Image
    gsap.fromTo(
      imgRef.current,
      { x: '100%', opacity: 0 }, // Initial position for the image (right to left)
      {
        x: '0%',
        opacity: 1,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',  // Start the animation when the top of the section hits 80% of the viewport
          end: 'top 50%',    // Animation completes when the top of the section reaches the middle of the viewport
          scrub: true,       // Smooth scrolling effect
                 // The animation runs only once
        },
      }
    );

    // GSAP Animations for Text
    gsap.fromTo(
      textRef.current,
      { x: '-100%', opacity: 0 }, // Initial position for the text (left to right)
      {
        x: '0%',
        opacity: 1,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',   // Start the animation when the top of the section hits 80% of the viewport
          end: 'top 20%',     // Animation completes when the top of the section reaches the middle of the viewport
          scrub: true,        // Smooth scrolling effect
                // The animation runs only once
        },
      }
    );
  }, []);
    return (
      <section id="about-us" ref={sectionRef} className="h-screen flex flex-col md:flex-row mb-20">
        {/* Left side: Image */}
        <div className="md:w-1/3 w-full h-1/2 md:h-full p-16 about-img "ref={imgRef}>
          <img
            src={img} // Replace with your image path
            alt="Restaurant Interior"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Right side: About Us Section */}
        <div className="md:w-2/3 w-full h-1/2 md:h-full flex items-center  bg-gray-100  m-0 pl-7 about-text mt-8  " ref={textRef}>
          <div className="max-w-lg ">
            <h1 className="text-5xl font-bold mb-16 border-b-black ">About Us</h1>
            <h1 className="text-2xl  font-light mb-12 border-b-black  ">Discover Our Food</h1>
            <br/>
            
            <p className="text-lg text-gray-700 mb-4">
              Welcome to our restaurant, where we offer a delightful experience of
              culinary excellence combined with a warm and welcoming atmosphere.
              Our chefs craft each dish with passion, using fresh ingredients and
              innovative techniques to create unforgettable flavors.
            </p>
            <p className="text-lg text-gray-700">
              Whether  looking for a cozy place to dine with family or to
              celebrate a special occasion, we invite you to come and savor the
              exceptional dining experience we have to offer.
            </p>
            <p className="text-lg text-gray-700">
              Whether  looking for a cozy place to dine with family or to
              celebrate a special occasion, we invite you to come and savor the
              exceptional dining experience we have to offer.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;