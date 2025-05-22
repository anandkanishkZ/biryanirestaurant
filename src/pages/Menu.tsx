import React, { useState } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import AnimatedSection from '../components/AnimatedSection';
import BackToTop from '../components/BackToTop';

// Import images
import HaidrabadiMatkaBiryani from '../assets/img/haidrabadi-matka-biryani.jpeg';
import MuttonBiryani from '../assets/img/15.png';
import VegBiryani from '../assets/img/dum-biryani.jpeg';
import EggBiryani from '../assets/img/10.png';
import PaneerBiryani from '../assets/img/11.png';
import GrilledChickenImg from '../assets/img/grilled-chicken.jpg';
import GrilledChickenRice from '../assets/img/mandi-biryani.jpeg';
import MuttonMandi from '../assets/img/5.jpeg';
import HandiChicken from '../assets/img/6.jpg';
import HandiMutton from '../assets/img/7.jpg';
import BiryaniRice2 from '../assets/img/8.jpeg';
import LassiPlain from '../assets/img/12.png';
import LassiKesar from '../assets/img/13.png';
import LassiKaju from '../assets/img/14.webp';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string; // Type remains string for external URLs, but we'll use imported variables for local images
  prices: {
    single?: number;
    double?: number;
    family?: number;
    jumbo?: number;
    halfKg?: number;
    oneKg?: number;
  };
  category: string;
}

interface Category {
  id: string;
  name: string;
}

const Menu = () => {
  const categories: Category[] = [
    { id: 'biryani', name: 'Biryani' },
    { id: 'grilled', name: 'Grilled & Mandi' },
    { id: 'curries', name: 'Handi Curries' },
    { id: 'veg', name: 'Vegetarian Options' },
    { id: 'rice', name: 'Additional Rice' },
    { id: 'lassi', name: 'Matka Lassi' },
  ];

  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);

  const menuItems: MenuItem[] = [
    {
      id: 'chicken-matka-biryani',
      name: 'Chicken Matka Biryani',
      description: 'Traditional dum-cooked chicken biryani served in an earthen pot',
      image: HaidrabadiMatkaBiryani, // Use imported image
      prices: {
        single: 350,
        double: 650,
        family: 1250,
        jumbo: 1800,
      },
      category: 'biryani',
    },
    {
      id: 'mutton-matka-biryani',
      name: 'Mutton Matka Biryani',
      description: 'Tender mutton dum biryani in a traditional matka',
      image: MuttonBiryani, // Use imported image
      prices: {
        single: 450,
        double: 900,
        family: 1750,
        jumbo: 2650,
      },
      category: 'biryani',
    },
    {
      id: 'veg-matka-biryani',
      name: 'Veg Matka Biryani',
      description: 'Vegetarian biryani cooked in a matka',
      image: VegBiryani, // Use imported image
      prices: {
        double: 500,
      },
      category: 'veg',
    },
    {
      id: 'egg-matka-biryani',
      name: 'Egg Matka Biryani',
      description: 'Egg biryani cooked in a matka',
      image: EggBiryani, // Use imported image
      prices: {
        double: 500,
      },
      category: 'veg',
    },
    {
      id: 'paneer-matka-biryani',
      name: 'Paneer Matka Biryani',
      description: 'Paneer biryani cooked in a matka',
      image: PaneerBiryani, // Use imported image
      prices: {
        double: 600,
      },
      category: 'veg',
    },
    {
      id: 'grilled-chicken',
      name: 'Grilled Chicken',
      description: 'Full grilled chicken',
      image: GrilledChickenImg, // Use imported image
      prices: {
        oneKg: 1000,
      },
      category: 'grilled',
    },
    {
      id: 'grilled-chicken-rice',
      name: 'Grilled Chicken + Rice',
      description: 'Grilled chicken served with rice',
      image: GrilledChickenRice, // Use imported image
      prices: {
        double: 1350,
        family: 1550,
        jumbo: 1750,
      },
      category: 'grilled',
    },
    {
      id: 'mutton-mandi',
      name: 'Mutton Mandi',
      description: 'Traditional mutton mandi served with aromatic rice',
      image: MuttonMandi, // Use imported image
      prices: {
        double: 1100,
        family: 2100,
      },
      category: 'grilled',
    },
    {
      id: 'handi-chicken',
      name: 'Handi Chicken Curry',
      description: 'Handi chicken curry',
      image: HandiChicken, // Use imported image
      prices: {
        halfKg: 700,
        oneKg: 1250,
      },
      category: 'curries',
    },
    {
      id: 'handi-mutton',
      name: 'Handi Mutton Curry',
      description: 'Handi mutton curry',
      image: HandiMutton, // Use imported image
      prices: {
        halfKg: 1200,
        oneKg: 2250,
      },
      category: 'curries',
    },
    {
      id: 'biryani-rice-1',
      name: 'Additional Biryani Rice (1 Person)',
      description: 'Extra biryani rice for 1 person',
      image: VegBiryani, // Reusing imported image
      prices: {
        single: 200,
      },
      category: 'rice',
    },
    {
      id: 'biryani-rice-2',
      name: 'Additional Biryani Rice (2 Person)',
      description: 'Extra biryani rice for 2 persons',
      image: BiryaniRice2, // Use imported image
      prices: {
        double: 380,
      },
      category: 'rice',
    },
    {
      id: 'lassi-plain',
      name: 'Matka Lassi Plain',
      description: 'Plain matka lassi',
      image: LassiPlain, // Use imported image
      prices: {
        single: 130,
      },
      category: 'lassi',
    },
    {
      id: 'lassi-kesar',
      name: 'Matka Lassi Kesar',
      description: 'Kesar matka lassi',
      image: LassiKesar, // Use imported image
      prices: {
        single: 150,
      },
      category: 'lassi',
    },
    {
      id: 'lassi-kaju',
      name: 'Matka Lassi Kaju',
      description: 'Kaju matka lassi',
      image: LassiKaju, // Use imported image
      prices: {
        single: 150,
      },
      category: 'lassi',
    },
    {
      id: 'lassi-badam',
      name: 'Matka Lassi Badam',
      description: 'Badam matka lassi',
      image: 'https://images.pexels.com/photos/4051534/pexels-photo-4051534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      prices: {
        single: 150,
      },
      category: 'lassi',
    },
    {
      id: 'lassi-chocolate',
      name: 'Matka Lassi Chocolate',
      description: 'Chocolate matka lassi',
      image: 'https://images.pexels.com/photos/4051534/pexels-photo-4051534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      prices: {
        single: 150,
      },
      category: 'lassi',
    },
    {
      id: 'lassi-mix-dry-fruits',
      name: 'Matka Lassi Mix Dry Fruits',
      description: 'Mix dry fruits matka lassi',
      image: 'https://images.pexels.com/photos/4051534/pexels-photo-4051534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      prices: {
        single: 180,
      },
      category: 'lassi',
    },
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="main-content">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-4">Our Menu</h1>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Authentic Hyderabadi cuisine prepared with traditional spices and cooking methods.
          </p>
        </AnimatedSection>

        {/* Categories Tabs */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex space-x-2 min-w-max md:justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 100}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="w-full" style={{ aspectRatio: '4/3', background: '#f3f4f6' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                    style={{ display: 'block', maxHeight: '350px', margin: '0 auto' }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Pricing Options:</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                      {item.prices.single && (
                        <>
                          <div className="text-gray-600">Single:</div>
                          <div className="font-medium">Rs. {item.prices.single}</div>
                        </>
                      )}
                      {item.prices.double && (
                        <>
                          <div className="text-gray-600">Double:</div>
                          <div className="font-medium">Rs. {item.prices.double}</div>
                        </>
                      )}
                      {item.prices.family && (
                        <>
                          <div className="text-gray-600">Family:</div>
                          <div className="font-medium">Rs. {item.prices.family}</div>
                        </>
                      )}
                      {item.prices.jumbo && (
                        <>
                          <div className="text-gray-600">Jumbo:</div>
                          <div className="font-medium">Rs. {item.prices.jumbo}</div>
                        </>
                      )}
                      {item.prices.halfKg && (
                        <>
                          <div className="text-gray-600">1/2 KG:</div>
                          <div className="font-medium">Rs. {item.prices.halfKg}</div>
                        </>
                      )}
                      {item.prices.oneKg && (
                        <>
                          <div className="text-gray-600">1 KG:</div>
                          <div className="font-medium">Rs. {item.prices.oneKg}</div>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <WhatsAppButton 
                    message={`Hi, I'd like to order ${item.name}.`} 
                    className="w-full"
                  >
                    Order Now
                  </WhatsAppButton>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Allergy Notice */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md max-w-3xl mx-auto">
          <p className="text-yellow-700">
            <span className="font-bold">Allergy Notice:</span> Please alert your server about any food allergies before ordering.
          </p>
        </div>
        <BackToTop/>
      </div>
    </div>
  );
};

export default Menu;