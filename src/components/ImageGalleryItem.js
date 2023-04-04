import React from "react";
import "../base.css";

export default function ImageGalleryItem({ imageUrl, alt, onClick }) {
  return (
    <li>
      <img
        className="ImageGalleryItem-image"
        src={imageUrl}
        alt={alt}
        onClick={onClick}
      />
    </li>
  );
}

// ! Модалка ! Не правильное место рендера, исправить
