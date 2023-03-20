import React, { Component } from "react";
import "../base.css";

export default class Searchbar extends Component {
  state = {
    imageName: "",
  };

  handleNameChange = (e) => {
    this.setState({ imageName: e.currentTarget.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.imageName);

    this.setState({ imageName: "" });
  };

  render() {
    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleFormSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="Button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleNameChange}
              value={this.state.imageName}
            />
          </form>
        </header>
      </div>
    );
  }
}
