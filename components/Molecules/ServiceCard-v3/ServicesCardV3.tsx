import React from 'react';
// import useTranslation from 'next-translate/useTranslation';
import { ServiceCardProps } from './types';

const ServiceCardV3: React.FC<ServiceCardProps> = ({ title, services }) => {
  // const { t } = useTranslation('common');
  const isArray = Array.isArray(services);

  return (
    <div className="w-72 mx-auto relative group my-12 lg:my-0">
      <div className="absolute -top-6 -right-6 bg-ea-amarillo w-4/5 h-28 transition-all duration-400 group-hover:w-full group-hover:h-1/4 group-hover:top-0 group-hover:right-0">
        <h2 className="w-5/6 group-hover:w-full display-font text-3xl font-bold pt-8 px-4">
          {title}
        </h2>
      </div>

      <div className="relative h-full border-2 border-ea-verde-oscuro p-6 pt-24">
        {isArray ? (
          <ul className="space-y-2 list-disc list-inside">
            {(services as string[]).map((item) => (
              <li key={item} className="text-ea-verde-oscuro text-lg">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-ea-verde-oscuro">{services}</p>
        )}
      </div>
    </div>
  );
};

export default ServiceCardV3;
