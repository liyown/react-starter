import { Layout } from "@arco-design/web-react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Globalhead from "@/component/globalhead";
import { routes } from "@/router";

const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

function Index() {
  return (
    <>
      <Layout className="h-screen">
        <Header>
          <Globalhead routes={routes} child={"home"} />
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
