import { LinkButton, ScreenContainer } from "../../components";

export const About = () => {
  return (
    <ScreenContainer className="px-40 pb-20">
      <div className="max-w-app mx-auto w-full flex items-center justify-between gap-6">
        <div className="flex flex-col gap-12 items-center max-w-[40rem]">
          <p className="text-xl leading-normal">
            As a UX/UI designer, I bring a unique blend of creativity and
            analytical thinking to every project. With a B.S. in Biology and a
            B.A. in Visual & Performing Arts from UT Dallas, I have a diverse
            background that allows me to approach design challenges from
            multiple angles.
            <br /> <br /> I discovered my passion for design after encountering
            overly-complex, inaccessible apps through my work with public
            schools and non-profit administration. I saw students and Executive
            Directors alike struggle with digital interfaces. I wanted to
            understand how it could improve.
            <br /> <br /> I completed a UI foundational skills course in
            December 2022 through DesignLab, and in April 2023 I completed
            Dialexa EDU (an agile design experience with a leading tech
            consulting firm in Dallas), where I honed my skills collaborating
            with other designers.
            <br /> <br /> Since then, I've completed website and app designs for
            local businesses, and I'm expanding my skills by learning HTML, CSS,
            and motion graphics.
            <br /> <br /> My approach to UX/UI design is user-centered and
            data-driven, with a focus on accessibility. Whether I'm working on a
            website, an app, or a marketing materials, my goal is to create a
            seamless and enjoyable user experience.
          </p>
          <LinkButton
            className="text-xl"
            target="_blank"
            to="https://www.linkedin.com/in/rai-k-barnard/"
          >
            Let's connect on my LinkedIn!
          </LinkButton>
        </div>
        <div className="max-w-[30rem]">
          <img
            src="https://d2lukm3a4tlyvgrz.public.blob.vercel-storage.com/about/about-r9XkGzVcD4s4FCuBinEfag29GTW1bB.png"
            alt="rai barnard and examples of their work"
          />
        </div>
      </div>
    </ScreenContainer>
  );
};
