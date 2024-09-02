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
import ContextFunc, {
  ParentFunc,
} from "./components/Header/ContextComp/ContextFunc";
import ControlledComp from "./components/Header/ControlledComponent/ControlledComp";
import UncontrolledComp from "./components/Header/UncontrolledComponent/UncontrolledComp";
import Create from "./components/Header/CRUD Components/Create";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Read from "./components/Header/CRUD Components/Read";

function App() {
  return (
    <div className="App">
      <ContextFunc>
        <Routes>
          <Route element={<ParentComp />} />

          <Route path="/stateComp" element={<StateComp />} />

          <Route path="/addform" element={<Create />} />

          <Route index element={<Read />} />

          <Route path="/listandkeys" element={<ListandKeys />} />

          <Route path="/ParentFunc" element={<ParentFunc />} />

          <Route path="/controlled" element={<ControlledComp />} />

          <Route path="/uncontrolled" element={<UncontrolledComp />} />

          <Route path="*" element={<h1>Not Found Error 404</h1>} />

          <Route path="/functionState/:id" element={<FunctionStateCom />} />

          <Route path="/homepage" element={<Homepage />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </ContextFunc>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
