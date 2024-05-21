import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./Personalinfo.module.css";
import Header from "../../app/components/Header";

function PersonalInfo() {
  const router = useRouter();
  const { regularTickets, vipTickets, selectedSpot, greenCamping, twoPersonTent, threePersonTent } = router.query;
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    if (regularTickets && vipTickets) {
      const totalTickets = parseInt(regularTickets) + parseInt(vipTickets);
      setFormData(
        Array.from({ length: totalTickets }, () => ({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        }))
      );
    }
  }, [regularTickets, vipTickets]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prev) =>
      prev.map((data, i) => (i === index ? { ...data, [name]: value } : data))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/checkout");
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
        </div>  <h1>Deltager Information</h1>
        <form className={styles.formBoxBox} onSubmit={handleSubmit}>
          <div className={styles.formBox}>
          {formData.map((data, index) => (
            <div className={styles.informationCard} key={index}>
              <h2>Billet {index + 1}.</h2>
              <div>
                <label>
                  Fornavn:
                  <input
                    className={styles.input}
                    type="text"
                    name="firstName"
                    value={data.firstName}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Efternavn:
                  <input
                    className={styles.input}
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Email:
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Mobil:
                  <input
                    className={styles.input}
                    type="tel"
                    name="phone"
                    value={data.phone}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </label>
              </div>
            </div>
          ))}
          </div>
            <button type="submit" className={styles.checkoutBtn}>
              Til checkout
            </button>
        </form>
      </div>
    </main>
  );
}

export default PersonalInfo;
