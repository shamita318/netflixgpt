const VedioeTitle = ({ title, overview }) => {
  return (
    <div className=' absolute pt-[20%] px-24 bg-gradient-to-r from-black w-screen aspect-video '>
    <h1 className='text-6xl font-bold  text-white '> {title}</h1>
    <p className=' text-xl mt-4 w-1/4 text-white '>{overview}</p>       
      <div className='mt-8'>
        <button className='bg-white text-black px-8 py-4 rounded-lg  mx-2 hover:bg-opacity-50'> ▶ Play</button>
        <button className= 'mx-2 bg-gray-700 bg-opacity-70 text-white px-8 py-4 rounded-lg hover:bg-opacity-50'>  More Info</button>
      </div>
    </div>
  )
};

export default VedioeTitle;
