import neznaika from "../../assets/images/game-cards/neznaika1-min.png";
import peizaj from "../../assets/images/game-cards/peizaj1-min.png";
import ponchik from "../../assets/images/game-cards/ponchik1-min.png";
import rocket from "../../assets/images/game-cards/rocket1-min.png";
import znaika from "../../assets/images/game-cards/znaika1-min.png";
import zvezdochka from "../../assets/images/game-cards/zvezdochka1-min.png";

const cards = [
  { id: 1, name: "neznaika", image: neznaika },
  { id: 2, name: "neznaika", image: neznaika },
  { id: 3, name: "peizaj", image: peizaj },
  { id: 4, name: "peizaj", image: peizaj },
  { id: 5, name: "ponchik", image: ponchik },
  { id: 6, name: "ponchik", image: ponchik },
  { id: 7, name: "rocket", image: rocket },
  { id: 8, name: "rocket", image: rocket },
  { id: 9, name: "znaika", image: znaika },
  { id: 10, name: "znaika", image: znaika },
  { id: 11, name: "zvezdochka", image: zvezdochka },
  { id: 12, name: "zvezdochka", image: zvezdochka },
];

export const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 12),
  isFlipped: false,
  passed: false,
}));
