import { clsx } from "clsx";
import { Link, LinkProps } from "react-router-dom";

export const LinkButton = ({ className, ...rest }: LinkProps) => {
  return (
    <Link {...rest} className={clsx("px-12 py-4 text-2xl w-auto rounded-2xl gradient-link", className)} />
  );
};
