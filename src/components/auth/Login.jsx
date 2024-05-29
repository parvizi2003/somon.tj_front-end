import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

export default function Login() {
  const [values, setValues] = useState({
    name: "",
    password: "",
    disabled: false,
  });
  function handleChange(e) {
    setValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    if (values.name.length !== 0 && values.password.length !== 0) {
      setValues((prev) => ({ ...prev, disabled: false }));
    }
    console.log(values);
  }
  function handleBlur(e) {
    e.target.value.length === 0 &&
      setValues((prev) => ({ ...prev, disabled: true }));
  }
  function handleSubmit(e) {
    if (values.name.length === 0 || values.password.length === 0) {
      setValues((prev) => ({ ...prev, disabled: true }));
    }
  }
  return (
    <section className="auth">
      <div className="container">
        <h1 className="auth__title">Вход</h1>
        <form method="post" action="/auth/login" className="auth__form">
          <label className="auth__label">
            <span className="auth__label-text">Ваш логин</span>
            <input
              type="text"
              className="auth__form-input"
              id="name"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
            />
          </label>
          <label className="auth__label">
            <span className="auth__label-text">Ваш пароль</span>
            <input
              type="password"
              className="auth__form-input"
              id="password"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
            />
          </label>
          <button
            className="auth__form-submit"
            disabled={values.disabled}
            onClick={(e) => handleSubmit(e)}
          >
            Войти
          </button>
        </form>
        <Link to={"/profile/register"} className="auth__redirect">
          Нет аккаунта?
        </Link>
      </div>
    </section>
  );
}
