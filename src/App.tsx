import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Landing, Projects, Root } from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/projects", element: <Projects /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
