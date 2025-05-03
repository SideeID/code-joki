export interface Project {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  features: string[];
  price: string;
  category: string;
  popular?: boolean;
}
