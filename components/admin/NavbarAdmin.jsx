import s from "../../styles/Navbar.module.css";

const NavbarAdmin = () => {
  return (
    <nav className={s.navbar}>
      <h3 className={s.brand}>Jvalley</h3>
      <ul className={s.menu}>
        <li>logout</li>
      </ul>
    </nav>
  );
};

export default NavbarAdmin;
