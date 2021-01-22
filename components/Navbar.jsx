import s from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <h3 className={s.brand}>Jvalley</h3>
      <ul className={s.menu}>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li>
        <li>
          <a href="/blog">blog</a>
        </li>
        <li>
          <a href="/contact">gallery</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
