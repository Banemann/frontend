import React, { useEffect, useState } from "react";
import styles from "./Billetter.module.css";
import Header from "../../app/components/Header";
import { useRouter } from "next/router";


function Booking() {
  return (
    <main>
      <Header />
      <div className={styles.Contentbox}>
        <h2>INDHOLD</h2>
      </div>
    </main>
  );
}

export default Booking;
