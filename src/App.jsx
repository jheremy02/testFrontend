
import { Route, Routes, useLocation, } from "react-router-dom";
import Home from "./views/Home.jsx";
import Detail from "./views/Detail.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { themeUiSelector } from "./features/uiSlice.js";
import NotFound from "./views/NotFound.jsx";

function App() {
  const { pathname } = useLocation();
  const themeUi = useSelector(themeUiSelector);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


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
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
