import React, { Component } from "react";

export default class ImageGallery extends Component {
  state = {
    image: null,
    status: "idle",
  };

  fetchImages = () => {
    const apiKey = "34365152-dabc67f475d013033087d2982";
    fetch(
      `https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((image) => image.json())
      .then((image) => this.setState({ image }))
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { imageName } = this.props;

    return (
      <div>
        <ul className="gallery"></ul>
      </div>
    );
  }
}
