import React from "react";
import "./SmallCard.css";
import { addToFavourites, formattedNum } from "../../Utils/Utils";
import { Link } from "react-router-dom";

export default function SmallCard({ post }) {
  return (
    <Link to={`/adv/${post.id}`} className="smallCard">
      <div className="smallCard__img-container">
        <div className="images-count">
          <span>{post.images.length}</span>
        </div>
        <div
          className="smallCard__favourite"
          onClick={(e) => addToFavourites(e, post.id)}
        ></div>
        <img
          src={post.images[0]}
          alt={post.images[0]}
          className="smallCard__img"
        />
      </div>
      <div className="smallCard__title">
        <p className="smallCard__price">
          {formattedNum(post.price)} <b>c.</b>
        </p>
        <p className="smallCard__name">{post.name}</p>
      </div>
    </Link>
  );
}
