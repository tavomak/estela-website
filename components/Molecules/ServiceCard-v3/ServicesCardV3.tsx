import React from 'react';
// import useTranslation from 'next-translate/useTranslation';
import { ServiceCardProps } from './types';

const ServiceCardV3: React.FC<ServiceCardProps> = ({ title, services }) => {
  // const { t } = useTranslation('common');
  const isArray = Array.isArray(services);

  return (
    <div className="relative mx-auto my-12 w-72 group lg:my-0">
      <div className="absolute w-4/5 transition-all -top-6 -right-6 bg-ea-amarillo h-28 duration-400 group-hover:w-full group-hover:h-1/4 group-hover:top-0 group-hover:right-0">
        <h2 className="w-5/6 px-4 pt-8 text-3xl font-bold group-hover:w-full display-font">
          {title}
        </h2>
      </div>

      <div className="relative h-full p-6 pt-24 border-2 border-ea-verde-oscuro">
        {isArray ? (
          <ul className="space-y-2 list-disc list-inside">
            {(services as string[]).map((item) => (
              <li key={item} className="text-lg text-ea-verde-oscuro">
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
