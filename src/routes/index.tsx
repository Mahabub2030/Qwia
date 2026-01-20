import App from "@/App";
import Home from "@/components/layout/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Profile from "@/pages/Profile";
import Register from "@/pages/register";

import UnAuthorized from "@/pages/UnAuthorized";
import Verify from "@/pages/Verify";
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
    path: "/register",
    Component: Register,
  },
  {
    path: "/verify",
    Component: Verify,
  },
  {
    path: "/unauthorized",
    Component: UnAuthorized,
  },
  {
    path: "/profile",
    Component: Profile,
  },

  {
    path: "*",
    Component: NotFound,
  },
]);
