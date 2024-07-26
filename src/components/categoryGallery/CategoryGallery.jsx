import React from "react";
import { Link } from "react-router-dom";
import "./CategoryGallery.css";
import SmallCard from "../small-card/SmallCard";
import MediumCard from "../medium-card/MediumCard";
import axios from "../../axios";

export default function CategoryGallery({
  title,
  route,
  gridColumns,
  cardsCount,
}) {
  const [posts, setPosts] = React.useState();

  React.useEffect(() => {
    axios(`${route === "/search" ? "posts" : route}/?limit=${cardsCount}`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, [route, cardsCount]);

  const [onLeft, setOnLeft] = React.useState(false);
  const small = gridColumns === 6;
  function handleClick() {
    setOnLeft((prev) => !prev);
  }

  return (
    <div className="categoryGallery">
      <Link to={route} className="categoryGallery__title">
        {title}
      </Link>
      {small &&
        (onLeft ? (
          <div className="cards__arrow cards__left" onClick={handleClick}></div>
        ) : (
          <div
            className="cards__arrow cards__right"
            onClick={handleClick}
          ></div>
        ))}
      <div className="cards__container">
        <div
          className="cards"
          style={{
            gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
            gap: "10px",
            marginLeft: onLeft ? "-470px" : "0px",
          }}
        >
          {(posts ? posts : [...Array(cardsCount)]).map((post, index) => {
            return posts ? (
              <div key={post._id}>
                {small ? <SmallCard post={post} /> : <MediumCard post={post} />}
              </div>
            ) : (
              <div key={index}>
                {small ? (
                  <SmallCard isLoading={true} />
                ) : (
                  <MediumCard isLoading={true} />
                )}
              </div>
            );
          })}
          {small && (
            <Link to={route} className="more">
              →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
