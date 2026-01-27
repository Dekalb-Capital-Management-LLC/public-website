import React from "react";
import ScrollAnimation from "../common/ScrollAnimation";
import teamBackground from "../../assets/teamBackground.jpg";

export default function TeamDivision() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={teamBackground}
                    alt="Team Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/70"></div>
            </div>

            <div className="max-w-6xl text-left mx-auto text-center relative z-10">
                <ScrollAnimation animation="fade-in-up">
                    <h1 className="text-3xl text-white md:text-6xl font-bold mb-8">
                        Our Investment Divisions
                    </h1>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-in-up" delay={200}>
                    <p className="text-lg md:text-lg text-left text-gray-200 mb-12 leading-relaxed font-light">
                        Our firm operates through two complementary investment teams—Quantitative and Equities—each applying distinct methodologies to uncover market opportunities. Together, they combine systematic research, fundamental analysis, and disciplined execution to pursue durable, market-beating returns.
                    </p>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-in-up" delay={400}>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={() => scrollToSection('quant-section')}
                            className="btn-primary"
                        >
                            Explore Quantitative Strategies
                        </button>
                        <button
                            onClick={() => scrollToSection('equities-section')}
                            className="btn-outline text-white border-white hover:bg-white hover:text-primary"
                        >
                            Explore Equities Research
                        </button>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
