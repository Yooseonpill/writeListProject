import "../scss/join.scss";
import { Button, Form, Input, Layout } from "antd";
import { useCallback } from "react";

export default function Join() {
  const { Content } = Layout;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const validatePassword = useCallback((value) => {
    if (
      form.getFieldValue("password") !== form.getFieldValue("passwordCheck")
    ) {
      return;
    }
    return;
  }, []);

  console.log(Promise);
  return (
    <Content className="joinContent">
      <Form
        name="nest-messages"
        style={{ maxWidth: 600 }}
        labelCol={{ span: 10 }}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "이름을 입력하세요" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="id"
          label="ID"
          rules={[{ required: true, message: "아이디를 입력하세요" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="PASSWORD"
          rules={[
            {
              required: true,
              min: 8,
              message: "비밀번호는 8자리 이상입니다.",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="passwordCheck"
          label="PASSWORD 확인"
          rules={[
            {
              required: true,
              min: 8,
              message: "비밀번호는 8자리 이상입니다.",
              validator: validatePassword,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type="primary" htmlType="submit">
            가입
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
}
