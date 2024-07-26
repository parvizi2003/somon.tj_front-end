import React from "react";
import { Link } from "react-router-dom";
import "./MediumCard.css";
import { addToFavourites } from "../../Utils/Utils";
import { formattedNum } from "../../Utils/Utils";
import MCSkeleton from "./MCSkeleton";

export default function MediumCard({ post, isLoading }) {
  if (isLoading) {
    return <MCSkeleton />;
  }
  const randomFeatures = (
    post.features ? [...Object.values(post.features)] : []
  )
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .join(" · ");

  return (
    <Link to={`/adv/${post._id}`} className="mediumCard">
      <div className="mediumCard__img-container">
        {post.images.length === 0 ? (
          <img
            src={"https://somon.tj/static/images/photoapparat-big.png"}
            alt={"https://somon.tj/static/images/photoapparat-big.png"}
            className="mediumCard__img"
          />
        ) : (
          <img
            src={post.images[0]}
            alt={post.images[0]}
            className="mediumCard__img"
          />
        )}
      </div>
      <div className="mediumCard__price">
        <p>
          {formattedNum(String(post.price))}
          <b> с.</b>
        </p>
        <div
          className="mediumCard__favourite"
          onClick={(e) => addToFavourites(e, post.id)}
        ></div>
      </div>
      <p className="mediumCard__name">{post.title}</p>
      <p className="mediumCard__features">{randomFeatures}</p>
      <p className="mediumCard__hint">
        {new Date(post.createdAt).toLocaleDateString() + " | " + post.city.name}
      </p>
    </Link>
  );
}
