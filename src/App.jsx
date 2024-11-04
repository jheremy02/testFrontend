
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home.jsx";
import Detail from "./views/Detail.jsx";

function App() {


  return (
      <Routes>
        <Route path="/"  element={ <Home/>} />
        <Route path="/detail"  element={ <Detail></Detail>} />
      </Routes>
  )
}

export default App
