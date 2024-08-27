import React from "react";
import "./App.css";
import StateComp from "./components/Header/ClassStateComp";
import FunctionStateCom from "./components/Header/FunctionStateCom";
import ParentComp from "./components/Header/Props/ParentComp";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Header/Homepage/Homepage";
import Home from "./components/Header/Homepage/Home";
import Login from "./components/Header/Homepage/Login";
import ListandKeys from "./components/Header/ListandKeys";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<ParentComp />} />
       
        <Route path="/stateComp" element={<StateComp />} />

        <Route path="/listandkeys" element={<ListandKeys />} />

        <Route path="*" element={<h1>Not Found Error 404</h1>} />

        <Route path="/functionState/:id" element={<FunctionStateCom />} />

        <Route path="/homepage" element={<Homepage />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        
      </Routes>

    </div>
  );
}

export default App;
