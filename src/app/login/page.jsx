import "./style.css";

export default function Login() {
  return (
    <div className="login-wrap">
      <div className="login-form">
        <h1>Авторизация</h1>
        <input type="text" placeholder="Логин" />
        <input type="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
      </div>
    </div>
  );
}
