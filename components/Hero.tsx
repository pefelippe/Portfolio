import React from "react";
import { Typewriter } from "react-simple-typewriter";
type Props = {};

function Hero({}: Props) {
  return (
    <div>
      <h1>
        <span className="">
          <Typewriter
            words={["Oi, eu sou o Pedro!", "<WebDev />"]}
            loop={true}
            delaySpeed={1000}
            typeSpeed={70}
            deleteSpeed={50}
          />
        </span>
      </h1>
    </div>
  );
}

export default Hero;
