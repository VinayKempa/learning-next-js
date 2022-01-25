import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={`/images/site/hero.jpg`}
          width={300}
          height={300}
          alt="Am image showing Vinay"
        />
      </div>
      <h1>Hi, I'm Vinay</h1>
      <p>
        I blog about web development- especially frontend frameworks like React
      </p>
    </section>
  );
}

export default Hero;
