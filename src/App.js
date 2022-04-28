import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Homepage/Home";
import Register from "./Pages/Authorization/Register/Register";
import LogIn from "./Pages/Authorization/LogIn/LogIn";
import Signup from "./Pages/Authorization/SignUp/Signup";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
