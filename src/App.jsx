
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Home from "./views/Home.jsx";
import Detail from "./views/Detail.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { themeUiSelector } from "./features/uiSlice.js";

function App() {

  const { id } = useParams();
  const themeUi = useSelector(themeUiSelector);
  useEffect(() => {
    if (themeUi === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeUi])
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail></Detail>} />
    </Routes>
  )
}

export default App
