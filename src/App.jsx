import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import "D:/websites/restaurant/src/Style.css"
import AboutUs from './Components/AboutUs'
import Discover from './Components/Discover'
import Menu from './Components/Menu'
import BookTable from './Components/BookTable'
import CustomerReview from './Components/CustomerReview'
import SocialHandle from './Components/SocialHandle';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs/>
      <Discover/>
      <Menu/>
      <CustomerReview/>
      <BookTable/>
      <SocialHandle/>
      <Footer />
    </div>
  );
}

export default App;
