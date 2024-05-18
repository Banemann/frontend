import Link from "next/link";
import Image from "next/image";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
       <Link className={styles.logo} href="/" passHref>
          <Image src="/logos/terminalist.jpg" alt="Logo" width={50} height={50} />
      </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.link}>
              <Link prefetch={false} href="/program">
                Program
              </Link>
            </li>
            <li className={styles.link}>
              <Link prefetch={false} href="/billetter">
                Billetter
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;




 