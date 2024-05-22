import React from "react";
import { useRouter } from "next/router";
import Header from "../../app/components/Header";
import styles from "./Confirmation.module.css";

function Confirmation() {
  const router = useRouter();
  const { regularTickets, vipTickets, selectedSpot, greenCamping, twoPersonTent, threePersonTent } = router.query;

  const handleProceed = () => {
    router.push("/thanksbye");
  };

  return (
    <main>
      <Header />
      <div className={styles.contentBox}>
      <div className={styles.orderBox}>
        <h2>Din bestilling</h2>
        <div className={styles.orderDetails}>
          <div className={styles.orderItem}>
            <span className={styles.text}>Normal Billet:</span>
            <span className={styles.value}>{regularTickets}</span>
          </div>
          <div className={styles.orderItem}>
            <span className={styles.text}>VIP Billet:</span>
            <span className={styles.value}>{vipTickets}</span>
          </div>
          <div className={styles.orderItem}>
            <span className={styles.text}>Område:</span>
            <span className={styles.value}>{selectedSpot}</span>
          </div>
          <div className={styles.orderItem}>
            <span className={styles.text}>Grøn Camping:</span>
            <span className={styles.value}>{greenCamping ? "Yes" : "No"}</span>
          </div>
          <div className={styles.orderItem}>
            <span className={styles.text}>2 Pers. Telt:</span>
            <span className={styles.value}>{twoPersonTent}</span>
          </div>
          <div className={styles.orderItem}>
            <span className={styles.text}>3 Pers. Telt:</span>
            <span className={styles.value}>{threePersonTent}</span>
          </div>
        </div>
        
      </div>
      <button className={styles.proceedButton} onClick={handleProceed}>
          FORTSÆT
        </button>
        </div>
    </main>
  );
}

export default Confirmation;
