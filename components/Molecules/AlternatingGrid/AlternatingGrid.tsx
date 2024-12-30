import Image from 'next/image';
import { Project } from './types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Primer Proyecto',
    description:
      'Descripción detallada del primer proyecto que muestra el contenido del trabajo realizado',
    imageUrl: '/placeholder.svg?height=600&width=800',
  },
  {
    id: 2,
    title: 'Segundo Proyecto',
    description:
      'Descripción detallada del segundo proyecto que explica las características principales',
    imageUrl: '/placeholder.svg?height=600&width=800',
  },
  {
    id: 3,
    title: 'Tercer Proyecto',
    description:
      'Descripción detallada del tercer proyecto con información relevante del desarrollo',
    imageUrl: '/placeholder.svg?height=600&width=800',
  },
  {
    id: 4,
    title: 'Cuarto Proyecto',
    description:
      'Descripción detallada del cuarto proyecto mostrando los aspectos más importantes',
    imageUrl: '/placeholder.svg?height=600&width=800',
  },
];

const AlternatingGrid = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex flex-wrap -mx-4">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="w-full px-4 mb-8 sm:w-1/2 transition-all duration-300 ease-in-out hover:translate-y-[-4px]"
        >
          <div
            className={`h-full flex flex-col ${
              index % 2 === 0 ? 'justify-between' : 'justify-between'
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="space-y-4 p-4 bg-white rounded-lg">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-ea-verde-oscuro text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
                <div className="relative aspect-square mt-4 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 p-4 bg-white rounded-lg">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-ea-verde-oscuro text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AlternatingGrid;
