import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='https://media-exp1.licdn.com/dms/image/D4D03AQEwfPycmPu2ng/profile-displayphoto-shrink_800_800/0/1649514634010?e=1662595200&v=beta&t=xw0LZAsx_uvE_XSzj75V6l384aOTzy6F-IEt_XRhH5Q'
          alt='An image showing Abdessalam'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Abdessalam</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
