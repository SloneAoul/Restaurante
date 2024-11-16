import { useState } from 'react';
import img from "D:/websites/restaurant/src/assets/left-back.jpg"
import "D:/websites/restaurant/src/Style.css"


const reviews = [
  {
    id: 1,
    name: 'Rahul Sharma',
    review: 'The butter chicken was absolutely mouth-watering! The naan was soft and paired perfectly with the rich gravy.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Priya Verma',
    review: 'I loved the paneer tikka! The spices were spot on, and the mint chutney was refreshing. Highly recommended!',
    stars: 4,
  },
  {
    id: 3,
    name: 'Amit Patel',
    review: 'The biryani was fragrant and flavorful. The raita on the side added a great balance. One of the best I’ve had!',
    stars: 5,
  },
];

const CustomerReview = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prevReview) =>
      prevReview === reviews.length - 1 ? 0 : prevReview + 1
    );
  };

  const prevReview = () => {
    setCurrentReview((prevReview) =>
      prevReview === 0 ? reviews.length - 1 : prevReview - 1
    );
  };

  const renderStars = (stars) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-yellow-500 text-xl">
        {index < stars ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <section id="customer-review" className="py-0 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Static Food Image */}
        <div className="h-full">
          <img
            src={img} // Your static food image here
            alt="Static Dish"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Review Section - Carousel */}
        <div className="p-8 text-white">
          <h2 className="text-4xl font-bold mb-6">Customer Reviews</h2>
          <div className="mb-4">
            {/* Star Rating */}
            <div className="flex">
              {renderStars(reviews[currentReview].stars)}
            </div>
          </div>
          <p className="text-lg italic mb-4">
            {reviews[currentReview].review}
          </p>
          
          <p className="comment">- {reviews[currentReview].name}</p>

          {/* Carousel Controls */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevReview}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg"
            >
              &lt; 
            </button>
            <button
              onClick={nextReview}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg"
            >
               &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
