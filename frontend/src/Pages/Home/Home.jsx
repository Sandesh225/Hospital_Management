import React from "react";

import Hero from "./../../components/Hero/Hero";
import Biography from "./../../components/Biography/Biography";
import Departments from "./../../components/Departments/Departments";
import MessageForm from "./../../components/MessageForm/MessageForm";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/hero.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
