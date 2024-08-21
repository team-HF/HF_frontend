import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./app/GlobalStyles.tsx";

createRoot(document.getElementById("root")!).render(
  <div>
    <GlobalStyles />
    <App />
  </div>
);
