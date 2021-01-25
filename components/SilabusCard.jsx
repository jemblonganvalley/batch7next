import s from "../styles/SilabusCard.module.css";

const SilabusCard = ({ img, title, content }) => {
  return (
    <div className={s.silabus_card}>
      <div className={s.sc_left}>
        <img src={img} alt="silabus card image" />
      </div>
      <div className={s.sc_right}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SilabusCard;
