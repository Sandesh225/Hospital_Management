import React from "react";

import Biography from "./../../components/Biography/Biography";
import Hero from "./../../components/Hero/Hero";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Pokhara Medical Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
