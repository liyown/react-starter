import { Button, Form, Input, Message } from "@arco-design/web-react";
import Password from "@arco-design/web-react/es/Input/password";

const FormItem = Form.Item;

export function Component() {
  const [form] = Form.useForm();
  return (
    <div>
      <Form
        form={form}
        style={{ width: 600 }}
        className="mx-auto mt-32"
        autoComplete="off"
        onSubmit={(v) => {
          console.log(v);
          Message.success("success");
        }}
      >
        <FormItem
          label="用户名"
          field="userName"
          rules={[
            {
              required: true,
              type: "string",
              match: /^[a-zA-Z0-9]{6,}$/,
              message: "用户名必须是6位以上",
            },
          ]}
        >
          <Input placeholder="请输入用户名" />
        </FormItem>
        <FormItem
          label="密码"
          field="passWord"
          rules={[
            { required: true, type: "string" },
            { match: /^[a-zA-Z0-9]{6,}$/, message: "密码必须是6位以上" },
          ]}
        >
          <Password placeholder="请输入密码" />
        </FormItem>
        <FormItem
          label="密码"
          field="confirmPasswWord"
          dependencies={["passWord"]}
          rules={[
            {
              validator: (v, cb) => {
                if (!v) {
                  return cb("重复密码不能为空");
                } else if (form.getFieldValue("passWord") !== v) {
                  return cb("两次密码不一致");
                }
                cb(null);
              },
            },
          ]}
        >
          <Password placeholder="请再次输入密码" />
        </FormItem>
        <FormItem wrapperCol={{ offset: 5 }}>
          <Button type="primary" htmlType="submit" style={{ marginRight: 350 }}>
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
    </div>
  );
}
