import s from "./CardGame.module.css";
import backCard from "../../assets/images/game-cards/back-card1-min.png";

function Card({ card, onClick }) {
  return (
    <div
      className={`${s.memoryCard} ${card.isFlipped ? s.flip : ""} ${
        card.isShaking ? s.shake : ""
      } ${card.passed ? s.connected : ""}`}
      onClick={onClick}
      style={{ order: card.order }}
      data-testid={card.id}
    >
      <img className={s.frontFace} src={card.image} alt="Card" />
      <img className={s.backFace} src={backCard} alt="Back card" />
    </div>
  );
}

export default Card;
