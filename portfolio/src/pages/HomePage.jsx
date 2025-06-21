function HomePage() {
  return (
    <div className="p-6 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="flex  md:flex-row justify-between items-start md:items-start mb-12 gap-6 md:gap-0">
          {/* Name and Email */}
          <div className="flex flex-col items-center items-start md:items-start text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black text-black leading-none mb-2">
              SOPHIA
            </h1>
            <h1 className="text-5xl md:text-7xl font-black text-black items-start  leading-none">
              MASCARDO
            </h1>
            <h2 className="text-base md:text-lg text-gray-600 mt-4 items-start  font-normal">
              sophia.web.dev24@gmail.com
            </h2>
          </div>

          {/* Actual Picture */}
          <div className="self-center md:self-start">
            <div className="w-20 h-20 md:w-50 md:h-50 rounded-full overflow-hidden border-2 shadow-md">
              <img
                src="/sophia.JPG"
                alt="Sophia Mascarado"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
