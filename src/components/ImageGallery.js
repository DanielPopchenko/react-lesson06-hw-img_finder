import React, { Component } from "react";
import "../base.css";

// import ImageGalleryItem from "./ImageGalleryItem";

export default class ImageGallery extends Component {
  state = {
    images: [],
    status: "",
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    console.log("prevName: ", prevName);
    console.log("nextName: ", nextName);

    if (prevName !== nextName) {
      fetch(
        `https://pixabay.com/api/?q=${nextName}}&page=1&key=34365152-dabc67f475d013033087d2982&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`Images with ${nextName} tag not found :(`)
          );
        })
        .then((images) => this.setState({ images: images.hits }))
        .catch((error) => this.setState(error));
    }
  }

  render() {
    const { images } = this.state;

    return (
      <ul className="ImageGallery">
        {images.map((image) => {
          console.log(image);
          return (
            <li key={image.id}>
              <p>{image.id}</p>
              <img src={image.largeImageURL} alt="img" />
            </li>
          );
        })}
      </ul>
    );
  }
}
