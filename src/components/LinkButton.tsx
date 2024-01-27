import { clsx } from "clsx";
import { Link, LinkProps } from "react-router-dom";

export const LinkButton = ({ className, ...rest }: LinkProps) => {
  return (
    <Link
      {...rest}
      className={clsx(
        "px-12 py-4 text-2xl w-auto rounded-2xl gradient-transition shadow-link-button bg-link-button before:shadow-link-button-hover before:bg-link-button-hover",
        className
      )}
    />
  );
};
