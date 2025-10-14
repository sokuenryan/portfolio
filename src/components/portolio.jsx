import { useState, useEffect } from "react";
import { FaEnvelope, FaFileAlt, FaUserFriends } from "react-icons/fa";
import { FaBoltLightning, FaCode, FaGithubAlt, FaLinkedinIn, FaPalette, FaPeopleGroup } from "react-icons/fa6";

// Images
import ProfilePic from "../../public/ProfilePic.jpeg";
import SolarPlexus from "../../public/SolarPlexus.jpg";
import PlatePal from "../../public/PlatePal.jpg";
import AiQ from "../../public/AiQ.jpg";
import PRStatus from "../../public/PRStatus.jpg";

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleGitHubLink = () => {
    window.open("https://www.github.com/sokuenryan", "_blank");
  }

  const handleLinkedInLink = () => {
    window.open("https://www.linkedin.com/in/sokuenryan", "_blank");
  }

  const handleResumeLink = () => {
    window.open("/TECH-CV-Oct2025.pdf", "_blank");
  }

  const handleEmailLink = () => {
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=sokuenryan@gmail.com&su=Portfolio Inquiry&body=Hi there, I saw your portfolio and...";
    window.open(gmailUrl, "_blank");
  };

  const handleChinguLink = () => {
    window.open("https://www.chingu.io", "_blank");
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <div className='portfolio w-full h-full bg-[#0F1B2D] flex flex-grow flex-col items-center text-center overflow-x-hidden'>
      {/* Navbar */}    
      <div className={`h-20 fixed top-0 left-0 w-full flex justify-between items-center px-5 pr-8 bg-[#0F1B2D]/10 backdrop-blur-lg text-white transition-all duration-300 z-50
            ${scrolled ? "border-b border-gray-500 border-opacity-100" : "border-gray-500 border-opacity-0"}
          `}>

        {/* Site Title */}
        <h1 className="font-bold text-[30px] bg-gradient-to-r from-blue-500 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text flex-shrink-0">
          Portfolio
        </h1>

        {/* Navbar Links */}
        <div className='flex flex-row gap-6 text-[22px] font-bold flex-shrink justify-end max-w-[90vw]'>
          <a href='#home' onClick={handleScroll} className="relative text-white hover:text-[#07B6D5] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#07B6D5] after:transition-all after:duration-500 hover:after:w-full">Home</a>
          <a href='#about' onClick={handleScroll} className="relative text-white hover:text-[#07B6D5] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#07B6D5] after:transition-all after:duration-500 hover:after:w-full">About</a>
          <a href='#projects' onClick={handleScroll} className="relative text-white hover:text-[#07B6D5] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#07B6D5] after:transition-all after:duration-500 hover:after:w-full">Projects</a>
          <a href='#contact' onClick={handleScroll} className="relative text-white hover:text-[#07B6D5] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#07B6D5] after:transition-all after:duration-500 hover:after:w-full">Contact</a>
        </div>

      </div>

      {/* Home Section */}
      <section id='home' className=' min-h-screen flex flex-col items-center text-center'>
        <p className='mt-40 text-[20px] text-gray-400 border-1 border-gray-600 rounded-2xl w-80 h-11 flex items-center justify-center'>
          Frontend Developer at Chingu
        </p>

        <h1 className="font-bold text-[110px] sm:text-[110px] text-6xl sm:text-7xl md:text-[110px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text text-center leading-tight sm:leading-tight md:leading-tight">
          <span className="block sm:inline">Hi, I'm </span>
          <span className="block sm:inline">Sokuen </span>
          <span className="block sm:inline">Ryan</span>
        </h1>

        <p className="w-full text-gray-400 text-[30px] mt-10">
          I craft beautiful, responsive web experiences with modern<br/>
          technologies and design principles
        </p>

        <div className='mt-12 flex flex-row gap-5'>
          <button className="h-15 w-50 font-semibold text-black bg-[#07B6D5] rounded-xl transition-shadow hover:shadow-[0_0_50px_rgba(7,182,400,0.5)]">
            <a href='#projects' onClick={handleScroll} >View Projects</a>
          </button>
          <button className='border-1 border-[#07B6D5] h-15 w-50 font-semi-bold text-white bg-gray-800 rounded-xl transition-shadow hover:shadow-[0_0_50px_rgba(7,182,400,0.5)]'>
             <a href='#contact' onClick={handleScroll}>Get In Touch</a>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='min-h-screen pt-20 flex flex-col'>
        <div className="header w-full flex justify-center flex-col items-center">
          <h1 className='font-bold text-[70px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text'>
            About Me
          </h1>
          <div className='w-20 h-1 bg-gradient-to-r from-[#07B6D5] to-purple-500 mt-2 rounded-full'></div>
        </div>

        <div className='about-content flex flex-col w-full text-gray-400 text-[22px]'>
          <div className="about-summary flex flex-col lg:flex-row justify-center items-center w-full mt-10 gap-10 px-5">
            
            {/* Profile Image */}
            <div className="profile-pic flex justify-center items-center">
              <img
                src={ProfilePic}
                alt="Profile Picture"
                className="w-95 h-95 rounded-full border-4 border-[#07B6D5] mb-5"
              />
            </div>

            {/* Summary Text */}
            <div className="flex flex-col justify-start text-gray-400 text-[22px] max-w-[600px]">
              <p className="mt-5">
                I'm a passionate frontend developer at Chingu, where I<br/>
                collaborate with talented developers worldwide to build amazing web applications.
              </p>
              <p className="mt-5">
                With a keen eye for design and a love for clean code, I transform<br/>
                ideas into engaging digital experiences. I specialize in React, modern CSS, and creating responsive, 
                accessible interfaces that users love.
              </p>
              <p className="mt-5"> 
                When I'm not coding, I'm learning new technologies, contributing to open source, or sharing knowledge
                with the developer community.
              </p>
            </div>

          </div>
        </div>

        <div className="about-boxes flex flex-col lg:flex-row justify-center gap-6 mt-20 px-5">
          {/* Box 1 */}
          <div className="box1 w-full lg:w-70 h-60 bg-gray-800 rounded-xl flex flex-col justify-center items-center lg:items-start hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-shadow">
            <FaCode className="mb-3 text-[#07B6D5] text-[48px] lg:ml-8" />
            <h1 className="font-bold text-[20px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text lg:ml-8">
              Clean Code
            </h1>
            <p className="text-gray-400 text-[15px] text-center lg:text-left mt-1 lg:ml-8 lg:mr-5">
              Writing maintainable, scalable code following best practices and industry standards.
            </p>
          </div>

          {/* Box 2 */}
          <div className="box2 w-full lg:w-70 h-60 bg-gray-800 rounded-xl flex flex-col justify-center items-center lg:items-start hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-shadow">
            <FaPalette className="mb-3 text-[#07B6D5] text-[48px] lg:ml-8" />
            <h1 className="font-bold text-[20px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text lg:ml-8">
              UI/UX Focus
            </h1>
            <p className="text-gray-400 text-[15px] text-center lg:text-left mt-1 lg:ml-8 lg:mr-5">
              Crafting intuitive interfaces with attention to detail and user experience.
            </p>
          </div>

          {/* Box 3 */}
          <div className="box3 w-full lg:w-70 h-60 bg-gray-800 rounded-xl flex flex-col justify-center items-center lg:items-start hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-shadow">
            <FaBoltLightning className="mb-3 text-[#07B6D5] text-[48px] lg:ml-8" />
            <h1 className="font-bold text-[20px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text lg:ml-8">
              Performance
            </h1>
            <p className="text-gray-400 text-[15px] text-center lg:text-left mt-1 lg:ml-8 lg:mr-5">
              Optimizing applications for speed, accessibility, and seamless interactions.
            </p>
          </div>

          {/* Box 4 */}
          <div className="box4 w-full lg:w-70 h-60 bg-gray-800 rounded-xl flex flex-col justify-center items-center lg:items-start hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-shadow">
            <FaPeopleGroup className="mb-3 text-[#07B6D5] text-[48px] lg:ml-8" />
            <h1 className="font-bold text-[20px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text lg:ml-8">
              Collaboration
            </h1>
            <p className="text-gray-400 text-[15px] text-center lg:text-left mt-1 lg:ml-8 lg:mr-5">
              Working effectively in teams through Chingu and other collaborative platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='min-h-screen pt-25 flex flex-col items-center text-center'>
        <div className="header w-full flex justify-center flex-col items-center px-5">
          <h1 className='font-bold text-[70px] md:text-[50px] sm:text-[40px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text text-center'>
            Featured Projects
          </h1>
          <div className='w-20 h-1 bg-gradient-to-r from-[#07B6D5] to-purple-500 mt-2 rounded-full'></div>
          <p className="text-white text-[20px] md:text-[18px] sm:text-[16px] mt-20 max-w-[800px] text-center">
            A selection of projects showcasing my skills in frontend development and problem-solving.
          </p>
        </div>

        <div className="w-full flel justify-center items-center projects-showcase flex flex-col">
          <div className="project-set-one lg:w-300 lg:gap-6 lg:mt-10 flex lg:flex-row lg:justify-between md:w-full md:gap-5 md:mt-8 md:flex-col md:items-center">
            {/* SolarPlexus Project Section */}
            <div className="SolarPlexus lg:w-[50%] md:w-[80%] lg:h-135 md:h-135 relative group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-[#07B6D5] transition-all duration-500">
              <div className="h-[60%] w-full overflow-hidden">
                <img
                  src={SolarPlexus}
                  alt="SolarPlexus Project"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="absolute pt-10 inset-0 flex items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                <button onClick={() => window.open("https://github.com/chingu-voyages/v52-tier1-team-03")} className="ml-5 px-4 py-2 bg-[#07B6D5] text-white rounded-lg hover:bg-[#059bb5] transition">
                  GitHub
                </button>
                <button onClick={() => window.open("https://v52--solar-panel-project.web.app/admin")} className="px-4 py-2 bg-[#07B6D5] text-white rounded-lg hover:bg-[#059bb5] transition">
                  Admin Demo
                </button>
                <button onClick={() => window.open("https://v52--solar-panel-project.web.app/")} className="px-4 py-2 bg-[#07B6D5] text-white rounded-lg hover:bg-[#059bb5] transition">
                  Client Demo
                </button>
              </div>

              <div className="p-4">
                <h2 className="text-[24px] font-semibold mb-2 bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text">
                  Project One
                </h2>
                <p className="text-gray-400">This project aims to simplify the process of scheduling solar panel evaluations for Los Angeles residents and city hall employees. The application supports two user roles: Residents: who submit appointment requests, and City Hall Employees: Who manage and optimize those requests.</p>
                <p className="text-gray-400 text-[18px] font-bold mt-3">Username: Admin@solarplexus.com Password: Password123</p>
              </div>
            </div>

            {/* PlatePal Project */}
            <div className="PlatePal lg:w-[50%] md:w-[80%] lg:h-135 md:h-150 relative group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-[#07B6D5] transition-all duration-500">
              <div className="h-[60%] w-full overflow-hidden">
                <img
                  src={PlatePal}
                  alt="PlatePal Project"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="absolute pt-10 inset-0 flex items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                <button onClick={() => window.open("https://github.com/chingu-voyages/V53-tier2-team-25")} className="ml-5 px-4 py-2 bg-[#07B6D5] text-white rounded-lg hover:bg-[#059bb5] transition">
                  GitHub
                </button>
                <button onClick={() => window.open("https://platepal2.netlify.app/")} className="px-4 py-2 bg-[#07B6D5] text-white rounded-lg hover:bg-[#059bb5] transition">
                  Live Demo
                </button>
              </div>

              <div className="p-4">
                <h2 className="text-[24px] font-semibold mb-2 bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text">
                  Project Two
                </h2>
                <p className="text-gray-400">This project focuses on developing a menu scheduling application that allows managers to create and share weekly menus for staff workers. The application ensures employees have clear visibility of the planned meals while addressing specific dietary restrictions and allergies.</p>
              </div>
            </div>
          </div>

          <div className="project-set-one lg:w-300 lg:gap-6 lg:mt-10 flex lg:flex-row lg:justify-between md:w-full md:gap-5 md:mt-8 md:flex-col md:items-center">
            <div className="AiQ lg:w-[50%] md:w-[80%] lg:h-135 md:h-135 md:mb-10 relative group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-[#07B6D5] transition-all duration-500">
              <div className="h-[60%] w-full overflow-hidden">
                <img
                  src={AiQ}
                  alt="AiQ Project"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="absolute pt-10 inset-0 flex items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                <button onClick={() => window.open("https://github.com/chingu-voyages/V54-tier2-team-24")} className="ml-5 px-4 py-2 bg-[#07B6D5] text-white rounded-lg hover:bg-[#059bb5] transition">
                  GitHub
                </button>
                <button onClick={() => window.open("https://getaiq.netlify.app/")} className="px-4 py-2 bg-[#07B6D5] text-white rounded-lg hover:bg-[#059bb5] transition">
                  Live Demo
                </button>
              </div>

              <div className="p-4">
                <h2 className="text-[24px] font-semibold mb-2 bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text">Project Three</h2>
                <p className="text-gray-400">AiQ is an app that enhances the end-users' learning experience by helping them become better at building prompts and improving their proficiency in AI communication by
                  making AI responses more useful, accurate, and efficient while removing the frustration of bad AI responses with structured, meaningful interactions.</p>
              </div>
            </div>

            {/* PR Status Project */}
            <div className="PRStatus lg:w-[50%] md:w-[80%] lg:h-135 md:h-135 md:mb-10 relative group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-[#07B6D5] transition-all duration-500">
              <div className="h-[60%] w-full overflow-hidden">
                <img
                  src={PRStatus}
                  alt="PR Status Project"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="absolute pt-10 inset-0 flex items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                <button onClick={() => window.open("https://github.com/chingu-voyages/V57-tier2-team-23")} className="ml-5 px-4 py-2 bg-[#07B6D5] text-white rounded-lg hover:bg-[#059bb5] transition">
                  GitHub
                </button>
                <button onClick={() => window.open("https://prstatusboard.netlify.app/")} className="px-4 py-2 bg-[#07B6D5] text-white rounded-lg hover:bg-[#059bb5] transition">
                  Live Demo
                </button>
              </div>

              <div className="p-4">
                <h2 className="text-[24px] font-semibold mb-2 bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text">Project Four</h2>
                <p className="text-gray-400">The PR Status Board is a web application built with React and Vite that helps developers and agile teams easily track open and closed Pull Requests in GitHub repositories.
                  By connecting to the GitHub API, users can search any public repository and view key PR data — all displayed through a clean, responsive, and intuitive interface.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section id='contact' className='min-h-screen pt-25 flex flex-col items-center text-center mb-10'>
        <div className="header w-full flex flex-col items-center justify-center">
          <h1 className='font-bold text-[70px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text'>
            Let's Connect!
          </h1>
          <div className='w-20 h-1 bg-gradient-to-r from-[#07B6D5] to-purple-500 mt-2 rounded-full'></div>
            <p className="text-white text-[25px] mt-10">
              I'm always interested in hearing about new projects and opportunities.<br />
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
        </div>

        <div className="flex flex-row gap-20 mt-20 w-full justify-center">
          <div>
            <button
            onClick={handleGitHubLink}
            className="border-1 border-gray-600 rounded-full w-20 h-20 bg-gray-800 flex items-center justify-center text-white text-[40px] hover:text-[#07B6D5] transition-colors cursor-pointer duration-700 ease-in-out hover:shadow-[0_0_50px_rgba(00,100,600,2.5)] hover:border-1 hover:border-blue-500"
            >
              <FaGithubAlt />
            </button>
            <p className="text-white mt-1">GitHub</p>
          </div>

          <div>
            <button 
            onClick={handleLinkedInLink}
            className="border-1 border-gray-600 rounded-full w-20 h-20 bg-gray-800 flex items-center justify-center text-white text-[40px] hover:text-[#07B6D5] transition-colors cursor-pointer duration-700 ease-in-out hover:shadow-[0_0_50px_rgba(00,100,600,2.5)] hover:border-1 hover:border-blue-500"
            >
              <FaLinkedinIn />
            </button>
            <p className="text-white mt-1">LinkedIn</p>
          </div>

          <div>
            <button 
            onClick={handleResumeLink} 
            className="border-1 border-gray-600 rounded-full w-20 h-20 bg-gray-800 flex items-center justify-center text-white text-[40px] hover:text-[#07B6D5] transition-colors cursor-pointer duration-700 ease-in-out hover:shadow-[0_0_50px_rgba(00,100,600,2.5)] hover:border-1 hover:border-blue-500"
            >
              <FaFileAlt />
            </button>
            <p className="text-white mt-1">Resume</p>
          </div>

          <div>
            <button
            onClick={handleEmailLink}
            className="border border-gray-600 rounded-full w-20 h-20 bg-gray-800 flex items-center justify-center text-white text-[40px] hover:text-[#07B6D5] transition-all duration-700 ease-in-out cursor-pointer hover:shadow-[0_0_50px_rgba(7,182,213,0.6)] hover:border-blue-500"
            >
              <FaEnvelope />
            </button>
            <p className="text-white mt-1">Email</p>
          </div>
        </div>

        <div className="chingu-invite flex flex-col items-center gap-5">
          <h1 className='mt-10 mb-5 font-bold text-[40px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text'>
            Interested in Chingu?
          </h1>
          <button onClick={handleChinguLink}
          className='text-[20px] font-bold h-15 flex justify-center items-center gap-2 w-40 font-semi-bold text-white bg-[#07B6D5] rounded-xl transition-shadow hover:shadow-[0_0_50px_rgba(7,182,400,0.5)]'>
            <FaUserFriends/> Click Here!
          </button>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className='border-t border-gray-700 w-full h-25 bg-gray-900 flex flex-col justify-center items-center'>
        <p className='text-white text-[20px]'>
          &copy; {new Date().getFullYear()} [Sokuen Ryan]. Built with React and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;