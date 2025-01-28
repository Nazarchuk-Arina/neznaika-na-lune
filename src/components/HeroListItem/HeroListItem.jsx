import s from "./HeroListItem.module.css";

const HeroListItem = ({ name, description, photo }) => {
  return (
    <li className={s.heroes__item}>
      <div className={s.hero__main__wo_heading}>
        <h3 className={s.visually__hidden_f}>{name}</h3>
        <div className={s.hero__main__pic_text}>
          <div className={s.hero__pic}>
            <video src={photo} autoPlay loop muted playsInline />
          </div>
          <div>
            <h3 className={s.visually__hidden}>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HeroListItem;
