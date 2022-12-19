import React from 'react';
import { Link } from 'react-scroll/modules'

const Greetings = () => {

    return(
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center tracking-wider text-center'>
                <h1 className='pb-4 text-5xl font-bold'>
                    SWUPEL-PMS
                </h1>
                <h3 className='pb-8 text-2xl font-bold'>
                    Blockchain for Land-Registry
                </h3>
            </div>
            <img src="GreetingsLogo.png" className='w-[280px] h-[200px]'/>
            <div className='p-10'>
                <button className='p-2 w-[180px] text-xq cursor-pointer duration-300 ease-in shadow-gray-500/50 hover:scale-[1.05]'>
                    <Link activeClass="active" to="demo" spy={true} smooth={true} offset={50} duration={3500}>
                        Visit Demo
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Greetings;