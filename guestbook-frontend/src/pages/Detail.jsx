import { Button } from "antd";
import { Content } from "antd/es/layout/layout";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import DataListContext from "../contexts/DataListContext";
import "../scss/detail.scss";

export default function Detail() {
  // const state = useLocation().state;
  // const { remove, update } = useContext(DataListContext);

  const navigate = useNavigate();

  const removeData = () => {
    axios
      .delete("http://localhost:8080/writeList/" + id)
      .then((res) => {
        navigate("/writeList");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const { id } = useParams();
  const [list, setList] = useState({
    id: "",
    title: "",
    body: "",
    name: "",
    day: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/writeList/" + id)
      .then((res) => {
        setList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <Content className="detailContent">
        <h2>{list.title}</h2>
        <hr />
        <p>작성자 : {list.name}</p>
        <p>작성일 : {list.day}</p>
        <p>조회 : {list.count}</p>
        <hr />
        <p>{list.body}</p>
        <div className="detailDiv">
          <Link to={"/writeList"}>
            <Button>목록보기</Button>
          </Link>
          <Link to={"/updateWrite/" + list.id} style={{ float: "right" }}>
            <Button>수정</Button>
          </Link>
          <Button
            type="primary"
            danger
            style={{ float: "right", marginRight: "10px" }}
            onClick={removeData}
          >
            삭제하기
          </Button>
        </div>
      </Content>
    </div>
  );
}
