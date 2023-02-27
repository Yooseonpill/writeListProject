import { useCallback, useState } from "react";
import DataListContext from "../contexts/DataListContext";

const DataListProvider = ({ children }) => {
  const [writeList, setWriteList] = useState([
    {
      id: 1,
      name: "기억님",
      title: "테스트요",
      body: "이런내용으로 테스트합니다",
      day: "2022-02-15",
    },
    {
      id: 2,
      name: "니은님",
      title: "하이요",
      body: "하이용! 내 이름은 니은님 이에요",
      day: "2022-02-16",
    },
  ]);
  const [writeData, setWriteData] = useState([]);
  const [count, setCount] = useState(0);
  const addDataList = useCallback(
    (data) => {
      console.log(data);
      setWriteList([
        ...writeList,
        {
          id: writeList[writeList.length - 1].id + 1,
          name: "디귿님",
          title: data.title,
          body: data.body,
          day: "2023-02-23",
        },
      ]);
    },
    [writeList]
  );
  const update = useCallback((data) => {
    setWriteData(data);
  });
  const remove = useCallback(
    (data) => {
      setWriteList((writeList) => {
        return writeList.filter((list) => list.id !== data.id);
      });
    },
    [writeList]
  );
  return (
    <DataListContext.Provider
      value={{
        writeList,
        count,
        setCount,
        addDataList,
        update,
        writeData,
        remove,
      }}
    >
      {children}
    </DataListContext.Provider>
  );
};

export default DataListProvider;
