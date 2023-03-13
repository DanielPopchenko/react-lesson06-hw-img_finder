import React, { Component } from "react";
import "../components/styles.css";
import { BsFillPencilFill } from "react-icons/bs";

export default class Searchbar extends Component {
  render() {
    return (
      <div>
        <div>
          <header className="Searchbar">
            <form className="SearchForm">
              <button type="submit" className="SearchForm-button">
                <BsFillPencilFill />
                <span className="SearchForm-button-label">Search</span>
              </button>

              <input
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </form>
          </header>
        </div>
      </div>
    );
  }
}
