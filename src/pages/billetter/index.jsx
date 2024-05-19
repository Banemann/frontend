import React, { useState, useEffect } from "react";
import styles from "./Billetter.module.css";
import Header from "../../app/components/Header";
import { useRouter } from "next/router";

function Booking() {
  const [regularTicketCount, setRegularTicketCount] = useState(0);
  const [vipTicketCount, setVipTicketCount] = useState(0);
  const [availableSpots, setAvailableSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState("");
  const [greenCamping, setGreenCamping] = useState(false);
  const [tents, setTents] = useState({ twoPerson: 0, threePerson: 0 });
  const router = useRouter();

  useEffect(() => {
    const fetchAvailableSpots = async () => {
      try {
        const response = await fetch("http://localhost:8080/available-spots", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setAvailableSpots(data);
      } catch (error) {
        console.error("Error fetching available spots:", error);
      }
    };
    fetchAvailableSpots();
  }, []);

  const handleRegularTicketChange = (e) => {
    setRegularTicketCount(Number(e.target.value));
  };

  const handleVipTicketChange = (e) => {
    setVipTicketCount(Number(e.target.value));
  };

  const handleGreenCampingChange = (e) => {
    setGreenCamping(e.target.checked);
  };

  const handleTentChange = (e) => {
    const { name, value } = e.target;
    setTents((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleSpotChange = (e) => {
    setSelectedSpot(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedSpot) {
      try {
        const response = await fetch("http://localhost:8080/reserve-spot", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            area: selectedSpot,
            amount: regularTicketCount + vipTicketCount,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Reservation ID:", data.id);
          
          router.push("/personalinfo");
        } else {
          console.error("Failed to reserve spot");
        }
      } catch (error) {
        console.error("Error reserving spot:", error);
      }
    }
  };

  return (
    <main>
      <Header />
      <form className={styles.formBox} onSubmit={handleSubmit}>
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
              min="0"
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
              min="0"
            />
          </div>
        </div>

        <div className={styles.campingOptions}>
          <h2>Camping Options</h2>
          <label>
            <input
              type="checkbox"
              name="greenCamping"
              checked={greenCamping}
              onChange={handleGreenCampingChange}
            />
            Green Camping Option (249,-)
          </label>
          <div>
            <label>
              2 Person Tent (299,- each)
              <input
                type="number"
                name="twoPerson"
                value={tents.twoPerson}
                onChange={handleTentChange}
                min="0"
              />
            </label>
          </div>
          <div>
            <label>
              3 Person Tent (399,- each)
              <input
                type="number"
                name="threePerson"
                value={tents.threePerson}
                onChange={handleTentChange}
                min="0"
              />
            </label>
          </div>

          <h2>Available Camping Spots</h2>
          <select value={selectedSpot} onChange={handleSpotChange}>
            <option value="">Select a camping spot</option>
            {availableSpots.map((spot) => (
              <option key={spot.area} value={spot.area}>
                {spot.area} ({spot.remaining} spots left)
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className={styles.nextBtn}>Næste</button>
      </form>
    </main>
  );
}

export default Booking;
