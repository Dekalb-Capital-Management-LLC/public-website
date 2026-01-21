function Teams() {
  return (
    <div className="bg-[#001529] min-h-screen text-white">
      {/* header section */}
      <section className="py-20 px-4 text-center max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Investment Divisions</h1>
        <p className="text-gray-300 text-lg mb-8">
          Our firm operates through two complementary investment teams—Quantitative and Equities—each applying distinct methodologies to uncover market opportunities. Together, they combine systematic research, fundamental analysis, and disciplined execution to pursue durable, market-beating returns.        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-700 px-6 py-2 rounded">Explore Quantitative Strategies</button>
          <button className="border border-white px-6 py-2 rounded">Explore Equities Research</button>
        </div>
      </section>

      {/* quantitative section */}
      <section className="bg-slate-300 text-slate-900 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-gray-400">
            [Visual Graphic]
          </div>
          <div>
            <h4 className="text-blue-600 font-bold uppercase text-sm mb-2">Quant Team</h4>
            <h2 className="text-4xl font-bold mb-8">The Quantitative Division</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h5 className="font-bold mb-2">Market Inefficiencies</h5>
                <p className="text-sm text-gray-600 leading-relaxed">Our Quantitative division focuses on the systematic identification of market inefficiencies through advanced mathematical modeling and high-performance technology.</p>
              </div>
              <div>
                <h5 className="font-bold mb-2">Data-Driven Research</h5>
                <p className="text-sm text-gray-600 leading-relaxed">Our team develops mathematical algorithms, subjects them to rigorous backtesting against historical data, and documents findings.</p>
              </div>
              <div>
                <h5 className="font-bold mb-2">Proprietary Infrastructure</h5>
                <p className="text-sm text-gray-600 leading-relaxed">We have developed a custom, in-house trading engine that facilitates direct broker connectivity and real-time execution.</p>
              </div>
              <div>
                <h5 className="font-bold mb-2">Asset Focus</h5>
                <p className="text-sm text-gray-600 leading-relaxed">While our current operations are centered on equities markets, we are actively expanding our research into options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* equities section */}
      <section className="bg-slate-50 text-slate-900 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h4 className="text-blue-600 font-bold uppercase text-sm mb-2">Equities Team</h4>
            <h2 className="text-4xl font-bold mb-8">The Equities Division</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h5 className="font-bold mb-2">Bottom-Up Research</h5>
                <p className="text-sm text-gray-600 leading-relaxed">The Equities division employs a "bottom-up" approach to identifying high-conviction investment opportunities across diverse global sectors.</p>
              </div>
              <div>
                <h5 className="font-bold mb-2">Rigorous Diligence</h5>
                <p className="text-sm text-gray-600 leading-relaxed">Every position is the result of exhaustive research. Our analysts produce thorough stock pitches that analyze balance sheets and competitive moats.</p>
              </div>
              <div>
                <h5 className="font-bold mb-2">Diverse Methodologies</h5>
                <p className="text-sm text-gray-600 leading-relaxed">Our analysts specialize in a range of time horizons and catalysts, including long-term value plays and tactical event-driven opportunities.</p>
              </div>
              <div>
                <h5 className="font-bold mb-2">Emerging Markets</h5>
                <p className="text-sm text-gray-600 leading-relaxed">Beyond secondary markets, our team is increasingly focused on the future of industry, including dedicated IPO research and high-potential startups.</p>
              </div>
            </div>
          </div>

          {/* TEMP img placeholder */}
          <div className="bg-white border border-gray-200 rounded-lg aspect-square flex items-center justify-center text-gray-400 shadow-sm">
            [Visual Graphic]
          </div>

        </div>
      </section>
    </div>
  );
}

export default Teams;