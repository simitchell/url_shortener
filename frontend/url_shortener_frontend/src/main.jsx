import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  RouterProvider 
} from "react-router-dom";
import Root from './routes/root';
import Login from './routes/login';
import UrlPage from './routes/url';
// import Word from './routes/word';
// import LoginForm from './components/LoginForm';
// import App from './App.jsx'
// import UrlList  from './components/UrlList';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: <Login />,
    // children: [
    //   {
    //   path: "/word",
    //   element: <Word />
    //   }
    // ]
  },
  {
    path: "/url",
    element: <UrlPage />,
    // children: [
    //   {
    //   path: "/word",
    //   element: <Word />
    //   }
    // ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

