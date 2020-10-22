import React from "react";
import HeroSection from "../../HeroSection";

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
  return (
    <>
      <div id="home">
        {" "}
        <HeroSection {...homeObjOne} />
      </div>
      <div id="services">
        <HeroSection {...homeObjThree} />
      </div>
      <div id="gallery">
        <HeroSection {...homeObjTwo} />
      </div>
      <div id="aboutus">
        {" "}
        <HeroSection {...homeObjFour} />
      </div>
    </>
  );
}

export default Home;
