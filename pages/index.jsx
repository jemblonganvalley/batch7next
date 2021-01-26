import styles from "../styles/Home.module.css";
import Head from "next/head";
import Divider from "../components/Divider";
import SilabusCard from "../components/SilabusCard";
import Hero from "../components/Hero";
import CardContent from "../components/CardContent";

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
        <Hero
          title="Belajar Pemograman Gratis"
          image="https://picsum.photos/seed/150/600"
        />

        <CardContent
          image="https://picsum.photos/seed/14/600"
          title="Selamat datang"
          content={`
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            ea beatae ipsa placeat sed similique est quia dolorum, repellat
            quo? Voluptatem voluptate facere porro, repudiandae dolorem
            corporis numquam fuga quidem?
            </p>
          `}
        />

        <Divider text="HISTORY" />

        <section className={styles.history}>
          <div className={styles.history_left}>
            <h3>Sejarah JVALLEY</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              ea beatae ipsa placeat sed similique est quia dolorum, repellat
              quo? Voluptatem voluptate facere porro, repudiandae dolorem
              corporis numquam fuga quidem?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              mollitia sequi maiores unde voluptatem, reprehenderit expedita
              voluptates! Ad quos ut repudiandae et consectetur cum optio
              doloribus. Esse id sunt ad!
            </p>
          </div>

          <div className={styles.history_right}>
            <h1>SEMUA BERAWAL DARI SINI..</h1>
            <img
              src="https://images.unsplash.com/photo-1509281373149-e957c6296406?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=369&q=80"
              alt="history image"
            />
          </div>
        </section>
        <Divider text="SILABUS" />

        <section className={styles.silabus}>
          <SilabusCard
            img="https://picsum.photos/seed/150/300"
            title="UI/UX Design"
            content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, esse inventore. Iusto similique, omnis assumenda labore quaerat sequi aperiam. Hic dolores inventore sit, magni dolorum dolore ex fugit. Similique, placeat!`}
          />

          <SilabusCard
            img="https://picsum.photos/seed/300/300"
            title="UI/UX Design"
            content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, esse inventore. Iusto similique, omnis assumenda labore quaerat sequi aperiam. Hic dolores inventore sit, magni dolorum dolore ex fugit. Similique, placeat!`}
          />

          <SilabusCard
            img="https://picsum.photos/seed/250/300"
            title="UI/UX Design"
            content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, esse inventore. Iusto similique, omnis assumenda labore quaerat sequi aperiam. Hic dolores inventore sit, magni dolorum dolore ex fugit. Similique, placeat!`}
          />

          <SilabusCard
            img="https://picsum.photos/seed/13/300"
            title="UI/UX Design"
            content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, esse inventore. Iusto similique, omnis assumenda labore quaerat sequi aperiam. Hic dolores inventore sit, magni dolorum dolore ex fugit. Similique, placeat!`}
          />
        </section>
      </div>
    </>
  );
}
