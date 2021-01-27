import styles from "../../../styles/login.module.css";
import React, { useState } from "react";

const index = () => {
  //show password
  const [show, setShow] = useState(false);

  return (
    <div className={styles.container}>
      <form className={styles.login_form}>
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
            <small>show password</small>
          </div>
          <div className={styles.form_group}>
            <button>login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default index;
