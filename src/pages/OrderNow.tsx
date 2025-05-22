import React from 'react';
import { Phone, AlignLeft, MapPin, Clock, BadgePercent } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import AnimatedSection from '../components/AnimatedSection';
import BackToTop from '../components/BackToTop';

const OrderNow = () => {
  const orderSteps = [
    {
      icon: <Phone size={22} />,
      title: "Contact Us",
      description: "WhatsApp us at 9767216191 or click the 'Order on WhatsApp' button."
    },
    {
      icon: <AlignLeft size={22} />,
      title: "Place Your Order",
      description: "Tell us what you'd like to order, including quantity and any special requests."
    },
    {
      icon: <MapPin size={22} />,
      title: "Provide Address",
      description: "Share your delivery location so we can calculate the delivery fee."
    },
    {
      icon: <Clock size={22} />,
      title: "Wait for Confirmation",
      description: "We'll confirm your order and provide an estimated delivery time."
    },
  ];

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="main-content">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-4">Order Now</h1>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Enjoy our delicious Hyderabadi cuisine delivered to your doorstep.
          </p>
        </AnimatedSection>

        {/* Order Process */}
        <div className="max-w-4xl mx-auto mb-16">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-8 text-center">How to Order</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {orderSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-lg shadow-md p-6 flex">
                  <div className="bg-yellow-400 text-black p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 mr-4">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Order Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
          <div className="bg-black text-white p-6">
            <h2 className="text-2xl font-bold mb-2">Ready to order?</h2>
            <p className="opacity-90">Contact us now to place your order.</p>
          </div>
          
          <div className="p-6">
            <div className="mb-6 space-y-4">
              <div className="flex items-start">
                <Phone className="text-yellow-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold">Phone Number</h3>
                  <p className="text-gray-600">9767216191</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-yellow-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">Bharatpur-01, Oralo Lions Chowk, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BadgePercent className="text-yellow-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold">Special Offers</h3>
                  <p className="text-gray-600">Delivery at Rs. 20/km, discounts on business/party orders</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <WhatsAppButton className="w-full text-center justify-center" />
              
              <a 
                href="tel:9767216191" 
                className="block w-full bg-black text-white text-center py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="space-y-4">
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-2">What are your delivery hours?</h3>
                <p className="text-gray-600">We deliver from 11:00 AM to 9:30 PM, seven days a week.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-2">How is the delivery fee calculated?</h3>
                <p className="text-gray-600">We charge Rs. 20 per kilometer from our restaurant location at Lions Chowk, Oralo – Bharatpur.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-2">What are the discounts for business/party orders?</h3>
                <p className="text-gray-600">We offer special discounts for large orders (over Rs. 5000) and corporate events. Please contact us directly for a customized quote.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-2">Do you accept online payment?</h3>
                <p className="text-gray-600">We currently accept cash on delivery. For other payment options, please discuss with us when placing your order.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <BackToTop/>
      </div>
    </div>
  );
};

export default OrderNow;