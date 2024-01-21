import { clsx } from "clsx";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="pt-8 absolute w-full">
      <div className="flex flex-col items-center gap-2 py-2">
        <Link to="/" className="nav-header">
          Rai Barnard Design
        </Link>
        <ul className="flex gap-12 text-xl">
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                clsx("pb-2", {
                  "pb-1.5 border-b-2 border-b-dark-green": isActive,
                })
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                clsx("pb-2", {
                  "pb-1.5 border-b-2 border-b-dark-green": isActive,
                })
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                clsx("pb-2", {
                  "pb-1.5 border-b-2 border-b-dark-green": isActive,
                })
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
