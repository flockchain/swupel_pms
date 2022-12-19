import React from 'react';

const Problems = () => {

    return(
        <div className='flex flex-col items-center justify-center 2xl:w-[800px] bg-[#232425] p-4 rounded-lg'>
            <div className='flex flex-col items-center justify-center tracking-wider bg-[#070c16] p-6'>
                <h1 className='pb-2 text-3xl font-bold uppercase text-center'>
                    Problems to be solved
                </h1>
                <p className='text-lg font-bold text-center pb-8'>
                    <br/>* Zoning Fraud
                    <br/>* Various kinds of corruption caused by a current lack of binding and transparency
                    <br/>* Limited access to the Land Registry
                </p>
                <img src="5283.jpg" className='w-[340px] h-[170px]'/>
            </div>
        </div>
    )
}

export default Problems;