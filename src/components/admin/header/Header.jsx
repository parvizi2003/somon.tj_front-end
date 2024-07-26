import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  function handleClick() {
    window.localStorage.removeItem("token");
    window.location.href = "/admin/login";
  }
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.menu}>
          <Link className={styles.menu_item} to="/admin">
            Главная
          </Link>
          <Link className={styles.menu_item} to="/admin/register">
            Добавить нового админа
          </Link>
          <Link className={styles.menu_item} onClick={handleClick}>
            Выйти
          </Link>
        </nav>
      </div>
    </header>
  );
}
