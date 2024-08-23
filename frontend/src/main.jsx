import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
