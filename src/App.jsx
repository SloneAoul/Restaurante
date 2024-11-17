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
import { useEffect, useState } from 'react';
import LoadingScreen from './Components/LoadingScreen'


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time (e.g., fetching data or loading assets)
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading screen after 3 seconds
    }, 4000);

    // Clean up the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {isLoading ? (
        // Show loading screen when isLoading is true
        <LoadingScreen />
      ) : (
        // Once loading is done, show the actual content
        <div>
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
      )}
    
    </>
  );
}

export default App;
