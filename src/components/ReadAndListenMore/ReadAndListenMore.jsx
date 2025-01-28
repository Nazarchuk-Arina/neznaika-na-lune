import s from "./ReadAndListenMore.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const ReadAndListenMore = () => {
  return (
    <div className={s.r_and_l_inner}>
      <h3>
        А теперь погрузимся в увлекательное путешествие вместе с Незнайкой!
      </h3>
      <nav className={s.r_and_l_buttons}>
        <NavLink className={clsx(buildLinkClass, s.button)} to="/read">
          Читать
        </NavLink>
        <NavLink className={clsx(buildLinkClass, s.button)} to="/play">
          Играть
        </NavLink>
      </nav>
    </div>
  );
};

export default ReadAndListenMore;
