import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [phone, setPhone] = React.useState("");

  const lines = "__ ___ ____";
  function handleChange(event) {
    const cleanedValue = event.target.value.replace(/\D/g, "");
    const formattedValue = cleanedValue
      .split("")
      .reduce((acc, digit, index) => {
        if (index === 2 || index === 5) {
          return `${acc} ${digit}`;
        }
        return acc + digit;
      }, "");
    setPhone(formattedValue);
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <Link to="/" className="footer__logo">
            <img
              src="https://somon.tj/static/images/footer/somon_logo.png?_=201215"
              alt=""
            />
          </Link>
          <div className="socials">
            <Link to="/">
              <img src="https://somon.tj/static/images/share/fb2.png" alt="" />
            </Link>
            <Link to="/">
              <img
                src="https://somon.tj/static/images/share/insta.png"
                alt=""
              />
            </Link>
          </div>
          <div className="add-post-wrapper">
            <Link to="/add-post" className="add-post">
              Подать объявление
            </Link>
            <div className="menu-lang">
              <Link to="/" className="lang-ru">
                RU
              </Link>
              <Link to="/tg" className="lang-tj">
                TJ
              </Link>
            </div>
          </div>
          <div className="footer__app">
            <Link to="/">
              <img
                src="https://somon.tj/static/images/store/rus_google.e55e3da8d96f.png"
                alt=""
              />
            </Link>
            <Link to="/">
              <img
                src="https://somon.tj/static/images/store/rus_apple.3c6a09095a9c.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="footer__main">
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="" style={{ fontWeight: "bold" }}>
                Мобильная версия
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="">Карта сайта</Link>
            </li>
            <li className="footer__list-item">
              <Link to="">Карта районов</Link>
            </li>
            <li className="footer__list-item">
              <Link to="">Оферта</Link>
            </li>
            <li className="footer__list-item">
              <Link to="">Правила сайта</Link>
            </li>
            <li className="footer__list-item">
              <Link to="">Лицензионный договор</Link>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="">Безопасность</Link>
            </li>
            <li className="footer__list-item">
              <Link to="">Помощь</Link>
            </li>
            <li className="footer__list-item">
              <Link to="">Наши вакансии</Link>
            </li>
            <li className="footer__list-item">
              <Link to="">Прейскурант</Link>
            </li>
            <li className="footer__list-item">
              <Link to="">Оплата через Tcell</Link>
            </li>
            <li className="footer__list-item">
              <Link to="">Оплата через МегаФон-Таджикистан</Link>
            </li>
            <li className="footer__list-item">
              <Link to="">Оплата через Babilon-Mobile</Link>
            </li>
          </ul>
          <div className="install-app">
            <h3 className="install-app__title">Установи приложение Somon.tj</h3>
            <p className="install-app__label">
              Получи ссылку на приложение по SMS
            </p>
            <form className="install-app__form">
              <input
                type="text"
                className="install-app__form-input"
                id="install-app__form-input"
                value={phone}
                onChange={(e) => handleChange(e)}
                placeholder={lines}
                maxLength={11}
              />
              <button className="install-app__form-submit">‣</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
