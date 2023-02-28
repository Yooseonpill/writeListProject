import "../scss/join.scss";
import { Button, Form, Input, Layout } from "antd";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const { Content } = Layout;
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/");
  };

  const validatePassword = useCallback((_, value) => {
    if (!value || form.getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject("비밀번호가 일치하지 않습니다.");
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
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="id"
          label="ID"
          rules={[{ required: true, message: "아이디를 입력하세요" }]}
          hasFeedback
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
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="passwordCheck"
          label="PASSWORD 확인"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              min: 8,
              validator: validatePassword,
            },
          ]}
          hasFeedback
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
