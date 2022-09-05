import React from "react";

import Container from "../../../Ui/Container/container";
import classes from "./sectionThree.module.css";

const SectionThree = (props) => {
  const [on, setOnState] = React.useState("false");
  const toggle = () => setOnState((o) => !o);
  return (
    <div>
      <Container>
        <div className={classes.textContainer}>
          <h3>
            Ready to get started with <br /> LemonWares?
          </h3>
          <p>Choose the package that suits you</p>
        </div>
        <div className="text-center">
          <span className="m-2">Monthly</span>
          <button
            className={on ? classes.on : classes.off}
            on={on}
            onClick={toggle}
          >
            <span className={classes.pin} />
          </button>
          <span className="ml-3 mt-4">
            Yearly
            <span className="bg-warning p-2 rounded ml-2">20% Discount</span>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default SectionThree;
