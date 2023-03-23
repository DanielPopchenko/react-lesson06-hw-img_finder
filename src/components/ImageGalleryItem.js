import React from "react";
import "../base.css";

// import Modal from "./Modal";

export default function ImageGalleryItem({
  imageUrl,
  alt,
  openModal,
  onClick,
}) {
  return (
    <li>
      <img
        className="ImageGalleryItem-image"
        src={imageUrl}
        alt={alt}
        onClick={onClick}
      />

      {/* {openModal === true && <Modal />} */}
    </li>
  );
}

// ! Модалка ! Не правильное место рендера, исправить
