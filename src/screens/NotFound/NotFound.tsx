import { LinkButton, ScreenContainer } from "../../components";

export const NotFound = () => {
  return (
    <ScreenContainer className="px-40 pb-24 items-center">
      <div className="mx-auto max-w-app flex gap-16">
        <h1 className="text-9xl h-32 font-bold flex items-center">404</h1>
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl flex items-center h-32">
            Looks like the page no longer exists- sorry!
            <br />
            <br />
            Use the navbar above or...
          </h2>
          <LinkButton className="mr-auto" to="/" replace>
            Go to the home page
          </LinkButton>
        </div>
      </div>
    </ScreenContainer>
  );
};
