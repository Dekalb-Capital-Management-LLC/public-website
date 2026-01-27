import React from "react";
import ScrollAnimation from "../common/ScrollAnimation";

export default function AboutSection() {
  return (
    <section className="relative py-24 px-6 bg-slate-800 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollAnimation animation="fade-in-up">
          <h4 className="text-sm font-bold text-white tracking-[0.2em] mb-4 uppercase">
            Welcome to Dekalb Capital Management LLC
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 font-heading">ABOUT US</h2>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in-up" delay={200}>
          <div className="text-lg space-y-8 mb-12 text-gray-100 text-left leading-relaxed font-light drop-shadow-md max-w-6xl mx-auto">
            <p>
              Our inaugural year focused on building a disciplined operational framework and developing a proprietary in-house trading engine to facilitate seamless, real-time execution. Following a first year of strong portfolio performance, we have since transitioned into a growth phase, significantly expanding our head count and scaling research initiatives across both our Quantitative and Equities divisions.
            </p>
            <p>
              Following a successful first year marked by strong portfolio performance, we entered our second year with a focus on scale. We have significantly expanded our team, launched new research projects, and are aggressively growing both our Quantitative and Equities divisions.
            </p>
          </div>
        </ScrollAnimation>

      </div>

      {/* Diagonal Lines Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-[160px] md:h-[200px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <rect x="0" y="80" width="1700" height="80" className="fill-white opacity-10" />
          <rect x="0" y="95" width="1700" height="85" className="fill-white opacity-30" />
          <rect x="0" y="110" width="1700" height="90" className="fill-white" />
        </svg>
      </div>
    </section >
  );
}
