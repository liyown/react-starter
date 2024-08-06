import "@arco-design/web-react/dist/css/arco.css";
import "./index.css";
import Logo from "@/assets/logo.svg";

import { Menu } from "@arco-design/web-react";
import { Route } from "@/router";
import { useLocation, useNavigate } from "react-router-dom";
import { getChildRoutes } from "@/utils";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function generateMenu(routes: Route[]) {
  return routes.map((route) => {
    if (route.children) {
      return (
        <SubMenu key={route.path as string} title={route.title}>
          {generateMenu(route.children)}
        </SubMenu>
      );
    }
    return (
      <MenuItem className="font-bold" key={route.path as string}>
        {route.title}
      </MenuItem>
    );
  });
}
interface AppProps {
  routes: Route[];
  child: string;
}

function App({ routes, child }: AppProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const handelClickMenu = (key: string) => {
    navigate(key);
  };

  return (
    <div className="menu-demo">
      <Menu
        selectedKeys={[location.pathname]}
        onClickMenuItem={handelClickMenu}
        mode="horizontal"
        defaultSelectedKeys={["welcome"]}
      >
        <MenuItem key="0" style={{ padding: 0, marginRight: 16 }} disabled>
          <div>
            <img src={Logo} alt="logo" style={{ width: 48, height: 48 }} />
          </div>
        </MenuItem>
        {generateMenu(getChildRoutes(routes, child))}
      </Menu>
      <div>{}</div>
    </div>
  );
}

export default App;
