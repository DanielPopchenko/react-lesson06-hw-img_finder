import React, { Component } from "react";
import "./base.css";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

export default class App extends Component {
  state = {
    imageName: "",
  };

  handleSubmit = (imageName) => {
    console.log(imageName);
    this.setState({ imageName });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onFormSubmit={this.handleSubmit} />
        <ImageGallery imageName={this.state.imageName} />
      </div>
    );
  }
}
