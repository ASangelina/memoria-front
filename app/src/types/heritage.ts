export interface ArchivalSource {
  doc: string;
  page: number;
  author: string;
}

export interface HistoricalEntity {
  id: string;
  name: string;
  category: 'personality' | 'sculpture';
  type: string;
  years: string;
  coords: [number, number];
  image: string;
  shortBio: string;
  fullBio: string;
  artisticDetails: string;
  importance: string;
  sector: string;
  sources: ArchivalSource[];
}

export interface GuidedRouteStop {
  title: string;
  type: string;
  sector: string;
}

export interface GuidedRoute {
  id: string;
  title: string;
  duration: string;
  distance: string;
  category: string;
  description: string;
  stops: GuidedRouteStop[];
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  citations?: ArchivalSource[];
  relatedIds?: string[];
  isUnverified?: boolean;
}