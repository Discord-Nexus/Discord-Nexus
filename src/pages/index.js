import React, {useEffect} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Footer from '@theme/Footer';

import styles from './index.module.css';
import HomepageFeatures from "../components/HomepageFeatures";

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    const root = document.querySelector(":root");
    const colorScheme = "color-scheme";
    const previousValue = getComputedStyle(root).getPropertyValue(colorScheme);

    root.style.setProperty(colorScheme, "dark");

    return () => root.style.setProperty(colorScheme, previousValue);
  }, []);

  return (
    <div className={styles.landingPage}>
      <main>
        <div className={styles.heroContainer}>
          <div className={styles.heroGradient}/>

          <div className={styles.hero}>
            <h1 className={""}>{siteConfig.title}</h1>
            <p>{siteConfig.tagline}</p>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Join The Waitlist!
            </Link>
          </div>

        </div>
        <HomepageFeatures/>
      </main>
      <Footer className={'yoink'}/>
    </div>
  );
}
