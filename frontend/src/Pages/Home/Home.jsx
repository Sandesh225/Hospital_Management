import React from "react";

import Biography from "./../../components/Navbar/Biography/Biography";
import Departments from "./../../components/Departments/Departments";
import MessageForm from "./../../components/MessageForm/MessageForm";
import Hero from "./../../Hero/Hero";

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
