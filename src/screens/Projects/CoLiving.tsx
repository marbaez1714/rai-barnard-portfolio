import { LessonsLearned } from "./LessonsLearned";
import { SectionBox } from "./SectionBox";
import { SectionTitle } from "./SectionTitle";

export const CoLiving = () => {
  return (
    <div className="project-container">
      {/* Getting to know the users */}
      <div>
        <SectionTitle title="Getting to Know Our Users" />
        <img
          src="https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/coliving/getting-to-know-our-users.png"
          alt="User personas"
        />
      </div>
      <SectionBox>
        <p>
          My team combined our information from provided personas and interviews
          to then complete an empathy map. Desires for certainty, clarity, and
          control came up several times. We then identified key pain points to
          guide our next steps:
        </p>
      </SectionBox>
      <div className="max-w-lg pl-6 mx-auto leading-normal">
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
      <hr />

      {/* Building the Style */}
      <div>
        <SectionTitle title="Building the Style" />
        <img
          src="https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/coliving/building-the-style.png"
          alt="Style guide"
        />
      </div>
      <SectionBox>
        <ul>
          <li>
            Warm-toned colors complement the warm, personable spirit of the
            product.
          </li>
          <li>Low saturation suggests comfort and calm in a living space.</li>
          <li>
            A sufficiently diverse set of fonts covers uses from landing page
            hero sections to labels within message threads.
          </li>
        </ul>
      </SectionBox>
      <hr />

      {/* Easy Onboarding */}
      <div>
        <SectionTitle title="Easy Onboarding" />
        <img
          src="https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/coliving/onboarding-screens.png"
          alt="Onboarding screens"
        />
      </div>
      <SectionBox>
        <ul>
          <li>Button/card-based screens minimize effort for user inputs.</li>
          <li>
            Progress bar along the top helps users feel how quickly they are
            moving through the process.
          </li>
          <li>Back arrows offer forgiveness of user error with inputs.</li>
          <li>
            Skip option is inconspicuous. Effort to find the button outweighs
            the effort to just select an option and move on.
          </li>
          <li>
            The input requiring the most effort (uploading proof of ID) is the
            last step.
          </li>
        </ul>
      </SectionBox>
      <hr />

      {/* Encouraging Engagement */}
      <div>
        <SectionTitle title="Encouraging Engagement" />
        <img
          src="https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/coliving/landing.png"
          alt="Encouraging engagement"
          className="mx-auto"
        />
      </div>
      <SectionBox>
        <ul>
          <li>
            Engagement between new residents is prioritized on the feed.
            Community engagement will be required to create a space that fits
            the needs of its members.
          </li>
          <li>
            Users can connect with business owners personally. The businesses
            selected are more likely to reflect the interests of our residents.
          </li>
          <li>
            Animated modal displays progress towards logistical goals required
            to make their ideal community come to life.
          </li>
        </ul>
      </SectionBox>
      <img
        className="mx-auto"
        src="https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/coliving/announcements.png"
        alt="Announcements screen"
      />
      <SectionBox>
        <ul>
          <li>
            Once a community is established, users can easily keep track of
            social and management announcements.
          </li>
          <li>
            “Add to Calendar” option allows us to reach users about important
            happenings without them being on the website.
          </li>
          <li>
            Informal community discussion and outreach is held through a message
            board that operates similar to Facebook posts or X threads.
          </li>
          <li>
            Users can save posts or threads, creating more convenience with
            communication and encouraging deeper discussion.
          </li>
        </ul>
      </SectionBox>
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

      <div className="flex gap-6 text-xl leading-normal">
        <div className="flex flex-col gap-4 px-11 basis-1/2">
          <img
            className="mx-auto"
            src="https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/coliving/presentation.png"
            alt="Presenting our product concept to employees and stakeholders at the Dialexa office."
          />
          <p className="text-center">
            Presenting our product concept to employees and stakeholders at the
            Dialexa office.
          </p>
        </div>
        <div className="flex flex-col gap-4 px-11 grow  basis-1/2">
          <img
            className="mx-auto"
            src="https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/coliving/team-eagle.png"
            alt="Presenting our product concept to employees and stakeholders at the Dialexa office."
          />
          <p className="text-center">
            Team picture- including all our student designers and Dialexa
            mentors!
          </p>
        </div>
      </div>
    </div>
  );
};
