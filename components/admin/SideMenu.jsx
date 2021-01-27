import React from "react";
import styles from "../../styles/Sidebar.module.css";

const SideMenu = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.brand_container}>
        <h3 className={styles.brand}>JVALLEY</h3>
      </div>
      <div className={styles.menu_container}>
        <div className={styles.sidebar_menu}>
          <div className={styles.sidebar_menu_item}>home page</div>
          <div className={styles.sidebar_menu_item}>about page</div>
          <div className={styles.sidebar_menu_item}>blog page</div>
          <div className={styles.sidebar_menu_item}>contact page</div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
