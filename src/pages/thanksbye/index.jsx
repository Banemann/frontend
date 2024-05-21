import Header from "../../app/components/Header";
import Footer from "../../app/components/Footer";
import styles from "./Thanksbye.module.css";

export default function ThanksBye() {
  return (
    <main>
      <Header />
      <div className={styles.contentBox}>
        <h1>Tak for din bestilling!</h1>
        <p>
          Din bestilling er blevet placeret og behandles. Vi sender dig en
          e-mail med detaljer inden længe.
        </p>
        <p>Tak for at handle hos os!</p>
      </div>
      <Footer />
    </main>
  );
}
