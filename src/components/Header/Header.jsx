import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import styles from "./Header.module.css";
import logoTel from "../../assets/images/logo/logo-tel-min.png";
import logoTab from "../../assets/images/logo/logo-tab-min.png";
import logoDesc from "../../assets/images/logo/logo-desc-min.png";

{
  /* <NavLink to="/" className={styles.title}>
  <img
    src={logoTel}
    srcSet={`${logoTel} 360w, ${logoTab} 768w, ${logoDesc} 1280w`}
    sizes="(max-width: 360px) 100vw, (max-width: 768px) 50vw, (min-width: 1280px) 33vw"
    alt="logo of our book"
  />
</NavLink>; */
}

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navLogo}>
        <Link to="/" className={styles.navLogoLink}>
          <img
            src={logoTel}
            srcSet={`${logoTel} 360w, ${logoTab} 768w, ${logoDesc} 1280w`}
            sizes="(max-width: 360px) 100vw, (max-width: 768px) 50vw, (min-width: 1280px) 33vw"
            alt="logo of our book"
          />
        </Link>
      </div>

      <ul
        className={`${styles.navMenu} ${
          isToggleOpen ? styles.navMenuOpen : ""
        }`}
      >
        <li className={styles.navMenuItem}>
          <Link to="/heroes" className={styles.navMenuLink}>
            Герои
          </Link>
        </li>
        <li className={styles.navMenuItem}>
          <Link to="/read" className={styles.navMenuLink}>
            Читать
          </Link>
        </li>
        <li className={styles.navMenuItem}>
          <Link to="/play" className={styles.navMenuLink}>
            Играть
          </Link>
        </li>
      </ul>
      <button
        className={styles.menuToggleBtn}
        onClick={handleToggleOpen}
        aria-label="Toggle menu"
      >
        {isToggleOpen ? <IoMdClose /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;
