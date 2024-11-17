import { useRef } from 'react';
import buffet from 'D:/websites/restaurant/src/assets/buffet.jpg'
import dal from 'D:/websites/restaurant/src/assets/dal.jpg'
import snacks from 'D:/websites/restaurant/src/assets/snacks.jpg'
import SouthIndian from 'D:/websites/restaurant/src/assets/South.jpg'
import thali from 'D:/websites/restaurant/src/assets/thali.jpg'
import chicken from 'D:/websites/restaurant/src/assets/Butterchicken.jpg'
import "/src/Style.css"
const dishes = [
  { id: 1, name: 'Buffet', image:buffet },
  { id: 2, name: 'Dal Makhni', image: dal },
  { id: 3, name: 'Snacks', image: snacks },
  { id: 4, name: 'Thali', image: thali },
  { id: 5, name: 'Butter Chicken', image: chicken },
  { id: 6, name: 'south Indian', image: SouthIndian},
];

const FoodCarousel = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    
    <section id="discover-food " className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Lets Discover Food</h2>
        <p className="text-gray-600 mt-4">Scroll through our delicious dishes!</p>
      </div>

      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full z-10"
        >
          &lt;
        </button>

        {/* Scrollable dishes container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-scroll scrollbar-hide px-8"
          style={{ scrollBehavior: 'smooth' }}
        >
          {dishes.map((dish) => (
            <div key={dish.id} className="min-w-[300px] flex-shrink-0">
              <div className="h-56 w-72 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-center">{dish.name}</h3>
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full z-10"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default FoodCarousel;
