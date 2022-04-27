import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
