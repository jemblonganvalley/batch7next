import styles from "../styles/Home.module.css";
import Head from "next/head";
import Divider from "../components/Divider";
import SilabusCard from "../components/SilabusCard";

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
            <h3>Kursus Komputer GRATIS Untuk Semua</h3>
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
