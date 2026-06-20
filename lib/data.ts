import type { Challenge, Partner, Post, Product, UserSubmission, Vehicle, Vlog } from "@/lib/types";

export const vehicles: Vehicle[] = [
  {
    slug: "daily-drivers",
    name: "Daily Drivers",
    shortName: "Daily",
    type: "hatchback",
    accent: "from-orange/80 to-danger/70",
    summary: "City cars, hatchbacks, sedans, used buys, diesel runners, petrol commuters, and everyday ownership wins.",
    notes: ["Real running costs", "Used-car checks", "Reliability-first upgrades"],
    stats: [
      { label: "Garage focus", value: "Everyday ownership" },
      { label: "Best roads", value: "City + highway" },
      { label: "Community angle", value: "Buying checks" }
    ],
    maintenance: [
      { interval: "7,500 km", task: "Oil, filters, scanner check", cost: "Rs 6k-10k" },
      { interval: "30,000 km", task: "Brake service + suspension inspection", cost: "Rs 12k-22k" },
      { interval: "60,000 km", task: "Timing belt planning", cost: "Rs 35k+" }
    ],
    commonProblems: ["Service history gaps", "Suspension wear", "Cooling checks", "Tyre and battery age"],
    gallery: ["Night fuel stop", "Garage inspection", "Daily commute setup"]
  },
  {
    slug: "suvs-and-tourers",
    name: "SUVs & Tourers",
    shortName: "SUV",
    type: "suv",
    accent: "from-cyan/80 to-bluebolt/70",
    summary: "Family cars, compact SUVs, highway cruisers, road-trip loadouts, delivery checklists, and touring accessories.",
    notes: ["Family road-trip builds", "Dashcam and touring accessories", "Delivery checklists"],
    stats: [
      { label: "Garage focus", value: "SUV touring" },
      { label: "Best roads", value: "NH runs" },
      { label: "Community angle", value: "Accessory setups" }
    ],
    maintenance: [
      { interval: "10,000 km", task: "Scheduled service", cost: "Rs 8k-14k" },
      { interval: "20,000 km", task: "Tyre rotation + alignment", cost: "Rs 2k-5k" },
      { interval: "40,000 km", task: "Brake and fluid inspection", cost: "Rs 10k-18k" }
    ],
    commonProblems: ["Tyre noise tracking", "Infotainment quirks", "Paint protection decisions", "Long-trip comfort"],
    gallery: ["Delivery bay", "Touring boot setup", "Monsoon highway"]
  },
  {
    slug: "bikes-and-weekend-rides",
    name: "Bikes & Weekend Rides",
    shortName: "Bike",
    type: "motorcycle",
    accent: "from-danger/80 to-orange/70",
    summary: "Motorcycles, scooters, weekend rides, helmet setups, cleaning routines, touring gear, and rider stories.",
    notes: ["Urban + highway ride logs", "Helmet and cleaning guides", "Garage-life motorcycle content"],
    stats: [
      { label: "Garage focus", value: "Bike life" },
      { label: "Best roads", value: "City + backroads" },
      { label: "Community angle", value: "Ride stories" }
    ],
    maintenance: [
      { interval: "5,000 km", task: "Oil + chain service", cost: "Rs 2k-4k" },
      { interval: "10,000 km", task: "Brake pads and cables check", cost: "Rs 3k-7k" },
      { interval: "Annual", task: "Detailing + rust prevention", cost: "Rs 2k-6k" }
    ],
    commonProblems: ["Chain and brake care", "Seat comfort", "Rust prevention", "Accessory vibration"],
    gallery: ["Dawn ride", "Helmet setup", "Bike wash day"]
  }
];

export const posts: Post[] = [
  {
    slug: "used-diesels-still-feel-special",
    title: "Why Well-Kept Used Diesels Still Feel Special",
    excerpt: "A grounded ownership note on torque, aging, maintenance discipline, and why some cars become garage constants.",
    category: "Ownership",
    vehicleTags: ["Daily"],
    author: "Poltos Garage",
    readTime: "9 min",
    views: "18.4k",
    comments: 42,
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    body: [
      "The used diesel charm is not nostalgia alone. It is the way a torque-rich engine settles into highway rhythm and rewards patient ownership.",
      "Buying one today means checking service history, injector health, suspension wear, tyres, and whether modifications were done with care.",
      "For Indian highways, the car still makes sense for owners who understand preventive maintenance and want an involving compact diesel."
    ],
    pros: ["Strong mid-range", "Compact handling", "Excellent highway efficiency"],
    cons: ["Age-sensitive parts", "Clean examples are rare", "Needs a trusted mechanic"],
    costs: [
      { item: "Annual service", estimate: "Rs 12k-22k", note: "Depends on parts condition" },
      { item: "Tyres", estimate: "Rs 24k-38k", note: "Touring or performance compound" },
      { item: "Preventive reserve", estimate: "Rs 40k", note: "Useful for used ownership" }
    ]
  },
  {
    slug: "new-suv-first-accessories",
    title: "New SUV: First Accessories I Would Buy",
    excerpt: "Dashcam, mats, boot organizers, tyre inflator, and other upgrades that improve real ownership before cosmetics.",
    category: "Accessories",
    vehicleTags: ["SUV"],
    author: "Sridhar",
    readTime: "7 min",
    views: "11.2k",
    comments: 28,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    body: ["Start with protection, safety, and daily convenience.", "A good dual-channel dashcam and tyre inflator beat most cosmetic add-ons.", "Keep wiring clean and warranty-safe wherever possible."],
    pros: ["Practical upgrades", "Touring friendly", "Easy to phase purchases"],
    cons: ["Dealer accessory markups", "Too many low-quality options", "Cable routing matters"],
    costs: [
      { item: "Dashcam", estimate: "Rs 8k-18k", note: "Dual-channel preferred" },
      { item: "Mats + boot tray", estimate: "Rs 5k-12k", note: "Fitment matters" },
      { item: "Inflator", estimate: "Rs 2k-5k", note: "Check duty cycle" }
    ]
  },
  {
    slug: "city-bike-weekend-ride-setup",
    title: "City Bike to Weekend Ride: What Actually Helps?",
    excerpt: "A simple, honest look at comfort, engine feel, touring limits, and the accessories that actually help.",
    category: "Ownership",
    vehicleTags: ["Bike"],
    author: "PG Riders",
    readTime: "8 min",
    views: "9.7k",
    comments: 31,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
    body: ["A city bike feels happiest when ridden without pretending it is a full touring motorcycle.", "For commutes and short weekend rides, simplicity matters.", "Comfort upgrades should come before visual accessories."],
    pros: ["Friendly size", "Strong city character", "Simple service needs"],
    cons: ["Seat comfort on long days", "Limited wind protection", "Accessory vibration checks needed"],
    costs: [{ item: "Basic ride kit", estimate: "Rs 6k-14k", note: "Gloves, decals, cleaner" }]
  },
  {
    slug: "hyderabad-to-adilabad-diesel-highway-run",
    title: "Hyderabad to Adilabad: Diesel Highway Run",
    excerpt: "Fuel stops, road surface notes, food breaks, and what a clean highway rhythm teaches you.",
    category: "Road Trips",
    vehicleTags: ["Daily", "SUV"],
    author: "Road Notes",
    readTime: "10 min",
    views: "14.9k",
    comments: 36,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    body: ["Start early, keep tyre pressure checked, and avoid turning a relaxed route into a fuel economy contest.", "The stretch rewards steady cruising and proper breaks.", "A dashcam and offline maps make the trip calmer."],
    pros: ["Good cruising rhythm", "Easy planning", "Useful route for new highway drivers"],
    cons: ["Heat management", "Patchy stops at odd hours", "Monsoon visibility"],
    costs: [{ item: "Fuel + tolls", estimate: "Rs 4k-7k", note: "Vehicle dependent" }]
  },
  {
    slug: "new-car-delivery-checklist-indian-buyers",
    title: "New Car Delivery Checklist for Indian Buyers",
    excerpt: "A practical PDI and delivery-day checklist that keeps excitement from hiding obvious defects.",
    category: "Maintenance",
    vehicleTags: ["SUV"],
    author: "Poltos Garage",
    readTime: "6 min",
    views: "21.5k",
    comments: 57,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
    body: ["Inspect in daylight and avoid rushing paperwork.", "Check VIN, paint, tyres, tools, electronics, odometer, and accessory fitment.", "Document everything before final acceptance."],
    pros: ["Reduces delivery stress", "Works across brands", "Easy to share"],
    cons: ["Needs time at dealership", "Some checks need patience", "Do not skip test of electronics"],
    costs: [{ item: "PDI time", estimate: "2-3 hours", note: "Worth blocking your calendar" }]
  },
  {
    slug: "dashcam-or-tyre-inflator-first",
    title: "Dashcam or Tyre Inflator: What Should You Buy First?",
    excerpt: "A priority guide for new owners building a sensible accessory kit for Indian conditions.",
    category: "Marketplace",
    vehicleTags: ["Daily", "SUV", "Bike"],
    author: "Accessory Desk",
    readTime: "5 min",
    views: "8.6k",
    comments: 19,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    body: ["The right first purchase depends on usage.", "Highway users should consider tyre safety and visibility first.", "City users with parking risk should prioritize a dashcam."],
    pros: ["Clear buying priority", "Budget friendly", "Practical for all owners"],
    cons: ["Quality varies widely", "Install quality matters", "Needs maintenance habits"],
    costs: [{ item: "Starter safety kit", estimate: "Rs 5k-18k", note: "Build gradually" }]
  }
];

export const vlogs: Vlog[] = [
  { slug: "featured-garage-night", title: "Garage Night: Real Owner Prep Before a Long Weekend", category: "Garage days", duration: "12:44", views: "42k", vehicleTags: ["Daily", "SUV", "Bike"], thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80", description: "A practical night in the garage getting cars and bikes ready for a long weekend.", gear: ["LED inspection lamp", "Microfiber pack", "Torque wrench"] },
  { slug: "adilabad-diesel-run", title: "Hyderabad to Adilabad Highway Run", category: "Road trips", duration: "18:09", views: "31k", vehicleTags: ["Daily", "SUV"], thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80", description: "Route notes, fuel stops, and practical touring setup.", gear: ["Dashcam", "Tyre inflator", "Boot organizer"] },
  { slug: "city-bike-pov", title: "City Bike POV Ride: Real Traffic, Real Notes", category: "POV drives", duration: "09:18", views: "26k", vehicleTags: ["Bike"], thumbnail: "https://images.unsplash.com/photo-1517846693594-1567da72af75?auto=format&fit=crop&w=1200&q=80", description: "A realistic commute POV with comfort and heat notes.", gear: ["Helmet decal kit", "Riding gloves"] },
  { slug: "dashcam-install-basics", title: "Dashcam Install Basics for Indian Cars", category: "Accessories", duration: "15:32", views: "54k", vehicleTags: ["Daily", "SUV"], thumbnail: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80", description: "Clean routing, parking mode tradeoffs, and warranty-safe choices.", gear: ["Dual-channel dashcam", "Trim tool kit"] },
  { slug: "service-visit-checklist", title: "Service Visit Checklist: What to Watch", category: "Service visits", duration: "11:10", views: "22k", vehicleTags: ["Daily", "SUV", "Bike"], thumbnail: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80", description: "How to prepare notes before a workshop visit.", gear: ["OBD scanner", "Service log"] },
  { slug: "delivery-story-pdi", title: "New Vehicle Delivery Story + PDI", category: "Delivery stories", duration: "16:27", views: "39k", vehicleTags: ["SUV"], thumbnail: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80", description: "Delivery-day checklist and first 100 km impressions.", gear: ["PDI checklist", "Paint depth meter"] }
];

export const products: Product[] = [
  { slug: "new-car-starter-kit", name: "New Car Starter Kit", category: "Road Trip Essentials", price: 4999, rating: 4.7, badge: "Road Trip Pick", reason: "Combines essentials new Indian owners actually use in month one.", image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80", pros: ["Balanced kit", "Useful immediately"], cons: ["Not vehicle-specific"], compatibleVehicles: ["Daily", "SUV"], difficulty: "Easy" },
  { slug: "road-trip-safety-kit", name: "Road Trip Safety Kit", category: "Road Trip Essentials", price: 3499, rating: 4.8, badge: "Community Favorite", reason: "A simple safety-first kit for highway runs and late-night drives.", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80", pros: ["Compact", "Emergency focused"], cons: ["Needs periodic checks"], compatibleVehicles: ["Daily", "SUV", "Bike"], difficulty: "Easy" },
  { slug: "microfiber-detailing-pack", name: "Microfiber Detailing Pack", category: "Cleaning & Detailing", price: 899, rating: 4.5, badge: "Budget Pick", reason: "Good towels prevent most beginner washing mistakes.", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80", pros: ["Affordable", "Paint-safe"], cons: ["Wash separately"], compatibleVehicles: ["Daily", "SUV", "Bike"], difficulty: "Easy" },
  { slug: "tyre-inflator", name: "Tyre Inflator", category: "Dashcams & Electronics", price: 2899, rating: 4.6, badge: "Tested by Poltos", reason: "Reliable pressure correction before highway starts.", image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80", pros: ["Accurate enough", "Portable"], cons: ["Duty cycle limits"], compatibleVehicles: ["Daily", "SUV"], difficulty: "Easy" },
  { slug: "dashcam", name: "Dual-channel Dashcam", category: "Dashcams & Electronics", price: 11999, rating: 4.9, badge: "Premium Pick", reason: "The most useful accessory after tyres for Indian traffic.", image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80", pros: ["Front + rear proof", "Good resale value"], cons: ["Install quality matters"], compatibleVehicles: ["Daily", "SUV"], difficulty: "Moderate" },
  { slug: "magnetic-phone-mount", name: "Magnetic Phone Mount", category: "Dashcams & Electronics", price: 799, rating: 4.3, badge: "Budget Pick", reason: "Clean navigation placement without dashboard clutter.", image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=1200&q=80", pros: ["Small", "Cheap"], cons: ["Case compatibility"], compatibleVehicles: ["Daily", "SUV"], difficulty: "Easy" },
  { slug: "boot-organizer", name: "Boot Organizer", category: "Road Trip Essentials", price: 1499, rating: 4.4, badge: "Road Trip Pick", reason: "Stops highway luggage chaos and keeps tools findable.", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80", pros: ["Foldable", "Practical"], cons: ["Measure boot space"], compatibleVehicles: ["Daily", "SUV"], difficulty: "Easy" },
  { slug: "car-perfume", name: "Subtle Car Perfume", category: "Cleaning & Detailing", price: 599, rating: 4.1, badge: "Community Favorite", reason: "Mild scent profile without the taxi-cab headache.", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1200&q=80", pros: ["Subtle", "Long lasting"], cons: ["Subjective fragrance"], compatibleVehicles: ["Daily", "SUV"], difficulty: "Easy" },
  { slug: "sticker-pack", name: "Torque Thump Roads Sticker Pack", category: "Stickers & Decals", price: 299, rating: 4.7, badge: "Community Favorite", reason: "Clean garage identity without pretending to be a race team.", image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80", pros: ["Weatherproof", "Minimal"], cons: ["Placement needs care"], compatibleVehicles: ["Daily", "SUV", "Bike"], difficulty: "Easy" },
  { slug: "torque-thump-roads-tshirt", name: "Torque Thump Roads T-shirt", category: "Merch", price: 899, rating: 4.6, badge: "Community Favorite", reason: "Garage merch for meets, rides, and road-trip reels.", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80", pros: ["Heavy cotton", "Clean print"], cons: ["Limited drops"], compatibleVehicles: ["Daily", "SUV", "Bike"], difficulty: "Easy" },
  { slug: "helmet-reflective-decal-kit", name: "Helmet Reflective Decal Kit", category: "Bike Gear", price: 399, rating: 4.5, badge: "Budget Pick", reason: "Small visibility upgrade for night rides.", image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1200&q=80", pros: ["Improves visibility", "Low cost"], cons: ["Careful application"], compatibleVehicles: ["Bike"], difficulty: "Easy" },
  { slug: "bike-cleaning-kit", name: "Bike Cleaning Kit", category: "Bike Gear", price: 1299, rating: 4.4, badge: "Tested by Poltos", reason: "Basic wash and chain care kit for bike owners.", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80", pros: ["Complete basics", "Compact"], cons: ["Refills required"], compatibleVehicles: ["Bike"], difficulty: "Easy" }
];

export const challenges: Challenge[] = [
  { slug: "shot-of-the-month", title: "Poltos Garage Shot of the Month", month: "June 2026", prize: "Rs 5,000 accessory voucher", theme: "Best car/bike photo, road-trip reel, garage transformation, or ownership story.", entries: 128 },
  { slug: "monsoon-ready-rides", title: "Monsoon Ready Rides", month: "July 2026", prize: "Detailing hamper", theme: "Show the prep that keeps your machine ready for rain.", entries: 64 },
  { slug: "best-delivery-story", title: "Best Delivery Story", month: "May 2026", prize: "Poltos merch kit", theme: "Delivery day stories with useful buyer notes.", entries: 91 },
  { slug: "cleanest-boot-setup", title: "Cleanest Boot Setup", month: "April 2026", prize: "Road trip organizer kit", theme: "Practical touring loadouts.", entries: 73 }
];

export const partners: Partner[] = [
  { id: "p1", name: "Torque Bay Garage", city: "Hyderabad", serviceType: "Independent service", rating: 4.8, offer: "Free inspection with Poltos lead", verified: true },
  { id: "p2", name: "Detail Lab Studio", city: "Pune", serviceType: "Detailing shop", rating: 4.7, offer: "10% off ceramic maintenance wash", verified: true },
  { id: "p3", name: "DashPro Installs", city: "Bangalore", serviceType: "Dashcam installer", rating: 4.6, offer: "Clean hardwire install package", verified: true },
  { id: "p4", name: "Tyre Stop NCR", city: "Delhi NCR", serviceType: "Tyre shop", rating: 4.5, offer: "Alignment check included", verified: false },
  { id: "p5", name: "Roadline Accessories", city: "Mumbai", serviceType: "Accessory store", rating: 4.4, offer: "Touring kit bundle pricing", verified: true }
];

export const submissions: UserSubmission[] = [
  { id: "s1", name: "Akhil", city: "Hyderabad", vehicle: "Used diesel hatchback", type: "Ownership review", title: "My 1 lakh km diesel story", votes: 482 },
  { id: "s2", name: "Meera", city: "Bangalore", vehicle: "City motorcycle", type: "Ride log", title: "First solo dawn ride", votes: 391 },
  { id: "s3", name: "Rahul", city: "Pune", vehicle: "Compact SUV", type: "Accessory review", title: "Dashcam install lessons", votes: 344 },
  { id: "s4", name: "Varun", city: "Adilabad", vehicle: "Sedan", type: "Road trip", title: "Backroad diesel run", votes: 319 },
  { id: "s5", name: "Sneha", city: "Mumbai", vehicle: "Family car", type: "Delivery story", title: "PDI saved my delivery", votes: 286 },
  { id: "s6", name: "Imran", city: "Delhi NCR", vehicle: "Weekend bike", type: "Garage setup", title: "Small balcony bike care shelf", votes: 251 }
];

export const storyFilters = ["Daily Cars", "SUVs", "Bikes", "Road Trips", "Ownership", "Accessories", "Maintenance", "DIY", "Marketplace"];
export const marketplaceCategories = ["Tested Accessories", "Cleaning & Detailing", "Road Trip Essentials", "Dashcams & Electronics", "Stickers & Decals", "Merch", "Bike Gear", "Garage Tools", "Partner Garages"];
