import React, { Component } from "react";
import "./base.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

export default class App extends Component {
  state = { imageName: "" };

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
    console.log(imageName);
  };

  render() {
    return (
      <div>
        <Searchbar onFormSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.props.imageName} />
      </div>
    );
  }
}
