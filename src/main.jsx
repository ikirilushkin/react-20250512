import { createRoot } from "react-dom/client";
import { App } from "./components/app/App";

const rootElem = document.getElementById("root");

const root = createRoot(rootElem);

root.render(<App />);
