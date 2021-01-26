import { useState } from "react";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Hero from "../../components/Hero";
import CardContent from "../../components/CardContent";

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

      <Hero
        title="Fullstack Javacript selama 8 Bulan"
        image="https://picsum.photos/seed/300/600"
      />
      <main className={styles.container}>
        <h1>Ini About</h1>
        <small>{data}</small>

        <CardContent
          image="https://picsum.photos/seed/140/300"
          title="Tentang Jvalley"
          content={`
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            ea beatae ipsa placeat sed similique est quia dolorum, repellat
            quo? Voluptatem voluptate facere porro, repudiandae dolorem
            corporis numquam fuga quidem?
            <a href="/contact">Daftar</a>
            </p>
          `}
        />

        <CardContent
          image="https://picsum.photos/seed/15/300"
          title="Silabus Jvalley"
          content={`
             <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
             ea beatae ipsa placeat sed similique est quia dolorum, repellat
             quo? Voluptatem voluptate facere porro, repudiandae dolorem
             corporis numquam fuga quidem?
             <a href="/contact">Daftar</a>
             </p>
           `}
          tuker
        />

        <CardContent
          image="https://picsum.photos/seed/35/300"
          title="Sistem Belajar Jvalley"
          content={`
             <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
             ea beatae ipsa placeat sed similique est quia dolorum, repellat
             quo? Voluptatem voluptate facere porro, repudiandae dolorem
             corporis numquam fuga quidem?
             <a href="/contact">Daftar</a>
             </p>
           `}
        />
      </main>
    </>
  );
};

export default About;
