import React from "react";

import Hero from "../../Layout/Hero/hero";
import SectionOne from "../../Layout/Main/sectionOne";
import SectionTwo from "../../Layout/Main/sectionTwo";

const Home = (props) => {
  return (
    <div>
      <Hero />
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default Home;
