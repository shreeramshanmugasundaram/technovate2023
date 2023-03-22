import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="*"
          element={<h1 style={{ color: "white" }}>Under Construction</h1>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
