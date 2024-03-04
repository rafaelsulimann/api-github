import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Client from "./pages/Client/index.tsx";
import HomeClient from "./pages/Client/HomeClient/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Client />,
        children: [
          {
            index: true,
            element: <HomeClient />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
