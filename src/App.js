import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Todos from "./Components/Todos";
import User from "./Components/User";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/typicode" element={<Main />} />
        <Route exact path="/typicode/user/todos/:userId" element={<Todos />} />
        <Route exact path="/typicode/user/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
