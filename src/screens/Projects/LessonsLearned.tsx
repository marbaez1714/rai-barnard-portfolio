interface LessonsLearnedProps {
  children: React.ReactNode;
}

export const LessonsLearned = ({ children }: LessonsLearnedProps) => {
  return (
    <>
      <h2 className="text-3xl text-center font-bold text-dark-green">
        Insights and Lessons Learned
      </h2>
      <p className="text-xl max-w-lg mx-auto">{children}</p>
    </>
  );
};
