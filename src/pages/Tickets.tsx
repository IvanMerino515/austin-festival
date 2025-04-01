
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Dots from '../components/Dots';
import { toast } from 'sonner';
import CheckoutForm from '../components/CheckoutForm';
import OrderSummary from '../components/OrderSummary';

const Tickets = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);
  const [checkoutStep, setCheckoutStep] = useState(0); // 0: select ticket, 1: checkout form, 2: confirmation
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    setLoaded(true);
    return () => {
      setLoaded(false);
    };
  }, []);
  
  const tickets = [{
    name: "3-DAY GENERAL ADMISSION",
    price: "$275",
    description: "Full access to all three days of the festival"
  }, {
    name: "FRIDAY SINGLE DAY",
    price: "$115",
    description: "General admission for Friday, April 25 only"
  }, {
    name: "SATURDAY SINGLE DAY",
    price: "$125",
    description: "General admission for Saturday, April 26 only"
  }, {
    name: "SUNDAY SINGLE DAY",
    price: "$115",
    description: "General admission for Sunday, April 27 only"
  }];
  
  const handleSelectTicket = (index: number) => {
    setSelectedTicket(index);
    toast.success(`${tickets[index].name} selected`);
  };
  
  const handleProceedToCheckout = () => {
    if (selectedTicket === null) {
      toast.error("Please select a ticket first");
      return;
    }
    setCheckoutStep(1);
  };
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };
  
  const handlePaymentSuccess = () => {
    setCheckoutStep(2);
    toast.success("Payment successful!");
  };
  
  const handleBackToTickets = () => {
    setCheckoutStep(0);
  };
  
  const handleStartOver = () => {
    setSelectedTicket(null);
    setQuantity(1);
    setCheckoutStep(0);
  };
  
  const getStepTitle = () => {
    switch (checkoutStep) {
      case 0:
        return "[- TICKETS *]";
      case 1:
        return "[- CHECKOUT *]";
      case 2:
        return "[- THANK YOU *]";
      default:
        return "[- TICKETS *]";
    }
  };
  
  const getPriceNumber = (priceString: string) => {
    return Number(priceString.replace('$', ''));
  };
  
  const calculateTotal = () => {
    if (selectedTicket === null) return 0;
    return getPriceNumber(tickets[selectedTicket].price) * quantity;
  };
  
  return (
    <div className={`min-h-screen bg-festival-yellow font-jersey ${loaded ? 'animate-page-in' : ''}`}>
      <Header />
      
      <main className="px-6 pt-28 pb-16">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-festival-dark tracking-tighter mb-12 animate-float">
            {getStepTitle()}
          </h1>
          
          {checkoutStep === 0 && (
            <div className="mb-10">
              <div className="text-xl max-w-2xl mb-6">
                3 DAY PASSES & SINGLE DAY TIX ON SALE NOW - ALL TICKETS INCLUDE ACCESS TO OFFICIAL AFTERSHOWS AT PARTICIPATING VENUES
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tickets.map((ticket, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleSelectTicket(index)} 
                    className={`p-6 border-2 border-festival-dark transition-all duration-300 cursor-pointer ${selectedTicket === index ? 'bg-festival-dark text-festival-yellow' : 'hover:bg-white/10'}`}
                  >
                    <div className="text-2xl tracking-tighter mb-2">{ticket.name}</div>
                    <div className="text-3xl font-bold mb-2">{ticket.price}</div>
                    <div className="text-lg tracking-tighter">{ticket.description}</div>
                  </div>
                ))}
              </div>
              
              {selectedTicket !== null && (
                <div className="mt-8 flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <OrderSummary 
                      ticket={tickets[selectedTicket]}
                      quantity={quantity}
                      total={calculateTotal()}
                    />
                    <div className="mt-4 flex items-center gap-4">
                      <span className="font-bold">Quantity:</span>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleQuantityChange(quantity - 1)}
                          className="w-8 h-8 bg-festival-dark text-festival-yellow flex items-center justify-center"
                          disabled={quantity <= 1}
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(quantity + 1)}
                          className="w-8 h-8 bg-festival-dark text-festival-yellow flex items-center justify-center"
                          disabled={quantity >= 10}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    onClick={handleProceedToCheckout}
                    className="bg-festival-dark text-festival-yellow p-4 text-xl tracking-tighter cursor-pointer hover:opacity-90 transition-opacity text-center w-full md:w-auto"
                  >
                    PROCEED TO CHECKOUT
                  </div>
                </div>
              )}
            </div>
          )}
          
          {checkoutStep === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <CheckoutForm onSubmit={handlePaymentSuccess} onBack={handleBackToTickets} />
              </div>
              <div className="lg:col-span-2">
                <OrderSummary 
                  ticket={selectedTicket !== null ? tickets[selectedTicket] : null}
                  quantity={quantity}
                  total={calculateTotal()}
                />
              </div>
            </div>
          )}
          
          {checkoutStep === 2 && (
            <div className="bg-white/20 p-8 border-2 border-festival-dark max-w-2xl mx-auto text-center">
              <div className="text-5xl mb-6 tracking-tighter">THANK YOU!</div>
              <div className="text-xl mb-8">
                Your order has been confirmed. You will receive your tickets via email shortly.
              </div>
              <div className="mb-8">
                <div className="text-lg font-bold mb-2">Order Details:</div>
                {selectedTicket !== null && (
                  <div className="mb-1">{quantity}x {tickets[selectedTicket].name}</div>
                )}
                <div className="text-xl font-bold mt-4">Total: ${calculateTotal()}</div>
              </div>
              <div 
                onClick={handleStartOver}
                className="bg-festival-dark text-festival-yellow p-4 text-xl tracking-tighter cursor-pointer hover:opacity-90 transition-opacity inline-block"
              >
                BACK TO TICKETS
              </div>
            </div>
          )}
          
          <Dots className="mt-10" />
        </div>
      </main>
    </div>
  );
};

export default Tickets;
