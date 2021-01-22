import { useState } from "react";
import styles from "../../styles/Home.module.css";
import Head from "next/head";

const About = () => {
  const [data, setData] = useState("page about");
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="page about jvalley" />
        <meta property="og:title" content="page about jvalley" />
        <meta
          property="og:description"
          content="tentang kursus komputer gratis jvalley"
        />
        <meta property="og:image" content="https://picsum.photos/seed/13/300" />
      </Head>
      <main className={styles.container}>
        <h1>Ini About</h1>
        <small>{data}</small>
      </main>
    </>
  );
};

export default About;
