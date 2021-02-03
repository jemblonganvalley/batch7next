import { useState } from "react";
import styles from "../../../styles/Login.module.css";

const Login = () => {
  const [show, setShow] = useState(false);
  const [same, setSame] = useState(true);
  const handleRegister = (e) => {
    e.preventDefault();
    const input_username = e.target.username.value;
    const input_password = e.target.password.value;
    const input_password2 = e.target.password2.value;
    const input_nama_lengkap = e.target.nama_lengkap.value;
    // alert(input_username + " " + input_password);

    if (input_password != input_password2) {
      same(false);
    } else {
      fetch("http://34.87.188.251:8000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "aplication/json",
        },
        body: JSON.stringify({
          username: input_username,
          password: input_password,
          nama: input_nama_lengkap,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.kode === 200) {
            alert("Registrasi Berhasil..");
            window.location.href = "/admin/login";
          } else {
            alert("data tidak valid");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <main className={styles.container}>
      <form className={styles.login_form} onSubmit={handleRegister}>
        <div className={styles.form_group}>
          <label htmlFor="nama_lengkap">nama lengkap</label>
          <input type="text" id="nama_lengkap" name="nama_lengkap" required />
        </div>
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

        <div className={styles.form_group}>
          <label htmlFor="password2">konfirmasi</label>
          <input
            type={show ? "text" : "password"}
            id="password2"
            name="password2"
            required
          />
        </div>
        <small>{!same && "password harus sama"}</small>

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
