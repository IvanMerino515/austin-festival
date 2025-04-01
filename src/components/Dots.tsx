
import React, { useState, useEffect } from 'react';

interface DotsProps {
  position?: 'left' | 'right' | 'center';
  className?: string;
}

const Dots: React.FC<DotsProps> = ({
  position = 'left',
  className = ''
}) => {
  const [dots1, setDots1] = useState('................');
  const [dots2, setDots2] = useState('.................');
  const [dots3, setDots3] = useState('......');

  useEffect(() => {
    const animateDots = () => {
      const generateDots = (min: number, max: number) => {
        const length = Math.floor(Math.random() * (max - min + 1)) + min;
        return '.'.repeat(length);
      };

      setDots1(generateDots(8, 20));
      setDots2(generateDots(10, 25));
      setDots3(generateDots(4, 12));
    };

    animateDots();

    const interval = setInterval(animateDots, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-xl text-festival-dark ${className} ${position === 'right' ? 'text-right' : position === 'center' ? 'text-center' : 'text-left'}`}>
      <div>{dots1}</div>
      <div>{dots2}</div>
      <div>{dots3}</div>
    </div>
  );
};

export default Dots;
