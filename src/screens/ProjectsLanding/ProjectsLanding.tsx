import { ScreenContainer } from "../../components";
import { ProjectRow } from "./ProjectRow";

export const ProjectsLanding = () => {
  return (
    <ScreenContainer className="flex-col gap-16">
      <ProjectRow
        to="the_scheduler"
        title={"the_\nscheduler"}
        keywords={[
          "Portrait desktop",
          "Residential construction",
          "Internal tooling",
        ]}
        images={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/the-scheduler-example-1-P0mcZC1UHQRIIdnP9UOxDCiB2T4ZaJ.png",
            alt: "the_scheduler example 1",
          },
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/the-scheduler-example-2-9OeP6cjTVKEqkThVb6oaMuiVZYYlan.png",
            alt: "the_scheduler example 2",
          },
        ]}
      />
      <ProjectRow
        to="Pepes_y_Mitos"
        title={"Pepe's \ny Mito's"}
        keywords={[
          "Mobile responsive",
          "Nationally recognized",
          "Family restaurant",
        ]}
        images={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/pym-example-1-QvlM9qhv9uU5N1PBQwDsg3iwdANZ1i.png",
            alt: "Pepe's y Mito's example 1",
            className: "pt-10",
          },
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/pym-example-2-XNREhKo9qecIobBj0b3m3ckkO1jzBX.png",
            alt: "Pepe's y Mito's example 2",
          },
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/pym-example-3-GA53rmDDlbbvgTyoum9LUD3reoZLOs.png",
            alt: "Pepe's y Mito's example 3",
            className: "pt-10",
          },
        ]}
      />
      <ProjectRow
        to="Co_Living"
        title="Co Living"
        keywords={[
          "Single page app",
          "Real estate and lifestyle",
          "Proof of concept",
        ]}
        images={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/co-living-example-1-geYZV1gpFRSc4ttpRUmkBHULdqrl9E.png",
            alt: "Co Living example 1",
          },
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/co-living-example-2-K34vpigGKzXqiqTqEMvrk7eppTN8gU.png",
            alt: "Co Living example 2",
          },
        ]}
      />
    </ScreenContainer>
  );
};
