import { FC } from 'react';
import { ProjectGridProps } from './types';
import ProjectCard from '../ProjectCard';

const ProjectGrid: FC<ProjectGridProps> = ({ items }: ProjectGridProps) => (
  <div className="grid max-w-5xl gap-6 mx-auto md:grid-cols-2 md:gap-12">
    {items.map((item, index) => {
      const isFullWidth = index % 3 === 0;

      return (
        <div
          key={item.title}
          className={`${isFullWidth ? 'md:col-span-2' : 'md:col-span-1'}`}
        >
          <ProjectCard
            image={item.image}
            title={item.title}
            description={item.description}
            className="h-full"
            isFullWidth={isFullWidth}
          />
        </div>
      );
    })}
  </div>
);

export default ProjectGrid;
