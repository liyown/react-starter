import { Avatar, Button, Layout } from "@arco-design/web-react";
import { Suspense, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Globalhead from "@/component/globalhead";
import { routes } from "@/router";
import GlobalContext from "@/context";

const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

function Index() {
  const navigate = useNavigate();
  const userInfo = useContext(GlobalContext);
  return (
    <>
      <Layout className="h-screen">
        <Header>
          <Globalhead routes={routes} child={"home"}>
            {userInfo.userInfo.role === "NO_LOGIN" ? (
              <Button
                type="primary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                登录
              </Button>
            ) : (
              <>
                <Avatar>{userInfo.userInfo.userName}</Avatar>
                <Button
                  type="default"
                  onClick={() => {
                    userInfo.setUserInfo({ userName: "", role: "NO_LOGIN" });
                  }}
                >
                  退出
                </Button>
              </>
            )}
          </Globalhead>
        </Header>
        <Content>
          <Suspense fallback={<div>router loading...</div>}>
            <Outlet />
          </Suspense>
        </Content>
        <Footer className="mx-auto font-mono font-bold">
          Design by Liuyaowen
        </Footer>
      </Layout>
    </>
  );
}

export default Index;
