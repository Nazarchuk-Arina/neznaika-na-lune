import s from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import logoTel from "../../assets/images/logo/logo-tel-min.png";
import logoTab from "../../assets/images/logo/logo-tab-min.png";
import logoDesc from "../../assets/images/logo/logo-desc-min.png";

const Footer = () => {
  return (
    <footer className={s.footer__inner}>
      <div className={s.flex}>
        <div className={s.logo_slogan}>
          <img
            src={logoTel}
            srcSet={`${logoTel} 360w, ${logoTab} 768w, ${logoDesc} 1280w`}
            sizes="(max-width: 360px) 100vw, (max-width: 768px) 50vw, (min-width: 1280px) 33vw"
            alt="logo of our book"
            className={s.logo}
          />
          <h3 className={s.slogan}>Книги в новом измерении.</h3>
        </div>
        <div className={s.text}>
          <h4 className={s.first_text}>
            На Луну с Незнайкой – фантастика, дружба и приключения!
          </h4>
          <p className={s.second_text}>
            Сайт создан для тех, кто любит читать и мечтать.{" "}
            <span>
              Иллюстрации и дизайн - Шадрин Никита, разработка - Назарчук Арина.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
