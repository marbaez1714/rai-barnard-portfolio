import { SectionTitle } from "./SectionTitle";

interface SectionTitleProps {
  title?: string;
  beforeImages: { src: string; alt: string }[];
  afterImages: { src: string; alt: string }[];
}

export const BeforeAfter = ({
  title,
  beforeImages,
  afterImages,
}: SectionTitleProps) => {
  return (
    <section className="text-center">
      {/* title */}
      {title && <SectionTitle title={title} />}
      {/* images */}
      <div className="flex gap-6 uppercase text-2xl">
        {/* before */}
        <div className="flex flex-col grow gap-8">
          <h3>before</h3>
          {beforeImages.map((item) => (
            <img {...item} key={`before-${item.src}`} />
          ))}
        </div>
        {/* after */}
        <div className="flex flex-col grow gap-8">
          <h3>after</h3>
          {afterImages.map((item) => (
            <img {...item} key={`after-${item.src}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
