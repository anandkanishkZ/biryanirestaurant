import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import AnimatedSection from '../components/AnimatedSection';
import BackToTop from '../components/BackToTop';

const About = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="main-content px-4 sm:px-6 lg:px-8">
        {/* About Us Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl">
              About <span className="text-yellow-500">Biryani Restaurant</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the heart and soul behind our authentic Hyderabadi cuisine, crafted with passion and tradition.
            </p>
          </div>
        </AnimatedSection>

        {/* Our Story Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
            <div className="md:flex">
              <div className="md:w-1/2 relative">
                <img
                  src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Restaurant ambience"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="md:w-1/2 p-10 lg:p-12">
                <AnimatedSection>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                     Our journey began with a simple dream: to bring the rich, aromatic flavors of Hyderabadi Dum Biryani to the heart of Nepal. Inspired by the bustling streets of Hyderabad, where spices tell stories and every dish is a celebration, we set out to recreate that magic in Bharatpur.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our signature Matka Biryani is the cornerstone of our menu, slow-cooked in traditional earthen pots to capture the essence of authentic Hyderabadi cuisine. Each grain of rice, infused with hand-ground spices and love, reflects our commitment to quality and tradition. From our family to yours, we invite you to savor the taste of heritage.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Nestled in Lions Chowk, Oralo – Bharatpur, Yellow and Black is more than a restaurant—it’s a culinary bridge between cultures. Our chefs, trained in the art of Hyderabadi cooking, pour their expertise into every dish, ensuring an unforgettable dining experience that warms the heart and soul.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Join us to explore the vibrant flavors of Hyderabad, right here in Nepal. Whether it’s a family gathering or a quiet meal, we promise an experience that’s as authentic as it is delightful.
                  </p>
                </AnimatedSection>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-500 rounded-br-full opacity-80"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-500 rounded-tl-full opacity-80"></div>
          </div>
        </div>

        {/* Our Values */}
        <div className="max-w-5xl mx-auto mb-20">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.38a48.474 48.474 0 0 0-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Authenticity</h3>
                <p className="text-gray-600 leading-relaxed">We preserve the true essence of Hyderabadi cuisine with traditional recipes and time-honored techniques.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Quality</h3>
                <p className="text-gray-600 leading-relaxed">We source the finest ingredients and uphold rigorous standards to ensure every bite is perfection.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Customer Satisfaction</h3>
                <p className="text-gray-600 leading-relaxed">We go above and beyond to create memorable dining experiences for every guest.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Menu Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Menu</h2>
          </AnimatedSection>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Chicken Matka Biryani */}
              <div>
                <h3 className="font-bold text-xl text-yellow-600 mb-4">Chicken Matka Biryani</h3>
                <ul className="text-gray-700 mb-6">
                  <li className="flex justify-between border-b py-1"><span>Single (1 Person)</span><span>Rs 350</span></li>
                  <li className="flex justify-between border-b py-1"><span>Double (2 Person)</span><span>Rs 650</span></li>
                  <li className="flex justify-between border-b py-1"><span>Family (4 Person)</span><span>Rs 1250</span></li>
                  <li className="flex justify-between border-b py-1"><span>Jambo (6 Person)</span><span>Rs 1800</span></li>
                </ul>
                <h3 className="font-bold text-xl text-yellow-600 mb-4 mt-8">Mutton Matka Biryani</h3>
                <ul className="text-gray-700 mb-6">
                  <li className="flex justify-between border-b py-1"><span>Single (1 Person)</span><span>Rs 450</span></li>
                  <li className="flex justify-between border-b py-1"><span>Double (2 Person)</span><span>Rs 900</span></li>
                  <li className="flex justify-between border-b py-1"><span>Family (4 Person)</span><span>Rs 1750</span></li>
                  <li className="flex justify-between border-b py-1"><span>Jambo (6 Person)</span><span>Rs 2650</span></li>
                </ul>
                <h3 className="font-bold text-xl text-yellow-600 mb-4 mt-8">Veg Matka Biryani</h3>
                <ul className="text-gray-700 mb-6">
                  <li className="flex justify-between border-b py-1"><span>Veg (2 Person)</span><span>Rs 500</span></li>
                  <li className="flex justify-between border-b py-1"><span>Egg (2 Person)</span><span>Rs 500</span></li>
                  <li className="flex justify-between border-b py-1"><span>Paneer (2 Person)</span><span>Rs 600</span></li>
                </ul>
              </div>
              {/* Grilled Chicken + Mandi, Mutton Mandi, Handi Chicken, Handi Mutton, Rice, Lassi */}
              <div>
                <h3 className="font-bold text-xl text-yellow-600 mb-4">Grilled Chicken + Mandi</h3>
                <ul className="text-gray-700 mb-6">
                  <li className="flex justify-between border-b py-1"><span>Grilled Chicken Full</span><span>Rs 1000</span></li>
                  <li className="flex justify-between border-b py-1"><span>Grilled Chicken + Rice (2 Person)</span><span>Rs 1350</span></li>
                  <li className="flex justify-between border-b py-1"><span>Grilled Chicken + Rice (4 Person)</span><span>Rs 1550</span></li>
                  <li className="flex justify-between border-b py-1"><span>Grilled Chicken + Rice (6 Person)</span><span>Rs 1750</span></li>
                </ul>
                <h3 className="font-bold text-xl text-yellow-600 mb-4 mt-8">Mutton Mandi</h3>
                <ul className="text-gray-700 mb-6">
                  <li className="flex justify-between border-b py-1"><span>Mutton Mandi Half (2 Person)</span><span>Rs 1100</span></li>
                  <li className="flex justify-between border-b py-1"><span>Mutton Mandi Full (4 Person)</span><span>Rs 2100</span></li>
                </ul>
                <h3 className="font-bold text-xl text-yellow-600 mb-4 mt-8">Handi Chicken Curry</h3>
                <ul className="text-gray-700 mb-6">
                  <li className="flex justify-between border-b py-1"><span>Handi Chicken 1/2 KG</span><span>Rs 700</span></li>
                  <li className="flex justify-between border-b py-1"><span>Handi Chicken 1 KG</span><span>Rs 1250</span></li>
                </ul>
                <h3 className="font-bold text-xl text-yellow-600 mb-4 mt-8">Handi Mutton Curry</h3>
                <ul className="text-gray-700 mb-6">
                  <li className="flex justify-between border-b py-1"><span>Handi Mutton 1/2 KG</span><span>Rs 1200</span></li>
                  <li className="flex justify-between border-b py-1"><span>Handi Mutton 1 KG</span><span>Rs 2250</span></li>
                </ul>
                <h3 className="font-bold text-xl text-yellow-600 mb-4 mt-8">Additional Biryani Rice</h3>
                <ul className="text-gray-700 mb-6">
                  <li className="flex justify-between border-b py-1"><span>Rice (1 Person)</span><span>Rs 200</span></li>
                  <li className="flex justify-between border-b py-1"><span>Rice (2 Person)</span><span>Rs 380</span></li>
                </ul>
                <h3 className="font-bold text-xl text-yellow-600 mb-4 mt-8">Matka Lassi</h3>
                <ul className="text-gray-700 mb-6">
                  <li className="flex justify-between border-b py-1"><span>Plain (1 Person)</span><span>Rs 130</span></li>
                  <li className="flex justify-between border-b py-1"><span>Kesar (1 Person)</span><span>Rs 150</span></li>
                  <li className="flex justify-between border-b py-1"><span>Kaju (1 Person)</span><span>Rs 150</span></li>
                  <li className="flex justify-between border-b py-1"><span>Badam (1 Person)</span><span>Rs 150</span></li>
                  <li className="flex justify-between border-b py-1"><span>Chocolate (1 Person)</span><span>Rs 150</span></li>
                  <li className="flex justify-between border-b py-1"><span>Mix Dry Fruits (1 Person)</span><span>Rs 180</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">WhatsApp for order: <a href="https://wa.me/9779767216191" className="text-green-600 underline">9767216191</a></p>
              <p className="text-gray-700">Delivery charge: <span className="font-semibold">20 Rupees per KM</span></p>
              <p className="text-yellow-700 font-semibold mt-2">Get Special Discount on Business Orders/Party Orders</p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Visit Us</h2>
          </AnimatedSection>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8517348761598!2d84.42603000000001!3d27.690977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb0065a3d291%3A0xc8565a39368dd6cb!2sHyderabadi%20Dum%20Biryani!5e0!3m2!1sen!2snp!4v1747663053806!5m2!1sen!2snp"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hyderabadi Dum Biryani Location"
                className="rounded-t-2xl"
              ></iframe>
            </div>
            <div className="p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500 mr-3 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Address:</h3>
                    <p className="text-gray-600">Bharatpur-01, Oralo Lions Chowk, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500 mr-3 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Opening Hours:</h3>
                    <p className="text-gray-600">Monday - Friday: 10:00 AM - 10:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <WhatsAppButton message="Hi, I'd like to know more about Yellow and Black!" />
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <BackToTop />
      </div>
    </div>
  );
};

export default About;