import React, { useState, useEffect } from "react";
import { quizData } from "./quizData.js";
import s from "./QuizGame.module.css";

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswer, setMyAnswer] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    loadQuizData();
  }, [currentQuestion]);

  const loadQuizData = () => {
    const quizItem = quizData[currentQuestion];
    setQuestion(quizItem.question);
    setAnswer(quizItem.answer);
    setOptions(quizItem.options);
    setDisabled(true);
  };

  const nextQuestionHandler = () => {
    if (myAnswer === answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const checkAnswer = (answer) => {
    setMyAnswer(answer);
    setDisabled(false);
  };

  const finishHandler = () => {
    if (myAnswer === answer) {
      setScore(score + 1);
    }
    setIsEnd(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setMyAnswer(null);
    setIsEnd(false);
  };

  const calculatePercentage = () => {
    return ((score / quizData.length) * 100).toFixed(2);
  };

  if (isEnd) {
    return (
      <div className={s.result}>
        <h3>Игра окончена! Твой финальный счёт: {score} очков. Молодец!</h3>
        <p>Ты ответил правильно на {calculatePercentage()}% вопросов 🥳</p>
        <div>
          Вот верные ответы:
          <ul className={s.options}>
            {quizData.map((item, index) => (
              <li className={s.option_item} key={index}>
                {item.id + 1}) {item.answer}
              </li>
            ))}
          </ul>
        </div>
        <button className={s.button_again} onClick={restartQuiz}>
          Пройти еще раз
        </button>
      </div>
    );
  } else {
    return (
      <div className={s.App}>
        <div className={s.question_of}>
          <h4 className={s.question}>{question}</h4>
          <span className={s.one_of}>{`Вопрос ${currentQuestion + 1} из ${
            quizData.length
          }`}</span>
        </div>
        {options.map((option, index) => (
          <p
            key={index}
            className={`${s.options} ${myAnswer === option ? s.selected : ""}`}
            onClick={() => checkAnswer(option)}
          >
            {option}
          </p>
        ))}
        {currentQuestion < quizData.length - 1 && (
          <button
            className={s.button}
            disabled={disabled}
            onClick={nextQuestionHandler}
          >
            Далее
          </button>
        )}
        {currentQuestion === quizData.length - 1 && (
          <button className={s.button} onClick={finishHandler}>
            Финиш!
          </button>
        )}
      </div>
    );
  }
};

export default QuizGame;
