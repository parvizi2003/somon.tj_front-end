import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
import axios from "../../axios";

export default function Login() {
  const [formData, SetFormData] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    password: false,
  });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let noErrors = true;
    Object.keys(formData).map((elem) => {
      if (!formData[elem]) {
        setErrors((prev) => ({ ...prev, [elem]: true }));
        noErrors = false;
      }
    });
    if (noErrors) {
      axios
        .post("/auth/login", formData)
        .then((res) => {
          window.localStorage.setItem("token", res.data.token);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  }

  function handleChange(e) {
    SetFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleBlur(e) {
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: Boolean(!e.target.value),
    }));
  }

  return (
    <section className={styles.auth}>
      <div className="container">
        <h1 className={styles.title}>Вход</h1>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <label className={styles.label}>
            <span className={styles.label_text}>Ваш логин</span>
            <input
              name="name"
              type="text"
              className={styles.input}
              value={formData.name}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
            />
            {errors.name && <p className={styles.error}>Введите имя</p>}
          </label>

          <label className={styles.label}>
            <span className={styles.label_text}>Ваш пароль</span>
            <input
              name="password"
              type="password"
              className={styles.input}
              autoComplete="on"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
            />
            {errors.password && <p className={styles.error}>Введите пароль</p>}
          </label>

          <input type="submit" value="Войти" className={styles.submit} />
        </form>
        <Link to={"/profile/register"} className={styles.redirect}>
          Нет аккаунта?
        </Link>
      </div>
    </section>
  );
}
