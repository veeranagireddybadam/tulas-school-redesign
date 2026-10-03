export interface SportItem {
  id: string;
  name: string;
  category: 'olympic' | 'racket' | 'combat-field' | 'precision';
  image: string;
  coach: string;
  facility: string;
  stats: string;
  description: string;
}

export interface BoardingScheduleItem {
  time: string;
  title: string;
  category: 'wellness' | 'academic' | 'sports' | 'pastoral';
  description: string;
  highlights: string[];
  icon: string;
}

export interface AwardItem {
  id: string;
  rank: string;
  title: string;
  authority: string;
  year: string;
  badge: string;
  description: string;
}

export interface DignitaryItem {
  id: string;
  name: string;
  role: string;
  accolade: string;
  image: string;
  tag: 'sports' | 'governance' | 'cultural';
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  relation: string;
  studentName: string;
  grade: string;
  avatar: string;
  rating: number;
  quote: string;
  verified: boolean;
  location: string;
}

export interface CampusZone {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  tag: string;
  highlights: string[];
  virtualTourUrl: string;
}

export interface CollaborationItem {
  name: string;
  type: string;
  badge: string;
  country: string;
}
