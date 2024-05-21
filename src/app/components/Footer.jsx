import Link from "next/link";
import Image from "next/image";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLinks}>
          <Link href="/about" className={styles.footerLink}>
            About Us
          </Link>
          <Link href="/contact" className={styles.footerLink}>
            Contact
          </Link>
          <Link href="/privacy" className={styles.footerLink}>
            Program
          </Link>
          <Link href="/terms" className={styles.footerLink}>
            Billetter
          </Link>
        </div>
        <div className={styles.footerSocials}>
          <a href="https://www.facebook.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.twitter.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
        </div>
        <div className={styles.footerContact}>
          <p>Contact us at: info@foofest.com</p>
          <p>&copy; {new Date().getFullYear()} Festival Booking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
