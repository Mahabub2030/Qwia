import App from "@/App";
import Home from "@/components/layout/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        path: "home",
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },

  {
    path: "*",
    Component: NotFound,
  },
]);
