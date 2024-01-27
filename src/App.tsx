import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Landing,
  ProjectsLanding,
  Root,
  Projects,
  TheScheduler,
  CoLiving,
  PepesYMitos,
} from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Landing /> },
      {
        path: "/projects",
        children: [
          {
            element: <ProjectsLanding />,
            index: true,
          },
          {
            element: <Projects />,
            children: [
              { path: "the_scheduler", element: <TheScheduler /> },
              { path: "Pepes_y_Mitos", element: <PepesYMitos /> },
              { path: "Co_Living", element: <CoLiving /> },
            ],
          },
        ],
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
