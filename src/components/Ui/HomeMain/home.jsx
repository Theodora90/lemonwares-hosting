import React from "react";

import Hero from "../../Layout/Hero/hero";
import SectionOne from "../../Layout/Main/sectionOne/sectionOne";
import SectionTwo from "../../Layout/Main/sectionTwo/sectionTwo";
import SectionThree from "../../Layout/Main/sectionThree/sectionThree";

const Home = (props) => {
  return (
    <div>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default Home;
