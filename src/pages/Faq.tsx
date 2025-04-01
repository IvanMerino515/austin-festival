
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Dots from '../components/Dots';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    return () => {
      setLoaded(false);
    };
  }, []);

  const faqs = [
    {
      question: "WHAT TIME DO GATES OPEN?",
      answer: "Festival gates open at 1:00 PM each day. The music starts at 2:00 PM on Friday and Saturday, and at 1:30 PM on Sunday."
    },
    {
      question: "IS THERE RE-ENTRY?",
      answer: "Yes, you can leave and re-enter the festival grounds on the same day with your wristband."
    },
    {
      question: "WHAT'S THE FOOD & DRINK SITUATION?",
      answer: "The festival features a curated selection of local Austin food vendors and craft beverage options. Vegetarian, vegan, and gluten-free options are available."
    },
    {
      question: "CAN I BRING A WATER BOTTLE?",
      answer: "Empty, reusable water bottles are allowed and encouraged. Free water refill stations are located throughout the festival grounds."
    },
    {
      question: "WHAT'S NOT ALLOWED INSIDE?",
      answer: "Outside food and drinks, drugs, weapons, professional cameras with detachable lenses, drones, and pets (except service animals) are not permitted."
    },
    {
      question: "IS THE FESTIVAL ACCESSIBLE?",
      answer: "Yes, all festival areas are wheelchair accessible, and ADA viewing platforms are available at all stages. Email access@levitationfest.com for more information."
    },
    {
      question: "HOW DO THE AFTERSHOWS WORK?",
      answer: "Aftershows are held at partner venues across downtown Austin. Your festival wristband grants you priority entry, but capacity is still limited. Arrive early for popular shows."
    },
    {
      question: "ARE THERE LOCKERS?",
      answer: "Yes, rental lockers with charging ports are available inside the festival. We recommend reserving one in advance through our website."
    }
  ];

  return (
    <div className={`min-h-screen bg-festival-yellow font-jersey ${loaded ? 'animate-page-in' : ''}`}>
      <Header />
      
      <main className="px-6 pt-28 pb-16">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-festival-dark tracking-tighter mb-12 animate-float">
            [- INFO FAQ *]
          </h1>
          
          <div className="max-w-3xl mb-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-festival-dark py-3">
                  <AccordionTrigger className="text-xl tracking-tighter hover:no-underline hover:text-black">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl tracking-tighter mb-4">CONTACT US</h2>
            <div className="text-lg mb-6">
              For additional questions or concerns, reach out to us at: <br />
              info@levitationfest.com
            </div>
          </div>
          
          <Dots className="mt-10" />
        </div>
      </main>
    </div>
  );
};

export default Faq;
