 FRONTEND FILES
📄 /frontend/src/mock.js
export const businessInfo = {
  name: "FIEZAT BARBERSHOP",
  tagline: "Trust Your Barber",
  description: "Memiliki tukang gunting yang ramai dan tempat yang sangat selesa.",
  phone: "010-712 1220",
  address: "Jln Seri Impian 1/1, Taman Seri Impian, 86000 Kluang, Johor Darul Ta'zim",
  email: "info@fiezatbarbershop.com",
  rating: 4.5,
  totalReviews: 93,
  hours: [
    { day: "Monday", time: "10:00 AM - 10:00 PM" },
    { day: "Tuesday", time: "10:00 AM - 10:00 PM" },
    { day: "Wednesday", time: "10:00 AM - 10:00 PM" },
    { day: "Thursday", time: "10:00 AM - 10:00 PM" },
    { day: "Friday", time: "10:00 AM - 10:00 PM" },
    { day: "Saturday", time: "10:00 AM - 10:00 PM" },
    { day: "Sunday", time: "10:00 AM - 10:00 PM" }
  ],
  social: {
    instagram: "https://instagram.com/fiezatbarbershop",
    facebook: "https://facebook.com/fiezatbarbershop"
  }
};

export const services = [
  {
    id: 1,
    name: "Classic Haircut",
    description: "Traditional barbering with modern style",
    price: "RM 25",
    duration: "30 min"
  },
  {
    id: 2,
    name: "Premium Haircut & Styling",
    description: "Complete cut with premium styling products",
    price: "RM 40",
    duration: "45 min"
  },
  {
    id: 3,
    name: "Beard Trim & Shave",
    description: "Professional beard grooming and hot towel shave",
    price: "RM 20",
    duration: "20 min"
  },
  {
    id: 4,
    name: "Hair Coloring",
    description: "Expert hair coloring services",
    price: "RM 80",
    duration: "60 min"
  },
  {
    id: 5,
    name: "Kids Haircut",
    description: "Gentle haircuts for children under 12",
    price: "RM 20",
    duration: "20 min"
  },
  {
    id: 6,
    name: "Hair Treatment",
    description: "Nourishing hair treatment and scalp massage",
    price: "RM 50",
    duration: "40 min"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Ahmad Abdullah",
    rating: 5,
    text: "Best barbershop in Kluang! Very professional and friendly service. Highly recommended!",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Mohd Faiz",
    rating: 5,
    text: "Great place with skilled barbers. Always satisfied with my haircut. The place is clean and comfortable.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Lee Wei Ming",
    rating: 5,
    text: "Excellent service and reasonable prices. The barbers really know what they're doing!",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Raj Kumar",
    rating: 4,
    text: "Good barbershop with comfortable waiting area. Professional staff and quality service.",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "David Tan",
    rating: 5,
    text: "Been coming here for years. Consistent quality and great customer service. Trust your barber indeed!",
    date: "2 months ago"
  },
  {
    id: 6,
    name: "Azman Hassan",
    rating: 5,
    text: "Clean environment, skilled barbers, and affordable prices. What more can you ask for?",
    date: "3 weeks ago"
  }
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80"
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Experienced Barbers",
    description: "Our team of skilled barbers have years of experience in traditional and modern barbering techniques."
  },
  {
    id: 2,
    title: "Comfortable Environment",
    description: "Relax in our clean, comfortable, and well-equipped barbershop designed for your comfort."
  },
  {
    id: 3,
    title: "Quality Service",
    description: "We pride ourselves on delivering consistent, high-quality service that keeps our customers coming back."
  },
  {
    id: 4,
    title: "Affordable Prices",
    description: "Premium barbering services at prices that won't break the bank. Great value for money."
  }
];
