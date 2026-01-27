import React from "react";
import ScrollAnimation from "../common/ScrollAnimation";

export default function QuantSection() {
    return (
        <section id="quant-section" className="bg-slate-200 text-slate-900 py-24 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Visual Graphic Placeholder */}
                <div className="bg-white rounded-2xl shadow-xl aspect-square flex items-center justify-center text-gray-300 border border-gray-100 p-8">
                    <div className="text-center">
                        <span className="block text-6xl mb-4">📊</span>
                        <span className="text-sm uppercase tracking-widest font-semibold">Quantitative Model Visualization</span>
                    </div>
                </div>

                <div>
                    <h4 className="text-accent font-bold uppercase text-sm tracking-widest mb-2">Quant Team</h4>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading text-primary">The Quantitative Division</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow duration-300">
                            <h5 className="font-bold mb-3 text-primary text-lg">Market Inefficiencies</h5>
                            <p className="text-sm text-slate-600 leading-relaxed">Our Quantitative division focuses on the systematic identification of market inefficiencies through advanced mathematical modeling and high-performance technology.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow duration-300">
                            <h5 className="font-bold mb-3 text-primary text-lg">Data-Driven Research</h5>
                            <p className="text-sm text-slate-600 leading-relaxed">Our team develops mathematical algorithms, subjects them to rigorous backtesting against historical data, and documents findings.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow duration-300">
                            <h5 className="font-bold mb-3 text-primary text-lg">Proprietary Infrastructure</h5>
                            <p className="text-sm text-slate-600 leading-relaxed">We have developed a custom, in-house trading engine that facilitates direct broker connectivity and real-time execution.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow duration-300">
                            <h5 className="font-bold mb-3 text-primary text-lg">Asset Focus</h5>
                            <p className="text-sm text-slate-600 leading-relaxed">While our current operations are centered on equities markets, we are actively expanding our research into options.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
