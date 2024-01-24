import { ScreenContainer } from "../../components";
import { ProjectRow } from "./ProjectRow";

export const Projects = () => {
  return (
    <ScreenContainer className="flex-col gap-16">
      <ProjectRow
        title={"the_\nscheduler"}
        keywords={["desktop", "single user", "tile/flooring"]}
        images={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/scheduler-example-1-PqKRAGRanHClmJQt0eWGwrZWdUCJVF.png",
            alt: "the_scheduler example 1",
          },
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/scheduler-example-2-ZCbzkNbbJn7C9vp5Uwuh0JGxmqvfd9.png",
            alt: "the_scheduler example 2",
          },
        ]}
      />
      <ProjectRow
        title={"Pepe's \ny Mito's"}
        keywords={["desktop", "mobile", "restaurant"]}
        images={[]}
      />
      <ProjectRow
        title="Co Living"
        keywords={["desktop", "housing/lifestyle", "conceptual"]}
        images={[]}
      />
    </ScreenContainer>
  );
};
Projects;
