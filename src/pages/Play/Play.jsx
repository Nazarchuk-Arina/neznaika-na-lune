import Footer from "../../components/Footer/Footer";
import StarryBackground from "../../components/StarryBackground/StarryBackground";
import Header from "../../components/Header/Header.jsx";
import Game from "../../components/CardGame/Game.jsx";
import s from "./Play.module.css";

const Play = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <StarryBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <h3 className={s.choose}>Выбирай игру👇</h3>
        <h4 className={s.message}>
          Можешь начать с карточек, где нужно найти пару, а потом предлагаю
          проверить насколько хорошо ты знаешь героев)
        </h4>
        <Game />
        <Footer />
      </div>
    </div>
  );
};

export default Play;
