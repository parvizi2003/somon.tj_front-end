import React, { useState } from "react";
import styles from "./Settings.module.css";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

export default function Settings() {
  const [active, setActive] = useState();
  const navigate = useNavigate();

  if (!window.localStorage.getItem("token")) {
    return navigate("/");
  }

  function handleClick(num) {
    setActive(num);
  }
  return (
    <section className={styles.settings}>
      <div className="container">
        {/* <div
          className={`${styles.toggle_block} ${
            active === 1 ? styles.active : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <div className={styles.text}>Удалить аккаунт</div>
          <div className={styles.content}>
            <button
              className={styles.button}
              onClick={() => {
                axios
                  .delete("auth/delete")
                  .then((res) => {
                    alert(res.data.message);
                    window.localStorage.clear();
                    window.location.href = "/";
                  })
                  .catch((err) => console.log(err));
                navigate("/");
              }}
            >
              Удалить аккаунт
            </button>
          </div>
        </div> */}
        <div
          className={`${styles.toggle_block} ${
            active === 2 ? styles.active : ""
          }`}
          onClick={(e) => handleClick(2)}
        >
          <div className={styles.text}>Выйти из аккаунта</div>
          <div className={styles.content}>
            <button
              className={styles.button}
              onClick={() => {
                window.localStorage.clear();
                window.location.href = "/";
              }}
            >
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
