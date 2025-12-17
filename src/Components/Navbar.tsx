// import React from 'react'

const Navbar = () => {
  return (
    <div className='min-h-15 w-full flex items-center justify-around bg-zinc-100 flex-wrap gap-4 py-5'>
        <div>
            <span className='text-xl text-red-500 font-extrabold'>food</span>
            <span className='text-xl text-yellow-500 font-extrabold'>wagon</span>
        </div>
        <div className='text-center'>
            <span className='text-black font-bold'>Deliver to : <i className="ri-map-pin-2-fill text-amber-400"></i></span>
            <span className='ml-3'>Current Location </span>
            <span className='font-bold ml-1'>M.P Nagar Bhopal Ward No.16</span>
        </div>
        <div className='flex items-center'>
          <i className="ri-search-line text-amber-500 text-2xl mr-3 font-bold"></i>
          <input className='w-2/4 border border-zinc-800 text-black px-2 py-1 rounded focus:border-zinc-900 focus:right-2' placeholder='Search Any Food..' type="text" name="searchfood" id="searchbar"/>
          <button className='px-4 py-1 text-amber-500 font-bold ml-6 shadow-[0px_13px_26px_-4px] rounded shadow-amber-500 cursor-pointer transition ease hover:scale-105'><i className="ri-user-fill fill-amber-400 mr-1"></i>Login</button>
        </div>
    </div>
  )
}

export default Navbar