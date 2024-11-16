// import "D:/websites/restaurant/src/Style.css"
// import logo from "D:/websites/restaurant/src/assets/logo.png"
 
// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//     return (
//       <>
      

//       <nav className="Navigation p-4 h-20  flex">
//              {/* Hamburger Icon for Mobile */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             <img
//               src={isOpen ? '/images/close-icon.png' : '/images/hamburger-icon.png'}
//               alt={isOpen ? 'Close Menu' : 'Open Menu'}
//               className="h-8 w-8"
//             />
//           </button>
//           </div>
        
//         <div className="container mx-auto flex justify-between items-center gap-8 ">
//           <img className="h-16 w-16 ml-24" src={logo} alt="img" />
//           <ul className="flex space-x-4 text-2xl ">
//             <li><a href='#about-us' className="text-white transition ">HOME</a></li>
//             <li><a href="#about-us" className="text-white ml-3 transition">ABOUT US</a></li>
//             <li><a href="#menu-item" className="text-white ml-3 transition">MENU</a></li>
//             <li><a href="#home" className="text-white ml-3 transition">GALLERY</a></li>
//             <li><a href="#menu" className="text-white ml-3 transition">CONTACT US</a></li>
//             <button className=" btn p-2 ml-3 text-xl ">ORDER US</button>
//           </ul>
//         </div>
//          {/* Dropdown Menu (Visible on mobile when hamburger is clicked) */}
//       {isOpen && (
//         <ul className="md:hidden bg-gray-700 text-white text-center">
//           <li className="py-2">
//             <a href="#home" className="hover:text-gray-300" onClick={toggleMenu}>Home</a>
//           </li>
//           <li className="py-2">
//             <a href="#about-us" className="hover:text-gray-300" onClick={toggleMenu}>About Us</a>
//           </li>
//           <li className="py-2">
//             <a href="#menu" className="hover:text-gray-300" onClick={toggleMenu}>Menu</a>
//           </li>
//           <li className="py-2">
//             <a href="#contact" className="hover:text-gray-300" onClick={toggleMenu}>Contact</a>
//           </li>
//         </ul>
//       )}
//       </nav>
      
//       </>
//     );
//   };
  
//   export default Navbar;
  
import  { useState } from 'react';
import "D:/websites/restaurant/src/Style.css"
import logo from "D:/websites/restaurant/src/assets/logo.png"
import ham from "D:/websites/restaurant/src/assets/ham.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="Navigation p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        
        <img className='h-16 w-16 ml-24' src={logo} alt="img" />
        

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <img
              src={isOpen ? ham: ham}
              alt={isOpen ? 'Close Menu' : 'Open Menu'}
              className="h-8 w-8"
            />
          </button>
        </div>

        {/* Links (Visible on larger screens) */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <a href="#home" className="transition">Home</a>
          </li>
          <li>
            <a href="#about-us" className="transition">About Us</a>
          </li>
          <li>
            <a href="#menu" className="transition">Menu</a>
          </li>
          <li>
            <a href="#contact" className="transition">Contact</a>
          </li>
        </ul>
      </div>

      {/* Dropdown Menu (Visible on mobile when hamburger is clicked) */}
      {isOpen && (
        <ul className="md:hidden tray text-white  text-center space-y-4">
          <li className="py-2">
            <a href="#home" className="transition" onClick={toggleMenu}>Home</a>
          </li>
          <li className="py-2">
            <a href="#about-us" className="transition" onClick={toggleMenu}>About Us</a>
          </li>
          <li className="py-2">
            <a href="#menu" className="transition" onClick={toggleMenu}>Menu</a>
          </li>
          <li className="py-2">
            <a href="#contact" className="transition" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
