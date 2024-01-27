interface SectionBoxProps {
  children: React.ReactNode;
}

export const SectionBox = ({ children }: SectionBoxProps) => {
  return (
    <div className="px-16 w-full">
      <div className="bg-dark-grey p-8 rounded-2xl">
        <section className="max-w-xl flex flex-col gap-6 mx-auto text-white text-xl">{children}</section>
      </div>
    </div>
  );
};
