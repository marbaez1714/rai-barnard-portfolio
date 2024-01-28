import { BeforeAfter } from "./BeforeAfter";
import { LessonsLearned } from "./LessonsLearned";
import { SectionBox } from "./SectionBox";
import { SectionTitle } from "./SectionTitle";

export const PepesYMitos = () => {
  return (
    <div className="project-container">
      {/* description */}
      <SectionBox>
        The original website rarely mentioned their feature on DDD or their new
        event/catering options . The menu page was subdivided in an unusual way
        that generated multiple scroll bars, making it confusing to navigate.
        <br /> <br /> On the business side, the owners received numerous
        complaints about expensive and limited parking (an infamous aspect of
        Deep Ellum). And, on top of it all, the website didn't align with the
        recent company rebranding.
        <br /> <br /> With all this in mind, I set my goals for the redesign:
      </SectionBox>

      {/* details */}
      <div className="max-w-lg pl-6 mx-auto">
        <ul className="gap-6 flex flex-col list-decimal text-xl">
          <li>
            Create a new landing page with direct CTAs and highlights of the
            restaurant's legacy and new offerings.
          </li>
          <li>Simplify the menu, focusing especially on navigation.</li>
          <li>
            Make parking recommendations and social media presence readily
            apparent.
          </li>
          <li>
            Update colors, fonts, photos, and graphics to align with the current
            branding.
          </li>
        </ul>
      </div>
      <hr />

      {/* Finding the Style */}
      <div>
        <SectionTitle title="Finding the Style" />
        <img
          src="https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/Pepe's%20y%20Mito's/finding-the-style-gcwWGtgvOMn0sK1QcNxbmholsfAgqH.png"
          alt="Pepe's y Mito's style guide"
        />
      </div>

      <SectionBox>
        <ul>
          <li>Generated a complete color palette, based on the new logo.</li>
          <li>
            Formalized a set of fonts, including header fonts based on the print
            menu and more legible body fonts.
          </li>
          <li>
            Created basic button styles and states, thinking ahead to the
            digital menu and landing page.
          </li>
        </ul>
      </SectionBox>
      <hr />

      {/* sticking the landing */}
      <BeforeAfter
        title="Sticking the Landing"
        beforeImages={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/Pepe's%20y%20Mito's/sticking-the-landing-before-YvDDVwqnn2VwpMQO0AZP6tiUsU4jlo.png",
            alt: "Pepe's y Mito's landing page before redesign",
          },
        ]}
        afterImages={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/Pepe's%20y%20Mito's/sticking-the-landing-after-desktop-qggUgbivB7nXBuDmQkFNxPDZg8NneM.png",
            alt: "Pepe's y Mito's landing page after redesign - desktop",
          },
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/Pepe's%20y%20Mito's/sticking-the-landing-after-mobile-jwOSy4vIQ5UVSCqAltkdppKeYuWBt1.png",
            alt: "Pepe's y Mito's landing page after redesign - mobile",
            className: "max-h-64 object-contain",
          },
        ]}
      />
      <SectionBox>
        <ul>
          <li>
            Immediately familiarize the user with the new branding with the logo
            and graphics in the hero.
          </li>
          <li>
            Provide clear guidance to the user in the hero section with a single
            CTA.
          </li>
          <li>
            Give users a glimpse of the restaurant's highlights (featured dishes
            from Diners, Drive-Ins, and Dives).
          </li>
          <li>
            Slight adjustments to scale and layout for mobile make it harmonious
            with the desktop version.
          </li>
        </ul>
      </SectionBox>
      <img
        src="https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/Pepe's%20y%20Mito's/sticking-the-landing-catering-SqDMtex7Fit8Dx8Sgm9a6x336cM7ZP.png"
        alt="Pepe's y Mito's catering page"
      />
      <img
        className="max-w-72 mx-auto"
        src="https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/Pepe's%20y%20Mito's/sticking-the-landing-mobile-iEV1Nq4VkVTYw9Zz6D2YDAf5mzMcCB.png"
        alt="Pepe's y Mito's mobile screen"
      />
      <SectionBox>
        <ul>
          <li>
            A collage of images breaks up the screen while still giving a
            complete idea of the business.
          </li>
          <li>
            Contact information in the footer nudges user towards
            events/catering without distracting from the primary CTA.
          </li>
          <li>
            Adjusted collage to a carousel for mobile- uses the full screen
            width, prioritizes simplicity and accessibility.
          </li>
        </ul>
      </SectionBox>
      <hr />

      {/* Simplicity is Key */}
      <BeforeAfter
        title="Simplicity is Key"
        beforeImages={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/Pepe's%20y%20Mito's/simplicity-before-1-lK8g4vGHVBY3V5oRCgTr1oqUoMclyM.png",
            alt: "Pepe's y Mito's menu page before redesign - example 1",
          },
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/Pepe's%20y%20Mito's/simplicity-before-2-YqIOBsCPPIMv0Am8PPXBXMnl2vxCJM.png",
            alt: "Pepe's y Mito,'s menu page before redesign - example 2",
          },
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/Pepe's%20y%20Mito's/simplicity-before-3-gu4nGGFvMcRANLE5IJ40e0kUGl83ws.png",
            alt: "Pepe's y Mito's menu page before redesign - example 3",
          },
        ]}
        afterImages={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/Pepe's%20y%20Mito's/simplicity-after-desktop-U7npy7N3s19zov11HmWFc8yUF7DCPH.png",
            alt: "Pepe's y Mito's menu page after redesign - desktop",
          },
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/Pepe's%20y%20Mito's/simplicity-after-mobile-lF5eEvvHO2zux61oPrRQQuds4bMv7c.png",
            alt: "Pepe's y Mito's menu page after redesign - mobile",
            className: "max-h-64 object-contain",
          },
        ]}
      />
      <SectionBox>
        <ul>
          <li>
            Got rid of dropdown sections to avoid multiple scroll bars in one
            screen.
          </li>
          <li>
            User can see all sections at once and clearly identify which section
            they're currently viewing
          </li>
          <li>
            Switching the position of the Guy Fieri icon to the right of menu
            items allows for smooth text alignment
          </li>
          <li>
            Changing menu background and text colors to help the Fieri icon
            further stand out.
          </li>
        </ul>
      </SectionBox>
      <hr />

      {/* rolling it out */}

      {/* Lessons learned */}
      <LessonsLearned>
        This was one of my first designs to be developed and my first
        opportunity to work alongside a developer in my design process. <br />
        <br /> Knowing the capabilities of the engineer gave me confidence to
        experiment with layers, textures, and animations. I also began studying
        the basics of HTML, CSS, and JavaScript to better understand the
        structure of web design. <br /> <br /> In future updates, I will further
        prioritize the catering and event options. I considered a modal or
        popover, but those have varying success with actually engaging users.
      </LessonsLearned>
    </div>
  );
};
