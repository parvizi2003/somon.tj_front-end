import React, { useEffect, useState } from "react";
import "./Post.css";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import CategoryGallery from "../categoryGallery/CategoryGallery";
import { addToFavourites, formattedNum } from "../../Utils/Utils";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Post() {
  const [showFull, setShowFull] = useState(0);
  const [showPhone, setShowPhone] = useState(false);

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
    <div className="post">
      <div className="container">
        <Breadcrumbs categories={post.categories} />
        <div className="page-container">
          <main>
            <h1 className="post__title">{post.name}</h1>
            <div className="post__meta">
              <div
                className="add-favorites"
                onClick={(e) => addToFavourites(e)}
              ></div>
              <div className="post__city">{post.city}</div>
              <div className="post__details">
                <span className="post__time">
                  Опубликовано: {`${post.date} ${post.time}`}
                </span>
                <span className="post__number">
                  Номер объявления: {post.id}
                </span>
              </div>
            </div>
            <div className="post__img-swiper">
              <div
                className={`swipe-arrow swipe-left ${
                  showFull === 0 ? "" : "active"
                }`}
                onClick={() => setShowFull((prev) => prev - 1)}
              ></div>
              <div
                className={`swipe-arrow swipe-right ${
                  showFull === post.images.length - 1 ? "" : "active"
                }`}
                onClick={() => setShowFull((prev) => prev + 1)}
              ></div>
              <div className="post__img-container">
                <img
                  src={post.images[showFull]}
                  alt={post.images[showFull]}
                  className="post__img"
                />
              </div>
            </div>

            <div className="post__thumbnails">
              {post.images.map((image, index) => (
                <div
                  key={index}
                  className={`post__thumbnail-container ${
                    showFull === index ? "active" : ""
                  }`}
                  onClick={() => setShowFull(index)}
                >
                  <img src={image} alt={image} className="post__thumbnail" />
                </div>
              ))}
            </div>
            <ul className="post__features">
              {post.features.map((feature) => (
                <li
                  key={Object.keys(feature)[0]}
                  className="post__features-item"
                >
                  <span className="post__feature-key">
                    {Object.keys(feature)[0]}:
                  </span>
                  <span className="post__feature-value">
                    {Object.values(feature)[0]}
                  </span>
                </li>
              ))}
            </ul>
            <div className="post__description">
              {post.description.map((row, index) => (
                <p key={index}>{row}</p>
              ))}
            </div>
            <div className="after-content">
              <div className="prev-next">
                <Link to="#" className="prev">
                  « Назад
                </Link>
                <Link to="#" className="prev">
                  Следующая »
                </Link>
              </div>
              <span className="post__views">Просмотров: {post.views}</span>
            </div>
            <div className="similars">
              <CategoryGallery
                title="Похожие запросы"
                gridColumns={3}
                cardsCount={12}
              />
            </div>
          </main>
          <aside className="post__aside">
            <div className="post__aside-container">
              <div className="post__aside-top">
                <div className="announcement__price">
                  {formattedNum(post.price)} <b>c.</b>
                </div>
                <div
                  className="announcement__author-phone"
                  onClick={() => setShowPhone(true)}
                >
                  <div className="announcement__author-phone-container">
                    <div className="announcement__author-phone__title">
                      {showPhone ? post.userPhone : "Показать телефон"}
                    </div>
                    {!showPhone && (
                      <div className="announcement__author-subtext">
                        {post.userPhone.replace(/(.{2})(.{3})/g, "$1 $2 ")}
                      </div>
                    )}
                  </div>
                </div>
                <Link
                  to={`https://api.whatsapp.com/send?phone=+992${post.userPhone}&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%0A%D1%8F%20%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BB%D1%81%D1%8F%20%D0%B2%D0%B0%D1%88%D0%B8%D0%BC%20%D0%BE%D0%B1%D1%8A%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC%20%D0%BD%D0%B0%20Somon.%0A%D0%A1%D1%81%D1%8B%D0%BB%D0%BA%D0%B0%3A%20https%3A//somon.tj/adv/${post.id}/`}
                  className="announcement__whatsapp"
                >
                  Whatsapp
                </Link>
                <Link
                  to={`/messenger/${post.userId}`}
                  className="announcement__author-message"
                >
                  Начать чат
                </Link>
                <Link to="https://safety.somon.tj/" className="safety">
                  Прочитайте, как не попасться мошенникам. Взгляните на наши
                  советы и будьте бдительны
                </Link>
              </div>
              <div className="post__aside-bottom">
                <p className="author__name">{post.userName}</p>
                <p className="author__registration-date">
                  На сайте с {post.registraionDate}
                </p>
                <Link
                  to={`/author/${post.userId}`}
                  className="author__other-posts"
                >
                  Другие объявления автора
                </Link>
                <Link to="" className="complain">
                  Пожаловаться
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Post;
