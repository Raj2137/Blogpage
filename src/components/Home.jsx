import React from 'react';
import fo from '../assets/images/yo.png';

import mo from '../assets/images/heroImage.png';

const Home = () => {
  return (
    <div className=' w-full h-screen  bg-gradient-to-br from-blue-400 to-slate-500  max-w-screen-full'>
    <div className='flex justify-center flex-col w-25 h-50  max-w-screen-sm py-40  mr-56 ml-96'>
        <div className='ml-96 w-80'>
          <img src={fo} alt='laptopimg' width={380} className=' rounded-t-lg'/>
          <div className='bg-white rounded-b-lg  ml-25'>
            <div className='flex justify-center flex-col pl-5 pr-2 py-4  h-fit'>
            <div className=' bg-orange-500 w-32 text-white uppercase rounded-lg'><p className='mx-3'>Technology</p></div>

            <p className='pt-4 font-semibold'>How I build Web devlopment Challenges Website</p>
                 <p className='pt-1'>If you are looking for an inspiration build your own project...</p>
            </div>
            <div className='flex row px-5 pb-4 pt-1 rounded-b-lg'>
                <img src={mo} alt='' width={40} className=' rounded-full'/>
                <div className='flex-col pl-2'>
                    <p className=' font-semibold text-sm'>Yash Chopra</p>
                    <p className=' text-xs'>4 h ago</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Home