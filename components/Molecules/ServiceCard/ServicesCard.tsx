import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, services }) => {
  const { t } = useTranslation('common');
  const isArray = Array.isArray(services);

  return (
    <div className="relative w-80 group">
      <div className="absolute w-11/12 transition-all -top-2 -left-2 h-28 duration-400">
        <h2 className="w-full px-4 pt-4 text-5xl leading-10 display-font">
          {t(title)}
        </h2>
      </div>

      <div className="relative h-full p-6 border-2 pt-28 border-ea-verde-oscuro">
        {isArray ? (
          <ul className="list-outside ">
            {(services as string[]).map((item) => (
              <li key={item} className="py-1 text-base text-ea-verde-oscuro">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-ea-verde-oscuro my-9">{t(services as string)}</p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
