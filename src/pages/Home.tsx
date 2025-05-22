import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Award } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import AnimatedSection from '../components/AnimatedSection';
import BackToTop from '../components/BackToTop';
import hmb from '../assets/img/haidrabadi-matka-biryani.jpeg';
import gc from '../assets/img/mandi-biryani.jpeg';
import ml from '../assets/img/matka-lassi.jpeg';



const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-black/50 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hyderabadi Biryani"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <AnimatedSection delay={200}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              <span className="text-yellow-400">Hyderabadi </span> Dum<span> Biryani</span>
            </h1>
           
            <p className="text-xl md:text-2xl text-white mb-8">
              Authentic Hyderabadi Flavors in Bharatpur
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton className="text-lg" />
              <Link
                to="/menu"
                className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-medium px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center"
              >
                View Menu
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-white">
        <div className="main-content">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Our Signature Dishes</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <img
                  src={hmb}
                  alt="Chicken Matka Biryani"
                  className="w-full h-64 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Hyderabadi Matka Biryani</h3>
                  <p className="text-gray-600 mb-4">Traditional dum-cooked biryani served in an earthen pot</p>
                  <Link to="/menu" className="text-yellow-600 font-medium hover:text-yellow-700">
                    View Details →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <img
                  src={gc}
                  alt="Grilled Chicken"
                  className="w-full h-64 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Grilled Chicken</h3>
                  <p className="text-gray-600 mb-4">Perfectly seasoned and grilled to perfection</p>
                  <Link to="/menu" className="text-yellow-600 font-medium hover:text-yellow-700">
                    View Details →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <img
                  src={ml}
                  alt="Matka Lassi"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Matka Lassi</h3>
                  <p className="text-gray-600 mb-4">Refreshing yogurt drink with variety of flavors</p>
                  <Link to="/menu" className="text-yellow-600 font-medium hover:text-yellow-700">
                    View Details →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="main-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="mx-auto w-16 h-16 mb-6 bg-yellow-400 text-black rounded-full flex items-center justify-center">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                <p className="text-gray-600">Delivery available at Rs. 20/km anywhere in Bharatpur.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="mx-auto w-16 h-16 mb-6 bg-yellow-400 text-black rounded-full flex items-center justify-center">
                  <Award size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Authentic Taste</h3>
                <p className="text-gray-600">Traditional Hyderabadi recipes prepared with authentic spices.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="mx-auto w-16 h-16 mb-6 bg-yellow-400 text-black rounded-full flex items-center justify-center">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Special Discounts</h3>
                <p className="text-gray-600">Business and party orders get special discounted prices.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="main-content text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Craving Our Delicious Food?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Order now via WhatsApp and enjoy our authentic Hyderabadi cuisine delivered straight to your doorstep.
            </p>
            <WhatsAppButton className="mx-auto text-lg" message="Hi, I'd like to place an order for delivery!">
              Order for Delivery
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Home;