import React from "react";
import "./MediumCard.css";
import { Skeleton } from "@mui/material";

export default function MCSkeleton() {
  return (
    <div className="mediumCard">
      <div className="mediumCard__img-container">
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </div>
      <div className="mediumCard__price">
        <Skeleton variant="rectangular" width="40%" height={24} />
      </div>
      <p className="mediumCard__name">
        <Skeleton variant="rectangular" width="100%" height={20} />
      </p>
      <p className="mediumCard__features">
        <Skeleton variant="rectangular" width="80%" height={18} />
      </p>
      <p className="mediumCard__hint">
        <Skeleton variant="rectangular" width="50%" height={18} />
      </p>
    </div>
  );
}
