import router from "./router";
import { RouterProvider } from "react-router-dom";
import GlobalContext from "./context";
import { useState } from "react";

interface UserInfo {
  userName: string;
  role: string;
}

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userName: "",
    role: "NO_LOGIN",
  });

  return (
    <GlobalContext.Provider value={{ userInfo, setUserInfo }}>
      <RouterProvider
        router={router}
        fallbackElement={"router loading..."}
      ></RouterProvider>
    </GlobalContext.Provider>
  );
}

export default App;
