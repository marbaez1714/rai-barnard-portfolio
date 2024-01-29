interface ProjectTitleProps {
  title: string;
  keywords: string[];
}

export const ProjectTitle = ({ title, keywords }: ProjectTitleProps) => {
  return (
    <div className="flex flex-col gap-8 items-center fade-in">
      {/* title */}
      <h1 className="font-bold text-5xl py-4 project-header-text-shadow fade-text-in">
        {title}
      </h1>
      {/* keywords */}
      <ul className="flex text-center items-center divide-x divide-black font-bold">
        {keywords.map((item) => (
          <li className="px-6 py-2 first:pl-0 last:pr-0" key={item}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
