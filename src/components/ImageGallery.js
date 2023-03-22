import React, { Component } from "react";
import "../base.css";
import imageAPI from "../services/fetch-images";

import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Button";
import { Dna } from "react-loader-spinner";

export default class ImageGallery extends Component {
  state = {
    images: [],
    status: "idle",
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    console.log("prevName: ", prevName);
    console.log("nextName: ", nextName);

    if (prevName !== nextName) {
      this.setState({ status: "pending" });

      setTimeout(() => {
        imageAPI
          .fetchImages(nextName)
          .then((images) =>
            this.setState({ images: images.hits, status: "resolved" })
          )
          .catch((error) => this.setState(error));
      }, 3000);
    }
  }

  render() {
    const { images, status } = this.state;

    return (
      <div>
        {status === "idle" && <h1 className="App-title">Image Gallery</h1>}
        {status === "pending" && (
          <div className="Spinner-wrapper">
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        )}
        {status === "resolved" && (
          <ul className="ImageGallery">
            {images.map((image) => {
              // console.log(image);
              return (
                <ImageGalleryItem
                  key={image.id}
                  imageUrl={image.largeImageURL}
                  alt={image.tags}
                />
              );
            })}
          </ul>
        )}

        {images.length > 1 && <Button />}
      </div>
    );
  }
}
