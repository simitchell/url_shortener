import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Login from "./routes/login";
import UrlPage from "./routes/url";
import "./index.css";
import UrlForm from "./components/UrlForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/url",
        element: <UrlForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
