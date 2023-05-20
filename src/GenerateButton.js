import styles from "./Button.module.scss";

export function GenerateButton({ generate }) {
  return (
    <button onClick={generate} className={styles.button}>
      Generate numbers
    </button>
  );
}
