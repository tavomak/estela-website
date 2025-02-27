import React from 'react';
// import useTranslation from 'next-translate/useTranslation';
import { ServiceCardProps } from './types';

const ServiceCardV2: React.FC<ServiceCardProps> = ({ title, services }) => (
  // const { t } = useTranslation('common');

  <div className="w-full mx-auto my-12 group md:my-0">
    <div className="relative h-full p-6 bg-gray-100 border border-ea-verde-oscuro">
      <div className="absolute -left-3 -top-3 w-[calc(100%+12px)] bg-ea-amarillo transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:w-full">
        <h3 className="relative z-10 px-6 py-4 text-3xl font-semibold text-ea-verde-oscuro display-font">
          {title}
        </h3>
      </div>

      <div className="mt-24 sm:mt-16">
        <ul className="space-y-2">
          {services.map((service) => (
            <li key={service} className="text-sm text-ea-verde-oscuro">
              • {service}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute -left-2 -top-2 w-full h-0.5 bg-ea-verde-oscuro transition-all duration-300 group-hover:left-0 group-hover:top-0" />
      <div className="absolute -right-2 -top-2 w-0.5 h-full bg-ea-verde-oscuro transition-all duration-300 group-hover:right-0 group-hover:top-0" />
      <div className="absolute -right-2 -bottom-2 w-full h-0.5 bg-ea-verde-oscuro transition-all duration-300 group-hover:right-0 group-hover:bottom-0" />
      <div className="absolute -left-2 -bottom-2 w-0.5 h-full bg-ea-verde-oscuro transition-all duration-300 group-hover:left-0 group-hover:bottom-0" />
    </div>
  </div>
);
export default ServiceCardV2;
