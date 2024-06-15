import React from "react";
import "./SmallCard.css";
import { addToFavourites, formattedNum } from "../../Utils/Utils";
import { Link } from "react-router-dom";
import SCSkeleton from "./SCSkeleton";

export default function SmallCard({ post, isLoading }) {
  if (isLoading) {
    return <SCSkeleton />;
  }
  return (
    <Link to={`/adv/${post._id}`} className="smallCard">
      <div className="smallCard__img-container">
        <div className="images-count">
          <span>{post.images.length}</span>
        </div>
        <div
          className="smallCard__favourite"
          onClick={(e) => addToFavourites(e, post._id)}
        ></div>
        {post.images.length === 0 ? (
          <img
            src={"https://somon.tj/static/images/photoapparat-big.png"}
            alt={"https://somon.tj/static/images/photoapparat-big.png"}
            className="smallCard__img"
          />
        ) : (
          <img
            src={post.images[0]}
            alt={post.images[0]}
            className="smallCard__img"
          />
        )}
      </div>
      <div className="smallCard__title">
        <p className="smallCard__price">
          {formattedNum(String(post.price))} <b>c.</b>
        </p>
        <p className="smallCard__name">{post.title}</p>
      </div>
    </Link>
  );
}
