import React from "react";
import classes from "./sectionOne.module.css";

import Container from "../../Ui/Container/container";
import PanelImage from "../../../assets/images/cPanel.png";
import WordpressImage from "../../../assets/images/wordpress.png";
import SecureImage from "../../../assets/images/secured.png";
import LightImage from "../../../assets/images/lite-speed.png";
import SoftImage from "../../../assets/images/soft.png";
import CloudFlareImage from "../../../assets/images/cloudflare.png";

const SectionOne = (props) => {
  return (
    <div>
      <Container>
        <div className={classes.mainFlex}>
          <div className={classes.textContainer}>
            <h2>True Cloud Web Hosting</h2>
            <p>
              True Cloud Web Hosting All of the hosting packages we offer are
              deployed instantly on our SSD powered cloud. We don’t use
              dedicated servers that operate on single pieces of hardware. Our
              entire infrastructure is built to be reliable, secure, and
              scalable.
            </p>
          </div>
          <div className={classes.clients}>
            <div className={classes.subFlex}>
              <div className={classes["client-image"]}>
                <img src={PanelImage} alt="panel Logo" />
              </div>
              <div className={classes["client-image"]}>
                <img src={SecureImage} alt="secured Logo" />
              </div>
              <div className={classes["client-image"]}>
                <img src={LightImage} alt="Lite Speed Logo" />
              </div>
            </div>
            <div className={classes.subFlex}>
              <div className={classes["client-image"]}>
                <img src={SoftImage} alt="Soft Logo" />
              </div>
              <div className={classes["client-image"]}>
                <img src={WordpressImage} alt="Wordpress Logo" />
              </div>
              <div className={classes["client-image"]}>
                <img src={CloudFlareImage} alt="CLoud Flare Logo" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionOne;
