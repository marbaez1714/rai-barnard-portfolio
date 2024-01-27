import { LessonsLearned } from "./LessonsLearned";
import { SectionBox } from "./SectionBox";

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

      {/* line break */}
      <hr />

      {/* Finding the Style */}
      <SectionBox
        listItems={[
          "Generated a complete color palette, based on the new logo.",
          "Formalized a set of fonts, including header fonts based on the print menu and more legible body fonts.",
          "Created basic button styles and states, thinking ahead to the digital menu and landing page.",
        ]}
      />

      {/* line break */}
      <hr />

      {/* Sticking the landing */}
      <SectionBox
        listItems={[
          "Immediately familiarize the user with the new branding with the logo and graphics in the hero.",
          "Provide clear guidance to the user in the hero section with a single CTA.",
          "Give users a glimpse of the restaurant's highlights (featured dishes from Diners, Drive-Ins, and Dives).",
          "Slight adjustments to scale and layout for mobile make it harmonious with the desktop version.",
        ]}
      />
      <SectionBox
        listItems={[
          "A collage of images breaks up the screen while still giving a complete idea of the business.",
          "Contact information in the footer nudges user towards events/catering without distracting from the primary CTA.",
          "Adjusted collage to a carousel for mobile- uses the full screen width, prioritizes simplicity and accessibility.",
        ]}
      />

      {/* line break */}
      <hr />

      {/* Simplicity is key */}
      <SectionBox
        listItems={[
          "Got rid of dropdown sections to avoid multiple scroll bars in one screen.",
          "User can see all sections at once and clearly identify which section they're currently viewing.",
          "Switching the position of the Guy Fieri icon to the right of menu items allows for smooth text alignment.",
          "Changing menu background and text colors to help the Fieri icon further stand out.",
        ]}
      />

      {/* line break */}
      <hr />

      {/* Rounding it out */}
      <SectionBox
        listItems={[
          'A similar structure to its landing page section helps draw the eye towards the main difference - the "Contact Us" CTA.',
          "Nearly full-screen images force the user to focus on the visuals of the physical restaurant.",
          "Note: as a new feature to the business, this page will be updated with more information about catering packages as they are released by the owners.",
        ]}
      />
      <SectionBox
        listItems={[
          "Triangles in the background break up the screen and frame the main content.",
          "A narrower text box makes it easier and faster to read.",
          "Stronger visual balance is achieved by matching the height of the text and video.",
          "The video player is still a reasonable size, and users can easily switch to full screen, if desired.",
        ]}
      />
      <SectionBox
        listItems={[
          "Stronger font hierarchy makes it easier to distinguish and read lines of text.",
          "Triangles in the background help frame the page contents.",
          "Again, a narrower layout reduces extra eye movement - all the text and the map are visible at a glance.",
        ]}
      />

      {/* line break */}
      <hr />

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
