import React from "react";
import styles from "../styles/Card.module.css";
import Image from "next/image";
import divider from "../public/images/pattern-divider-desktop.svg";
import IconDice from "../public/images/icon-dice.svg";
import { useState } from "react";
const Card: React.FC = () => {
  const [data, setData] = useState<{ id: number; advice: string }>();
  const randomAdviceHandler = () => {
    fetch(`https://api.adviceslip.com/advice`)
      .then((res) => res.json())
      .then((data) => setData(data.slip));
  };
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Card}>
        <div className={styles.CardContent}>
          <span>Advice # {data?.id || "None"}</span>
          <p>{data?.advice || "None"}</p>
          <div className={styles.patternContainer}>
            <Image src={divider} alt="Pattern Divider" />
          </div>
          <button>
            <div className={styles.diceContainer} onClick={randomAdviceHandler}>
              <Image src={IconDice} alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
