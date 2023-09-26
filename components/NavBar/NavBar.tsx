// components/GlossyNavBar.js
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const GlossyNavBar = () => {
  return (
    <div className={styles.glossyNavBar}>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { GlossyNavBar };
