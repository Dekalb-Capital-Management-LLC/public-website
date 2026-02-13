import React from "react";
import UniversityLogosRow from "./UniversityLogosRow";
import CardGrid from "./CardGrid";
import ScrollAnimation from "../common/ScrollAnimation";

export default function TeamSection() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-6xl text-left mx-auto">
                <ScrollAnimation animation="fade-in-up">
                    <h4 className="text-center text-sm font-bold text-primary tracking-widest mb-4 uppercase">
                        The people behind Dekalb
                    </h4>
                    <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 font-heading text-primary">OUR TEAM</h2>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-in-up" delay={200}>
                    <div className="space-y-8 text-primaryLight text-lg leading-relaxed mb-16 font-light">
                        <p>
                            At Dekalb, we believe that the best investment ideas come from the intersection of diverse technical backgrounds. We are a lean, focused group of analysts and engineers who are genuinely passionate about the markets. Our team is a unique blend of ambitious student analysts and post-graduate professionals, bringing together expertise from full-time roles across the finance and technology sectors. This hybrid model allows us to bridge the gap between cutting-edge academic research and seasoned industry experience. We do this work because we love the challenge of the markets and the pursuit of alpha.
                        </p>
                        <p>
                            <strong className="font-semibold text-primary">Academic & Professional Pedigree</strong> Our members are recruited from the nation’s leading institutions for Computer Science, Finance, and Mathematics, including:
                        </p>
                    </div>
                </ScrollAnimation>

                <CardGrid />
            </div>
        </section>
    );
}
