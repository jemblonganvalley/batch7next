import axios from "axios";
import React, { useState } from "react";
import FormCollapse from "../../../components/admin/FormCollapse";
import LayoutAdmin from "../../../components/admin/LayoutAdmin";
import styles from "../../../styles/HomeDashboard.module.css";
import Hero from "../../../components/Hero";

const index = ({ data }) => {
  const handleHero = (e) => {
    e.preventDefault();
    axios("http://localhost:8000/home", {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        hero_title: e.target.title.value || data.heor_title,
        hero_image: e.target.image.value || data.hero_image,
      },
    }).then((data) => console.log(data));
    window.location.reload();
  };

  return (
    <LayoutAdmin>
      <section className={styles.home_dashboard}>
        <h1 className={styles.home_dashboard_title}>Home page</h1>
        <hr
          style={{
            width: "70vw",
          }}
        />

        <FormCollapse title="Hero">
          <form className={styles.form} onSubmit={handleHero} action="/">
            <div className={styles.form_group}>
              <label htmlFor="image">image</label>
              <input type="text" id="image" placeholder={data.hero_image} />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="image">title</label>
              <input type="text" id="title" placeholder={data.hero_title} />
            </div>
            <div className={styles.form_group}>
              <button type="submit">save</button>
            </div>
          </form>
        </FormCollapse>

        <FormCollapse title="History">
          <form className={styles.form}>
            <div className={styles.form_group}>
              <label htmlFor="image">image</label>
              <input type="text" id="image" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="title">title</label>
              <input type="text" id="title" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="content">content</label>
              <textarea type="text" id="content" className={styles.text_area} />
            </div>
            <div className={styles.form_group}>
              <button type="submit">save</button>
            </div>
          </form>
        </FormCollapse>

        <FormCollapse title="Silabus"></FormCollapse>
        <Hero image={data.hero_image} title={data.hero_title} />
      </section>
    </LayoutAdmin>
  );
};

export default index;

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:8000/home");
  const data = await res.data;
  return {
    props: {
      data: data,
    },
  };
}
