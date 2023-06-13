import React, {JSX} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Nav from "../components/Nav/Nav";
import RequestForm from "../components/RequestForm/RequestForm";

const Routers = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<Main/>} path={'/'} />
        <Route element={<About/>} path={'/about'} />
        <Route element={<RequestForm/>} path={'/request'} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
