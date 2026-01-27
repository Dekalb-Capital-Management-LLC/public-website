import React from "react";
import ScrollAnimation from "../common/ScrollAnimation";

export default function EquitiesSection() {
    return (
        <section id="equities-section" className="bg-slate-800 text-slate-900 py-24 px-6 relative">
            {/* Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                <div className="order-2 md:order-1">
                    <h4 className="text-slate-300 font-bold uppercase text-sm tracking-widest mb-2">Equities Team</h4>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading text-white">The Equities Division</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="bg-slate-200 p-6 rounded-xl border border-slate-200 h-full hover:bg-white hover:shadow-md transition-all duration-300">
                            <h5 className="font-bold mb-3 text-primary text-lg">Bottom-Up Research</h5>
                            <p className="text-sm text-slate-600 leading-relaxed">The Equities division employs a "bottom-up" approach to identifying high-conviction investment opportunities across diverse global sectors.</p>
                        </div>

                        <div className="bg-slate-200 p-6 rounded-xl border border-slate-200 h-full hover:bg-white hover:shadow-md transition-all duration-300">
                            <h5 className="font-bold mb-3 text-primary text-lg">Rigorous Diligence</h5>
                            <p className="text-sm text-slate-600 leading-relaxed">Every position is the result of exhaustive research. Our analysts produce thorough stock pitches that analyze balance sheets and competitive moats.</p>
                        </div>

                        <div className="bg-slate-200 p-6 rounded-xl border border-slate-300 h-full hover:bg-white hover:shadow-md transition-all duration-300">
                            <h5 className="font-bold mb-3 text-primary text-lg">Diverse Methodologies</h5>
                            <p className="text-sm text-slate-600 leading-relaxed">Our analysts specialize in a range of time horizons and catalysts, including long-term value plays and tactical event-driven opportunities.</p>
                        </div>

                        <div className="bg-slate-200 p-6 rounded-xl border border-slate-200 h-full hover:bg-white hover:shadow-md transition-all duration-300">
                            <h5 className="font-bold mb-3 text-primary text-lg">Emerging Markets</h5>
                            <p className="text-sm text-slate-600 leading-relaxed">Beyond secondary markets, our team is increasingly focused on the future of industry, including dedicated IPO research and high-potential startups.</p>
                        </div>
                    </div>
                </div>

                {/* Visual Graphic Placeholder */}
                <div className="order-1 md:order-2">
                    <ScrollAnimation animation="fade-in-up" delay={200}>
                        <div className="bg-gray-50 rounded-2xl shadow-xl aspect-square flex items-center justify-center text-gray-300 border border-gray-100 p-8">
                            <div className="text-center">
                                <span className="block text-6xl mb-4">📈</span>
                                <span className="text-sm uppercase tracking-widest font-semibold">Equities Growth Chart</span>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

            </div>
        </section>
    );
}
