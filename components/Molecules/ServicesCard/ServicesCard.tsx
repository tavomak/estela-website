import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { ServicesProps } from './types';

const ServicesCard: React.FC<ServicesProps> = ({ title, parragraph }) => {
  const { t } = useTranslation('common');

  return (
    <article className="w-11/12 lg:w-3/4 mx-auto">
      <div className="border border-gray-200 bg-white group cursor-pointer">
        <div className="bg-ea-amarillo p-6 transform transition-all duration-300 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-2">
          <h2 className="display-font text-3xl font-bold">{t(title)}</h2>
        </div>
        <div className="p-6 border-t border-gray-200 min-h-40 lg:min-h-80 py-12">
          <p className="text-xl text-ea-verde-oscuro leading-relaxed">
            {t(parragraph)}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ServicesCard;
