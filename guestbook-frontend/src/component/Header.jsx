import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
const items = [
  {
    label: <Link to="/writeList">글목록</Link>,
    key: "writeList",
  },
  {
    label: <Link to="/write">글쓰기</Link>,
    key: "write",
  },
  {
    label: <Link to="/">로그인</Link>,
    key: "login",
  },
];
const App = () => {
  const [current, setCurrent] = useState("login");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default App;
