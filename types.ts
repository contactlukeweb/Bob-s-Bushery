
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string; // This stores the AI generation prompt
}

/* Added Project interface for the portfolio section */
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
