import { Component } from "react";
import AboutCard from "../AboutCard";
import styles from './About.module.css';

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <section className={styles['main-section']}>
        <div className={styles['main-section__card']}>
          <AboutCard
            className={`${styles.card}`}
            img_src="https://photos.app.goo.gl/jN2paJ35PN3Uerk99"
            name="Joey"
            words="CEO King of Chaos Coffee Co.  | Full stack software engineer | Former US Navy & US Army service member, and expert processes troubleshooter."
          ></AboutCard>
          <AboutCard
            className={styles.card}
            img_src="linktoomg.com"
            name="TJ"
            words="description"
          ></AboutCard>
        </div>

      </section>
    );
  }
};

export default Profile;