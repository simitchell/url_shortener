import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  RouterProvider 
} from "react-router-dom";
import Root from "./routes/root";
// import Issue, { loader as issueLoader } from './routes/issue';
import App from './App.jsx'
import './index.css'
import UrlList  from './components/UrlList';
import Login from './components/LoginForm';


import Something from './routes/Something';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/login',
        element: <Login />
      }
    ]

    // loader: rootLoader,
    // children: [
    //   {
    //     path: "/login",
    //     element: <Login />,
    //     // loader: rootLoader,
    //   },
    //   {
    //     path: "/urllist",
    //     element: <UrlList />,
    //     // loader: rootLoader,
    //   },
    // ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

