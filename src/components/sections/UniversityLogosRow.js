import React from "react";
import indianaLogo from "../../assets/logos/indiana.webp";
import texasLogo from "../../assets/logos/ut-logo.png";
import illinoisLogo from "../../assets/logos/illinois.jpeg";
import northernIllinoisLogo from "../../assets/logos/northillinois.png";
import arizonaLogo from "../../assets/logos/arizona.png";

export default function UniversityLogosRow() {
  return (
      <div className="flex flex-wrap justify-center items-center gap-12 mb-24 opacity-80 hover:opacity-100 transition-opacity duration-500">
        <img src={indianaLogo} alt="Indiana University" className="h-12 sm:h-14 md:h-16 object-contain transition-all duration-300" />
        <img src={texasLogo} alt="The University of Texas" className="h-12 sm:h-14 md:h-16 object-contain transition-all duration-300" />
        <img src={illinoisLogo} alt="University of Illinois" className="h-12 sm:h-14 md:h-16 object-contain transition-all duration-300" />
        <img src={northernIllinoisLogo} alt="Northern Illinois University" className="h-14 sm:h-16 md:h-18 object-contain transition-all duration-300" />
        <img src={arizonaLogo} alt="Arizona State University" className="h-12 sm:h-14 md:h-16 object-contain transition-all duration-300" />
      </div>
  );
}
