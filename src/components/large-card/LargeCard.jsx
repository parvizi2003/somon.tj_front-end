import React from "react";
import "./LargeCard.css";
import { addToFavourites, formattedNum } from "../../Utils/Utils";
import { Link } from "react-router-dom";

export default function LargeCard({ id }) {
  const post = {
    id: "12345",
    name: "LiXiang L9, 2024",
    city: "Душанбе",
    date: "10.05.2024",
    time: "22:46",
    images: [
      "https://cdn.somon.tj/media/cache1/38/ec/38ec54565c7480ed9c1b8f7d9077e04a.webp",
      "https://cdn.somon.tj/media/cache1/d9/a3/d9a3513d96999efde6e0d92f5182f6cc.webp",
      "https://cdn.somon.tj/media/cache1/d3/c1/d3c1449554b027385ccc8c8cd86f883d.webp",
    ],
    features: [
      { Кузов: "Универсал" },
      { "Год выпуска": "2024" },
      { Цвет: "Чёрный" },
      { Привод: "Полный" },
      { "Объем двигателя": "4.0 л." },
      { Пробег: "0 км" },
      { Состояние: "Новая" },
      { "Вид топлива": "Гибрид" },
      { "Растаможен в РТ": "Да" },
      { "Коробка передач": "Автомат" },
      { "Лицензия на такси": "Нет" },
    ],
    description: ["text"],
    price: "12345",
    bargain: true,
    categories: [
      { title: "cat1", url: "/cat1" },
      { title: "cat2", url: "/cat2" },
      { title: "cat3", url: "/cat3" },
    ],
    views: 0,
    userId: "1",
    userName: "Qurbon",
    userPhone: "928283352",
    registraionDate: "20.05.2024",
  };
  return (
    <Link to={`/adv/${post.id}`} className="largeCard">
      <div className="largeCard__img-container">
        <img
          src={post.images[0]}
          alt={post.images[0]}
          className="largeCard__img"
        />
      </div>
      <div className="largeCard__content">
        <p className="largeCard__price">
          {formattedNum(post.price)} <b>c.</b>
        </p>
        <p className="largeCard__name">{post.name}</p>
        <p className="largeCard__desc"></p>
        <div className="largeCard__hint">
          <div className="largeCard__hint-dateNcity">
            <span>{post.date}</span>
            <span>{post.city}</span>
          </div>
          <div
            className="largeCard__add-favourite"
            onClick={(e) => addToFavourites(e)}
          ></div>
        </div>
      </div>
    </Link>
  );
}
