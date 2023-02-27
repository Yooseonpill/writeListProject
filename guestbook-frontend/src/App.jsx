import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Detail from "./pages/Detail";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Write from "./pages/Write";
import WriteList from "./pages/WriteList";
import UpdateWrite from "./pages/UpdateWrite";
import DataListProvider from "./providers/DataListProvider";

function App() {
  return (
    <div>
      <DataListProvider>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/writeList" element={<WriteList />} />
          <Route path="/write" element={<Write />} />
          <Route path="/write/:id" element={<Write />} />
          <Route path="/join" element={<Join />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/updateWrite/:id" element={<UpdateWrite />} />
        </Routes>
      </DataListProvider>
    </div>
  );
}

export default App;
