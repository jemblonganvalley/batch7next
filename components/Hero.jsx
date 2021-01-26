import styles from "../styles/Home.module.css";

const Hero = ({ title, image }) => {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Hero;
