import CircularGallery from "../components/CircularGallery";

function About() {
    return (
      <div className="p-6 md:p-8 bg-white">
        <div className="max-w-6xl mx-auto">
  
          {/* Section Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl  text-black text-center md:text-left mb-6">
              about me.
            </h1>
          </div>
  
          {/* About Content */}
          <div className="flex flex-col gap-6 text-base md:text-lg text-gray-800 leading-relaxed text-justify md:text-left">
            <p class= "center">
            I'm Sophia, a web developer who recently graduated from Ironhack's bootcamp. 
            Originally from the Philippines, I've been living in the Netherlands since 2015. 
            I'm excited to bring my creativity, adaptability,and problem-solving skills into the tech industry.
            </p>
            <p>
            My background is in retail, where I've worked for over five years—starting as a rider, then a picker, and now as a supervisor. 
            This experience has taught me how to lead teams, manage time effectively,and stay focused under pressure. Working in a fast
            paced environment helped me develop strong organizational and decision-making skills
            </p>
            <p>
            Although I'm new to the tech field, I've built six projects during the bootcamp and discovered a passion for building solutions that are both functional and user-friendly.
            I'm eager to keep growing, learn from experienced developers, and contribute meaningfully to a team.
            I'm confident that my unique mix of retail leadership and web development training makes me a strong and motivated candidate for a junior developer role.
            </p>
            </div>
            
            <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>
 <div className="mt-8 pt-6 border-t border-gray-700">
        
        </div>
 <h1 className="text-4xl md:text-5xl  text-black text-center md:text-left mb-6 pt-12">
            Certificates
          </h1>
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
  <div className="mt-8 pt-6 border-t border-gray-700">
        
        </div>
        </div>
        
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
    );
  }
  
  export default About;
  