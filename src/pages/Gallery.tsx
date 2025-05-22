/*
import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import BackToTop from '../components/BackToTop';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  return null;
};

export default Gallery;
*/

// Temporary placeholder component
// import React from 'react';
// const Gallery = () => null;
// export default Gallery;

// interface GalleryImage {
//   id: string;
//   src: string;
//   alt: string;
//   category: string;
// }

// const Gallery = () => {
//   const categories = [
//     { id: 'all', name: 'All' },
//     { id: 'biryani', name: 'Biryani' },
//     { id: 'grilled', name: 'Grilled & Mandi' },
//     { id: 'others', name: 'Others' },
//   ];

//   const [activeCategory, setActiveCategory] = useState('all');
//   const [lightboxImage, setLightboxImage] = useState<string | null>(null);

//   const galleryImages: GalleryImage[] = [
//     {
//       id: '1',
//       src: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       alt: 'Chicken Biryani served in traditional style',
//       category: 'biryani',
//     },
//     {
//       id: '2',
//       src: 'https://images.pexels.com/photos/5410410/pexels-photo-5410410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       alt: 'Mutton Biryani with garnish',
//       category: 'biryani',
//     },
//     {
//       id: '3',
//       src: 'https://images.pexels.com/photos/15343639/pexels-photo-15343639/free-photo-of-assorted-grilled-meats-and-vegetables-on-wooden-board.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       alt: 'Grilled Chicken platter',
//       category: 'grilled',
//     },
//     {
//       id: '4',
//       src: 'https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       alt: 'Chicken Mandi',
//       category: 'grilled',
//     },
//     {
//       id: '5',
//       src: 'https://images.pexels.com/photos/7625163/pexels-photo-7625163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       alt: 'Handi Mutton Curry',
//       category: 'others',
//     },
//     {
//       id: '6',
//       src: 'https://images.pexels.com/photos/5410422/pexels-photo-5410422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       alt: 'Veg Biryani',
//       category: 'biryani',
//     },
//     {
//       id: '7',
//       src: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       alt: 'Matka Lassi',
//       category: 'others',
//     },
//     {
//       id: '8',
//       src: 'https://images.pexels.com/photos/5834895/pexels-photo-5834895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       alt: 'Restaurant ambience',
//       category: 'others',
//     },
//     {
//       id: '9',
//       src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       alt: 'Happy customers',
//       category: 'others',
//     },
//   ];

//   const filteredImages = activeCategory === 'all' 
//     ? galleryImages 
//     : galleryImages.filter(img => img.category === activeCategory);

//   const openLightbox = (src: string) => {
//     setLightboxImage(src);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeLightbox = () => {
//     setLightboxImage(null);
//     document.body.style.overflow = 'auto';
//   };

//   return (
//     <div className="pt-20 pb-16 bg-gray-50">
//       <div className="main-content">
//         <AnimatedSection>
//           <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
//           <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
//             Feast your eyes on our delicious authentic Hyderabadi cuisine.
//           </p>
//         </AnimatedSection>

//         {/* Categories */}
//         <div className="flex justify-center mb-10">
//           <div className="flex space-x-2 overflow-x-auto">
//             {categories.map(category => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 whitespace-nowrap ${
//                   activeCategory === category.id
//                     ? 'bg-yellow-400 text-black'
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {filteredImages.map((image, index) => (
//             <AnimatedSection key={image.id} delay={index * 100} className="h-64 md:h-72">
//               <div 
//                 className="h-full rounded-lg overflow-hidden cursor-pointer relative group"
//                 onClick={() => openLightbox(image.src)}
//               >
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="text-white bg-black/60 px-4 py-2 rounded-md text-sm">View Larger</div>
//                 </div>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>

//         {/* Lightbox */}
//         {lightboxImage && (
//           <div 
//             className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
//             onClick={closeLightbox}
//           >
//             <div className="relative max-w-4xl max-h-full">
//               <button 
//                 className="absolute -top-10 right-0 text-white hover:text-yellow-400 transition-colors"
//                 onClick={closeLightbox}
//               >
//                 Close (×)
//               </button>
//               <img 
//                 src={lightboxImage} 
//                 alt="Enlarged view" 
//                 className="max-w-full max-h-[80vh] object-contain"
//                 onClick={(e) => e.stopPropagation()}
//               />
//             </div>
//           </div>
//         )}
//         <BackToTop/>
//       </div>
//     </div>
//   );
// };

// export default Gallery;