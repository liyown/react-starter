import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/index.tsx";
import { RouteObject } from "react-router/dist/lib/context";

export type Route = RouteObject & {
  id: string;
  title: string;
  children?: Route[];
};

export const routes: Route[] = [
  {
    id: "home",
    title: "首页",
    path: "/",
    element: <Home />,
    children: [
      {
        id: "welcome",
        title: "欢迎",
        path: "/welcome",
        lazy: () => import("../page/home/welcome"),
      },
      {
        id: "login",
        title: "登录",
        path: "/login",
        lazy: () => import("../page/home/userlogin"),
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
