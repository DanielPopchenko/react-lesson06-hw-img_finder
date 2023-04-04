import React, { useState } from "react";
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
      <Searchbar onFormSubmit={handleSubmit} />
      <ImageGallery imageName={imageName} />
    </div>
  );
}
