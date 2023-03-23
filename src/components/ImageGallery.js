import React, { Component } from "react";
import "../base.css";
import imageAPI from "../services/fetch-images";
import Button from "./Button";
import Spinner from "./Spinner";
import ImageGalleryList from "./ImageGalleryList";

export default class ImageGallery extends Component {
  state = {
    images: [],
    status: "idle",
    error: null,
    page_number: 2,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      this.setState({ status: "pending" });

      imageAPI
        .fetchImages(nextName)
        .then((images) => {
          this.setState({ images: images.hits, status: "resolved" });
        })
        .catch((error) => this.setState(error));
    }
  }

  handleButtonClick = () => {
    const name = this.props.imageName;
    const pages_count = this.state.page_number;

    fetch(
      `https://pixabay.com/api/?q=${name}}&page=${pages_count}&key=34365152-dabc67f475d013033087d2982&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(
          new Error(`Images with ${name} tag not found :(`)
        );
      })
      .then((newImages) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...newImages.hits],
          page_number: prevState.page_number + 1,
        }));
      });
  };

  render() {
    const { images, status, error } = this.state;

    return (
      <div>
        {status === "idle" && <h1 className="App-title">Image Gallery</h1>}
        {status === "pending" && <Spinner />}
        {status === "resolved" && <ImageGalleryList images={images} />}
        {images.length > 1 && <Button onClick={this.handleButtonClick} />}
        {status === "rejected" && <p>{error.message}</p>}
      </div>
    );
  }
}
