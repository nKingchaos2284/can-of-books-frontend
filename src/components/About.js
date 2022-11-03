import React from "react";
import { Component } from "react";
import AboutCard from "../AboutCard";
import styles from './About.module.css';

class Profile extends Component {

  render() {

    return (
      <section className={styles['main-section']}>
        <div className={styles['main-section__card']}>
          <AboutCard
            className={`${styles.card}`}
            img_src="https://avatars.githubusercontent.com/u/106060317?s=400&u=05c698e3653dd855e8d10b9ced25f3b6f051767c&v=4"
            name="Joey"
            words="Full stack software engineer | Former US Navy & US Army service member."
          ></AboutCard>
          <AboutCard
            className={styles.card}
            img_src="https://avatars.githubusercontent.com/u/106053581?s=400&u=11285606390ffca53aff8b1f49b8c71f7f4f3180&v=4"
            name="TJ"
            words="|Full stack software engineer|"
          ></AboutCard>
        </div>

      </section>
    );
  }
};

export default Profile;