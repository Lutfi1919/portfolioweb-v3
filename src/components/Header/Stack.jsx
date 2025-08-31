import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import "./Stack.css";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
}) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          {
            id: 1,
            img: "https://i.pinimg.com/736x/69/29/66/692966d68bd0eebe483d45b473473c95.jpg",
          },
          {
            id: 2,
            img: "https://i.pinimg.com/1200x/b6/2c/7c/b62c7c900a6271ffbb4b8c77b86e276a.jpg",
          },
          {
            id: 3,
            img: "https://i.pinimg.com/1200x/8e/9d/15/8e9d1513aa1bad8d671f78676809bb05.jpg",
          },
          {
            id: 4,
            img: "https://i.pinimg.com/1200x/28/97/4b/28974b924917db8fcf5a70d2c0c49e59.jpg",
          },
          {
            id: 5,
            img: "https://i.pinimg.com/736x/83/6e/8d/836e8d091089b000d87d9bc7cea49ede.jpg",
          },
        ]
  );

  const sendToBack = async (id) => {
    const cardElement = document.querySelector(`[data-id="${id}"]`);
    if (cardElement) {
      await cardElement.animate(
        [
          { transform: "translateY(0)", opacity: 1 },
          { transform: "translateY(30px) rotate(20deg)", opacity: 0 },
        ]
      ).finished;
    }

    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="stack-container"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              data-id={card.id}
              className="card shadow"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <img
                src={card.img}
                alt={`card-${card.id}`}
                className="card-image"
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
