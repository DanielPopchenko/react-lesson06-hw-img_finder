import React, { useState } from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./base.css";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

export default function App() {
  const [imageName, setImageName] = useState("");

  const handleSubmit = (imageName) => {
    setImageName(imageName);
  };

  return (
    <div className="App">
      <ThemeProvider>
        <Layout>
          <Searchbar onFormSubmit={handleSubmit} />
          <ImageGallery imageName={imageName} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}
