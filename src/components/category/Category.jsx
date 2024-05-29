import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import SubCategory from "../subCategory/SubCategory";

export default function Category({
  index,
  categoryData,
  categoryRoute,
  onClick,
  active,
}) {
  const [marginBottom, setMarginBottom] = React.useState("0px");
  return (
    <div
      className={`category ${active ? "active" : ""}`}
      onClick={onClick}
      style={{ marginBottom: active ? marginBottom : "0px" }}
    >
      <div className="category__img-container">
        <img className="category__img" src={categoryData.src} alt="" />
      </div>
      <p className="category__title">{categoryData.title}</p>
      {categoryData.links.length === 0 && (
        <Link
          to={categoryRoute}
          key={categoryRoute}
          className="all-posts-url"
        ></Link>
      )}
      {active && (
        <SubCategory
          categoryRoute={categoryRoute}
          links={categoryData.links}
          setMarginBottom={setMarginBottom}
          index={index}
        />
      )}
    </div>
  );
}
