import React from "react";
import Hero from "./../../components/Hero/Hero";
import Biography from "./../../components/Biography/Biography";

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
