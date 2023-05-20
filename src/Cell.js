import styles from "./Cell.module.scss";

export function Cell({ number, index, count, color }) {
  return (
    <div
      className={`${styles.cell} ${
        count === index || count === index - 1 ? styles[color] : null
      }`}>
      {number}
    </div>
  );
}
