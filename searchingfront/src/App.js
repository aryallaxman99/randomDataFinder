import { Route, Routes } from "react-router-dom";
// import FakeData from "./containers/Fakedata";
import Search from "./containers/Search";
import Send from "./containers/Send";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/send" element={<Send />} />
        {/* <Route exact path="/fake" element={<FakeData />} /> */}
      </Routes>
    </>
  );
};
export default App;
