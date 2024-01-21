import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export const Root = () => {
  return (
    <div className="w-full h-full">
      <NavBar />
      <Outlet />
    </div>
  );
};
