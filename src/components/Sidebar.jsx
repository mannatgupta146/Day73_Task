import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-[#272135] text-white/70 sidebar w-[15%] h-[97vh] p-3 border border-[#453f55] rounded-2xl flex flex-col gap-2'>
      <div className='flex justify-between'>
        <div className="s1left">
            <h1 className='text-xl text-white/90'><i className="ri-tv-line text-[#AD46FF]"></i> Drameeo</h1>
        </div>
        <div className="s1right">
            <i className="ri-menu-unfold-3-line text-xl"></i>
        </div>
      </div>

      <div className='w-full h-full flex flex-col justify-between mt-2'>
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3 border-b border-gray-600 pb-7'>
                <h3><i class="ok ri-home-4-line"></i> Home</h3>
                <h3><i class="ok ri-compass-3-line"></i> Explore</h3>
                <h3><i class="ok ri-stack-line"></i> Genres</h3>
                <h3><i class="ok ri-bookmark-line"></i> Favourites</h3>
            </div>

            <div className='flex flex-col gap-3 border-b border-gray-600 pb-7'>
                <h3><i class="ok ri-play-large-line"></i> Continue Watching</h3>
                <h3><i class="ok ri-time-line"></i> Recently Added</h3>
                <h3><i class="ok ri-folders-line"></i> My Collections</h3>
                <h3><i class="ok ri-download-line"></i> Downloads</h3>
            </div>

            <div>
                <h2><i class="ok ri-settings-3-line"></i> Settings</h2>
            </div>

        </div>
        <div>
            <h2><i class="ok ri-logout-circle-r-line"></i>Logout</h2>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
