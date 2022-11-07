import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navigatsioon from "../components/Navigatsioon";

const Pais = () => {
  return (
    <div className={styles.pais}>
      <Navigatsioon />
      <div className={styles.paisAlumine}>
        <div className={styles.paisAlumineSisu}>
          <h2 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH2}`}>CLIMB FOR BETTER</h2>
          <h1 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH1}`}>GET OUT NOW</h1>
          <h4 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH4}`}>JOIN US FOR THE WEEEKEND TO CLIMB THE HIGHEST PEAK IN ENGLAND</h4>
          <button className={styles.paisAlumineSisuNupp}>VIEW UPCOMING TREKS</button>
        </div>
        <div className={styles.paisAluminePilt}></div>
      </div>
    </div>
  )
}

const Teine = () => {
  return (
    <div>
      TEINE
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Head>
        <title>Matkaklubi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Pais />
      <Teine />
    </div>
  );
};

export default Home;
