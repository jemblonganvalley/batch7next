import styles from "../../../styles/login.module.css";
import React, { useState } from "react";
import LayoutAdmin from "../../../components/admin/LayoutAdmin";

const index = () => {
  //show password
  const [show, setShow] = useState(false);
  const handleLogin = (e) => {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
    e.preventDefault();
    const input_username = e.target.username.value;
    const input_password = e.target.password.value;
    if (input_username === username && input_password === password) {
      alert("login berhasil");
    } else {
      alert("periksa kembali account anda..");
    }
  };
  return (
    <LayoutAdmin>
      <div className={styles.container}>
        <form className={styles.login_form} onSubmit={handleLogin}>
          <h3>Admin Dashboard Login</h3>
          <div className={styles.form_group}>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="password">password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              id="password"
            />
            <div className={styles.form_group_select}>
              <input
                type="checkbox"
                name="show_password"
                id="show_password"
                onClick={() => {
                  setShow(!show);
                }}
              ></input>
              <label htmlFor="show_password">
                <small>show password</small>
              </label>
            </div>
            <div className={styles.form_group}>
              <button type="submit">login</button>
            </div>
          </div>
        </form>
      </div>
    </LayoutAdmin>
  );
};

export default index;
