import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  services,
  bgWhite,
}) => {
  const { t } = useTranslation('common');
  const isArray = Array.isArray(services);

  return (
    <div className={`${bgWhite ? 'bg-white p-12' : ''}`}>
      <div className="relative w-full h-full mx-auto group">
        <div className="absolute w-11/12 transition-all -top-6 -left-6 bg-ea-amarillo h-28 duration-400 group-hover:w-full group-hover:h-1/4 group-hover:top-0 group-hover:left-0">
          <h2 className="w-5/6 px-4 pt-4 text-3xl font-bold group-hover:w-full display-font">
            {t(title)}
          </h2>
        </div>

        <div className="relative h-full p-6 border-2 pt-28 border-ea-verde-oscuro">
          {isArray ? (
            <ul className="space-y-2 list-disc list-inside">
              {(services as string[]).map((item) => (
                <li key={item} className="text-lg text-ea-verde-oscuro">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-ea-verde-oscuro">{t(services as string)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
