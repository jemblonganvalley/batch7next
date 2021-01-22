import styles from "../../styles/Home.module.css";
import Head from "next/head";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="page blog jvalley" />
        <meta property="og:title" content="page blog jvalley" />
        <meta property="og:description" content="blog website jvalley" />
        <meta
          property="og:image"
          content="https://picsum.photos/seed/300/300"
        />
      </Head>
      <main className={styles.container}>
        <h3>Ini Blog Saya</h3>
        <p style={{ maxWidth: "50%" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem, nemo? Est iure minima amet maiores nisi nostrum
          repellendus ullam facilis nulla exercitationem suscipit enim dolor eum
          dolores, aspernatur voluptatem facere.
        </p>
      </main>
    </>
  );
};

export default Blog;
