const Portfolio = () => {

  return (
    <div className='portfolio w-full h-full bg-[#0F1B2D] '>
      {/* HEADER */}
      <div className='fixed top-0 left-0 w-full flex flex-row justify-between items-center bg-[#0F1B2D] text-white z-50'>
      <h1 className="ml-5 font-bold text-[30px] bg-gradient-to-r from-blue-500 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Portfolio</h1>
      
      <div className='flex flex-row gap-6 m-5 text-[22px] font-bold'>
        <a href='#home' className="relative text-white hover:text-[#07B6D5] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#07B6D5] after:transition-all after:duration-500 hover:after:w-full">Home</a>
        <a href='#about' className="relative text-white hover:text-[#07B6D5] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#07B6D5] after:transition-all after:duration-500 hover:after:w-full">About</a>
        <a href='#projects' className="relative text-white hover:text-[#07B6D5] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#07B6D5] after:transition-all after:duration-500 hover:after:w-full">Projects</a>
        <a href='#contact' className="relative text-white hover:text-[#07B6D5] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#07B6D5] after:transition-all after:duration-500 hover:after:w-full">Contact</a>
      </div>
      </div>

      {/* Home Section */}
      <section id='home' className='h-screen flex flex-col items-center text-center'>
        <p className='mt-40 text-gray-400 border-1 border-gray-600 rounded-2xl w-70 h-12 flex items-center justify-center'>
          Frontend Developer at [ Company ]
        </p>

        <h1 className='mt-4 h-35 font-bold text-[90px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text'>
          Hi, I'm [Your Name]
        </h1>

        <p className="w-full text-gray-400 text-[28px]">
          I craft beautiful, responsive web experiences with modern<br/>
          technologies and design principles
        </p>

        <div className='m-12 flex flex-row gap-5'>
          <button className="h-12 w-40 font-semibold text-black bg-[#07B6D5] rounded-xl transition-shadow hover:shadow-[0_0_50px_rgba(7,182,400,0.5)]">View Projects</button>
          <button className='border-1 border-[#07B6D5] h-12 w-40 font-semi-bold text-white bg-gray-800 rounded-xl transition-shadow hover:shadow-[0_0_50px_rgba(7,182,400,0.5)]'>Get in Touch</button>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='h-screen flex flex-row mt-20'>
        <div className='flex flex-col text-gray-400 text-[22px] mt-5'>
          <h1 className='font-bold text-[40px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text'>
            About Me
          </h1>
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
        
        <div className='w-2/5 flex justify-center'>
          <h1 className='font-bold text-[40px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text'>
            Tech Stack
          </h1>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='h-screen flex flex-col items-center text-center mt-20'>
        <h1 className='font-bold text-[40px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text'>
          My Projects
        </h1>

        <div className='grid grid-cols-3 gap-6 mt-10 w-4/5'>
          <div className='bg-gray-800 p-5 rounded-lg hover:shadow-lg transition-shadow'>
            <h2 className='text-[24px] font-semibold mb-2'>Project One</h2>
            <p className='text-gray-400'>A brief description of Project One.</p>
          </div>

          <div className='bg-gray-800 p-5 rounded-lg hover:shadow-lg transition-shadow'>
            <h2 className='text-[24px] font-semibold mb-2'>Project Two</h2>
            <p className='text-gray-400'>A brief description of Project Two.</p>
          </div>

          <div className='bg-gray-800 p-5 rounded-lg hover:shadow-lg transition-shadow'>
            <h2 className='text-[24px] font-semibold mb-2'>Project Three</h2>
            <p className='text-gray-400'>A brief description of Project Three.</p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='h-screen flex flex-col items-center text-center'>
        <h1 className='font-bold text-[40px] bg-gradient-to-r from-[#07B6D5] to-purple-500 inline-block text-transparent bg-clip-text'> Contact Me</h1>
        
        <p className='w-3/5 text-gray-400 text-[22px] mt-5'>
          I'm always open to discussing new projects or opportunities. Feel free to reach out!
        </p>

        <button className='mt-5 h-12 w-40 font-semi-bold text-white bg-[#07B6D5] rounded-xl transition-shadow hover:shadow-[0_0_50px_rgba(7,182,400,0.5)]'>
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default Portfolio;