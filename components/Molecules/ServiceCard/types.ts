export interface services {
  title: string;
  content: string[];
  bgColor: string;
  accentColor: string;
}

export interface ServiceCardProps {
  containerClass?: string;
  buttonText?: string;
  textColor?: string;
  service: services;
}
