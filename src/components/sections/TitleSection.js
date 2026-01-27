import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import ScrollAnimation from "../common/ScrollAnimation";
import backgroundVideo from "../../assets/background.mp4";

export default function TitleSection({
  title = "Driven by passion. Proven by performance.",
  subtitle = "Founded in the summer of 2024 and officially incorporated that August, Dekalb Capital Management was established to apply rigorous academic theory to active market trading.",
}) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/75 to-primary/90"></div>

      <div className="relative z-10 text-left text-white px-8 max-w-6xl">
        <ScrollAnimation animation="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-heading leading-tight tracking-tight drop-shadow-lg text-white">
            {title}
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in-up" delay={200}>
          <p className="text-lg md:text-xl mb-12 text-gray-100 max-w-6xl leading-relaxed font-light drop-shadow-md">
            {subtitle}
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in-up" delay={400}>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/teams">
              <button className="btn-primary">Our Teams →</button>
            </Link>
            <Link to="/news">
              <button className="btn-secondary">Recent News</button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
