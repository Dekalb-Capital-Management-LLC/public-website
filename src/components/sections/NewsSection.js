import React from "react";
import ScrollAnimation from "../common/ScrollAnimation";

export default function NewsSection() {
  return (
    <section className="bg-secondary py-24 px-6 text-center">
      <ScrollAnimation animation="fade-in-up">
        <h1 className="text-6xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto font-heading text-primary">News & Updates</h1>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in-up" delay={200}>
        <p className="text-left text-primaryLight text-lg md:text-xl max-w-6xl mx-auto mb-12 leading-relaxed font-light">
          Here, we share firm updates, research insights, and market perspectives—covering everything from infrastructure growth and organizational milestones to original research and commentary on evolving market conditions.
        </p>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in-up" delay={400}>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="btn-primary">Research Highlights</button>
          <button className="btn-outline">News Highlights</button>
        </div>
      </ScrollAnimation>
    </section>
  );
}
