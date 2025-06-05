import { createRoot } from "react-dom/client";
import { App } from "./components/app/app";

const rootElem = document.getElementById("root");

const root = createRoot(rootElem);

root.render(<App />);
