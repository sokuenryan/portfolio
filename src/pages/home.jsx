

const Home = () => {
  return (
    <div className='home w-full h-screen flex flex-col items-center text-center bg-gray-800'>
      <p className='text-gray-400 border-1 border-gray-600 rounded-2xl w-60 h-9 flex items-center justify-center'>
        Frontend Developer at Chingu
      </p>

      <h1 className='m-4 leading-[60px] font-bold text-[50px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
        Building Digital<br/> Experiences
      </h1>

      <p className="w-full text-white">
        Frontend developer passionate about crafting elegant, user-focused<br />
        web applications with modern technologies and best practices
      </p>

      <div className='m-10 flex flex-row gap-5'>
        <button className='w-35 font-semi-bold text-black bg-[#07B6D5] rounded-2xl'>View Projects</button>
        <button className='h-9 border-1 border-[#07B6D5] w-35 font-semi-bold text-white bg-gray-800 rounded-2xl'>Get in Touch</button>
      </div>
    </div>
  );
};

export default Home;