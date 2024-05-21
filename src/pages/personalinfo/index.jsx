import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Personalinfo.module.css";
import Header from "../../app/components/Header";

function PersonalInfo() {
  const router = useRouter();
  const { regularTickets, vipTickets } = router.query;
  const totalTickets = parseInt(regularTickets || 0) + parseInt(vipTickets || 0);

  const [formData, setFormData] = useState(
    Array.from({ length: totalTickets }, () => ({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    }))
  );

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
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <h1>Personal Information</h1>
        {formData.map((data, index) => (
          <div key={index}>
            <h2>Billet {index + 1}.</h2>
            <div>
              <label>
                Fornavn:
                <input
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
        <button type="submit" className={styles.nextBtn}>Submit</button>
      </form>
    </main>
  );
}

export default PersonalInfo;
