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
        <h1>Hello.. ini page utama</h1>
      </div>
    </>
  );
}
