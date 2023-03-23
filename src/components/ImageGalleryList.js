import React, { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";

export default class ImageGalleryList extends Component {
  state = { openMadal: false };

  //   handleImageClick = () => {
  //     // this.setState((state) => ({ openMadal: !state.openMadal }));
  //   };

  render() {
    // const { openModal } = this.state;
    const { images } = this.props;
    return (
      <div>
        <ul className="ImageGallery">
          {images.map((image) => {
            // console.log(image);
            return (
              <ImageGalleryItem
                key={image.id}
                imageUrl={image.webformatURL}
                alt={image.tags}
                // openModal={openModal}
                // onClick={this.handleImageClick}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
