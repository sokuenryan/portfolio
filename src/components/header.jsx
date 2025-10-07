
const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-gray-800 text-white'>
      <h1 className="ml-5 font-bold text-[50px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Portfolio</h1>
      <div className='flex flex-row gap-4 m-5'>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
        <button className='bg-blue-500 px-3 py-1 rounded'>Get In Touch</button>
      </div>
    </div>
  );
};

export default Header;