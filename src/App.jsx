
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Home from "./views/Home.jsx";
import Detail from "./views/Detail.jsx";

function App() {

  const { id } = useParams();

  return (
      <Routes>
        <Route path="/"  element={ <Home/>} />
        <Route path="/detail/:id"  element={ <Detail></Detail>} />
      </Routes>
  )
}

export default App
