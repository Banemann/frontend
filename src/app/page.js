"use client";
import { useEffect, useState } from 'react';
import Footer from "./components/Footer";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

function BandPage() {
  const [bandInfo, setBandInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBandInfo = async (maxItems = 3) => {
      try {
        const response = await fetch('https://sepia-bow-age.glitch.me/bands/');
        if (!response.ok) {
          throw new Error(`Fetch error: ${response.statusText}`);
        }
        const data = await response.json();
        const limitedData = data.slice(0, maxItems);
        setBandInfo(limitedData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBandInfo();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Fejl ved loading af band information {error.message}</p>;

  return (
    <main className={styles.contentContainer}>
      <div className={styles.contentBox}>
        <div className={styles.homeHeader}>
          <h1 className={styles.title}>LAVAFEST</h1>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.link}>
              <Link prefetch={false} href="/program">
                <div>
                  <Image src="/logos/1280px-RefusedWayOutWest.jpg" alt="Program Image" width={600} height={300} />
                  <span>Program</span>
                </div>
              </Link>
            </li>
            <li className={styles.link}>
              <Link prefetch={false} href="/billetter">
                <div>
                  <Image src="/images/tickets2.jpg" alt="Billetter Image" width={600} height={300} />
                  <span>Billetter</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.bandBox}>
          {bandInfo && bandInfo.map(band => (
            <div key={band.slug} className={styles.bandCard}>
              <h2>{band.name}</h2>
              <Image src={`/logos/${band.logo}`} alt={band.name} width={200} height={200} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default BandPage;
