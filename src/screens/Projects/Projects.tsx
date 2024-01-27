import { Link, Outlet, useMatch } from "react-router-dom";
import { ScreenContainer } from "../../components";
import ChevronLeft from "/chevron-left.svg";
import ChevronRight from "/chevron-right.svg";

const INFO_MAP: Record<
  string,
  {
    title: string;
    details: string;
    backLink: { title: string; to: string };
    forwardLink: { title: string; to: string };
    keywords: string[];
  }
> = {
  the_scheduler: {
    title: "the_scheduler",
    details:
      "In early 2023 I became acquainted with a DFW-based, family-run tile company. Hundreds of jobs and contractors are all managed by the company's owner. After growing the business over several years, he became so successful that it was nearly impossible for the owner to keep track of all the jobs using commercial software. He commissioned a custom web-based app to help manage all the company's jobs and employees, the_scheduler.",
    keywords: [
      "Portrait desktop",
      "Residential construction",
      "Internal tooling",
    ],
    backLink: { title: "Co Living", to: "Co_Living" },
    forwardLink: { title: "Pepe's y Mito's", to: "Pepes_y_Mitos" },
  },
  Pepes_y_Mitos: {
    title: "Pepe's y Mito's",
    details: `Nestled in the Northeast corner of Deep Ellum, Pepe's y Mito's has served their iconic "Mex-Tex" dishes for nearly 30 years. What started as a small family business has grown into a local gem featured on national television for  Guy Fieri's "Diners, Drive-Ins, and Dives" (DDD). 5 years after the launch of their initial website, it was time for a redesign that highlighted the legacy and quality of the beloved restaurant.`,
    keywords: [
      "Mobile responsive",
      "Nationally recognized",
      "Family restaurant",
    ],
    backLink: { title: "the_scheduler", to: "the_scheduler" },
    forwardLink: { title: "Co Living", to: "Co_Living" },
  },
  Co_Living: {
    title: "Co Living",
    details:
      "In Spring of 2023 I participated in Dialexa EDU, a unique educational program at a growing tech consulting firm. I worked alongside college students and fellow career-switchers with mentorship from designers, engineers, and managers of Dialexa, an IBM Company. In just 7 weeks we researched, designed, and demoed a conceptual web-based product that sought to connect DFW residents and transplants to sustainable, community- and future-focused work and living solutions.",
    keywords: [
      "Single page app",
      "Real estate and lifestyle",
      "Proof of concept",
    ],
    backLink: { title: "Pepe's y Mito's", to: "Pepes_y_Mitos" },
    forwardLink: { title: "the_scheduler", to: "the_scheduler" },
  },
};

export const Projects = () => {
  const match = useMatch("/projects/:project");
  const projectInfo = INFO_MAP[match?.params.project || "the_scheduler"];

  return (
    <ScreenContainer className="flex-col items-center gap-24">
      {/* header */}
      <div className="px-40 w-full flex justify-center">
        <div className="w-full max-w-app flex justify-between gap-6">
          {/* back link */}
          <Link
            to={projectInfo.backLink.to}
            relative="route"
            className="flex gap-4 items-center text-black px-2 py-4 h-max mt-3 transition-all opacity-75 hover:opacity-100 hover:font-bold"
          >
            <img src={ChevronLeft} className="h-5 aspect-square" />
            <span className="w-32 text-center">
              {projectInfo.backLink.title}
            </span>
          </Link>
          {/* header text */}
          <div className="flex flex-col gap-8 items-center">
            {/* title */}
            <h1 className="font-bold text-5xl py-4 project-header-text-shadow">
              {projectInfo.title}
            </h1>
            {/* keywords */}
            <ul className="flex text-center items-center divide-x divide-black font-bold">
              {projectInfo.keywords.map((keyword) => (
                <li className="px-6 py-2 first:pl-0 last:pr-0" key={keyword}>
                  <p>{keyword}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* forward link */}
          <Link
            to={projectInfo.forwardLink.to}
            className="flex gap-4 items-center px-2 text-black py-4 h-max mt-3 transition-all opacity-75 hover:opacity-100 hover:font-bold"
          >
            <span className="w-32 text-center">
              {projectInfo.forwardLink.title}
            </span>
            <img src={ChevronRight} className="h-5 aspect-square" />
          </Link>
        </div>
      </div>

      {/* banner */}
      <div className="py-8 bg-dark-green w-full">
        <p className="text-white max-w-xl mx-auto">{projectInfo.details}</p>
      </div>

      {/* content */}
      <div className="px-40 w-full">
        <Outlet />
      </div>
    </ScreenContainer>
  );
};
