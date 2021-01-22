import s from "../../styles/Home.module.css";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="page contact jvalley" />
        <meta property="og:title" content="hubungi jvalley sekarang" />
        <meta property="og:description" content="contact jvalley" />
        <meta property="og:image" content="https://picsum.photos/seed/15/300" />
      </Head>
      <main className={s.container}>
        <h1>contact</h1>
      </main>
    </>
  );
};

export default Contact;
