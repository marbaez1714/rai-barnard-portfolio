import { LinkButton, ScreenContainer } from "../../components";

export const Landing = () => {
  return (
    <ScreenContainer className="px-40" headerPadding={false}>
      <div className="h-full w-full mx-auto flex z-40 max-w-app justify-center lg:gap-24 md:gap-12">
        {/* Left half */}
        <div className="flex flex-col justify-center gap-12 max-w-[34.5rem] relative">
          <h1 className="font-fugaz text-5xl">Hi there, I'm Rai!</h1>
          <p className="text-2xl">
            UX/UI designer with a passion for people and accessibility. I'm
            currently based in Dallas, TX and ready for my next design
            adventure!
          </p>
          <LinkButton to="/projects" className="self-start">
            Check out my work
          </LinkButton>
          {/* Bottom semi circles */}
          <div className="absolute flex bottom-0 w-full justify-between">
            <div className="w-2/5 rounded-t-full aspect-[2] gradient-semi-circle" />
            <div className="w-2/5 rounded-t-full aspect-[2] gradient-semi-circle" />
          </div>
        </div>
        {/* Right half */}
        <div className="h-full flex max-w-[25rem]">
          <div className="relative flex flex-col">
            <div className="flex flex-grow flex-shrink-0" />
            <img
              src="https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/landing/headshot-X3q0Z0wgBCUiONuXNpP45N3s0TQDMN.png"
              alt="rai barnard headshot image"
              className="z-10 relative object-cover"
            />
            <div className="flex flex-grow relative flex-shrink-0">
              <div className="border-x-4 border-b-4 border-dark-green rounded-b-full z-0 w-2/5 absolute h-full left-0" />
              <div className="border-x-4 border-b-4 border-dark-green rounded-b-full z-0 w-2/5 absolute h-screen right-0 bottom-0" />
            </div>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
};
