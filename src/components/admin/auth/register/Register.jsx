import React from "react";
import styles from "./Register.module.css";
import axios from "../../../../axios.js";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Paper, Typography, TextField, Button } from "@mui/material";

export default function Register() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      navigate("/admin/login");
    }
  }, []);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "Пароли не совпадают",
        });
        return;
      }
      const res = await axios.post("/admin/register", data);
      alert(res.data.message);
      navigate("/admin");
    } catch (err) {
      setError("root", { message: err.response.data.message });
    }
  };

  return (
    <section className={styles.register}>
      <Paper className={styles.paper}>
        <Typography
          variant="h5"
          className={styles.title}
          sx={{ fontWeight: "bold", marginBottom: "30px" }}
        >
          Зарегистрировать
        </Typography>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type="text"
            label="Имя"
            error={Boolean(errors.name?.message)}
            helperText={errors.name?.message}
            {...register("name", { required: "Укажите имя" })}
            fullWidth
            autoComplete="username"
          />
          <TextField
            type="password"
            label="Пароль"
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            {...register("password", { required: "Укажите пароль" })}
            fullWidth
            autoComplete="current-password"
          />
          <TextField
            type="password"
            label="Подтвердить пароль"
            error={Boolean(errors.confirmPassword?.message)}
            helperText={errors.confirmPassword?.message}
            {...register("confirmPassword", { required: "Подтвердите пароль" })}
            fullWidth
            autoComplete="current-password"
          />
          <Button type="submit" size="large" variant="contained" fullWidth>
            {isSubmitting ? "Загрузка" : "Войти"}
          </Button>
        </form>
        {errors.root?.message && (
          <span className={styles.error}>{errors.root.message}</span>
        )}
      </Paper>
    </section>
  );
}
