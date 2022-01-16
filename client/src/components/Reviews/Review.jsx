import React from 'react'
import { GiSelfLove } from 'react-icons/gi'
import { BiLike, BiDislike } from 'react-icons/bi'
import { BsFillShareFill } from 'react-icons/bs'


function Review() {
    return (
        <>
            <div className="border-gray-900 border-2 px-3 py-3 text-base font-semibold">
                <div className="flex justify-between py-3">
                    <div className='flex justify-between w-16'>
                        <div className='w-5 rounded-full'>
                            <img src="https://th.bing.com/th/id/OIP.UArdaKoT2iX4itsKXSFGqgHaIK?w=200&h=220&c=7&r=0&o=5&dpr=1.25&pid=1.7" className="w-full shadow-md" alt="" />
                        </div>
                        <div>User</div>
                    </div>
                    <div className="flex justify-between space-x-2">
                        <div className='text-2xl text-red-500'>
                            <GiSelfLove />
                        </div>
                        <div>
                            100%
                        </div>
                    </div>
                </div>
                <div className='overflow-hidden pb-20'>
                    #SuperDirection #GreatActing #Grat VFX best action ever seen
                </div>

                <div>
                    <div className="flex justify-between">
                        <div className='text-xl flex justify-between space-x-1 w-4'>
                            <div>
                                <BiLike />
                            </div>
                            <div className='text-base font-normal'>
                                2M
                            </div>
                            <div className='pl-8'>
                                <BiDislike />
                            </div>
                        </div>
                        <div className="flex justify-between space-x-3">
                            <div className="text-gray-500">
                                30 Days ago
                            </div>
                            <div className="pt-1">
                                <BsFillShareFill/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Review
