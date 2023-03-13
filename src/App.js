import React, { Component } from "react";
import "./base.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}
