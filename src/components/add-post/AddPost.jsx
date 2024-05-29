import React from "react";
import styles from "./AddPost.module.css";

import categories from "../../content/categories.json";
import cities from "../../content/cities.json";

import AddPostInput from "./AddPostInput";

export default function AddPost() {
  const [category, setCategory] = React.useState();
  const [subCategory, setSubCategory] = React.useState();

  function handleClick(categoryItem) {
    category !== categoryItem && setSubCategory(undefined);
    setCategory(categoryItem);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <main className={styles.addPost}>
      <div className="container">
        <section className={styles.wide}>
          <h1 className={styles.title}>Подать объявление</h1>
          <p className={styles.selector__title}>
            Выберите категорию для объявления из списка ниже
          </p>
          <div className={styles.selector}>
            <ul style={styles.categories}>
              {Object.keys(categories).map((categoryItem) => (
                <li
                  key={categoryItem}
                  className={`${styles.list__item} ${
                    categoryItem === category ? styles.selected : ""
                  }`}
                  onClick={() => handleClick(categoryItem)}
                >
                  {categories[categoryItem].title}
                </li>
              ))}
            </ul>

            <ul style={styles.subCategories}>
              {category &&
                Object.values(categories[category].links).map(
                  (subCategoryItem) => (
                    <li
                      key={subCategoryItem.route}
                      className={`${styles.list__item} ${
                        subCategoryItem.route === subCategory
                          ? styles.selected
                          : ""
                      }`}
                      onClick={() => setSubCategory(subCategoryItem.route)}
                    >
                      {subCategoryItem.title}
                    </li>
                  )
                )}
            </ul>
          </div>
        </section>
        <section className={styles.normal}>
          <form
            action="/"
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label className={styles.label}>
              <span className={styles.label__text}>Заголовок:</span>
              <AddPostInput className={styles.input} />
            </label>
            <label className={styles.label}>
              <span className={styles.label__text}>Цена:</span>
              <AddPostInput className={styles.input} />
            </label>
            <label className={styles.label}>
              <span className={styles.label__text}>Фотографии:</span>
              <input type="file" accept="image/*" hidden />
              <div className={styles.imageBlock}></div>
            </label>
            <label className={styles.label}>
              <span className={styles.label__text}>Описание:</span>
              <textarea className={styles.input + " " + styles.textarea} />
            </label>
            <label className={styles.label}>
              <span className={styles.label__text}>Город:</span>
              <select className={styles.input}>
                {cities.map((city) => (
                  <option key={city.route}>{city.name}</option>
                ))}
              </select>
            </label>
            <input
              type="submit"
              value="Подать объявление"
              className={styles.submit}
            />
          </form>
        </section>
      </div>
    </main>
  );
}
