import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Foram!</h1>
        <p className={styles.description}>
          I'm a <span className={styles.strike}>AI and Software</span> Developer & a competitive programmer. I love to keep up with the emerging technologies. Reach out if you'd like discuss an opportunity.
          <br/>
          P.S. No, I don't hate documentation!
          <br/>
          <br/>
          Dedicated | Consistent | Meticulous
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.svg")}
        alt="Hero image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
