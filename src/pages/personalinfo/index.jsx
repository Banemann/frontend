import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./Personalinfo.module.css";
import Header from "../../app/components/Header";

function PersonalInfo() {
  const router = useRouter();
  const { regularTickets, vipTickets } = router.query;
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
        <h1>Personlig information</h1>
        <form className={styles.formBox} onSubmit={handleSubmit}>
          {formData.map((data, index) => (
            <div className={styles.informationCard} key={index}>
              <h2>{index + 1}. PERSON</h2>
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
          <button type="submit" className={styles.checkoutBtn}>Til checkout</button>
        </form>
      </div>
    </main>
  );
}

export default PersonalInfo;
