//  import "D:/websites/restaurant/src/Style.css"
//  import buffet from 'D:/websites/restaurant/src/assets/buffet.jpg'
// import dal from 'D:/websites/restaurant/src/assets/dal.jpg'
// import snacks from 'D:/websites/restaurant/src/assets/snacks.jpg'
// import SouthIndian from 'D:/websites/restaurant/src/assets/South.jpg'
// import thali from 'D:/websites/restaurant/src/assets/thali.jpg'
// import chicken from 'D:/websites/restaurant/src/assets/Butterchicken.jpg'
// const menuItems = [
//     { id: 1, name: 'Buffet', image: buffet },
//     { id: 2, name: 'Dal Makhni', image: dal },
//     { id: 3, name: 'Snacks', image: snacks },
//     { id: 4, name: 'Thali', image: thali },
//     { id: 5, name: 'Butter Chicken', image: chicken },
//     { id: 6, name: 'south Indian', image: SouthIndian},
//   ];
  
//   const Menu = () => {
//     return (

//         <>
//         <div id="menu" className=" menu h-full w-full bg-slate-500 p-32  ">
//         <div className="text-center mb-8">
//           <h2 className="text-5xl font-bold">Our Menu</h2>
//           <p className=" mt-4">Explore our delicious dishes</p>
//         </div>
//       <section id="menu" className=" py-12 border-8 	border-color: rgb(30 41 59); bg-white border-double ">
      
  
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 ">
//           {menuItems.map((item) => (
//             <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-60 object-cover   "
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2 text-black ">{item.name}</h3>
//                 <p className="text-gray-700">{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section> </div>
//         {/* Mobile Menu (sm and below) */}
//         <section id="menu-mobile" className="md:hidden block py-6 bg-white">
//           <div className="grid grid-cols-1 gap-4 px-4">
//             {menuItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-white shadow-lg rounded-lg overflow-hidden"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-40 object-cover" // Smaller image size for mobile
//                 />
//                 <div className="p-2">
//                   <h3 className="text-lg font-semibold mb-1 text-black">
//                     {item.name}
//                   </h3>
//                   <p className="text-gray-700">{item.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
      
      
      
//       </>
//     );
//   };
  
//   export default Menu;
import "/src/Style.css"
 import buffet from '../assets/buffet.jpg'
import dal from '../assets/dal.jpg'
import snacks from '../assets/snacks.jpg'
import SouthIndian from '../assets/South.jpg'
import thali from '../assets/thali.jpg'
import chicken from '../assets/Butterchicken.jpg'

const Menu = () => {
  // Sample data for menu items (you can replace this with actual data)
  const menuItems = [
   
          { id: 1, name: 'Buffet', image: buffet },
          { id: 2, name: 'Dal Makhni', image: dal },
          { id: 3, name: 'Snacks', image: snacks },
          { id: 4, name: 'Thali', image: thali },
          { id: 5, name: 'Butter Chicken', image: chicken },
          { id: 6, name: 'south Indian', image: SouthIndian},
        ];
  

  return (
    <>
      <div id="menu" className="menu h-full w-full bg-slate-500 p-32">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold">Our Menu</h2>
          <p className="mt-4">Explore our delicious dishes</p>
        </div>

        {/* Desktop/Larger Screen Menu (md and up) */}
        <section
          id="menu-desktop"
          className="hidden md:block py-12 border-8 border-color: rgb(30 41 59); bg-white border-double"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {item.name}
                  </h3>
                  <p className="text-gray-700">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile Menu (sm and below) */}
        <section
          id="menu-mobile"
          className="md:hidden block py-6 bg-white"
        >
          <div className="grid grid-cols-1 gap-4 px-4">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover" // Smaller image size for mobile
                />
                <div className="p-2">
                  <h3 className="text-lg font-semibold mb-1 text-black">
                    {item.name}
                  </h3>
                  <p className="text-gray-700">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Menu;
