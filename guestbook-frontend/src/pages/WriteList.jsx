import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "../scss/writeList.scss";
import { Link } from "react-router-dom";
import { Button, Layout } from "antd";
import { Table } from "react-bootstrap";
import DataListContext from "../contexts/DataListContext";

export default function WriteList() {
  const { Content } = Layout;

  const [writeList, setWriteList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/writeList")
      .then((res) => {
        setWriteList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <Content className="writeListContent">
        <h1>게시판</h1>

        <Table bordered hover className="text-center">
          <thead>
            <tr>
              <th className="col-1">번호</th>
              <th className="col">제목</th>
              <th className="col-1">작성자</th>
              <th className="col-1">작성일</th>
            </tr>
          </thead>
          <tbody>
            {writeList.map((list) => (
              <tr>
                <td>{list.id}</td>
                <Link className="test" to={"/detail/" + list.id}>
                  <td>{list.title}</td>
                </Link>
                <td>{list.name}</td>
                <td>{list.day}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Link to={"/write"} style={{ float: "right" }}>
          <Button>글쓰기</Button>
        </Link>
      </Content>
    </div>
  );
}
