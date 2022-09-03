import React from "react";

import classes from "./sectionTwo.module.css";
import Container from "../../../Ui/Container/container";
import ClockIcon from "../../../../assets/images/clock.png";
import SupportIcon from "../../../../assets/images/support.png";
import HostingIcon from "../../../../assets/images/hosting.png";
import CertificateIcon from "../../../../assets/images/certificate.png";

const SectionTwo = () => {
  return (
    <div>
      <Container>
        <div className={classes.flexContainer}>
          <div className={classes.services}>
            <img src={ClockIcon} className={classes.img} alt="Clock Icon" />
            <h3>99.9% Uptime</h3>
            <p>
              We Keep Your Web build Online 24x7x365. Downtime not only costs
              you lost visitors but also damages your reputation and search
              engine rankings.
            </p>
          </div>
          <div className={classes.services}>
            <img src={HostingIcon} className={classes.img} alt="Hosting Icon" />
            <h3>Blazing Fast Web Hosting</h3>
            <p>
              We Keep Your Web build Online 24x7x365. Downtime not only costs
              you lost visitors but also damages your reputation and search
              engine rankings.
            </p>
          </div>
          <div className={classes.services}>
            <img
              src={CertificateIcon}
              className={classes.img}
              alt="Certificate Icon"
            />
            <h3>Free SSL Certificates</h3>
            <p>
              We Keep Your Web build Online 24x7x365. Downtime not only costs
              you lost visitors but also damages your reputation and search
              engine rankings.
            </p>
          </div>
          <div className={classes.services}>
            <img src={SupportIcon} className={classes.img} alt="Support Icon" />
            <h3>24x7 Friendly Support</h3>
            <p>
              We Keep Your Web build Online 24x7x365. Downtime not only costs
              you lost visitors but also damages your reputation and search
              engine rankings.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionTwo;
