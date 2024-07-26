import React from "react";
import styles from "./Card.module.css";
import { formattedNum } from "../../../Utils/Utils.js";
import CardSkeleton from "./Sceleton.jsx";

export default function Card({ post, isLoading }) {
  if (isLoading) {
    return <CardSkeleton />;
  }
  const randomFeatures = (
    post.features ? [...Object.values(post.features)] : []
  )
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .join(" · ");

  return (
    <div className={styles.card}>
      <div className={styles.approve}></div>
      <div className={styles.delete}></div>
      <div className={styles.img_container}>
        {post.images.length === 0 ? (
          <img
            src={"https://somon.tj/static/images/photoapparat-big.png"}
            alt={"https://somon.tj/static/images/photoapparat-big.png"}
            className={styles.img}
          />
        ) : (
          <img
            src={post.images[0]}
            alt={post.images[0]}
            className={styles.img}
          />
        )}
      </div>
      <div className={styles.price}>
        <p>
          {formattedNum(String(post.price))}
          <b> с.</b>
        </p>
      </div>
      <p className={styles.name}>{post.title}</p>
      <p className={styles.features}>{randomFeatures}</p>
      <p className={styles.hint}>
        {new Date(post.createdAt).toLocaleDateString() + " | " + post.city.name}
      </p>
    </div>
  );
}
