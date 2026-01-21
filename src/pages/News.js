function News() {
  return (
    <div className="bg-[#001529] min-h-screen text-white">
      {/* news section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h4 className="text-blue-400 font-bold uppercase text-xs mb-4">News and Recent Trends</h4>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis.
          </h1>
          <div className="flex gap-4">
            <button className="bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded">Primary Action</button>
            <button className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded">Secondary Action</button>
          </div>
        </div>

        {/* stats and charts section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
          <div className="h-48 bg-slate-900 mb-8 rounded flex items-center justify-center text-gray-500">
            [Chart Visualization]
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded text-slate-900">
               <p className="text-2xl font-bold">250+</p>
               <p className="text-[10px] uppercase font-bold text-gray-400">Happy Customers</p>
            </div>
            <div className="bg-white p-4 rounded text-slate-900">
               <p className="text-2xl font-bold">600+</p>
               <p className="text-[10px] uppercase font-bold text-gray-400">Completed Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* commentary section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* research highlight */}
          <div className="border border-gray-200 p-8 rounded-xl text-slate-900">
             <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
               <span className="w-3 h-3 bg-blue-600 rounded-full"></span> Research Highlights:
             </h3>
             <p className="text-gray-600 mb-8">
               Our Quantitative division focuses on the systematic identification of market inefficiencies through advanced mathematical modeling and high-performance technology...
             </p>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-gray-200" />
               <p className="font-bold">Author Name</p>
             </div>
          </div>

          {/* market commentary */}
          <div className="border border-gray-200 p-8 rounded-xl text-slate-900">
             <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
               <span className="w-3 h-3 bg-gray-800 rounded-full"></span> Market Commentary:
             </h3>
             <p className="text-gray-600 mb-8">
               Nisi vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis...
             </p>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-gray-200" />
               <p className="font-bold">Author Name</p>
             </div>
          </div>
        </div>
      </section>

      {/* quote section */}
      <section className="py-32 px-6 text-center">
         <h4 className="text-gray-400 font-bold uppercase text-xs mb-4">Dekalb Capital Management LLC</h4>
         <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
           A collective of technical excellence and intellectual curiosity.
         </h2>
      </section>
    </div>
  );
}

export default News;