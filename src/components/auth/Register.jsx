import React, { useState } from "react";
import "./auth.css";

import { Link } from "react-router-dom";

export default function Register() {
  const [values, setValues] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    isAgree: false,
    disabled: false,
  });

  function handleChange(e) {
    setValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    if (
      values.name.length !== 0 &&
      values.password.length !== 0 &&
      values.confirmPassword.length !== 0
    ) {
      setValues((prev) => ({ ...prev, disabled: false }));
    }
    console.log(values);
  }
  function handleCheck(e) {
    let disabled;
    e.target.checked ? (disabled = false) : (disabled = true);

    setValues((prev) => ({
      ...prev,
      isAgree: e.target.checked,
      disabled: disabled,
    }));
  }
  function handleBlur(e) {
    e.target.value.length === 0 &&
      setValues((prev) => ({ ...prev, disabled: true }));
  }
  function handleSubmit(e) {
    if (
      values.name.length === 0 ||
      values.password.length === 0 ||
      values.confirmPassword.length === 0 ||
      values.isAgree === false
    ) {
      setValues((prev) => ({ ...prev, disabled: true }));
    }
  }

  return (
    <section className="auth">
      <div className="container">
        <h1 className="auth__title">Регистрация</h1>
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
          <label className="auth__label">
            <span className="auth__label-text">Подтвердите пароль</span>
            <input
              type="password"
              className="auth__form-input"
              id="confirmPassword"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
            />
          </label>
          <label className="auth__label checkbox-label">
            <input
              type="checkbox"
              className="auth__form-checkbox"
              id="isAgree"
              checked={values.isAgree}
              onClick={(e) => handleCheck(e)}
            />
            <span className="auth__label-checkbox-text">
              Я согласен на обработку моих персональных данных, и подтверждаю,
              что мне есть 18 лет
            </span>
          </label>
          <button
            className="auth__form-submit"
            onClick={(e) => handleSubmit(e)}
            disabled={values.disabled}
          >
            Зарегистрироватся
          </button>
        </form>
        <Link to={"/profile/login"} className="auth__redirect">
          Уже есть аккаунт?
        </Link>
      </div>
    </section>
  );
}
