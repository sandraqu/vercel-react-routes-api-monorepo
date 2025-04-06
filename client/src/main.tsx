import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useRoutes, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Path from "./Path.tsx";

const Endpoints = () => {
  const endpoints = useRoutes([
    { path: "/", element: <App /> },
    { path: "/path", element: <Path /> },
  ]);

  return endpoints;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Endpoints />
    </BrowserRouter>
  </StrictMode>
);
