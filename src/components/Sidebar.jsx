import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-[#272135] text-white/70 sidebar w-[15%] h-[97vh] p-3 border border-[#453f55] rounded-2xl flex flex-col gap-2'>
      <div className='flex justify-between'>
        <div className="s1left">
            <h1>Drameeo</h1>
        </div>
        <div className="s1right">
            mwnu
        </div>
      </div>

      <div className='w-full h-full flex flex-col justify-between'>
        <div className='flex flex-col gap-5'>
            <div>
                <h3>Home</h3>
                <h3>Explore</h3>
                <h3>Genres</h3>
                <h3>Favourites</h3>
            </div>

            <div>
                <h3>Continue Watching</h3>
                <h3>Recently Added</h3>
                <h3>My Collections</h3>
                <h3>Downloads</h3>
            </div>

            <div>
                <h2>Settings</h2>
            </div>

        </div>
        <div>
            <h2>Logout</h2>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
