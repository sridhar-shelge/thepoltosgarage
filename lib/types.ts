export interface Vehicle {
  slug: string;
  name: string;
  type: "hatchback" | "suv" | "motorcycle";
  shortName: string;
  accent: string;
  summary: string;
  notes: string[];
  stats: { label: string; value: string }[];
  maintenance: { interval: string; task: string; cost: string }[];
  commonProblems: string[];
  gallery: string[];
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  vehicleTags: string[];
  author: string;
  readTime: string;
  views: string;
  comments: number;
  image: string;
  featured?: boolean;
  sponsored?: boolean;
  body: string[];
  pros: string[];
  cons: string[];
  costs: { item: string; estimate: string; note: string }[];
}

export interface Vlog {
  slug: string;
  title: string;
  category: string;
  duration: string;
  views: string;
  vehicleTags: string[];
  thumbnail: string;
  description: string;
  gear: string[];
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  badge: string;
  reason: string;
  image: string;
  pros: string[];
  cons: string[];
  compatibleVehicles: string[];
  difficulty: "Easy" | "Moderate" | "Garage recommended";
}

export interface UserSubmission {
  id: string;
  name: string;
  city: string;
  vehicle: string;
  type: string;
  title: string;
  votes?: number;
}

export interface Challenge {
  slug: string;
  title: string;
  month: string;
  prize: string;
  theme: string;
  entries: number;
}

export interface Partner {
  id: string;
  name: string;
  city: string;
  serviceType: string;
  rating: number;
  offer: string;
  verified: boolean;
}

export interface Lead {
  id: string;
  name: string;
  city: string;
  vehicle: string;
  requirement: string;
  budget: string;
}

export interface Comment {
  id: string;
  author: string;
  body: string;
  createdAt: string;
}
