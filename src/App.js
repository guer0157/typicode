import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Todos from "./Components/Todos";
function App() {
  return (
    <Main />
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" element={<Main />} />
    //     <Route exact path="/user/todos:userId" element={<Todos />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
