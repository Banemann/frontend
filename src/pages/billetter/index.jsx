import React, { useState } from "react";
import styles from "./Billetter.module.css";
import Header from "../../app/components/Header";
import { useRouter } from "next/router";

function Booking() {
  const [regularTicketCount, setRegularTicketCount] = useState(0);
  const [vipTicketCount, setVipTicketCount] = useState(0);
  const [showCampingOptions, setShowCampingOptions] = useState(false);
  const router = useRouter();

  const handleRegularTicketChange = (e) => {
    setRegularTicketCount(Number(e.target.value));
  };

  const handleVipTicketChange = (e) => {
    setVipTicketCount(Number(e.target.value));
  };

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    setShowCampingOptions(true);
  };
  
  const handleCampingOptionSubmit = (e) => {
    e.preventDefault();
    router.push("/next-step");
  };

  return (
    <main>
      <Header />
      <form className={styles.formBox} onSubmit={handleTicketSubmit}>
        <h1>Book billetter</h1>

        <div className={styles.cardBox}>
          <div className={styles.ticketCard}>
            <h2>Normal Billet</h2>
            <div>Pris: 799,-</div>
            <input
              className={styles.ticketCounter}
              type="number"
              id="regularTicketCount"
              name="regularTicketCount"
              value={regularTicketCount}
              onChange={handleRegularTicketChange}
            />
          </div>

          <div className={styles.ticketCard}>
            <h2>VIP Billet</h2>
            <div>Pris: 1299,-</div>
            <input
              className={styles.ticketCounter}
              type="number"
              id="vipTicketCount"
              name="vipTicketCount"
              value={vipTicketCount}
              onChange={handleVipTicketChange}
            />
          </div>
        </div>

        <button type="submit" className={styles.nextBtn}>OK</button>
      </form>

      {showCampingOptions && (
        <form className={styles.formBox} onSubmit={handleCampingOptionSubmit}>
          <h2>Vælg telt</h2>
          {/* Valgmuligheder */}
          <button type="submit" className={styles.nextBtn}>OK</button>
        </form>
      )}
    </main>
  );
}

export default Booking;
