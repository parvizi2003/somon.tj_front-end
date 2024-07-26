import React from "react";
import styles from "./AddPost.module.css";

import categories from "../../content/categories.json";

import { useNavigate } from "react-router-dom";
import axios from "../../axios";

export default function AddPost() {
  const navigate = useNavigate();
  const [cities, setCities] = React.useState();
  React.useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      navigate("/profile/login");
    }

    axios
      .get("/cities")
      .then((res) => setCities(res.data))
      .catch((err) => console.log(err));
  }, [navigate]);

  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    price: "",
    city: "",
    images: [],
    features: {},
    tags: [],
    bargain: false,
  });

  React.useEffect(() => {
    console.log(formData);
  }, [formData]);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleChangeFile(e) {
    try {
      const formData1 = new FormData();
      const file = e.target.files[0];
      formData1.append("image", file);
      const image = await axios.post("/upload", formData1);

      setFormData((prev) => {
        const copy = prev.images;
        copy.push("http://localhost:4444" + image.data.url);
        return { ...prev, images: copy };
      });
    } catch (err) {
      console.log(err);
    }
  }

  function handleSubmit() {
    axios
      .post("/add-post", formData)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
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
              {Object.keys(categories).map((category) => (
                <li
                  key={category}
                  className={`${styles.list__item} ${
                    formData.tags[0] === category ? styles.selected : ""
                  }`}
                  onClick={() =>
                    setFormData((prev) => {
                      return { ...prev, tags: [category] };
                    })
                  }
                >
                  {categories[category].title}
                </li>
              ))}
            </ul>

            <ul style={styles.subCategories}>
              {formData.tags[0] &&
                categories[formData.tags[0]].links.map((link) => (
                  <li
                    key={link.route}
                    className={`${styles.list__item} ${
                      formData.tags[1] === link.route ? styles.selected : ""
                    }`}
                    onClick={() =>
                      setFormData((prev) => {
                        const updatedTags = [...prev.tags];
                        updatedTags[1] = link.route;
                        return { ...prev, tags: updatedTags };
                      })
                    }
                  >
                    {link.title}
                  </li>
                ))}
            </ul>
          </div>
        </section>
        {formData.tags[1] && (
          <section className={styles.normal}>
            <label className={styles.label}>
              <span className={styles.label__text}>Заголовок:</span>
              <input
                type="text"
                className={styles.input}
                name="title"
                value={formData.title}
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label className={styles.label}>
              <span className={styles.label__text}>Цена:</span>
              <input
                type="text"
                className={styles.input}
                name="price"
                value={formData.price}
                onChange={(e) => handleChange(e)}
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                }
              />
            </label>
            <label className={styles.label}>
              <span className={styles.label__text}>Фотографии:</span>
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => handleChangeFile(e)}
              />
              <div className={styles.imageBlock}></div>
              {formData.images.length !== 0 &&
                formData.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={image}
                    className={styles.imageBlock + " " + styles.image}
                  />
                ))}
            </label>
            <label className={styles.label}>
              <span className={styles.label__text}>Торг:</span>
              <input
                type="checkbox"
                className={styles.checkbox}
                name="bargain"
                checked={formData.bargain}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    bargain: e.target.checked,
                  }))
                }
              />
            </label>
            <label className={styles.label}>
              <span className={styles.label__text}>Описание:</span>
              <textarea
                className={styles.input + " " + styles.textarea}
                name="description"
                value={formData.description}
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label className={styles.label}>
              <span className={styles.label__text}>Город:</span>
              <select
                name="city"
                className={styles.input}
                value={formData.city}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option value="" hidden>
                  Выберите из списка
                </option>
                {cities &&
                  cities.slice(1).map((city) => (
                    <option key={city._id} value={city._id}>
                      {city.name}
                    </option>
                  ))}
              </select>
            </label>
            <input
              type="submit"
              value="Подать объявление"
              className={styles.submit}
              onClick={handleSubmit}
            />
          </section>
        )}
      </div>
    </main>
  );
}
