import React from "react";
import { useRouter } from "next/router";
import Header from "../../app/components/Header";
import styles from "./Confirmation.module.css";

function Confirmation() {
  const router = useRouter();
  const {
    regularTickets = "0",
    vipTickets = "0",
    selectedSpot = "",
    greenCamping = "false",
    twoPersonTent = "0",
    threePersonTent = "0",
    formData = "[]"
  } = router.query;

  const parsedFormData = JSON.parse(formData);

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
              <span className={styles.value}>{greenCamping === "true" ? "Yes" : "No"}</span>
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
        <h2>Personlige Oplysninger</h2>
        {parsedFormData.map((data, index) => (
          <div className={styles.orderBox} key={index}>
            <h3>Billet {index + 1}:</h3>
            <p>Fornavn: <span>{data.firstName}</span></p>
            <p>Efternavn: <span>{data.lastName}</span></p>
            <p>Email: <span>{data.email}</span></p>
            <p>Mobil: <span>{data.phone}</span></p>
          </div>
        ))}
        <div className={styles.btnBox}>
          <button className={styles.approveButton} onClick={handleProceed}>
            GODKEND
          </button>
        </div>
      </div>
    </main>
  );
}

export default Confirmation;
