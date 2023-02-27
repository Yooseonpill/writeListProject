import { Card, Layout, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "../scss/login.scss";

export default function Login() {
  const { Content } = Layout;

  return (
    <div>
      <Content className="loginContent">
        <Card className="loginCard">
          <h1>로그인</h1>
          <Input placeholder="ID" className="loginInput" />
          <Input.Password placeholder="PASSWORD" className="loginInput" />
          <Link to="/writeList">
            <Button className="loginButton">로그인</Button>
          </Link>
          <div style={{ marginTop: "20px" }}>
            <Link to="/join">회원가입</Link>
          </div>
        </Card>
      </Content>
    </div>
  );
}
