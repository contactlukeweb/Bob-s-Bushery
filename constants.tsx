
import { Service, Review, Project } from './types';

export const BUSINESS_INFO = {
  name: "Bob's Bushery",
  phone: "123456969",
  email: "bobbushery@gmail.com",
  quoteEmail: "contact.lukeweb@gmail.com",
  location: "Gold Coast, QLD",
  tagline: "Expert Landscaping & Garden Maintenance for the Gold Coast"
};

export const SERVICES: Service[] = [
  {
    id: "lawn-care",
    title: "Lawn Care & Mowing",
    description: "Professional mowing, edging, and lawn rejuvenation services to keep your turf lush and green year-round.",
    icon: "fa-leaf",
    image: "A high-resolution, professional photo of a perfectly manicured, vibrant green lawn with crisp, clean edges in a sunny Gold Coast suburban backyard. 4k, cinematic lighting."
  },
  {
    id: "hedging",
    title: "Hedging & Pruning",
    description: "Expert hedge trimming and sculptural pruning to enhance the privacy and aesthetics of your outdoor space.",
    icon: "fa-scissors",
    image: "A professional landscape photograph of a perfectly straight, tall, dense green privacy hedge with a clean square top, sunlight filtering through leaves, luxury garden setting."
  },
  {
    id: "clean-ups",
    title: "Garden Clean-ups",
    description: "Complete seasonal overhauls, weed removal, and waste disposal to restore your garden's natural beauty.",
    icon: "fa-broom",
    image: "A beautiful, tidy garden bed with fresh dark brown mulch, neatly pruned small shrubs, and a clean paved path, Gold Coast style, professional landscaping photography."
  },
  {
    id: "landscaping",
    title: "Landscaping Projects",
    description: "Custom landscape design and construction including planting, paving, and mulching for a total transformation.",
    icon: "fa-mountain-sun",
    image: "A luxury modern backyard landscape with sandstone paving, a small tropical garden with palms, and elegant outdoor lighting at dusk."
  }
];

/* Added PROJECTS constant used by the Projects page */
export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Tropical Paradise",
    description: "A complete overhaul of a backyard in Broadbeach, featuring native palms and sandstone pathways.",
    category: "Full Landscape",
    location: "Broadbeach",
    image: "A luxury tropical backyard landscape in the Gold Coast with palm trees, sandstone pavers, and a clean pool area. Sun-drenched, professional photography."
  },
  {
    id: "p2",
    title: "The Clean Cut",
    description: "Extensive hedging and lawn restoration for a large residential estate in Robina.",
    category: "Maintenance",
    location: "Robina",
    image: "A large, perfectly manicured green lawn with tall, straight privacy hedges on the perimeter. Gold Coast residential estate, sunny day."
  },
  {
    id: "p3",
    title: "Modern Minimalist",
    description: "Simple yet elegant front yard redesign using low-maintenance native plants and decorative stone.",
    category: "Design",
    location: "Surfers Paradise",
    image: "Modern minimalist front yard landscaping with white decorative stones, structural agave plants, and a clean concrete driveway. Bright daylight."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Sarah M.",
    location: "Broadbeach Waters",
    rating: 5,
    comment: "Bob did an absolutely amazing job with our hedge. It's never looked so straight and healthy. Professional and friendly!",
    date: "October 2024"
  },
  {
    id: "r2",
    name: "Dave L.",
    location: "Surfers Paradise",
    rating: 5,
    comment: "Reliable, turns up on time, and knows his stuff. The garden has been transformed since Bob started looking after it.",
    date: "November 2024"
  },
  {
    id: "r3",
    name: "Emma W.",
    location: "Robina",
    rating: 4,
    comment: "Great service and very competitive pricing. Highly recommend for any Gold Coast local needing garden help.",
    date: "September 2024"
  }
];
