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
  NotFound,
} from "./screens";
import { init as emailJsInit } from "@emailjs/browser";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// email js
emailJsInit(import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY);

// router
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
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_EMAIL_RE_CAPTCHA_SITE_KEY}
    >
      <RouterProvider router={router} />
    </GoogleReCaptchaProvider>
  );
}

export default App;
