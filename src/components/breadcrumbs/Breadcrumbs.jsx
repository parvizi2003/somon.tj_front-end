import React from "react";
import "./Breadcrumbs.css";
import { Link } from "react-router-dom";
import cats from "../../content/categories.json";

function Breadcrumbs({ categories }) {
  let href = "/" + categories[0];
  const listItems = [
    <li key={href}>
      <Link to={href}>{cats[categories[0]].title}</Link>
    </li>,
  ];
  if (categories.length === 2) {
    href += "/" + categories[1];
    listItems.push(
      <li key={href}>
        <Link to={href}>
          {
            cats[categories[0]].links.find(
              (link) => link.route === categories[1]
            ).title
          }
        </Link>
      </li>
    );
  }
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
