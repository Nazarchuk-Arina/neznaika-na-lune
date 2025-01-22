import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import { cardsData } from "./cards.js";
import s from "./CardGame.module.css";

function Game() {
  // States
  const [cardsState, setCardsState] = useState(cardsData);
  const [firstCard, setFirstCard] = useState(null);
  const [secondClick, setSecondClick] = useState(false);
  const [wait, setWait] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // Functions
  const checker = (card) => {
    if (firstCard && card.name === firstCard.name) {
      updateCardState(firstCard.id, { passed: true, isFlipped: true });
      updateCardState(card.id, { passed: true, isFlipped: true });
    } else {
      setWait(true);
      setTimeout(() => {
        updateCardState(firstCard.id, { isFlipped: false });
        updateCardState(card.id, { isFlipped: false });
        setWait(false);
      }, 1500);
    }
    setFirstCard(null);
  };

  const updateCardState = (cardId, updates) => {
    setCardsState((prevState) =>
      prevState.map((card) =>
        card.id === cardId ? { ...card, ...updates } : card
      )
    );
  };

  const handleClick = (e, clickedCard) => {
    if (wait || clickedCard.isFlipped || clickedCard.passed) return;
    updateCardState(clickedCard.id, { isFlipped: true });

    if (!secondClick) {
      setFirstCard(clickedCard);
      setSecondClick(true);
    } else {
      setSecondClick(false);
      checker(clickedCard);
    }
  };

  const resetGame = () => {
    setCardsState(cardsData);
    setGameWon(false);
  };

  // Check if the game is won
  useEffect(() => {
    if (cardsState.every((card) => card.passed)) {
      setGameWon(true);
    }
  }, [cardsState]);

  return (
    <div>
      <h3 className={s.header}>"Космическая угадайка"</h3>
      <section className={s.memoryGame}>
        {cardsState.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={(e) => handleClick(e, card)}
            className={`${card.isShaking ? s.shake : ""} ${
              card.passed ? s.connected : ""
            }`}
          />
        ))}
      </section>

      {gameWon && (
        <div className={s.winMessage}>
          <h3>Супер, победа твоя!</h3>
          <button onClick={resetGame}>Заново</button>
        </div>
      )}
    </div>
  );
}

export default Game;
