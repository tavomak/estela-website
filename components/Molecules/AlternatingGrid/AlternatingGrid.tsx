import Image from 'next/image';
import { FC } from 'react';
import { Project } from './types';

const AlternatingGrid: FC<{ projects: Project[] }> = ({ projects }) => (
  <div className="">
    <div className="flex flex-wrap">
      {projects.map((project, index) => (
        <div key={project.title} className="w-full sm:w-1/2">
          <div
            className={`flex flex-col p-4 m-4 bg-white rounded-lg ${index % 2 === 0 ? 'mb-4 sm:mb-0' : 'flex-col-reverse mt-4 sm:mt-0'}`}
          >
            <div className="my-4 space-y-2 rounded-lg text-verde-oscuro-500">
              <h2 className="text-2xl">{project.title}</h2>
              <p className="w-3/4 text-sm text-ea-gris">
                {project.description}
              </p>
            </div>
            <div className="transition-all duration-300 rounded-lg hover:scale-95">
              <Image
                src={project.image.url}
                alt={`imagen de ${project.title}`}
                width={1200}
                height={480}
                className="aspect-square"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AlternatingGrid;
