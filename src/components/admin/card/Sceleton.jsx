import React from "react";
import styles from "./Card.module.css";
import { Skeleton } from "@mui/material";

export default function CardSkeleton() {
  return (
    <div className="mediumCard">
      <div className={styles.img_container}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </div>
      <div className={styles.price}>
        <Skeleton variant="rectangular" width="40%" height={24} />
      </div>
      <p className={styles.name}>
        <Skeleton variant="rectangular" width="100%" height={20} />
      </p>
      <p className={styles.features}>
        <Skeleton variant="rectangular" width="80%" height={18} />
      </p>
      <p className={styles.hint}>
        <Skeleton variant="rectangular" width="50%" height={18} />
      </p>
    </div>
  );
}
