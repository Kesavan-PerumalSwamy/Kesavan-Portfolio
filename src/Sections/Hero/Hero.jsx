import styles from './HeroStyles.module.css';
import Heroimg from '../../assets/avatar.png';
import themeIcon from '../../assets/Sun.png';
import twitter from '../../assets/Twitter.png';
import medium from '../../assets/Medium.png';
import github from '../../assets/github.png';
import leetcode from '../../assets/leetcode.png';
import linkedin from '../../assets/Linkedin.png';
import cv from '../../assets/resume.pdf'
function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
            className={styles.hero} 
            src={Heroimg} 
            alt="profile avatar " 
        />
        <img 
            className={styles.colorMode} 
            src={themeIcon} 
            alt="color mode icon" 
        />
      </div>
      <div className={styles.info}>
            <h1>
                Kesavan
                <br />
                Perumalsamy
            </h1>
            <h2>FullStack Web Developer</h2>
            <span>
                <a href="https://x.com/Kesavanwebdev" target="_blank">
                    <img src={twitter} alt="Twitter" />
                </a>
                <a href="https://medium.com/@kesavanWebDev" target="_blank">
                    <img src={medium} alt="medium" />
                </a>
                <a href="https://github.com/Kesavan-PerumalSwamy" target="_blank">
                    <img src={github} alt="Github" />
                </a>
                <a href="https://leetcode.com/u/kesavan-perumalswamy/" target="_blank">
                    <img src={leetcode} alt="Leetcoed" />
                </a>
                <a href="https://github.com/Kesavan-PerumalSwamy" target="_blank">
                    <img src={linkedin} alt="Linkedin" />
                </a>
            </span>
            <p>
                Full Stack Web Developer specializing in creating dynamic and high-performance websites with React, emphasizing user-centric design and seamless functionality.
            </p>
            <a href={cv} download target="_blank">
                <button className="hover" >Resume</button>
            </a>
      </div>
    </section>
  );
}

export default Hero;
