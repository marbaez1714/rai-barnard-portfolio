import { clsx } from "clsx";
import { Link, LinkProps } from "react-router-dom";

export const LinkButton = ({ className, ...rest }: LinkProps) => {
  return (
    <Link {...rest} className={clsx("link-button-background", className)} />
  );
};
