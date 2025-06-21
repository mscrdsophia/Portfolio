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
            <p class= "text-right">
              I'm Sophia, a web developer who recently graduated from Ironhack's bootcamp. Originally from the Philippines, I've been living in the Netherlands since 2015. I'm excited to bring my creativity, adaptability, and problem-solving skills into the tech industry.
            </p>
  
            <p class= "text-right">
              My background is in retail, where I've worked for over five years—starting as a rider, then a picker, and now as a supervisor. This experience has taught me how to lead teams, manage time effectively, and stay focused under pressure. Working in a fast-paced environment helped me develop strong organizational and decision-making skills.
            </p>
  
            <p class = "text-right">
              Although I'm new to the tech field, I've built six projects during the bootcamp and discovered a passion for building solutions that are both functional and user-friendly. I'm eager to keep growing, learn from experienced developers, and contribute meaningfully to a team. I'm confident that my unique mix of retail leadership and web development training makes me a strong and motivated candidate for a junior developer role.
            </p>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default About;
  