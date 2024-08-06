import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../page/home/index.tsx";
import { RouteObject } from "react-router/dist/lib/context";

export type Route = RouteObject & {
  id?: string;
  title?: string;
  children?: Route[];
  meta?: any;
};

export const routes: Route[] = [
  {
    id: "home",
    title: "首页",
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        meta: { showHeader: false },
        element: <Navigate to={"/welcome"} />,
      },
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
        meta: { showHeader: false },
        lazy: () => import("../page/home/userlogin"),
      },
      {
        id: "register",
        title: "注册",
        path: "/register",
        meta: { showHeader: false },
        lazy: () => import("../page/home/userregister"),
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
