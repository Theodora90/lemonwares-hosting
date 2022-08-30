import React from "react";

import classes from "./hero.module.css";
import Container from "../../Ui/Container/container";
import HeroImage from "../../../assets/images/hero-image.png";

const Hero = (props) => {
  return (
    <div>
      <Container>
        <div className={classes.hero}>
          <div className={classes.heroText}>
            <h1 className={classes.heading}>
              Premium Web <br /> Hosting for Your <br /> Website
            </h1>
            <p>
              Blazing fast web hosting for individuals and <br /> businesses of
              all sizes backed by 24x7x365 Support.
            </p>
            <div className={classes["btn-cta"]}>
              <a href="/" target="_blank" rel="noopener noreferrer">
                Create an Account
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                Choose a Plan
              </a>
            </div>
          </div>
          <div className={classes.heroImg}>
            <img src={HeroImage} alt="A girl" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
