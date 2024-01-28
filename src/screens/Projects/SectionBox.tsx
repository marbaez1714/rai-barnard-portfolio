interface SectionBoxProps {
  children: React.ReactNode;
}

export const SectionBox = ({ children }: SectionBoxProps) => {
  return (
    <div className="max-w-4xl mx-auto w-full project-section-box">
      <div className="bg-dark-grey p-8 rounded-2xl">
        <section className="max-w-xl flex flex-col gap-6 mx-auto">
          {children}
        </section>
      </div>
    </div>
  );
};
