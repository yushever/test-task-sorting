import styles from "./Button.module.scss";

export function StartButton({ sort, isStarted }) {
  return (
    <button
      onClick={sort}
      className={`${isStarted ? styles.stopped : styles.started}`}>
      {isStarted ? "Stop sorting" : "Start sorting"}
    </button>
  );
}
