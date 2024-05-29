import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./SubCategory.css";

export default function SubCategory({
  categoryRoute,
  links,
  index,
  setMarginBottom,
}) {
  const elem = useRef();

  useEffect(() => {
    setMarginBottom(elem.current.clientHeight + "px");
  }, []);

  let left;
  if (index === 0 || index === 4 || index === 8 || index === 12) {
    left = "0px";
  } else if (index === 1 || index === 5 || index === 9 || index === 13) {
    left = "-300px";
  } else if (index === 2 || index === 6 || index === 10 || index === 14) {
    left = "-600px";
  } else if (index === 3 || index === 7 || index === 11 || index === 15) {
    left = "-900px";
  }
  return (
    <div className={"subCategory"} style={{ left: left }} ref={elem}>
      <Link to={categoryRoute} className="all-posts">
        Показать все объявления в рубрике
        <span className="all-posts-count">(12 345)</span>
      </Link>
      <hr className="subCategory__hr" />
      <ul className="links__list">
        {links.map((link) => (
          <li key={link.route} className="links__item">
            <Link to={categoryRoute + "/" + link.route} className="links__link">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
