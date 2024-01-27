import { SectionBox } from "./SectionBox";

export const TheScheduler = () => {
  return (
    <div className="project-container">
      <SectionBox>
        <p>
          While first iteration of the app significantly improved his work
          efficiency, its design was clunky and a bit confusing. So, I joined
          forces with the app's engineer to fine-tune the user experience and
          give the_scheduler a simple yet modern look.
        </p>
        <p>
          Through interviews with the owner, I identified 4 priorities for the
          new design:
        </p>
      </SectionBox>
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

      <div>the_scheduler</div>
      <div>the_scheduler</div>
      <div>the_scheduler</div>
      <div>the_scheduler</div>
      <div>the_scheduler</div>
      <div>the_scheduler</div>
      <div>the_scheduler</div>
    </div>
  );
};
