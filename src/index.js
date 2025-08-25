import { createRoot } from "react-dom/client";
import App from "./App.js";
import { I18nProvider } from "./i18n";

const root = createRoot(document.querySelector("#root"));

root.render(
  <I18nProvider>
    <App />
  </I18nProvider>
);
