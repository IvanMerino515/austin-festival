
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CreditCard, Check } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(3, {
    message: "Full name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  zipCode: z.string().min(5, {
    message: "ZIP code must be at least 5 characters.",
  }),
  cardNumber: z.string().min(16, {
    message: "Card number must be at least 16 digits.",
  }).max(16),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Expiry date must be in MM/YY format.",
  }),
  cvv: z.string().min(3, {
    message: "CVV must be at least 3 digits.",
  }).max(4),
});

interface CheckoutFormProps {
  onSubmit: () => void;
  onBack: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit, onBack }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Payment form submitted:", values);
    
    setTimeout(() => {
      onSubmit();
    }, 1000);
  };

  const formatCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    form.setValue('cardNumber', value);
  };

  const formatExpiryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    form.setValue('expiryDate', value);
  };

  return (
    <div className="bg-white/20 p-6 border-2 border-festival-dark">
      <h2 className="text-2xl tracking-tighter mb-6 flex items-center gap-2">
        PAYMENT DETAILS <CreditCard className="w-6 h-6" />
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg tracking-tighter">FULL NAME</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white border-festival-dark" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg tracking-tighter">EMAIL</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" className="bg-white border-festival-dark" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg tracking-tighter">ADDRESS</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white border-festival-dark" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg tracking-tighter">CITY</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white border-festival-dark" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg tracking-tighter">ZIP CODE</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white border-festival-dark" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="h-px bg-festival-dark my-6"></div>
          
          <h3 className="text-xl tracking-tighter mb-4">CREDIT CARD INFORMATION</h3>
          
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg tracking-tighter">CARD NUMBER</FormLabel>
                <FormControl>
                  <Input 
                    value={field.value}
                    onChange={(e) => formatCardNumber(e)}
                    className="bg-white border-festival-dark"
                    placeholder="1234 5678 9012 3456"
                    maxLength={16}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="expiryDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg tracking-tighter">EXPIRY DATE</FormLabel>
                  <FormControl>
                    <Input 
                      value={field.value}
                      onChange={(e) => formatExpiryDate(e)}
                      className="bg-white border-festival-dark" 
                      placeholder="MM/YY"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg tracking-tighter">CVV</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="password" 
                      className="bg-white border-festival-dark" 
                      maxLength={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={onBack}
              className="p-4 border-2 border-festival-dark text-festival-dark text-xl tracking-tighter cursor-pointer hover:bg-white/20 transition-colors md:flex-1"
            >
              BACK
            </button>
            <button
              type="submit"
              className="p-4 bg-festival-dark text-festival-yellow text-xl tracking-tighter cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center gap-2 md:flex-1"
            >
              COMPLETE PAYMENT <Check className="w-5 h-5" />
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CheckoutForm;
