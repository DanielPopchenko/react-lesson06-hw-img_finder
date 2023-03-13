import React, { Component } from "react";
import "../components/styles.css";
import { BsFillPencilFill } from "react-icons/bs";

export default class Searchbar extends Component {
  state = {
    imageName: "",
  };

  handleImageNameChange = (e) => {
    this.setState({ imageName: e.target.value.toLowerCase() });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.imageName);

    this.setState({ imageName: "" });
  };

  render() {
    const { imageName } = this.state;
    return (
      <div>
        <div>
          <header className="Searchbar">
            <form className="SearchForm" onSubmit={this.handleFormSubmit}>
              <button type="submit" className="SearchForm-button">
                <BsFillPencilFill />
                <span className="SearchForm-button-label">Search</span>
              </button>

              <input
                onChange={this.handleImageNameChange}
                value={imageName}
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
