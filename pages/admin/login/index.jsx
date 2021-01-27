import { useState } from "react";
import styles from "../../../styles/Login.module.css";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const input_username = e.target.username.value;
    const input_password = e.target.password.value;
    // alert(input_username + " " + input_password);
    fetch("http://35.186.154.72:9000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: input_username,
        password: input_password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.kode === 200) {
          alert(data.pesan);
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.data.username);
        } else {
          alert(data.pesan);
        }
      });
  };
  return (
    <main className={styles.container}>
      <form className={styles.login_form} onSubmit={handleLogin}>
        <div className={styles.form_group}>
          <label htmlFor="username">username</label>
          <input type="text" id="username" name="username" required />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="password">password</label>
          <input
            type={show ? "text" : "password"}
            id="password"
            name="password"
            required
          />
        </div>

        <div className={styles.show_password}>
          <input
            type="checkbox"
            id="show_password"
            onChange={() => {
              setShow(!show);
            }}
          />
          <label htmlFor="show_password">tampilkan password</label>
        </div>

        <div className={styles.form_group}>
          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
};

export default Login;
