import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { ServicesProps } from './types';

const ServiceCardV1: React.FC<ServicesProps> = ({ title, parragraph }) => {
  const { t } = useTranslation('common');

  return (
    <article className="w-11/12 mx-auto my-12 lg:w-3/4 lg:my-0">
      <div className="bg-white border border-gray-200 cursor-pointer group">
        <div className="p-6 transition-all duration-300 ease-in-out transform bg-ea-amarillo group-hover:-translate-x-4 group-hover:-translate-y-2">
          <h2 className="text-3xl font-bold display-font">{t(title)}</h2>
        </div>
        <div className="p-6 py-12 border-t border-gray-200 min-h-40 lg:min-h-80">
          <p className="text-xl leading-relaxed text-ea-verde-oscuro">
            {t(parragraph)}
          </p>
        </div>
      </div>
    </article>
  );
};
export default ServiceCardV1;
