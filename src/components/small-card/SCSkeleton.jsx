import React from "react";
import "./SmallCard.css";

import { Skeleton } from "@mui/material";

export default function SCSkeleton() {
  return (
    <div className="smallCard">
      <div className="smallCard__img-container">
        <Skeleton variant="reactangular" width="100%" height="100%" />
      </div>
      <div className="smallCard__title">
        <p className="smallCard__price">
          <Skeleton variant="reactangular" width="80%" height="19px" />
        </p>
        <p className="smallCard__name">
          <Skeleton variant="reactangular" width="40%" height="19px" />
        </p>
      </div>
    </div>
  );
}
