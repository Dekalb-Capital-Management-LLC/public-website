import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "../common/ScrollAnimation";

export default function TeamsAdvertiseSection() {
  return (
    <section className="bg-gray-100 py-24 px-6 text-center">
      <ScrollAnimation animation="fade-in-up">
        <h1 className="text-6xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto font-heading text-black">Meet Our Teams</h1>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in-up" delay={200}>
        <p className="text-left text-lg md:text-xl max-w-6xl mx-auto mb-12 leading-relaxed font-light text-black">
          Explore the divisions within Dekalb Capital Management. Each team brings specialized expertise in their respective domains, working collaboratively to drive our investment strategies and research initiatives.
        </p>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in-up" delay={400}>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/teams">
            <button className="btn-primary">Explore Our Teams &rarr;</button>
          </Link>
        </div>
      </ScrollAnimation>
    </section>
  );
}
