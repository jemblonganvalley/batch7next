import styles from "../styles/Home.module.css";

const CardContent = ({ image, title, content, tuker }) => {
  return (
    <section
      className={styles.wellcome}
      style={{
        flexDirection: tuker ? "row-reverse" : "row",
      }}
    >
      <img src={image} alt="section image" className={styles.wellcome_image} />

      <div className={styles.wellcome_content}>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </section>
  );
};

export default CardContent;
