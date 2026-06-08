// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Service object
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    short_description?: string;
    details?: string;
    icon?: string;
    starting_price?: string;
    featured_image?: CosmicImage;
  };
}

// Team member object
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    role?: string;
    bio?: string;
    photo?: CosmicImage;
    email?: string;
  };
}

// Case study object
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    title?: string;
    summary?: string;
    content?: string;
    results?: string;
    featured_image?: CosmicImage;
    related_service?: Service;
  };
}

// Testimonial object
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    company?: string;
    quote?: string;
    rating?: number;
    photo?: CosmicImage;
    related_service?: Service;
  };
}

// Cosmic API response
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type === 'case-studies';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}