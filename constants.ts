import type { Service, PortfolioItem, TimelineEvent, SocialLink, Testimonial } from './types';
import { PenNib, Code, FilmSlate, SquaresFour, Image, Scissors, TwitterLogo, YoutubeLogo, InstagramLogo, TwitchLogo } from '@phosphor-icons/react';

export const SERVICES: Service[] = [
  {
    icon: PenNib,
    title: 'Graphics Design',
    description: 'Crafting visually stunning brand identities, logos, and marketing materials that command attention.',
  },
  {
    icon: Image,
    title: 'Digital Art',
    description: 'Creating breathtaking illustrations and concept art for games, media, and personal commissions.',
  },
  {
    icon: SquaresFour,
    title: 'Pixel Art',
    description: 'Designing intricate and nostalgic pixel art sprites, assets, and animations for indie games and more.',
  },
  {
    icon: FilmSlate,
    title: 'Video Editing',
    description: 'Producing dynamic, cinematic video content with expert-level editing, effects, and sound design.',
  },
  {
    icon: Code,
    title: 'Website Design',
    description: 'Building immersive, high-performance websites with a focus on futuristic UI/UX and user engagement.',
  },
  {
    icon: Scissors,
    title: 'Clipping Projects',
    description: 'Providing precise and efficient image clipping and background removal services for e-commerce and media.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, category: 'Digital Art', title: 'Cybernetic Ronin', imageUrl: 'https://picsum.photos/seed/ronin/600/800' },
  { id: 2, category: 'Website Design', title: 'Aperture Labs Portal', imageUrl: 'https://picsum.photos/seed/aperture/800/600' },
  { id: 3, category: 'Graphics Design', title: 'Synthwave Album Cover', imageUrl: 'https://picsum.photos/seed/synthwave/600/600' },
  { id: 4, category: 'Video Editing', title: 'Game Trailer - "Nexus"', imageUrl: 'https://picsum.photos/seed/nexus/800/600' },
  { id: 5, category: 'Pixel Art', title: 'Forest Guardian Sprite', imageUrl: 'https://picsum.photos/seed/sprite/600/600' },
  { id: 6, category: 'Digital Art', title: 'Void Dragon', imageUrl: 'https://picsum.photos/seed/dragon/800/600' },
  { id: 7, category: 'Graphics Design', title: 'Esports Team Branding', imageUrl: 'https://picsum.photos/seed/esports/600/800' },
  { id: 8, category: 'Website Design', title: 'Stark Industries Interface', imageUrl: 'https://picsum.photos/seed/stark/800/600' },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
    { year: '2018', title: 'Genesis Spark', description: 'Phyrux Commissions was founded with a passion for digital art and gaming aesthetics, starting with small commissions.' },
    { year: '2020', title: 'Service Expansion', description: 'Expanded our services to include video editing and graphic design, attracting a wider range of clients.' },
    { year: '2022', title: 'Studio Establishment', description: 'Officially established a small, dedicated team and moved into our first creative studio space.' },
    { year: '2024', title: 'Future Forged', description: 'Launched our new brand identity and futuristic website, marking a new era of high-end creative solutions.' },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { icon: TwitterLogo, url: '#', name: 'Twitter' },
    { icon: InstagramLogo, url: '#', name: 'Instagram' },
    { icon: YoutubeLogo, url: '#', name: 'YouTube' },
    { icon: TwitchLogo, url: '#', name: 'Twitch' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Phyrux didn't just design a website; they engineered a digital experience. The results were beyond our expectations. Truly next-level.",
    author: "Alex Thorne",
    company: "CEO, Nexus Dynamics",
  },
  {
    quote: "The branding and video work they delivered gave our launch the exact high-impact, futuristic feel we were aiming for. Unmatched creativity.",
    author: "Samantha Rix",
    company: "Marketing Director, Cygnus Entertainment",
  },
  {
    quote: "Working with them was seamless. They understood the vision for our game's art instantly and delivered assets that were both beautiful and functional.",
    author: "Kenji Tanaka",
    company: "Lead Developer, Ghost Pixel Games",
  },
];
