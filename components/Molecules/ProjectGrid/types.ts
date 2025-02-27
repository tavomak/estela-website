interface ProjectItem {
  image: string;
  title: string;
  description: string;
}

export interface ProjectGridProps {
  items: ProjectItem[];
}
