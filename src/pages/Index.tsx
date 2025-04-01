
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Dots from '../components/Dots';
import AnimatedBars from '../components/AnimatedBars';

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
    return () => {
      setLoaded(false);
    };
  }, []);
  
  return (
    <div className={`min-h-screen bg-festival-yellow font-mono overflow-hidden ${loaded ? 'animate-page-in' : ''}`}>
      <Header />
      
      <main className="px-6 h-[calc(100vh-80px)] flex flex-col justify-center pt-8 relative">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-center items-center w-full mb-8">
            <div className="text-3xl md:text-5xl text-festival-dark tracking-tighter animate-float">
              [-LEVITATION.FEST*]
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="md:col-span-1">
              <div className="text-md md:text-lg tracking-tighter text-festival-dark flex flex-col gap-2">
                <Link to="/lineup" className="menu-item">. 01 &gt; LINE UP</Link>
                <Link to="/tickets" className="menu-item">. 02 &gt; BUY TICKETS</Link>
                <Link to="/venues" className="menu-item">. 03 &gt; VENUE LOCATIONS</Link>
                <Link to="/faq" className="menu-item">. 04 &gt; INFO FAQ</Link>
              </div>
              
              <div className="text-md md:text-lg tracking-tighter text-festival-dark mt-4">
                3 DAY PASSES &amp; SINGLE DAY NX ON SALE NOW
              </div>
            </div>
            
            <div className="md:col-span-1">
              {/* Empty column for spacing */}
            </div>
            
            <div className="md:col-span-1">
              <div className="text-md md:text-lg text-festival-dark mb-4">
                <span className="block text-right">= 30.17278,</span>
                <span className="block text-right">-9778567</span>
              </div>
              
              <div className="text-md md:text-lg text-black mb-4">
                <span className="block text-right">25 26 27</span>
                <span className="block text-right">APRIL</span>
              </div>
              
              <Dots className="text-sm" />
            </div>
          </div>
          
          <Dots position="right" className="absolute right-6 top-24 hidden md:block" />
          <AnimatedBars position="right" className="absolute right-6 bottom-6 hidden md:block" />
        </div>
      </main>
    </div>
  );
};

export default Index;
