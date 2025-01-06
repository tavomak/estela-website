interface Testimonial {
  testimonialText: string;
  highlightedQuote?: string;
  image: { url: string };
  projectName: string;
  autorName: string;
  autorRole: string;
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
}
