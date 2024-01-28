import { SectionBox } from "./SectionBox";
import { BeforeAfter } from "./BeforeAfter";
import { LessonsLearned } from "./LessonsLearned";

export const TheScheduler = () => {
  return (
    <div className="project-container">
      {/* description */}
      <SectionBox>
        <p>
          While first iteration of the app significantly improved his work
          efficiency, its design was clunky and a bit confusing. So, I joined
          forces with the app's engineer to fine-tune the user experience and
          give the_scheduler a simple yet modern look. <br /> <br /> Through
          interviews with the owner, I identified 4 priorities for the new
          design:
        </p>
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
      <hr />

      {/* organize jobs */}
      <BeforeAfter
        title="Organize Jobs"
        beforeImages={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/organize-jobs-before-1-oQjQViNrgioRlw6o4mvQBavyCuPM5q.png",
            alt: "organize jobs before - example 1",
          },
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/organize-jobs-before-2-OX2TNWvEhLqpPgnBgOkK2g8KMXJUNQ.png",
            alt: "organize jobs before - example 2",
          },
        ]}
        afterImages={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/organize-jobs-after-96PHjHd3hBjyVHzqGg5wWowG0P0gzF.png",
            alt: "organize jobs after",
          },
        ]}
      />
      <SectionBox>
        <ul>
          <li>
            Get rid of the bulky page header- rely on the nav bar to show users
            what page they're on.
          </li>
          <li>
            Consolidate the filter/search features to just one area (more on
            that below).
          </li>
          <li>
            Change the organization of the jobs. This makes for fewer tables and
            clearer prioritization/urgency.
          </li>
          <li>
            Switch to Solarized color palette. It's still largely neutral, but
            the vibrant colors help distinguish the tables.
          </li>
        </ul>
      </SectionBox>
      <hr />

      {/* finding what they need */}
      <BeforeAfter
        title="Finding What They Need"
        beforeImages={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/fwtn-before-1-WnUKz8VOANKG9ews8uwCkh0VNiYJ2I.png",
            alt: "finding what they need before - example 1",
          },
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/fwtn-before-2-Zef0SxR2dPY9txhH8B0RHJqxJNy97N.png",
            alt: "finding what they need before - example 2",
          },
        ]}
        afterImages={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/fwtn-after-hV28PX7lugvt2Z4uGvZNgo5vbiRU15.png",
            alt: "finding what they need after",
          },
        ]}
      />
      <SectionBox>
        <ul>
          <li>
            Switched to just one space where filtering and searching will occur.
          </li>
          <li>Combined search and filter options into one container.</li>
          <li>
            Limited the filter categories according to user's priorities. He
            wants to keep track of jobs at each address or under each
            contractor, which he can then contact through a connected messaging
            service.
          </li>
          <li>
            Prioritize selected filter options so the user can easily remove
            individual options.
          </li>
        </ul>
      </SectionBox>
      <hr />

      {/* Optimizing with Overlays */}
      <BeforeAfter
        title="Optimizing with Overlays"
        beforeImages={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/overlay-before-1-lNDTSYk9pEh6JvRusJjR0nJLMvNghE.png",
            alt: "optimizing with overlays before - 1",
          },
        ]}
        afterImages={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/overlay-after-1-gM7vpbNMGoOW6bOkUoCiDtP5Uz6nkz.png",
            alt: "optimizing with overlays after - 1",
          },
        ]}
      />
      <BeforeAfter
        beforeImages={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/overlay-before-2-23sOqvrsl9TZzdGa52jysYb3COtohF.png",
            alt: "optimizing with overlays before - 2",
          },
        ]}
        afterImages={[
          {
            src: "https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/projects/overlay-after-2-VokRPhcGW3txZ94re1YBuS89GzwdvQ.png",
            alt: "optimizing with overlays after - 2",
          },
        ]}
      />
      <SectionBox>
        <ul>
          <li>Eliminated unnecessary icons that were crowding the screen.</li>
          <li>
            Altered button to add line items to include text that clarifies its
            purpose.
          </li>
          <li>
            Implemented overlays for adding new data points to the app - instead
            of separate pages.
          </li>
        </ul>
      </SectionBox>
      <hr />

      {/* lessons learned */}
      <LessonsLearned>
        After reviewing with the developer, we presented our changes to the
        owner/user. He found the app much easier to navigate and was able to add
        data and create jobs more quickly.
        <br />
        <br /> The new design increased the total number of jobs visible per
        screen by condensing information in table rows and re-organizing jobs by
        status. I minimized clicks to manage or create data by utilizing
        overlays where possible. The new combined search and select filters
        increased customization for displayed jobs. All of this without adding
        new flows for the user to learn.
      </LessonsLearned>
    </div>
  );
};
