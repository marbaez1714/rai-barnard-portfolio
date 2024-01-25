import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Contact, Landing, ProjectsLanding, Root } from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Landing /> },
      {
        path: "/projects",
        children: [{ element: <ProjectsLanding />, index: true }],
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
