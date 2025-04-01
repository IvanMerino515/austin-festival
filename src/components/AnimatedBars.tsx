
import React, { useState, useEffect } from 'react';

interface AnimatedBarsProps {
  position?: 'left' | 'right' | 'center';
  className?: string;
}

const AnimatedBars: React.FC<AnimatedBarsProps> = ({ position = 'left', className = '' }) => {
  const [bars, setBars] = useState('||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');

  useEffect(() => {
    const animateBars = () => {
      const length = Math.floor(Math.random() * (100 - 40 + 1)) + 40;
      setBars('|'.repeat(length));
    };

    animateBars();
    const interval = setInterval(animateBars, 150);
    return () => clearInterval(interval);
  }, []);

  const positionClass = position === 'right' ? 'text-right' : position === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`text-xl text-festival-dark tracking-tighter ${className} ${positionClass}`}>
      <span className="block transition-all duration-300 ease-in-out text-[2em] leading-[0.3] tracking-tighter animate-pulse-subtle">
        {bars}
      </span>
    </div>
  );
};

export default AnimatedBars;
