import { Outlet, useMatch } from "react-router-dom";
import { NavBar } from "./NavBar";
import { NavFooter } from "./NavFooter";

export const Root = () => {
  const match = useMatch("/");

  return (
    <div className="w-full h-full flex flex-col relative">
      <NavBar />
      <Outlet />
      {!match && <NavFooter />}
    </div>
  );
};
