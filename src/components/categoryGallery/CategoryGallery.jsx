import React from "react";
import { Link } from "react-router-dom";
import "./CategoryGallery.css";
import SmallCard from "../small-card/SmallCard";
import MediumCard from "../medium-card/MediumCard";

export default function CategoryGallery({
  title,
  route,
  gridColumns,
  cardsCount = 6,
}) {
  const [onLeft, setOnLeft] = React.useState(false);
  const posts = [
    {
      id: "1",
      name: "LiXiang L9, 2024",
      city: "Душанбе",
      date: "10.05.2024",
      time: "22:46",
      images: [
        "https://cdn.somon.tj/media/cache1/38/ec/38ec54565c7480ed9c1b8f7d9077e04a.webp",
        "https://cdn.somon.tj/media/cache1/d9/a3/d9a3513d96999efde6e0d92f5182f6cc.webp",
        "https://cdn.somon.tj/media/cache1/d3/c1/d3c1449554b027385ccc8c8cd86f883d.webp",
      ],
      features: {
        Кузов: "Универсал",
        "Год выпуска": "2024",
        Цвет: "Чёрный",
        Привод: "Полный",
        "Объем двигателя": "4.0 л.",
        Пробег: "0 км",
        Состояние: "Новая",
        "Вид топлива": "Гибрид",
        "Растаможен в РТ": "Да",
        "Коробка передач": "Автомат",
        "Лицензия на такси": "Нет",
      },
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
    },
    {
      id: "2",
      name: "LiXiang L9, 2024",
      city: "Душанбе",
      date: "10.05.2024",
      time: "22:46",
      images: [
        "https://cdn.somon.tj/media/cache1/38/ec/38ec54565c7480ed9c1b8f7d9077e04a.webp",
        "https://cdn.somon.tj/media/cache1/d9/a3/d9a3513d96999efde6e0d92f5182f6cc.webp",
        "https://cdn.somon.tj/media/cache1/d3/c1/d3c1449554b027385ccc8c8cd86f883d.webp",
      ],
      features: {
        Кузов: "Универсал",
        "Год выпуска": "2024",
        Цвет: "Чёрный",
        Привод: "Полный",
        "Объем двигателя": "4.0 л.",
        Пробег: "0 км",
        Состояние: "Новая",
        "Вид топлива": "Гибрид",
        "Растаможен в РТ": "Да",
        "Коробка передач": "Автомат",
        "Лицензия на такси": "Нет",
      },
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
    },
    {
      id: "3",
      name: "LiXiang L9, 2024",
      city: "Душанбе",
      date: "10.05.2024",
      time: "22:46",
      images: [
        "https://cdn.somon.tj/media/cache1/38/ec/38ec54565c7480ed9c1b8f7d9077e04a.webp",
        "https://cdn.somon.tj/media/cache1/d9/a3/d9a3513d96999efde6e0d92f5182f6cc.webp",
        "https://cdn.somon.tj/media/cache1/d3/c1/d3c1449554b027385ccc8c8cd86f883d.webp",
      ],
      features: {
        Кузов: "Универсал",
        "Год выпуска": "2024",
        Цвет: "Чёрный",
        Привод: "Полный",
        "Объем двигателя": "4.0 л.",
        Пробег: "0 км",
        Состояние: "Новая",
        "Вид топлива": "Гибрид",
        "Растаможен в РТ": "Да",
        "Коробка передач": "Автомат",
        "Лицензия на такси": "Нет",
      },
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
    },
    {
      id: "4",
      name: "LiXiang L9, 2024",
      city: "Душанбе",
      date: "10.05.2024",
      time: "22:46",
      images: [
        "https://cdn.somon.tj/media/cache1/38/ec/38ec54565c7480ed9c1b8f7d9077e04a.webp",
        "https://cdn.somon.tj/media/cache1/d9/a3/d9a3513d96999efde6e0d92f5182f6cc.webp",
        "https://cdn.somon.tj/media/cache1/d3/c1/d3c1449554b027385ccc8c8cd86f883d.webp",
      ],
      features: {
        Кузов: "Универсал",
        "Год выпуска": "2024",
        Цвет: "Чёрный",
        Привод: "Полный",
        "Объем двигателя": "4.0 л.",
        Пробег: "0 км",
        Состояние: "Новая",
        "Вид топлива": "Гибрид",
        "Растаможен в РТ": "Да",
        "Коробка передач": "Автомат",
        "Лицензия на такси": "Нет",
      },
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
    },
    {
      id: "5",
      name: "LiXiang L9, 2024",
      city: "Душанбе",
      date: "10.05.2024",
      time: "22:46",
      images: [
        "https://cdn.somon.tj/media/cache1/38/ec/38ec54565c7480ed9c1b8f7d9077e04a.webp",
        "https://cdn.somon.tj/media/cache1/d9/a3/d9a3513d96999efde6e0d92f5182f6cc.webp",
        "https://cdn.somon.tj/media/cache1/d3/c1/d3c1449554b027385ccc8c8cd86f883d.webp",
      ],
      features: {
        Кузов: "Универсал",
        "Год выпуска": "2024",
        Цвет: "Чёрный",
        Привод: "Полный",
        "Объем двигателя": "4.0 л.",
        Пробег: "0 км",
        Состояние: "Новая",
        "Вид топлива": "Гибрид",
        "Растаможен в РТ": "Да",
        "Коробка передач": "Автомат",
        "Лицензия на такси": "Нет",
      },
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
    },
    {
      id: "6",
      name: "LiXiang L9, 2024",
      city: "Душанбе",
      date: "10.05.2024",
      time: "22:46",
      images: [
        "https://cdn.somon.tj/media/cache1/38/ec/38ec54565c7480ed9c1b8f7d9077e04a.webp",
        "https://cdn.somon.tj/media/cache1/d9/a3/d9a3513d96999efde6e0d92f5182f6cc.webp",
        "https://cdn.somon.tj/media/cache1/d3/c1/d3c1449554b027385ccc8c8cd86f883d.webp",
      ],
      features: {
        Кузов: "Универсал",
        "Год выпуска": "2024",
        Цвет: "Чёрный",
        Привод: "Полный",
        "Объем двигателя": "4.0 л.",
        Пробег: "0 км",
        Состояние: "Новая",
        "Вид топлива": "Гибрид",
        "Растаможен в РТ": "Да",
        "Коробка передач": "Автомат",
        "Лицензия на такси": "Нет",
      },
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
    },
    {
      id: "7",
      name: "LiXiang L9, 2024",
      city: "Душанбе",
      date: "10.05.2024",
      time: "22:46",
      images: [
        "https://cdn.somon.tj/media/cache1/38/ec/38ec54565c7480ed9c1b8f7d9077e04a.webp",
        "https://cdn.somon.tj/media/cache1/d9/a3/d9a3513d96999efde6e0d92f5182f6cc.webp",
        "https://cdn.somon.tj/media/cache1/d3/c1/d3c1449554b027385ccc8c8cd86f883d.webp",
      ],
      features: {
        Кузов: "Универсал",
        "Год выпуска": "2024",
        Цвет: "Чёрный",
        Привод: "Полный",
        "Объем двигателя": "4.0 л.",
        Пробег: "0 км",
        Состояние: "Новая",
        "Вид топлива": "Гибрид",
        "Растаможен в РТ": "Да",
        "Коробка передач": "Автомат",
        "Лицензия на такси": "Нет",
      },
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
    },
    {
      id: "8",
      name: "LiXiang L9, 2024",
      city: "Душанбе",
      date: "10.05.2024",
      time: "22:46",
      images: [
        "https://cdn.somon.tj/media/cache1/38/ec/38ec54565c7480ed9c1b8f7d9077e04a.webp",
        "https://cdn.somon.tj/media/cache1/d9/a3/d9a3513d96999efde6e0d92f5182f6cc.webp",
        "https://cdn.somon.tj/media/cache1/d3/c1/d3c1449554b027385ccc8c8cd86f883d.webp",
      ],
      features: {
        Кузов: "Универсал",
        "Год выпуска": "2024",
        Цвет: "Чёрный",
        Привод: "Полный",
        "Объем двигателя": "4.0 л.",
        Пробег: "0 км",
        Состояние: "Новая",
        "Вид топлива": "Гибрид",
        "Растаможен в РТ": "Да",
        "Коробка передач": "Автомат",
        "Лицензия на такси": "Нет",
      },
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
    },
    {
      id: "9",
      name: "LiXiang L9, 2024",
      city: "Душанбе",
      date: "10.05.2024",
      time: "22:46",
      images: [
        "https://cdn.somon.tj/media/cache1/38/ec/38ec54565c7480ed9c1b8f7d9077e04a.webp",
        "https://cdn.somon.tj/media/cache1/d9/a3/d9a3513d96999efde6e0d92f5182f6cc.webp",
        "https://cdn.somon.tj/media/cache1/d3/c1/d3c1449554b027385ccc8c8cd86f883d.webp",
      ],
      features: {
        Кузов: "Универсал",
        "Год выпуска": "2024",
        Цвет: "Чёрный",
        Привод: "Полный",
        "Объем двигателя": "4.0 л.",
        Пробег: "0 км",
        Состояние: "Новая",
        "Вид топлива": "Гибрид",
        "Растаможен в РТ": "Да",
        "Коробка передач": "Автомат",
        "Лицензия на такси": "Нет",
      },
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
    },
    {
      id: "10",
      name: "LiXiang L9, 2024",
      city: "Душанбе",
      date: "10.05.2024",
      time: "22:46",
      images: [
        "https://cdn.somon.tj/media/cache1/38/ec/38ec54565c7480ed9c1b8f7d9077e04a.webp",
        "https://cdn.somon.tj/media/cache1/d9/a3/d9a3513d96999efde6e0d92f5182f6cc.webp",
        "https://cdn.somon.tj/media/cache1/d3/c1/d3c1449554b027385ccc8c8cd86f883d.webp",
      ],
      features: {
        Кузов: "Универсал",
        "Год выпуска": "2024",
        Цвет: "Чёрный",
        Привод: "Полный",
        "Объем двигателя": "4.0 л.",
        Пробег: "0 км",
        Состояние: "Новая",
        "Вид топлива": "Гибрид",
        "Растаможен в РТ": "Да",
        "Коробка передач": "Автомат",
        "Лицензия на такси": "Нет",
      },
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
    },
    {
      id: "11",
      name: "LiXiang L9, 2024",
      city: "Душанбе",
      date: "10.05.2024",
      time: "22:46",
      images: [
        "https://cdn.somon.tj/media/cache1/38/ec/38ec54565c7480ed9c1b8f7d9077e04a.webp",
        "https://cdn.somon.tj/media/cache1/d9/a3/d9a3513d96999efde6e0d92f5182f6cc.webp",
        "https://cdn.somon.tj/media/cache1/d3/c1/d3c1449554b027385ccc8c8cd86f883d.webp",
      ],
      features: {
        Кузов: "Универсал",
        "Год выпуска": "2024",
        Цвет: "Чёрный",
        Привод: "Полный",
        "Объем двигателя": "4.0 л.",
        Пробег: "0 км",
        Состояние: "Новая",
        "Вид топлива": "Гибрид",
        "Растаможен в РТ": "Да",
        "Коробка передач": "Автомат",
        "Лицензия на такси": "Нет",
      },
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
    },
    {
      id: "12",
      name: "LiXiang L9, 2024",
      city: "Душанбе",
      date: "10.05.2024",
      time: "22:46",
      images: [
        "https://cdn.somon.tj/media/cache1/38/ec/38ec54565c7480ed9c1b8f7d9077e04a.webp",
        "https://cdn.somon.tj/media/cache1/d9/a3/d9a3513d96999efde6e0d92f5182f6cc.webp",
        "https://cdn.somon.tj/media/cache1/d3/c1/d3c1449554b027385ccc8c8cd86f883d.webp",
      ],
      features: {
        Кузов: "Универсал",
        "Год выпуска": "2024",
        Цвет: "Чёрный",
        Привод: "Полный",
        "Объем двигателя": "4.0 л.",
        Пробег: "0 км",
        Состояние: "Новая",
        "Вид топлива": "Гибрид",
        "Растаможен в РТ": "Да",
        "Коробка передач": "Автомат",
        "Лицензия на такси": "Нет",
      },
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
    },
  ];
  const postsCopy = [];
  for (let i = 0; i < cardsCount; i++) {
    postsCopy.push(posts[i]);
  }
  const small = gridColumns === 6;
  function handleClick() {
    setOnLeft((prev) => !prev);
  }
  return (
    <div className="categoryGallery">
      <Link to={route} className="categoryGallery__title">
        {title}
      </Link>
      {small &&
        (onLeft ? (
          <div className="cards__arrow cards__left" onClick={handleClick}></div>
        ) : (
          <div
            className="cards__arrow cards__right"
            onClick={handleClick}
          ></div>
        ))}
      <div className="cards__container">
        <div
          className="cards"
          style={{
            gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
            gap: "10px",
            marginLeft: onLeft ? "-470px" : "0px",
          }}
        >
          {postsCopy.map((post) => (
            <div key={post.id}>
              {small ? <SmallCard post={post} /> : <MediumCard post={post} />}
            </div>
          ))}
          {small && (
            <Link to={route} className="more">
              →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
