import React from "react";
import style from "./NotFound.module.css";

export default function notFound() {
  return (
    <section className={style.notFound}>
      <div className="container">
        <h1 className={style.title}>404 Ошибка</h1>
        <p className={style.subtitle}>
          Страница не найдена. Попробуйте начать ваш поиск с главной страницы.
        </p>
      </div>
    </section>
  );
}
