import type { Icon } from '@phosphor-icons/react';

export interface Service {
  icon: Icon;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface SocialLink {
  icon: Icon;
  url: string;
  name: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}
