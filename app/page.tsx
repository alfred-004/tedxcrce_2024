"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Opportunity } from "@/components/Opportunity";
import Companies from "@/components/Companies";
import EventDetails from "@/components/EventDetails";
import Navbar from "@/components/Navbar";
import AboutTed from "@/components/AboutTed";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />  
        <Hero />
        <AboutTed />
        {/* <EventDetails />
        <Opportunity />
        <Companies /> 
        <Footer /> */}
      </div>
    </main>
  );
};

export default Home;
