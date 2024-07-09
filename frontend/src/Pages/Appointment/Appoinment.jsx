import React from "react";
import Hero from "./../../components/Hero/Hero";
import AppointmentForm from "./AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | Pokhara Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
