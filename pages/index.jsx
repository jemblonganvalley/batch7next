import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="page home jvalley" />
        <meta property="og:title" content="page home jvalley" />
        <meta
          property="og:description"
          content="selamat datang di kursus komputer gratis"
        />
        <meta
          property="og:image"
          content="https://picsum.photos/seed/150/300"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Kursus Komputer Gratis</h1>
        </div>

        <section className={styles.wellcome}>
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
            alt="section image"
            class={styles.wellcome_image}
          />

          <div className={styles.wellcome_content}>
            <h3>Kursus Komputer Gratsi Untuk Semua</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus suscipit amet, animi consectetur earum iusto iste vitae
              minima sequi, officia, recusandae molestiae quo fuga sapiente?
              Tempore adipisci earum accusantium culpa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              excepturi dolorem ipsa nihil odit, quod blanditiis non tempora
              quasi. Nisi modi dicta, blanditiis officiis cupiditate aliquid
              iusto corrupti rem. Consectetur!
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
