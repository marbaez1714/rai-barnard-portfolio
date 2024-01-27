interface SectionBoxProps {
  children?: React.ReactNode;
  listItems?: string[];
}

export const SectionBox = ({ children, listItems }: SectionBoxProps) => {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="bg-dark-grey p-8 rounded-2xl">
        <section className="max-w-xl flex flex-col gap-6 mx-auto text-white text-xl">
          {children && <p>{children}</p>}
          {listItems && (
            <ul className="pl-6 gap-4 flex flex-col list-image-circle">
              {listItems.map((item, idx) => (
                <li key={`section-${idx}`} className="pl-2">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};
