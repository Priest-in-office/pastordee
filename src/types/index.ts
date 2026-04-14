export interface Episode {
  id: string;
  videoId: string;
  title: string;
  description: string;
  date: string;
  duration?: string;
  guest?: string;
  category?: string;
  resources?: EpisodeResource[];
  views?: string;
}

export interface EpisodeResource {
  title: string;
  type: 'scripture' | 'book' | 'link' | 'download';
  url?: string;
  reference?: string;
}

export interface Question {
  id: string;
  name: string;
  email: string;
  question: string;
  category: string;
  timestamp: string;
  status: 'pending' | 'answered';
  episodeId?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'conference' | 'service' | 'speaking' | 'online';
  registrationUrl?: string;
  imageUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  text: string;
  avatar?: string;
  episodeTitle?: string;
}
