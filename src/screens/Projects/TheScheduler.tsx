import { SectionBox } from "./SectionBox";
import { BeforeAfter } from "./BeforeAfter";
import { LessonsLearned } from "./LessonsLearned";

export const TheScheduler = () => {
  return (
    <div className="project-container">
      {/* description */}
      <SectionBox>
        While first iteration of the app significantly improved his work
        efficiency, its design was clunky and a bit confusing. So, I joined
        forces with the app's engineer to fine-tune the user experience and give
        the_scheduler a simple yet modern look. <br /> <br /> Through interviews
        with the owner, I identified 4 priorities for the new design:
      </SectionBox>

      {/* details */}
      <div className="max-w-lg pl-6 mx-auto">
        <ul className="gap-6 flex flex-col list-decimal text-xl">
          <li>
            Be able to see as many jobs/data as possible within the screen
            vertically, since he utilizes the app on a portrait-oriented desktop
          </li>
          <li>Limit the number of clicks necessary to add or edit jobs/data</li>
          <li>Add more options for customizing organization</li>
          <li>
            Limit major changes that would require the user to learn new
            processes or flows
          </li>
        </ul>
      </div>

      {/* line break */}
      <hr />

      {/* organize jobs */}
      <BeforeAfter
        title="Organize Jobs"
        beforeImages={[
          { src: "https://picsum.photos/300/200", alt: "" },
          { src: "https://picsum.photos/300/200", alt: "" },
        ]}
        afterImages={[
          { src: "https://picsum.photos/300/200", alt: "" },
          { src: "https://picsum.photos/300/200", alt: "" },
        ]}
      />

      <SectionBox
        listItems={[
          "Switched to just one space where filtering and searching will occur.",
          "Combined search and filter options into one container.",
          "Limited the filter categories according to user's priorities. He wants to keep track of jobs at each address or under each contractor, which he can then contact through a connected messaging service.",
          "Prioritize selected filter options so the user can easily remove individual options.",
        ]}
      />

      {/* line break */}
      <hr />

      {/* Optimizing with Overlays */}
      <BeforeAfter
        title="Optimizing with Overlays"
        beforeImages={[
          { src: "https://picsum.photos/300/200", alt: "" },
          { src: "https://picsum.photos/300/200", alt: "" },
        ]}
        afterImages={[
          { src: "https://picsum.photos/300/200", alt: "" },
          { src: "https://picsum.photos/300/200", alt: "" },
        ]}
      />

      <SectionBox
        listItems={[
          "Eliminated unnecessary icons that were crowding the screen.",
          "Altered button to add line items to include text that clarifies its purpose.",
          "Implemented overlays for adding new data points to the app - instead of separate pages.",
        ]}
      />

      {/* line break */}
      <hr />

      {/* Lessons learned */}
      <LessonsLearned>
        After reviewing with the developer, we presented our changes to the
        owner/user. He found the app much easier to navigate and was able to add
        data and create jobs more quickly. <br /> <br /> The new design
        increased the total number of jobs visible per screen by condensing
        information in table rows and re-organizing jobs by status. I minimized
        clicks to manage or create data by utilizing overlays where possible.
        The new combined search and select filters increased customization for
        displayed jobs. All of this without adding new flows for the user to
        learn.
      </LessonsLearned>
    </div>
  );
};
