
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Dots from '../components/Dots';

const Venues = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    return () => {
      setLoaded(false);
    };
  }, []);

  const venues = [
    {
      name: "WATERLOO PARK",
      address: "500 E 12th St, Austin, TX 78701",
      description: "Main festival grounds - All three days",
      coordinates: "30.2772° N, 97.7367° W"
    },
    {
      name: "EMPIRE CONTROL ROOM",
      address: "606 E 7th St, Austin, TX 78701",
      description: "Official aftershows - Friday & Saturday night",
      coordinates: "30.2676° N, 97.7371° W"
    },
    {
      name: "MOHAWK AUSTIN",
      address: "912 Red River St, Austin, TX 78701",
      description: "Official aftershows - All three nights",
      coordinates: "30.2700° N, 97.7360° W"
    },
    {
      name: "HOTEL VEGAS",
      address: "1502 E 6th St, Austin, TX 78702",
      description: "Official aftershows - Friday & Sunday night",
      coordinates: "30.2629° N, 97.7286° W"
    }
  ];

  return (
    <div className={`min-h-screen bg-festival-yellow font-jersey ${loaded ? 'animate-page-in' : ''}`}>
      <Header />
      
      <main className="px-6 pt-28 pb-16">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-festival-dark tracking-tighter mb-12 animate-float">
            [- VENUES *]
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            {venues.map((venue, index) => (
              <div key={index} className="border-2 border-festival-dark p-6 hover:bg-white/10 transition-all duration-300">
                <h2 className="text-2xl tracking-tighter mb-2">{venue.name}</h2>
                <p className="text-lg mb-1">{venue.address}</p>
                <p className="text-lg mb-3">{venue.description}</p>
                <div className="text-sm opacity-70">{venue.coordinates}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 mb-10">
            <h2 className="text-2xl tracking-tighter mb-4">NAVIGATION</h2>
            <div className="text-lg max-w-2xl">
              The festival takes place across multiple venues in downtown Austin. 
              All venues are within walking distance or a short ride from each other. 
              Official festival shuttles will run between Waterloo Park and the aftershow venues 
              from 9PM to 3AM each night.
            </div>
          </div>
          
          <Dots className="mt-10" />
          <Dots position="right" className="mt-6 hidden md:block" />
        </div>
      </main>
    </div>
  );
};

export default Venues;
