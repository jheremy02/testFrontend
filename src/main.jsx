import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from './App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <Router>
        <App />
      </Router>
    </Provider>

  </StrictMode>,
)
