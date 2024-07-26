import React from "react";
import "./LargeCard.css";
import { addToFavourites, formattedNum } from "../../Utils/Utils";
import { Link } from "react-router-dom";
import LCSkeleton from "./LCSkeleton";

export default function LargeCard({ post, isLoading }) {
  if (isLoading) {
    return <LCSkeleton />;
  }
  return (
    <Link to={`/adv/${post._id}`} className="largeCard">
      <div className="largeCard__img-container">
        {post.images.length === 0 ? (
          <img
            src={"https://somon.tj/static/images/photoapparat-big.png"}
            alt={"https://somon.tj/static/images/photoapparat-big.png"}
            className="largeCard__img"
          />
        ) : (
          <img
            src={post.images[0]}
            alt={post.images[0]}
            className="largeCard__img"
          />
        )}
      </div>
      <div className="largeCard__content">
        <p className="largeCard__price">
          {formattedNum(String(post.price))} <b>c.</b>
        </p>
        <p className="largeCard__name">{post.title}</p>
        <p className="largeCard__desc"></p>
        <div className="largeCard__hint">
          <div className="largeCard__hint-dateNcity">
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            <span>{post.city.name}</span>
          </div>
          <div
            className="largeCard__add-favourite"
            onClick={(e) => addToFavourites(e)}
          ></div>
        </div>
      </div>
    </Link>
  );
}
