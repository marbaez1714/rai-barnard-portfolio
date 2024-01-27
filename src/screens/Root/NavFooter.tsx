import { Link } from "react-router-dom";

export const NavFooter = () => {
  return (
    <footer className="fade-in py-8">
      <div className="px-40 relative">
        <div className="grow mx-auto max-w-app flex items-center justify-between pt-8 pb-10 z-50 relative">
          <div className="mr-16 flex flex-col">
            <Link to="/" className="font-fugaz text-3xl text-dark-green w-max">
              Rai Barnard Design
            </Link>
            <p className="text-xl">Copyright &copy; Rai Barnard Design 2024</p>
          </div>
          <ul className="flex items-center text-xl max-w-md grow justify-between gap-4">
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-20 rounded-r-full border-b border-b-dark-grey gradient-footer" />
      </div>
    </footer>
  );
};
