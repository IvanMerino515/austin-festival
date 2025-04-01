
import { useState } from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter an email address');
      return;
    }
    
    // Here you would typically send this to your API
    setMessage('Thanks for subscribing!');
    setEmail('');
    
    // Clear message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="mt-10">
      <div className="text-xl tracking-tighter">SIGN UP</div>
      
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-4">
        <div className="relative w-full sm:max-w-xs">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="----------------EMAIL"
            className="w-full py-2 bg-transparent border-b border-festival-dark text-xl tracking-tighter focus:outline-none"
          />
        </div>
        
        <button 
          type="submit"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`text-xl tracking-tighter ${isHovered ? 'animate-text-glitch' : ''} button-hover`}
        >
          -------------------SUBSCRIBE
        </button>
      </form>
      
      {message && (
        <div className="mt-2 text-festival-dark text-sm">
          {message}
        </div>
      )}
    </div>
  );
};

export default EmailSignup;
