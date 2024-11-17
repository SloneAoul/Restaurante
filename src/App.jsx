import Navbar from './Components/TempNavbar';
import Home from './Components/TempHome';
import Footer from './Components/TempFooter';
import "/src/Style.css"
import AboutUs from './Components/TempAboutUs'
import Discover from './Components/TempDiscover'
import Menu from './Components/TempMenu'
import BookTable from './Components/TempBookTable'
import CustomerReview from './Components/TempCustomerReview'
import SocialHandle from './Components/TempSocialHandle';
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
