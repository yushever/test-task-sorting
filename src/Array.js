import { useState, useEffect } from "react";
import styles from "./Array.module.scss";
import { Cell } from "./Cell";
import { GenerateButton } from "./GenerateButton";
import { StartButton } from "./StartButton";

export default function Array() {
  const initialArray = [8, 3, 10, 6, 2, 5, 1, 4, 7, 9];
  const timerTime = 1000;
  const [array, setArray] = useState(initialArray);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(null);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isStarted) {
      setColor("light");
      if (count >= array.length) {
        setCount(10);
        setColor(null);
      } else if (array[count] > array[count + 1]) {
        setTimeout(() => {
          let temp = array[count];
          array[count] = array[count + 1];
          array[count + 1] = temp;
          setColor("medium");
        }, timerTime / 2);

        setTimeout(() => {
          if (count === 0) {
            setCount(1);
          } else {
            setCount(0);
          }
        }, timerTime);
      } else {
        setTimeout(() => {
          setCount((count) => ++count);
        }, timerTime);
      }
    }
  }, [count, array, isStarted]);

  function startSorting() {
    setIsStarted(!isStarted);
  }

  function generateNumArray() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(Math.floor(Math.random() * 10) + 1);
    }
    setArray(numbers);
    setCount(0);
    setColor(null);
  }

  return (
    <div className={styles.container}>
      <div className={styles.array}>
        {array?.map((number, index) => {
          return (
            <div>
              <Cell
                key={number}
                index={index}
                count={count}
                number={number}
                color={color}
              />
            </div>
          );
        })}
      </div>
      <GenerateButton generate={generateNumArray} />
      <StartButton sort={startSorting} isStarted={isStarted} />
    </div>
  );
}
