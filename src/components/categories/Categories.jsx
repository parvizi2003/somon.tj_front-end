import React, { useState } from "react";
import "./Categories.css";
import categories from "../../content/categories";
import Category from "../category/Category";

export default function Categories() {
  const [active, setActive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  function handleClick(index) {
    const arr = active.map(() => false);
    !active[index] && (arr[index] = true);
    setActive(arr);
  }

  return (
    <section className="categories">
      <div className="container categories__container">
        {Object.keys(categories).map((key, index) => (
          <div key={key}>
            <Category
              index={index}
              categoryData={categories[key]}
              categoryRoute={key}
              onClick={() => handleClick(index)}
              active={active[index]}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
