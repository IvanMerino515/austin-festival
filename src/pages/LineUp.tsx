
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Dots from '../components/Dots';
import AnimatedBars from '../components/AnimatedBars';
import ArtistInfoDialog from '../components/ArtistInfoDialog';
import artistsData from '../data/artists';

const LineUp = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);

  useEffect(() => {
    setLoaded(true);
    return () => {
      setLoaded(false);
    };
  }, []);

  const artists = [
    "TAME IMPALA",
    "KING GIZZARD & THE LIZARD WIZARD",
    "FLYING LOTUS",
    "THUNDERCAT",
    "SLOWDIVE",
    "THE BLACK ANGELS",
    "WARPAINT",
    "BORIS",
    "SHAME",
    "DIIV",
    "MDOU MOCTAR",
    "CRUMB",
    "L'ECLAIR",
    "BLACK COUNTRY, NEW ROAD",
    "AUTOMATIC",
    "GODSPEED YOU! BLACK EMPEROR",
    "ELDER",
    "FRANKIE AND THE WITCH FINGERS",
    "NIGHT BEATS",
    "ACID DAD"
  ];

  const days = {
    "FRIDAY APRIL 25": artists.slice(0, 7),
    "SATURDAY APRIL 26": artists.slice(7, 14),
    "SUNDAY APRIL 27": artists.slice(14, 20)
  };

  const randomizeConsonants = (text: string) => {
    const consonants = 'BCDFGHJKLMNPQRSTVWXYZ';
    return text.split('').map(char => {
      const upperChar = char.toUpperCase();
      if (consonants.includes(upperChar)) {
        const randomConsonant = consonants[Math.floor(Math.random() * consonants.length)];
        return char === upperChar ? randomConsonant : randomConsonant.toLowerCase();
      }
      return char;
    }).join('');
  };

  const handleOpenArtistDialog = (artist: string) => {
    console.log("Opening dialog for artist:", artist);
    if (artistsData[artist]) {
      setSelectedArtist(artist);
    } else {
      console.error(`Artist data not found for: ${artist}`);
    }
  };

  const handleCloseArtistDialog = () => {
    console.log("Closing artist dialog");
    setSelectedArtist(null);
  };

  return (
    <div className={`min-h-screen bg-festival-yellow font-jersey ${loaded ? 'animate-page-in' : ''}`}>
      <Header />
      
      <main className="px-6 pt-28 pb-16 relative">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-festival-dark tracking-tighter mb-12 animate-float">
            [- LINE UP *]
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {Object.entries(days).map(([day, dayArtists], dayIndex) => (
              <div key={dayIndex} className="mb-10">
                <h2 className="text-2xl tracking-tighter mb-4">{day}</h2>
                
                <div className="flex flex-col gap-3">
                  {dayArtists.map((artist, index) => {
                    const artistRef = React.useRef(artist);
                    
                    return (
                      <div 
                        key={index} 
                        className="text-xl tracking-tighter hover:text-black transition-all cursor-pointer duration-300"
                        onClick={() => handleOpenArtistDialog(artist)}
                        onMouseEnter={(e) => {
                          if (!e.currentTarget) return;
                          const element = e.currentTarget;
                          let count = 0;
                          const maxCount = 10;
                          const interval = setInterval(() => {
                            if (count >= maxCount) {
                              clearInterval(interval);
                              if (element) element.textContent = artistRef.current;
                            } else {
                              if (element) element.textContent = randomizeConsonants(artistRef.current);
                              count++;
                            }
                          }, 50);
                          
                          e.currentTarget.setAttribute('data-interval', interval.toString());
                        }}
                        onMouseLeave={(e) => {
                          if (!e.currentTarget) return;
                          const intervalId = e.currentTarget.getAttribute('data-interval');
                          if (intervalId) {
                            clearInterval(parseInt(intervalId));
                          }
                          e.currentTarget.textContent = artistRef.current;
                        }}
                      >
                        {artist}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          <Dots className="mt-10" />
          <Dots position="right" className="mt-10 hidden md:block" />
          
          <AnimatedBars position="left" className="mt-10" />
          <AnimatedBars position="right" className="mt-10 hidden md:block" />
        </div>
      </main>

      {selectedArtist && artistsData[selectedArtist] && (
        <ArtistInfoDialog 
          isOpen={!!selectedArtist}
          onClose={handleCloseArtistDialog}
          artist={artistsData[selectedArtist]}
        />
      )}
    </div>
  );
};

export default LineUp;
