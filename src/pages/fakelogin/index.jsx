import styles from "./Fakelogin.module.css";
import Header from "../../app/components/Header";

function PersonalInfo() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.contentBox}>
        <form className={styles.formBox}>
          <div className={styles.loginCard}>
            <div>
              <label htmlFor="username">
                Brugernavn:
                <input
                  className={styles.input}
                  type="text"
                  name="username"
                  id="username"
                  required
                  placeholder="Brugernavn (prøv 'lavafest')"
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Kode:
                <input
                  className={styles.input}
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="Kode (prøv 'lava123')"
                />
              </label>
            </div>
          </div>
          <button className={styles.loginBtn} type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}

export default PersonalInfo;
