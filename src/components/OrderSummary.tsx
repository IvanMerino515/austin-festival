
import React from 'react';

interface Ticket {
  name: string;
  price: string;
  description: string;
}

interface OrderSummaryProps {
  ticket: Ticket | null;
  quantity: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ ticket, quantity, total }) => {
  if (!ticket) return null;

  return (
    <div className="bg-white/20 p-6 border-2 border-festival-dark sticky top-28">
      <h2 className="text-2xl tracking-tighter mb-6">ORDER SUMMARY</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-bold">{ticket.name}</div>
            <div className="text-sm">{ticket.description}</div>
          </div>
          <div>{ticket.price}</div>
        </div>
        
        <div className="flex justify-between">
          <span>Quantity:</span>
          <span>{quantity}</span>
        </div>
      </div>
      
      <div className="h-px bg-festival-dark my-4"></div>
      
      <div className="flex justify-between text-xl font-bold">
        <span>TOTAL:</span>
        <span>${total}</span>
      </div>
      
      <div className="mt-6 pt-6 border-t-2 border-festival-dark">
        <h3 className="font-bold mb-2">WHAT'S INCLUDED:</h3>
        <ul className="space-y-2 text-sm">
          <li>• Entry to all festival areas</li>
          <li>• Access to official aftershows</li>
          <li>• Commemorative festival wristband</li>
          <li>• Digital event program</li>
        </ul>
      </div>
    </div>
  );
};

export default OrderSummary;
