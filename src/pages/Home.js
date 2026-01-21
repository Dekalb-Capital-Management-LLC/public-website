function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/los-angeles-downtown-buildings-night_649448-298.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Driven by passion. Proven by performance.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Founded in the summer of 2024 and officially incorporated that August, Dekalb Capital Management was established to apply rigorous academic theory to active market trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded transition duration-300">
              Our Teams →
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-8 rounded transition duration-300">
              Recent news
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-[#001529]">
        <div className="max-w-5xl mx-auto text-center">
          <h4 className="text-sm font-bold text-blue-400 tracking-widest mb-4 uppercase">
            Welcome to Dekalb Capital Management LLC
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            ABOUT US
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Our inaugural year focused on building a disciplined operational framework and developing a proprietary in-house trading engine to facilitate seamless, real-time execution. Following a first year of strong portfolio performance, we have since transitioned into a growth phase, significantly expanding our head count and scaling research initiatives across both our Quantitative and Equities divisions.
            </p>
            <p>
              Following a successful first year marked by strong portfolio performance, we entered our second year with a focus on scale. We have significantly expanded our team, launched new research projects, and are aggressively growing both our Quantitative and Equities divisions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-blue-700 font-bold text-sm tracking-widest uppercase mb-2">The People Behind The Work</h4>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">Meet our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Academic & Professional Pedigree: Our members are recruited from the nation's leading institutions for Computer Science, Finance, and Mathematics, including:
          </p>

          {/* Logo Placeholder Grid */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-20 opacity-70 italic font-serif text-xl text-gray-500">
            <span>Indiana University</span>
            <span>Texas</span>
            <span>Illinois</span>
            <span>Northern Illinois</span>
            <span>Arizona State</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-left bg-gray-50 p-6 border border-gray-100 rounded">
                <div className="aspect-square bg-gray-200 mb-4 flex items-center justify-center text-gray-400">Image</div>
                <p className="text-xs text-blue-600 font-bold mb-1">Category</p>
                <h3 className="font-bold text-slate-900 text-xl mb-2">Article Title</h3>
                <p className="text-gray-500 text-sm mb-6">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Jane Doe</p>
                    <p className="text-xs text-gray-400">Senior Designer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-300 py-20 px-4 text-center ">
        <h1 className="text-4xl font-bold mb-6 max-w-4xl mx-auto">News & Updates</h1>
        <p className="text-black text-lg  max-w-4xl mx-auto mb-8">
          Here, we share firm updates, research insights, and market perspectives—covering everything from infrastructure growth and organizational milestones to original research and commentary on evolving market conditions.        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-700 px-6 py-2 rounded text-white">Research highlights</button>
          <button className="border border-black px-6 py-2 rounded text-black">News highlights</button>
        </div>
      </section>
    </div>

  );
}

export default Home;