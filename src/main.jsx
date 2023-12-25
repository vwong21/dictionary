import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeProvider from "./contexts/ThemeContexts.jsx";
import FontProvider from "./contexts/FontContexts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FontProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </FontProvider>
  </React.StrictMode>
);
