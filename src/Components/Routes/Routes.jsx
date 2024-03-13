/**
 * Router configuration for the application using react-router-dom.
 * @module AppRouter
 */

import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutMe from "../../Pages/AboutMe";
import Contact from "../../Pages/Contact";
import Home from "../../Pages/Home";
import Menu from "../../Pages/Menu";
import Projects from "../../Pages/Projects";

/**
 * Configures the router for the application.
 * @returns {BrowserRouter} Configured router instance
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
