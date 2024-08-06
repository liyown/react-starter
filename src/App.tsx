import router from "./router";
import { RouterProvider } from "react-router-dom";
import GlobalContext from "./context";
import { useState } from "react";
import { Permission } from "@/component/PermissionWrapper";
import Loading from "@/component/Loading";

export interface UserInfo {
  userName: string;
  role: string;
}

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userName: "admin",
    role: Permission.NO_LOGIN,
  });
  return (
    <GlobalContext.Provider value={{ userInfo, setUserInfo }}>
      <RouterProvider
        router={router}
        fallbackElement={<Loading />}
      ></RouterProvider>
    </GlobalContext.Provider>
  );
}

export default App;
