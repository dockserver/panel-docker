import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app";
import { HomePage } from "./pages/home";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
