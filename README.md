# Biryani Restaurant Website

## Overview

This is a modern, responsive website for Biryani Restaurant, specializing in authentic Hyderabadi cuisine. The website showcases the restaurant's menu, services, and ambiance while providing an easy way for customers to place orders via WhatsApp.

## Features

- **Responsive Design**: Fully responsive website that looks great on all devices (mobile, tablet, and desktop)
- **Modern UI/UX**: Clean, modern interface with smooth animations
- **Menu Display**: Categorized menu items with images, descriptions, and pricing
- **WhatsApp Integration**: Direct ordering system through WhatsApp
- **Animated Components**: Smooth scroll animations for enhanced user experience
- **Back to Top**: Easy navigation with a back-to-top button on longer pages

## Tech Stack

- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed JavaScript for better developer experience
- **Vite**: Next-generation frontend tooling for faster development
- **React Router**: Navigation and routing between pages
- **TailwindCSS**: Utility-first CSS framework for styling
- **Lucide React**: Icons library

## Project Structure

```
project/
├── src/
│   ├── assets/
│   │   └── img/          # Images for the website
│   ├── components/       # Reusable UI components
│   │   ├── AnimatedSection.tsx
│   │   ├── BackToTop.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── WhatsAppButton.tsx
│   ├── pages/           # Main page components
│   │   ├── About.tsx    # About Us page
│   │   ├── Gallery.tsx  # Photo gallery (currently disabled)
│   │   ├── Home.tsx     # Homepage
│   │   ├── Menu.tsx     # Full menu with categories
│   │   └── OrderNow.tsx # Order page
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite type definitions
├── dist/                # Built files (production)
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tailwind.config.js   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Pages

1. **Home**: Landing page featuring specials, restaurant introduction, and call-to-action sections
2. **Menu**: Comprehensive menu with categories (Biryani, Grilled & Mandi, Curries, Vegetarian Options, Additional Rice, Matka Lassi)
3. **Order Now**: Contact information and ordering instructions
4. **About Us**: Restaurant story, values, and location information

## Key Components

- **Navbar**: Responsive navigation bar with mobile menu support
- **Footer**: Contact information, social links, and copyright
- **AnimatedSection**: Component with scroll-based animations for content sections
- **WhatsAppButton**: Direct messaging for placing orders
- **BackToTop**: Button for easy navigation on long pages

## Menu Features

The menu page includes:
- Category filtering
- Detailed item cards with images
- Pricing options (Single, Double, Family, Jumbo portions)
- Direct "Order Now" button for each item
- Allergy notice

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository:
```bash
git clone [repository-url]
cd biryani-restaurant
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start development server:
```bash
npm run dev
# or
yarn dev
```

4. Build for production:
```bash
npm run build
# or
yarn build
```

5. Preview production build:
```bash
npm run preview
# or
yarn preview
```

## Deployment

The project can be deployed to any static hosting service:

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your hosting provider

## Image Management

All images are stored in the `src/assets/img/` directory and imported directly in the components. This ensures that Vite properly processes and optimizes them during the build process.

## Customization

### Menu Items

Menu items can be modified in the `Menu.tsx` file:

```typescript
const menuItems: MenuItem[] = [
  {
    id: 'item-id',
    name: 'Item Name',
    description: 'Item description',
    image: 'path/to/image',
    prices: {
      single: price, // 1 Person
      double: price, // 2 Person
      family: price, // 4 Person
      jumbo: price,  // 6 Person
      // Or for items sold by weight:
      halfKg: price,
      oneKg: price,
    },
    category: 'category-id',
  },
  // Add more items...
];
```



## WhatsApp Integration

The WhatsApp integration allows direct messaging to the restaurant with pre-filled messages. The phone number and initial message can be customized in the WhatsAppButton component.

## Browser Compatibility

The website is compatible with all modern browsers:
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers on iOS and Android

## Performance Optimization

- Images are optimized and loaded with proper sizing
- TailwindCSS purges unused styles for production builds
- Components are lazily loaded where appropriate

## Future Enhancements

Potential future enhancements include:
- Online payment integration
- Customer reviews section
- Table reservation system
- Blog/news section for restaurant updates

## License

This project is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.

## Credits

- Design and Development: <a href="https://zWickytechnology.com"> Zwikcy Technology</a>

## Contact

For any queries or support, please contact:
- Email: [contact@zwickytechnology.com]
- Website: [https://zWickytechnology.com]
