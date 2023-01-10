import ChatApp from "./pages/ChatApp";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AdminPanel from "./components/admin/AdminPanel";


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/chatapp" element={< ChatApp/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<AdminPanel />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
