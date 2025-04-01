
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Dots from "../components/Dots";

const NotFound = () => {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    return () => {
      setLoaded(false);
    };
  }, [location.pathname]);

  return (
    <div className={`min-h-screen bg-festival-yellow font-jersey ${loaded ? 'animate-page-in' : ''}`}>
      <Header />
      
      <main className="px-6 pt-28 pb-16 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl text-festival-dark tracking-tighter mb-6 animate-float">
            [- 404 *]
          </h1>
          
          <Dots position="center" className="mb-6" />
          
          <p className="text-2xl text-festival-dark mb-8">
            THIS PAGE DOESN'T EXIST IN OUR DIMENSION
          </p>
          
          <Link 
            to="/" 
            className="text-xl tracking-tighter bg-festival-dark text-festival-yellow px-6 py-3 hover:bg-opacity-90 transition-all duration-300"
          >
            RETURN TO HOME BASE
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
