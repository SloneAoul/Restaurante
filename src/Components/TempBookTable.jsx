import "D:/websites/restaurant/src/Style.css"

const BookTable = () => {
  return (
    <section className="py-16 book ">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Table Now</h2>
      <p className="text-lg md:text-xl mb-8">Experience the best dining experience with us. Reserve your table online and enjoy a delightful meal.</p>
      <a
              href="#order"
              className="orderBtn mt-4 px-6 py-3  text-xl font-semibold rounded-lg  transition duration-300"
              style={{ zIndex: 10 }} // Ensure the button is on top
            >
              Book Now
            </a>
    </div>
  </section>
  )
}

export default BookTable