import ChatApp from "./pages/ChatApp";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate, Redirect  } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AdminPanel from "./components/admin/AdminPanel";
import {AuthContext} from "./context/AuthContext"
import React, { useContext, useState, useEffect,  } from "react";

function RouteAdmin(){
  const {currentUser} = useContext(AuthContext)
  console.log("test" + currentUser.displayName)
}


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/chatapp" element={< ChatApp/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          {/* <Switch>
          <Route exact path="/admin">
            {this.state.user ? (
              <Dashboard />
            ) : (
              <Redirect to={"/login"} />
            )}
          </Route>
          </Switch> */}
          <Route path="admin" element={<AdminPanel />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
