import { clsx } from "clsx";

interface ScreenContainerProps {
  headerPadding?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const ScreenContainer = ({
  headerPadding = true,
  children,
  className,
}: ScreenContainerProps) => {
  return (
    <div
      className={clsx(
        "flex grow fade-in",
        { "pt-[16.5rem]": headerPadding },
        className
      )}
    >
      {children}
    </div>
  );
};
