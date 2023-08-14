import LeftSection from "./Component/Pages/Login/LeftSection";
import { Route, Routes } from "react-router-dom";
import Register from "./Component/Pages/Register/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LeftSection />}></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
