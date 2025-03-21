import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, services }) => {
  const { t } = useTranslation('common');
  const isArray = Array.isArray(services);

  return (
    <div className="relative w-full h-full p-6 mx-auto mt-4 border-2 group border-verde-oscuro-500">
      <div className="absolute w-full transition-all -top-2 -left-2 duration-400">
        <h2 className="w-full p-4 text-5xl leading-10 display-font text-verde-oscuro-500">
          {t(title)}
        </h2>
      </div>
      <div className="relative pt-20">
        {isArray ? (
          <ul className="px-4">
            {(services as string[]).map((item) => (
              <li key={item} className="py-1 text-base text-verde-oscuro-500">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-4 text-verde-oscuro-500 my-9">
            {t(services as string)}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
