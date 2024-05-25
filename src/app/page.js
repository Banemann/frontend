
import Footer from "./components/Footer";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
          
          <div className={styles.bandCard}>
            <h2>Band 1</h2>
            <Image src="/images/1.jpg" alt="Band Image" width={600} height={300} />
          </div>

          </div>
        

      </div>
      <Footer/>
    </main>
  );
}
