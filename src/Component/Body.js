import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bio from "./Bio/Bio";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Publication from "./Publication/Publication";
import Research from "./Research/Research";
import Resource from "./Resource/Resource";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/bio",
      element: <Bio />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/publication",
      element: <Publication />,
    },
    {
      path: "/research",
      element: <Research />,
    },
    {
      path: "/research",
      element: <Research />,
    },
    {
      path: "/resource",
      element: <Resource />,
    },
  ]);
  return (
    <div>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
};

export default Body;
