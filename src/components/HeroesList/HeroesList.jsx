import clsx from "clsx";
import HeroListItem from "../HeroListItem/HeroListItem";
import s from "./HeroesList.module.css";
import { NavLink } from "react-router-dom";
import scafandr from "../../assets/images/heroes/scafandr2.png";

const HeroesList = ({ heroes }) => {
  return (
    <div className={s.heroes_list__inner}>
      <h1>Герои</h1>
      <h4 className={s.message}>Друзья оживлены нейросетью!</h4>
      <ul className={s.heroes__list}>
        {heroes.map((hero) => (
          <HeroListItem
            key={hero.id}
            name={hero.name}
            // tel={hero.tel}
            // tab={hero.tab}
            // desc={hero.desc}
            photo={hero.photo}
            description={hero.description}
          />
        ))}
      </ul>
      <div>
        <img className={s.scafandr} src={scafandr} alt="Photo of heroes" />
      </div>
      <NavLink className={s.button} to="/read">
        Узнай героев поближе!
      </NavLink>
    </div>
  );
};

export default HeroesList;
