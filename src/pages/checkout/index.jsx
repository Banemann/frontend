import React, { useState } from "react";
import { useRouter } from "next/router";
import GoBack from "../../app/components/GoBack";
import styles from "./Checkout.module.css";
import CcardFlip from "../../app/components/CcardFlip";

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    cvc: "",
    expiry: "",
  });
  const router = useRouter();
  const {
    regularTickets,
    vipTickets,
    selectedSpot,
    greenCamping,
    twoPersonTent,
    threePersonTent,
    formData: personalFormData,
  } = router.query;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReservationConfirmation = async () => {
    try {
      const response = await fetch("https://sepia-bow-age.glitch.me/confirm-reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //  data 
          reservationId: personalFormData.reservationId,
        }),
      });

      if (response.ok) {
        console.log("Reservation confirmed");
        router.push("/thanksbye");
      } else {
        console.error("Failed to confirm reservation");
      }
    } catch (error) {
      console.error("Error confirming reservation:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleReservationConfirmation(); 
  };

  return (
    <main>
      <GoBack />
      <div className={styles.contentBox}>
        <form onSubmit={handleSubmit}>
          <h1>Betalingsinformation</h1>
          <CcardFlip formData={formData} handleChange={handleChange} />
          <div className={styles.btnBox}>
            <button className={styles.checkoutBtn} type="submit">KØB</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Checkout;
