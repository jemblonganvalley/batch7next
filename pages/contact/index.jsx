import s from "../../styles/Home.module.css";
import Head from "next/head";
import Layouts from "../../components/Layouts";

const Contact = () => {
  return (
    <Layouts>
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
    </Layouts>
  );
};

export default Contact;
