function Projects(){
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              src: "https://res.cloudinary.com/dwv27g56s/image/upload/v1750843853/IMG_2461_naqlnl.jpg",
              title: "Portfolio Dupe",
              description: "A Framer-based clone of a designer portfolio showcasing smooth animations and a minimal UI.",
              link: "https://mscrdsophiaporfolio.framer.website/"
            },
            {
              src: "https://res.cloudinary.com/dwv27g56s/image/upload/v1750756062/riceField2_utjs0t.jpg",
              title: "No Pain No Gain",
              description: "A motivational landing page with vibrant visuals and strong messaging, built using HTML/CSS/JS.",
              link: "https://mscrdsophia.github.io/No-Pain-No-Grain/"
            },
            {
              src: "https://res.cloudinary.com/dwv27g56s/image/upload/v1750755887/Strawberry_Sunset_pphgtk_o4ub8a.webp",
              title: "Floral Bouquet",
              description: "An elegant flower-themed landing site with pastel gradients and modern responsive layout.",
              link: "https://floralbouquet.netlify.app/"
            },
            {
              src: "https://res.cloudinary.com/dwv27g56s/image/upload/v1742739841/image1_vgeo3t.jpg",
              title: "Araw sa Paraiso",
              description: "A dreamy vacation-themed site featuring tropical visuals, grid galleries, and smooth scroll.",
              link: "https://arawsaparaiso.netlify.app/"
            }
          ].map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
              <img src={project.src} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-black-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    );
}
export default Projects;