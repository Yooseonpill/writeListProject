import React, { useContext, useState } from "react";
import { Input, Checkbox, Layout, Button, Alert } from "antd";
import "../scss/write.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Write() {
  const { TextArea } = Input;
  const { Content } = Layout;
  // const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const [write, setWrite] = useState({
    title: "",
    body: "",
  });

  const changeValue = (e) => {
    const { name, value } = e.target;
    setWrite({
      ...write,
      [name]: value,
    });
  };

  const sendWrite = () => {
    axios
      .post("http://localhost:8080/write", {
        title: write.title,
        body: write.body,
      })
      .then((res) => {
        navigate("/writeList");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Content className="writeContent">
        <form>
          <div>
            <span className="writeSpan">제목</span>
            <input
              className="writeInput"
              type="text"
              onChange={changeValue}
              name="title"
              // defaultValue={writeData.title}
            />
          </div>
          {/* <div>
            <span className="writeSpan">옵션</span>
            <Checkbox
              onClick={(e) => {
                setShow(!show);
              }}
            >
              비밀글
            </Checkbox>
          </div>
          {show && (
            <div>
              <span className="writeSpan">비밀번호</span>
              <input className="writeInput" type="password" />
            </div>
          )} */}

          <TextArea
            showCount
            maxLength={100}
            style={{
              height: 300,
              marginBottom: 24,
            }}
            onChange={changeValue}
            placeholder="내용을 입력해 주세요."
            name="body"
            // defaultValue={writeData.body}
          />
        </form>
        <div className="writeJustify">
          <Link to={"/writeList"}>
            <Button>취소</Button>
          </Link>
          <Button onClick={sendWrite}>저장하기</Button>
        </div>
      </Content>
    </div>
  );
}
