# Velayutham Auto Works - Bike Service Website

A modern, mobile-first, frontend-only website built with **React + Tailwind CSS** for Velayutham Auto Works bike mechanic shop.

## Features

- Mobile-first responsive design
- Smooth scroll navigation
- Hero section with Call Now, WhatsApp, and Get Directions buttons
- About Us section highlighting trust and experience
- Services showcase (General Service, Engine Service, Oil Change, Brake Service, Tyre Service, Electrical Work, Other Repairs)
- Why Choose Us section
- Google Maps location embed with Get Directions link
- Customer Reviews section with Google Reviews button
- Contact section with phone, WhatsApp, address, and opening hours
- Professional footer

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Vite and use the correct build settings
4. Click "Deploy" - your site will be live in minutes!

### Vercel Configuration

The project is already configured for Vercel with `vite.config.js`. No additional configuration is needed.

## Connecting Real Data

All shop information is stored in a single file: **`src/data/shopInfo.js`**

Open that file and update the following fields:

### 1. Phone Number
```javascript
phone: '+91XXXXXXXXXX',  // Replace with actual number
```

### 2. WhatsApp Number
```javascript
whatsapp: '+91XXXXXXXXXX',  // Replace with actual WhatsApp number
```

### 3. Address
```javascript
address: 'No. 123, Main Road, Your City, Tamil Nadu - 600001',  // Update to real address
```

### 4. Google Maps Location
To get your Google Maps embed and link:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your shop location
3. Click "Share" -> "Embed a map"
4. Copy the `src` URL from the `<iframe>` - this is your `googleMapsEmbed`
5. Copy the current page URL - this is your `googleMapsLink`

```javascript
googleMapsLink: 'https://maps.app.goo.gl/XXXXX',  // Your Google Maps link
googleMapsEmbed: 'https://www.google.com/maps/embed?pb=...',  // Your embed URL
```

### 5. Google Review Link
To get the Google Reviews link:

1. Search for your shop on Google Maps
2. Click "Write a review" or look at the reviews section
3. Copy the URL from your browser - it will look like `https://maps.app.goo.gl/XXXXX`
4. Paste it as `googleReviewLink`

```javascript
googleReviewLink: 'https://maps.app.goo.gl/XXXXX',  // Your Google Reviews link
```

### 6. Opening Hours
```javascript
openingHours: {
  weekdays: '9:00 AM - 9:00 PM',
  saturday: '9:00 AM - 9:00 PM',
  sunday: '9:00 AM - 6:00 PM',
},
```

### 7. Customizing Content
- Services: Edit `src/data/shopInfo.js` -> `services` array
- Why Choose Us: Edit `src/data/shopInfo.js` -> `whyChooseUs` array
- Reviews: Edit `src/data/shopInfo.js` -> `reviews` array (displayed testimonials)

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion (animations)
- Lucide React (icons)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
