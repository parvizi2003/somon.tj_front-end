import React from "react";
import "./Breadcrumbs.css";
import { Link } from "react-router-dom";

function Breadcrumbs({ categories }) {
  let href = "";
  const listItems = categories.map((category) => {
    href += "/" + category.route;
    return (
      <li key={href}>
        <Link to={href}>{category.title}</Link>
      </li>
    );
  });
  return (
    <div className="breadcrumbs">
      <ul>
        <li>
          <Link to="/search">Все объявления</Link>
        </li>
        {listItems}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
