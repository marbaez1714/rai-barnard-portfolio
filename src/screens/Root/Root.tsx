import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <h1 className="font-fugaz">Root</h1>
      <Outlet />
    </div>
  );
};
