import { clsx } from "clsx";

interface ScreenContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const ScreenContainer = ({
  children,
  className,
}: ScreenContainerProps) => {
  return <div className={clsx("pt-[16.5rem]", className)}>{children}</div>;
};
