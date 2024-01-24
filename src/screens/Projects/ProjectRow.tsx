interface ProjectRowProps {
  title: string;
  keywords: string[];
  images: { src: string; alt: string }[];
}

export const ProjectRow = (props: ProjectRowProps) => {
  return <div className="flex max-h-60"></div>;
};
