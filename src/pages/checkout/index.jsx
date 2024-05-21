import React, { useState } from "react";

import Header from "../../app/components/Header";
import { useRouter } from "next/router";

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cardnumber: "",
    cvv: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push("/confirmation"); 
  };

  return (
    <main>
      <Header />
      <form onSubmit={handleSubmit}>
        <h1>Personal Information</h1>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Cardnumber:
            <input
              type="text"
              name="cardnumber"
              value={formData.cardnumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">KØB</button>
      </form>
    </main>
  );
}

export default Checkout;
