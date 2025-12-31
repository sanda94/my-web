
export interface ServiceCardProps {
  title: string;
  description: string;
  visual: React.ReactNode;
}

export interface VideoCardProps {
  src: string;
  title: string;
  views: string;
  duration: string;
  tag: string;
  color: 'yellow' | 'blue' | 'purple';
  poster?: string;
}

export interface TestimonialProps {
  videoSrc: string;
  poster: string;
  avatar: string;
  name: string;
  role: string;
  offset?: boolean;
}
