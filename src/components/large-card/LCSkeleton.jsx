import React from "react";
import "./LargeCard.css";
import { Skeleton } from "@mui/material";

export default function LCSkeleton() {
  return (
    <div className="largeCard">
      <div className="largeCard__img-container">
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </div>
      <div className="largeCard__content">
        <p className="largeCard__price">
          <Skeleton variant="rectangular" width="50%" height={20} />
        </p>
        <p className="largeCard__name">
          <Skeleton variant="rectangular" width="100%" height={80} />
        </p>
        <p className="largeCard__desc">
          <Skeleton variant="rectangular" width="100%" height={140} />
        </p>
        <div className="largeCard__hint">
          <div className="largeCard__hint-dateNcity">
            <span>
              <Skeleton variant="rectangular" width="25%" height={40} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
