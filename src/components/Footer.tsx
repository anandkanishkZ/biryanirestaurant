import React from 'react';
import { Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import TikTokPng from '../assets/img/tik-tok.png';

// const TiktokIcon = ({ size = 20, className = '' }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     fill="none"
//     viewBox="0 0 24 24"
//     className={className}
//   >
//     <path
//       fill="currentColor"
//       d="M17.5 2A1.5 1.5 0 0 0 16 3.5v.25c0 3.1 2.52 5.62 5.62 5.62h.13V12a8 8 0 1 1-8-8h.25V7.5h-.25A4.5 4.5 0 1 0 16 12v-7.5A1.5 1.5 0 0 0 17.5 2Z"
//     />
//   </svg>
// );

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="main-content py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400">Biryani Restaurant</h3>
            <p className="text-gray-300">Authentic Hyderabadi Flavors in Bharatpur</p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=61559662451387" className="text-white hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/hydrabadidum/" className="text-white hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@dumbiryani91" className="text-white hover:text-yellow-400 transition-colors">
                <span style={{
                  display: 'inline-block',
                  width: 20,
                  height: 20,
                  position: 'relative',
                  verticalAlign: 'middle',
                }}>
                  <img 
                    src={TikTokPng} 
                    alt="TikTok" 
                    width={20} 
                    height={20} 
                    style={{
                      filter: 'brightness(0) invert(1)', // makes the icon white
                      width: '100%',
                      height: '100%',
                      display: 'block',
                    }} 
                  />
                </span>
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <Phone size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
              <p>9767216191</p>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
              <p>Bharatpur-01, Oralo Lions Chowk, Nepal</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400">Opening Hours</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>Monday - Friday</div>
              <div>10:00 AM - 10:00 PM</div>
              <div>Saturday - Sunday</div>
              <div>10:00 AM - 11:00 PM</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Biryani Restaurant – Hyderabadi Dum Biryani. All rights reserved.</p>
          <p className="mt-2 text-sm"> Developed by <a href="https://zwickytechnology.com" target="_blank">Zwicky Technology </a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;