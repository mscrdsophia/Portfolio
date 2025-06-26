import { FocusCards } from "../components/FocusCards";
import BlurText from "../components/BlurText";
import { Link } from "react-router-dom";


function HomePage() {
  const featuredCards = [
    {
      src: "https://res.cloudinary.com/dwv27g56s/image/upload/v1750843853/IMG_2461_naqlnl.jpg",
      title: "Portfolio Dupe",
      link:"https://mscrdsophiaporfolio.framer.website/"
      
    },
    {
      src: "https://res.cloudinary.com/dwv27g56s/image/upload/v1750756062/riceField2_utjs0t.jpg",
      title: "No Pain No Gain",
      link: "https://mscrdsophia.github.io/No-Pain-No-Grain/"
    },
    {
      src: "https://res.cloudinary.com/dwv27g56s/image/upload/v1750755887/Strawberry_Sunset_pphgtk_o4ub8a.webp",
      title: "Floral Bouquet",
      link: "https://floralbouquet.netlify.app/"
    },
    {
      src: "https://res.cloudinary.com/dwv27g56s/image/upload/v1742739841/image1_vgeo3t.jpg",
      title: "Araw sa Paraiso",
      link:"https://arawsaparaiso.netlify.app/"
    }
  ];

 

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  
  return (
    <div className="p-6 pb-32 md:p-8 md:pb-32 bg-#e1e1e14d ">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="flex  md:flex-row justify-between items-start md:items-start mb-12 gap-6 md:gap-0">
          {/* Name and Email */}
          <div className="flex flex-col items-center items-start md:items-start text-center md:text-left">
          <BlurText 
              text="SOPHIA" 
              className="text-5xl md:text-7xl font-black text-black mb-2"
              delay={100}
            />
            <BlurText 
              text="MASCARDO" 
              className="text-5xl md:text-7xl font-black text-black"
              delay={200}
            />
            <BlurText 
              text="Frontend Developer" 
              className="text-2xl md:text-3xl text-gray-600 mt-2 font-normal"
              delay={200}
            />
            <BlurText 
              text="sophia.web.dev24@gmail.com" 
              className="text-base md:text-lg text-gray-600 mt-4 font-normal"
              delay={400}
            />
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
        
         <h2 className= "text-right  text-xl md:text-4xl width-full  font-normal mb-12 min-w-64">
            Hi, I'm a web developer with a background in retail leadership, and passionate about building user-friendly digital solutions.
          </h2>
          <div>
          <div className="mt-8 pt-6 border-t border-gray-700"></div>
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 mt-12">
            Featured Projects
          </h1>
          <Link 
              to="/projects" 
              className="inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-black to-gray-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-black hover:text-white hover:shadow-lg active:opacity-85"
              >
               See More
          </Link>

          </div>

          <FocusCards cards={featuredCards} />
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700"></div>
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 mt-12">
            Certificates
          </h1>
          <Link 
              to="/about" 
              className="inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-black to-gray-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-black hover:text-white hover:shadow-lg active:opacity-85"
              >
               See More
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
      
      <div className="justify-center">
        <img 
        src="https://res.cloudinary.com/dwv27g56s/image/upload/v1750926370/logo-ironhack-blue_qxadjc.png"
        alt="Certificate 1"
        className="w-80 h-auto  mb-4"
        />
      <h1 className="text-sm text-gray-600">Web Developer</h1>
       <h2 className="text-sm text-gray-400 border-b border-gray-300 w-fit mt-1">Oct 2024 - Apr 2025</h2>
      </div>
      <div className="justify-items-end">
        <img 
        src="https://res.cloudinary.com/dwv27g56s/image/upload/v1750926373/16867170_v7fjpw.png"
        alt="Certificate 1"
        className="w-80 h-auto  mb-4"
        />
      <h1 className="text-sm text-gray-600">5 days coding challenge</h1>
       <h2 className="text-sm text-gray-400 border-b border-gray-300 w-fit mt-1">July 2024</h2>
      </div>
     </div>
    <div className="mt-8 pt-6 border-t border-gray-700"></div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
    Tech Stack
  </h1>
  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {[
      "Html", "Css", "JavaScript", "React", "Tailwind CSS", "Node.js",
      "Express.js", "MongoDB", "Git", "GitHub", "Figma", "Framer",
      "Postman", "VS Code", "Netlify", "Render", "MongoDB", "Trello", "Slack",
    ].map((tech, index) => (
      <li
        key={index}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center py-3 px-4 text-gray-700 font-medium border border-gray-100"
      >
        {tech}
      </li>
    ))}
  </ul>
</div>
      </div>
    </div>
  );
}

export default HomePage;
