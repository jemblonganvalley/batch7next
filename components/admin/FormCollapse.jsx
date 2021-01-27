import React, { useState } from "react";
import styles from "../../styles/FormCollapse.module.css";
const FormCollapse = ({ title, width, children }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className={styles.form_collapse}>
      <div
        className={styles.title}
        onClick={() => {
          setCollapse(!collapse);
        }}
      >
        <h3 className={styles.collapse_trigger}>{title || "Form Title"}</h3>
      </div>

      <div
        style={{
          display: collapse ? "block" : "none",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FormCollapse;
