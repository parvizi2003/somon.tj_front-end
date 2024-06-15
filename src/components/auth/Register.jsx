import React, { useState } from "react";
import styles from "./Auth.module.css";

import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";

export default function Register() {
  const [formData, SetFormData] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
    isAgree: false,
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    password: false,
    confirmPassword: false,
    isAgree: false,
  });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let noErrors = true;
    Object.keys(formData).map((elem) => {
      if (!formData[elem]) {
        setErrors((prev) => ({ ...prev, [elem]: true }));
        noErrors = false;
        console.log(noErrors);
      }
    });
    if (noErrors) {
      axios
        .post("/auth/register", formData)
        .then((res) => {
          window.localStorage.setItem("token", res.data.token);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  }

  function handleChange(e) {
    SetFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleBlur(e) {
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: Boolean(!e.target.value),
    }));
  }
  React.useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <section className={styles.auth}>
      <div className="container">
        <h1 className={styles.title}>Регистрация</h1>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <label className={styles.label}>
            <span className={styles.label_text}>Ваш логин</span>
            <input
              type="text"
              className={styles.input}
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
            />
            {errors.name && <p className={styles.error}>Введите имя</p>}
          </label>

          <label className={styles.label}>
            <span className={styles.label_text}>Ваш номер телефона</span>
            <input
              type="text"
              className={styles.input}
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              maxLength={9}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />
            {errors.phone && (
              <p className={styles.error}>Введите номер телефона</p>
            )}
          </label>

          <label className={styles.label}>
            <span className={styles.label_text}>Ваш пароль</span>
            <input
              type="password"
              className={styles.input}
              name="password"
              autoComplete="on"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
            />
            {errors.password && <p className={styles.error}>Введите пароль</p>}
          </label>

          <label className={styles.label}>
            <span className={styles.label_text}>Введите пароль</span>
            <input
              type="password"
              className={styles.input}
              name="confirmPassword"
              autoComplete="on"
              value={formData.confirmPassword}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
            />
            {errors.confirmPassword && (
              <p className={styles.error}>Подтвердите пароль</p>
            )}
          </label>

          <label className={styles.checkbox_label + " " + styles.label}>
            <div className={styles.checkbox_container}>
              <input
                type="checkbox"
                className={styles.checkbox}
                name="isAgree"
                checked={formData.isAgree}
                onChange={(e) => {
                  SetFormData((prev) => ({
                    ...prev,
                    isAgree: e.target.checked,
                  }));
                  setErrors((prev) => ({ ...prev, isAgree: formData.isAgree }));
                }}
              />

              <span className={styles.checkbox_label_text}>
                Я согласен на обработку моих персональных данных, и подтверждаю,
                что мне есть 18 лет
              </span>
            </div>
            {errors.isAgree && (
              <p className={styles.error}>
                Вам необходимо согласиться с правилами и поставить галочку
              </p>
            )}
          </label>

          <input
            type="submit"
            className={styles.submit}
            value="Зарегистрироватся"
            name="submit"
          />
        </form>
        <Link to={"/profile/login"} className={styles.redirect}>
          Уже есть аккаунт?
        </Link>
      </div>
    </section>
  );
}
