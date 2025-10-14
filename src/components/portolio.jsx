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
    window.open("/Resume(Tech)OCT2025.pdf", "_blank");
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
      <div className={`h-20 fixed top-0 left-0 w-full flex justify-between items-center bg-[#0F1B2D]/10 backdrop-blur-lg text-white transition-all duration-300 z-50
        ${scrolled ? "border-b border-gray-500 border-opacity-100" : "border-gray-500 border-opacity-0"}
      `}>

        <h1 className="ml-5 font-bold text-[30px] bg-gradient-to-r from-blue-500 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Portfolio
        </h1>
      
        <div className='flex flex-row gap-6 m-5 text-[22px] font-bold'>
          <a href='#home' onClick={handleScroll} className="relative text-white hover:text-[#07B6D5] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#07B6D5] after:transition-all after:duration-500 hover:after:w-full">Home</a>
          <a href='#about' onClick={handleScroll} className="relative text-white hover:text-[#07B6D5] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#07B6D5] after:transition-all after:duration-500 hover:after:w-full">About</a>
          <a href='#projects' onClick={handleScroll} className="relative text-white hover:text-[#07B6D5] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#07B6D5] after:transition-all after:duration-500 hover:after:w-full">Projects</a>
          <a href='#contact' onClick={handleScroll} className="relative text-white hover:text-[#07B6D5] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#07B6D5] after:transition-all after:duration-500 hover:after:w-full">Contact</a>
        </div>
      </div>

      {/* Home Section */}
      <section id='home' className='h-screen flex flex-col items-center text-center'>
        <p className='mt-40 text-[20px] text-gray-400 border-1 border-gray-600 rounded-2xl w-100 h-15 flex items-center justify-center'>
          Frontend Developer at Chingu
        </p>

        <h1 className='h-45 font-bold text-[130px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text'>
          Hi, I'm Zephyrus Koryami
        </h1>

        <p className="w-full text-gray-400 text-[30px] mt-10">
          I craft beautiful, responsive web experiences with modern<br/>
          technologies and design principles
        </p>

        <div className='mt-12 flex flex-row gap-5'>
          <button className="h-15 w-50 font-semibold text-black bg-[#07B6D5] rounded-xl transition-shadow hover:shadow-[0_0_50px_rgba(7,182,400,0.5)]">View Projects</button>
          <button className='border-1 border-[#07B6D5] h-15 w-50 font-semi-bold text-white bg-gray-800 rounded-xl transition-shadow hover:shadow-[0_0_50px_rgba(7,182,400,0.5)]'>Get in Touch</button>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='h-screen pt-20 flex flex-col'>
        <div className="header w-full flex justify-center flex-col items-center">
          <h1 className='font-bold text-[70px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text'>
            About Me
          </h1>
          <div className='w-20 h-1 bg-gradient-to-r from-[#07B6D5] to-purple-500 mt-2 rounded-full'></div>
        </div>

        <div className='about-content flex flex-col w-full text-gray-400 text-[22px]'>
          <div className='about-summary flex flex-row text-gray-400 text-[22px] w-full mt-10 justify-center gap-20'>
            <div className="profile-pic flex justify-center items-end ml-60">
              <img src={ProfilePic} alt="Profile Picture" className="w-100 h-100 rounded-full border-4 border-[#07B6D5] mb-5" />
            </div>
            <div className='about-summary flex flex-col text-gray-400 text-[22px] mt-5 w-180'>
              <p className='text-gray-400 text-[22px] mt-5'>
                I'm a passionate frontend developer at Chingu, where I<br/>
                collaborate with talented developers worldwide to build amazing web applications.
              </p>
              <p className='mt-5'>
                With a keen eye for design and a love for clean code, I transform<br/>
                ideas into engaging digital experiences. I specialize in React, modern CSS, and creating responsive, 
                accessible interfaces that users love.
              </p>
              <p className='mt-5'> 
                When I'm not coding, I'm learning new technologies, contributing to open source, or sharing knowledge
                with the developer community.
              </p>
            </div>
          </div>
          
          <div className="about-skills w-full mt-10 ml-20">
            <div className="skillset-content flex flex-row gap-20 justify-center items-center">
              <div className="skillsets-chingu">
                <div className="header-chingu w-full flex justify-center">
                  <h1 className='font-bold text-[40px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text'>
                    Chingu.io Tech Stack
                  </h1>
                </div>

                <div className="chingu-skills-1 mt-5 flex flex-row gap-3 justify-center items-center w-full">
                  <p className="font-bold border border-white rounded-full w-30 h-10 flex justify-center hover:font-bold hover:text-white hover:bg-gradient-to-r hover:from-[#07B6D5] hover:to-purple-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition duration-500">
                    React
                  </p>
                  <p className="font-bold border border-white rounded-full w-40 h-10 flex justify-center hover:font-bold hover:text-white hover:bg-gradient-to-r hover:from-[#07B6D5] hover:to-purple-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition duration-500">
                    Tailwind CSS
                  </p>
                  <p className="font-bold border border-white rounded-full w-50 h-10 flex justify-center hover:font-bold hover:text-white hover:bg-gradient-to-r hover:from-[#07B6D5] hover:to-purple-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition duration-500">
                    API Integration
                  </p>
                </div>

                <div className="chingu-skills-2 w-full mt-5 flex flex-row gap-3 items-center justify-center">
                  <p className="font-bold border border-white rounded-full w-20 h-10 flex justify-center hover:font-bold hover:text-white hover:bg-gradient-to-r hover:from-[#07B6D5] hover:to-purple-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition duration-500">
                    Git
                  </p>
                  <p className="font-bold border border-white rounded-full w-60 h-10 flex justify-center hover:font-bold hover:text-white hover:bg-gradient-to-r hover:from-[#07B6D5] hover:to-purple-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition duration-500">
                    Responsive Design
                  </p>
                  <p className="font-bold border border-white rounded-full w-45 h-10 flex justify-center hover:font-bold hover:text-white hover:bg-gradient-to-r hover:from-[#07B6D5] hover:to-purple-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition duration-500">
                    Agile/Scrum
                  </p>
                </div>
              </div>

              <div className="skillsets-bottega">
                <div className="header-bottega flex w-full justify-center">
                  <h1 className='font-bold text-[40px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text'>
                      Bottega University
                  </h1>
                </div>

                <div className="bottega-skills-1 font-bold mt-5 flex flex-row gap-3 justify-center items-center w-full">
                  <p className="font-bold border border-white rounded-full w-40 h-10 flex justify-center hover:font-bold hover:text-white hover:bg-gradient-to-r hover:from-[#07B6D5] hover:to-purple-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition duration-500">
                    Full Stack
                  </p>
                  <p className="border border-white rounded-full w-30 h-10 flex justify-center hover:font-bold hover:text-white hover:bg-gradient-to-r hover:from-[#07B6D5] hover:to-purple-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition duration-500">
                    Python
                  </p>
                  <p className="font-bold border border-white rounded-full w-40 h-10 flex justify-center hover:font-bold hover:text-white hover:bg-gradient-to-r hover:from-[#07B6D5] hover:to-purple-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition duration-500">
                    JavaScript
                  </p>
                </div>

                <div className="bottega-skills-2 mt-5 flex flex-row gap-3 justify-center items-center w-full">
                  <p className="font-bold border border-white rounded-full w-20 h-10 flex justify-center hover:font-bold hover:text-white hover:bg-gradient-to-r hover:from-[#07B6D5] hover:to-purple-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition duration-500">
                    SQL
                  </p>
                  <p className="font-bold border border-white rounded-full w-40 h-10 flex justify-center hover:font-bold hover:text-white hover:bg-gradient-to-r hover:from-[#07B6D5] hover:to-purple-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition duration-500">
                    MongoDB
                  </p>
                  <p className="font-bold border border-white rounded-full w-25 h-10 flex justify-center hover:font-bold hover:text-white hover:bg-gradient-to-r hover:from-[#07B6D5] hover:to-purple-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition duration-500">
                    UML
                  </p>  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-boxes flex flex-row justify-center gap-25 mt-40">
          <div className="box1 w-70 h-60 bg-gray-800 rounded-xl flex flex-col justify-center hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-shadow">
            <FaCode className="ml-8 mb-3 text-[#07B6D5] text-[48px]" />
            <h1 className="ml-8 font-bold text-[20px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text">
              Clean Code
            </h1>
            <p className="ml-8 mr-5 text-gray-400 text-[15px]">Writing maintainable, scalable code following best practices and industry standards.</p>
          </div>

          <div className="box2 w-70 h-60 bg-gray-800 rounded-xl flex flex-col justify-center hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-shadow">
            <FaPalette className="ml-8 mb-3 text-[#07B6D5] text-[48px]" />
            <h1 className="ml-8 font-bold text-[20px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text">
              UI/UX Focus
            </h1>
            <p className="ml-8 mr-5 text-gray-400 text-[15px]">Crafting intuitive interfaces with attention to detail and user experience.</p>
          </div>

          <div className="box3 w-70 h-60 bg-gray-800 rounded-xl flex flex-col justify-center hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-shadow">
            <FaBoltLightning className="ml-8 mb-3 text-[#07B6D5] text-[48px]" />
            <h1 className="ml-8 font-bold text-[20px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text">
              Performance
            </h1>
            <p className="ml-8 mr-5 text-gray-400 text-[15px]">Optimizing applications for speed, accessibility, and seamless interactions.</p>
          </div>

          <div className="box4 w-70 h-60 bg-gray-800 rounded-xl flex flex-col justify-center hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-shadow">
            <FaPeopleGroup className="ml-8 mb-3 text-[#07B6D5] text-[48px]" />
            <h1 className="ml-8 font-bold text-[20px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text">
              Collaboration
            </h1>
            <p className="ml-8 mr-5 text-gray-400 text-[15px]">Working effectively in teams through Chingu and other collaborative platforms.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='h-screen pt-25 flex flex-col items-center text-center mt-120'>
        <div className="header w-full flex justify-center flex-col items-center">
          <h1 className='font-bold text-[70px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text'>
            Featured Projects
          </h1>
          <div className='w-20 h-1 bg-gradient-to-r from-[#07B6D5] to-purple-500 mt-2 rounded-full'></div>
          <p className="text-white text-[20px] mt-20">
            A selection of projects showcasing my skills in frontend development and problem-solving.
          </p>
        </div>

        <div className="w-full flel justify-center items-center projects-showcase flex flex-col">
          <div className="w-300 project-set-one gap-6 mt-10 flex flex-row justify-between">
            {/* SolarPlexus Project Section */}
            <div className="SolarPlexus w-[50%] h-135 relative group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-[#07B6D5] transition-all duration-500">
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
            <div className="PlatePal w-[50%] h-135 relative group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-[#07B6D5] transition-all duration-500">
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

          <div className="w-300 project-set-two gap-6 mt-10 flex flex-row justify-between">
            {/* AiQ Project Section */}
            <div className="AiQ w-[50%] h-135 relative group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-[#07B6D5] transition-all duration-500">
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
            <div className="PRStatus w-[50%] h-135 relative group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-[#07B6D5] transition-all duration-500">
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
      <section id='contact' className='h-screen pt-25 flex flex-col items-center text-center mt-170'>
        <div className="header w-full flex flex-col items-center justify-center">
          <h1 className='font-bold text-[70px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text'>
            Let's Connect
          </h1>
          <div className='w-20 h-1 bg-gradient-to-r from-[#07B6D5] to-purple-500 mt-2 rounded-full'></div>
            <p className="text-white text-[25px] mt-10">
              I'm always interested in hearing about new projects and opportunities.<br />
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

        <div className="flex flex-row gap-20 mt-20 w-full justify-center">
          <button onClick={handleGitHubLink}
          className="border-1 border-gray-600 rounded-full w-20 h-20 bg-gray-800 flex items-center justify-center text-white text-[40px] hover:text-[#07B6D5] transition-colors cursor-pointer duration-700 ease-in-out hover:shadow-[0_0_50px_rgba(00,100,600,2.5)] hover:border-1 hover:border-blue-500">
            <FaGithubAlt />
          </button>

          <button onClick={handleLinkedInLink}
          className="border-1 border-gray-600 rounded-full w-20 h-20 bg-gray-800 flex items-center justify-center text-white text-[40px] hover:text-[#07B6D5] transition-colors cursor-pointer duration-700 ease-in-out hover:shadow-[0_0_50px_rgba(00,100,600,2.5)] hover:border-1 hover:border-blue-500">
            <FaLinkedinIn />
          </button>

          <button onClick={handleResumeLink} 
          className="border-1 border-gray-600 rounded-full w-20 h-20 bg-gray-800 flex items-center justify-center text-white text-[40px] hover:text-[#07B6D5] transition-colors cursor-pointer duration-700 ease-in-out hover:shadow-[0_0_50px_rgba(00,100,600,2.5)] hover:border-1 hover:border-blue-500">
            <FaFileAlt />
          </button>

          <button
            onClick={handleEmailLink}
            className="border border-gray-600 rounded-full w-20 h-20 bg-gray-800 flex items-center justify-center text-white text-[40px] hover:text-[#07B6D5] transition-all duration-700 ease-in-out cursor-pointer hover:shadow-[0_0_50px_rgba(7,182,213,0.6)] hover:border-blue-500">
            <FaEnvelope />
          </button>
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
      
      <footer className='border-t border-gray-700 w-full h-25 bg-gray-900 flex flex-col justify-center items-center'>
        <p className='text-white text-[20px]'>
          &copy; {new Date().getFullYear()} [Sokuen Ryan]. Built with React and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;