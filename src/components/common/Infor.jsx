import React from 'react'
import { Intro } from '../../utils/common/dataIntro'

const Infor = () => {
    return (
        <div className='py-[50px] container lg:px-0 md:px-28 sm:px-14'>
            <h1 className='text-3xl font-bold text-center mb-[32px] mt-28'>Tại sao chọn chúng tôi?</h1>
            <div className='flex lg:flex-row flex-col justify-around items-center gap-12'>
                {Intro?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='flex flex-col items-center justify-center gap-4'>
                            <img
                                alt='thumb'
                                src={item?.image}
                                className='w-[100px] h-[100px]' />
                            <div className='flex flex-col gap-2 items-center justify-center'>
                                <div className='text-lg font-bold text-center'>{item?.title}</div>
                                <span className='text-base text-center'>{item?.content}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Infor