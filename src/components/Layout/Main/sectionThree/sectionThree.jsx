import React from "react";

import Container from "../../../Ui/Container/container";
import classes from "./sectionThree.module.css";

const SectionThree = (props) => {
  return (
    <div>
      <Container>
        <div className={classes.textContainer}>
          <h3>
            Ready to get started with <br /> LemonWares?
          </h3>
          <p>Choose the package that suits you</p>
        </div>
      </Container>
    </div>
  );
};

export default SectionThree;
