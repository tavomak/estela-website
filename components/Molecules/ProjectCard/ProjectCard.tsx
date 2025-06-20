import React from 'react';
import Image from 'next/image';
import { ProjectCardProps } from './types';

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  className = '',
  isFullWidth = false,
  children,
}) => (
  <div className={`overflow-hidden ${className}`}>
    <div
      className={`mb-4 aspect-auto md:${isFullWidth ? 'aspect-auto' : 'aspect-square'}`}
    >
      <Image
        src={image || '/placeholder.svg'}
        alt={title}
        className="w-full h-full"
        width={1200}
        height={750}
      />
    </div>
    <div className="py-4">
      <h3 className="text-3xl font-semibold text-verde-oscuro-500">{title}</h3>
      <p className="w-full mt-1 text-xl leading-relaxed text-verde-oscuro-500 lg:w-3/4">
        {description}
      </p>
      {children && <div className="mt-3">{children}</div>}
    </div>
  </div>
);

export default ProjectCard;
