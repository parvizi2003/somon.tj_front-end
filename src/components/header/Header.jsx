import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import axios from "../../axios";

export default function Header() {
  const [userData, setUserData] = React.useState(false);

  React.useEffect(() => {
    if (window.localStorage.getItem("token")) {
      axios
        .get("/auth/me")
        .then((user) => setUserData(user.data))
        .catch((err) => console.log(err));
    }
  }, [window.localStorage.getItem("token")]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Link to="/" className="header__logo"></Link>
          <div className="header__menu">
            <div className="user-menu">
              {userData ? (
                <>
                  <span className="user-name">{userData.name}</span>
                  <span className="user-phone">{userData.phone}</span>
                </>
              ) : (
                <>
                  <span className="user-name">Личный кабинет</span>
                  <span className="user-phone"> Вход и регистрация</span>
                </>
              )}
              <div className="user-menu__dropdown">
                {!userData && (
                  <Link
                    to="/profile/login"
                    className="user-menu__dropdown-login"
                  >
                    Вход
                  </Link>
                )}
                <Link className="user-menu__dropdown-link">Мои объявления</Link>
                <Link className="user-menu__dropdown-link">Мои настройки</Link>
              </div>
            </div>
            <Link to="/profile/favourites" className="favourites"></Link>
            <Link to="/messenger" className="messenger"></Link>
            <Link to="/add-post" className="add-post">
              Подать объявление
            </Link>
            <div className="menu-lang">
              <Link className="lang-ru active">RU</Link>
              <Link className="lang-tj">TJ</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
