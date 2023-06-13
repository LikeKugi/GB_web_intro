import {JSX} from "react";
import styles from './About.module.css';

const About = (): JSX.Element => {
  return (
    <section className={styles.about}>
      <h1 className={styles.about__title}>About me</h1>
      <p className={styles.about__paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad
        architecto commodi consectetur cum dolor dolorem dolorum eaque et fuga harum in iusto labore molestias
        necessitatibus odit pariatur placeat quasi quia, reiciendis reprehenderit sequi sint, sit tempore tenetur,
        voluptas! Adipisci aspernatur deleniti doloremque eius error, labore maxime nobis nulla pariatur perferendis
        praesentium, quae quaerat quibusdam ratione reprehenderit repudiandae soluta temporibus vel veniam vero? Ab
        aliquam aperiam blanditiis culpa doloribus dolorum, eius error eum exercitationem illum inventore, iusto minima
        mollitia necessitatibus quaerat sequi ullam. Consequuntur fuga reprehenderit sapiente vel? Dolores iure modi
        officia possimus praesentium repellendus. Ab aliquam aliquid amet architecto consectetur consequatur cumque
        distinctio dolorum explicabo inventore ipsum laborum neque pariatur quisquam reprehenderit, sequi tempore.
        Asperiores consectetur, culpa cupiditate delectus deleniti dolorem, eaque enim id ipsa iusto magnam odio
        quaerat, reiciendis voluptas voluptatum. Aperiam delectus, dolore est itaque iure necessitatibus nobis nostrum
        placeat quo repellendus repudiandae ullam, veniam vero!</p>
    </section>
  );
}
export default About;
