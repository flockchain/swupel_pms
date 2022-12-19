import React from 'react';

const Solutions = () => {

    return(
        <div className='flex flex-col items-center justify-center 2xl:w-[600px] bg-[#232425] p-4 rounded-lg'>
            <div className='flex flex-col items-center justify-center tracking-wider bg-[#070c16] p-6'>
                <h1 className='pb-8 text-3xl font-bold uppercase text-center'>
                    Solutions we provide
                </h1>
                <p className='text-lg font-bold text-center'>
                    With our Proof of Location Blockchain you can...
                    <br/>
                    <br/>* Manage all rented or owned Properties/Lands
                    <br/>* Make transactions in the native currency PMS-Coin
                    <br/>* Benefit from the provided security as government and citizen
                <br/><br/>
                    Our Proof of Location Protocol is basically a Proof of Stake Protocol that is modified and improved to fit perfectly for our Use-Case
                    </p>
                <img src="6316.jpg" className='w-[400px] h-[250px] pt-8 pb-4'/>
            </div>
        </div>
    )
}

export default Solutions;