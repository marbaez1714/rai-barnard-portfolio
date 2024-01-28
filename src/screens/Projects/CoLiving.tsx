import { LessonsLearned } from "./LessonsLearned";
import { SectionBox } from "./SectionBox";

export const CoLiving = () => {
  return (
    <div className="project-container">
      {/* Getting to know the users */}
      <SectionBox>
        My team combined our information from provided personas and interviews
        to then complete an empathy map. Desires for certainty, clarity, and
        control came up several times. We then identified key pain points to
        guide our next steps:
      </SectionBox>

      <div className="max-w-lg pl-6 mx-auto">
        <ul className="gap-6 flex flex-col list-disc text-xl">
          <li>
            Exhaustion from creating distinct time and space between work and
            personal life.
          </li>
          <li>
            Uncertainty about the culture and safety of the neighborhood they
            are moving into. They don't know if it's a good fit until they get
            there.
          </li>
          <li>
            Apprehension about the long-term fit of a home. Can it accommodate
            major lifestyle changes?
          </li>
        </ul>
      </div>

      {/* line break */}
      <hr />

      {/* Building the style */}

      {/* line break */}
      <hr />

      {/* line break */}
      <hr />

      {/* Lessons learned */}
      <LessonsLearned>
        My first experience working with a team of designers challenged me to
        embrace multiple perspectives. It was exciting to meld our the best
        parts of all our ideas into the final product.
        <br /> <br /> Group workshops on empathy mapping, user persona creation,
        market analysis, and product identification strengthened my UX research
        skills and pushed me to truly center the user in my designs.
        <br /> <br /> With more time I would have loved to build out a more
        robust design system for mobile and desktop versions of the app. Since
        completing Dialexa EDU, I've researched successful design systems
        (Figma, Material, Atlassian, Airbnb, etc.) to understand how to
        streamline the design process for large products/product families.
      </LessonsLearned>
    </div>
  );
};
