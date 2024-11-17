import insta from 'D:/websites/restaurant/src/assets/insta.png'
import fb from 'D:/websites/restaurant/src/assets/fb.png'
import twitter from 'D:/websites/restaurant/src/assets/twitter.png'
import phone from 'D:/websites/restaurant/src/assets/phone.png'
import "D:/websites/restaurant/src/Style.css"
const SocialHandles = () => {
  return (
    <section id="contact" className="py-12 bg-gray-100 social">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Follow Us</h2>
        
        {/* Social Media Images */}
        <div className="flex justify-center space-x-10 mb-8">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/yourrestaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300"
          >
            <img
              src={fb}// Update with your Facebook logo image path
              alt="Facebook"
              className="w-16 h-16 hover:opacity-80"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/yourrestaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300"
          >
            <img
              src={insta}// Update with your Instagram logo image path
              alt="Instagram"
              className="w-20 h-16 hover:opacity-80"
            />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/yourrestaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300"
          >
            <img
              src={twitter} // Update with your Twitter logo image path
              alt="Twitter"
              className="w-16 h-16 hover:opacity-80"
            />
          </a>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 text-lg text-gray-700">
          {/* Phone */}
          <div className="flex items-center justify-center space-x-3">
            <img src={phone} alt="Phone" className="w-6 h-6" />
            <span>+91 98765 43210</span>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center space-x-3">
            
            <a href="mailto:info@yourrestaurant.com" className="hover:text-gray-900  text-black transition duration-300">
              info@yourrestaurant.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialHandles;
