import React from "react";
import "./index.css";
import Layout from "./components/Layout";
import { ThemeProvider } from "./providers/ThemeProvider";
import Example from "./components/useContextExample/Example";

export default function useContextApp() {
  return (
    <div className="useContextProvider">
      <ThemeProvider>
        <Layout>
          <Example />
        </Layout>
      </ThemeProvider>
    </div>
  );
}
