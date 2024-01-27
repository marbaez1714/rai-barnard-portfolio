import clsx from "clsx";
import { Link } from "react-router-dom";

interface ProjectRowProps {
  title: string;
  keywords: string[];
  images: { src: string; alt: string; className?: string }[];
  to: string;
}

export const ProjectRow = ({
  title,
  keywords,
  images,
  to,
}: ProjectRowProps) => {
  return (
    <div className="flex">
      <div className="grow justify-end flex h-60 border-y-4 border-r-4 rounded-r-full border-dark-grey shadow-project-row relative">
        <div className="flex pr-28 pt-6 absolute top-0 h-full justify-end gap-6 mr-60 items-end">
          {images.map((item) => (
            <img
              key={`${title}-image-${item.alt}`}
              src={item.src}
              alt={item.alt}
              className={clsx("max-h-full", item.className)}
            />
          ))}
        </div>

        <div className="bg-dark-grey rounded-full h-60 aspect-square -my-1 -mr-1 shadow-lg gap-4 flex flex-col justify-center px-8">
          {keywords.map((item) => (
            <p key={`${title}-keyword-${item}`} className="text-white">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="w-[45%]">
        <Link
          to={to}
          relative="path"
          className="aspect-square h-60 rounded-full px-8 flex items-center text-white text-3xl gradient-transition shadow-project-row-title bg-project-row bg-cover before:shadow-project-row-title-hover before:bg-project-row-hover before:bg-cover"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};
