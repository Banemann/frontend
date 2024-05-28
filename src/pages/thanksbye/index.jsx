import Header from "../../app/components/Header";
import styles from "./Thanksbye.module.css";

export default function ThanksBye() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.contentBox}>
        <h1>Tak!</h1>
        <p>
          Din bestilling er blevet placeret og behandles. Vi sender dig en
          e-mail med detaljer inden længe.
        </p>
        <p>Tak for at handle hos os!</p>
      </div>
    </main>
  );
}
