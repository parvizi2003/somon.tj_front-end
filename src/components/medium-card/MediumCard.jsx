import React from "react";
import { Link } from "react-router-dom";
import "./MediumCard.css";
import { addToFavourites } from "../../Utils/Utils";
import { formattedNum } from "../../Utils/Utils";

export default function MediumCard({ post }) {
  const randomFeatures = [...Object.values(post.features)]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .join(" · ");

  return (
    <Link to={`/adv/${post.id}`} className="mediumCard">
      <div className="mediumCard__img-container">
        <img
          src={post.images[0]}
          alt={post.images[0]}
          className="mediumCard__img"
        />
      </div>
      <div className="mediumCard__price">
        <p>
          {formattedNum(post.price)}
          <b> с.</b>
        </p>
        <div
          className="mediumCard__favourite"
          onClick={(e) => addToFavourites(e, post.id)}
        ></div>
      </div>
      <p className="mediumCard__name">{post.name}</p>
      <p className="mediumCard__features">{randomFeatures}</p>
      <p className="mediumCard__hint">{post.date + " | " + post.city}</p>
    </Link>
  );
}
