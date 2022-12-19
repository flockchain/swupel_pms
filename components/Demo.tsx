import React from 'react';
import ReactPlayer from "react-player";

const Demo = () => {

    return(
        <div className='flex flex-col items-center justify-center bg-[#232425] p-4 rounded-lg'>
            <div className='flex flex-col items-center justify-center tracking-wider bg-[#070c16] p-6'>
                <h1 className='pb-8 text-3xl font-bold uppercase text-center'>
                    Demostration of SWUPEL-PMS
                </h1>
                <video src="./pmsdemo4.mp4" controls>

                </video>
            </div>
        </div>
    )
}

export default Demo;