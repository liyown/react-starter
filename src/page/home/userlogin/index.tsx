import { Button, Form, Input } from "@arco-design/web-react";
import Password from "@arco-design/web-react/es/Input/password";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "@/context";

const FormItem = Form.Item;

export function Component() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const globalContext = useContext(GlobalContext);
  return (
    <Form
      form={form}
      style={{ width: 600 }}
      className="mx-auto mt-32"
      autoComplete="off"
      onSubmit={(v) => {
        console.log(v);
        globalContext.setUserInfo(v);
        navigate("/");
      }}
    >
      <FormItem
        label="用户名"
        field="userName"
        rules={[
          { required: true },
          { match: /^[a-zA-Z0-9]{6,}$/, message: "用户名必须是6位以上" },
        ]}
      >
        <Input placeholder="输入用户名" />
      </FormItem>
      <FormItem
        label="密码"
        field="passWord"
        rules={[
          { required: true, type: "string" },
          { match: /^[a-zA-Z0-9]{6,}$/, message: "密码必须是6位以上" },
        ]}
      >
        <Password placeholder="输入密码" />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type="primary" htmlType="submit" style={{ marginRight: 4 }}>
          登录
        </Button>
        <Button
          htmlType="submit"
          style={{ marginRight: 285 }}
          onClick={() => {
            navigate("/register");
          }}
        >
          注册
        </Button>
        <Button
          style={{ marginRight: 24 }}
          onClick={() => {
            form.resetFields();
          }}
        >
          Reset
        </Button>
      </FormItem>
    </Form>
  );
}
