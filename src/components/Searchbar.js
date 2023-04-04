import React, { useState } from "react";
import "../base.css";

export default function Searchbar({ onFormSubmit }) {
  const [imageName, setImageName] = useState("");

  const handleNameChange = (e) => {
    setImageName(e.currentTarget.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(imageName);

    setImageName("");
  };

  return (
    <div>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleFormSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="Button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleNameChange}
            value={imageName}
          />
        </form>
      </header>
    </div>
  );
}
