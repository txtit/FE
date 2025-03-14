import React, { useState } from 'react'
import { informations } from '../../utils/common/dataAbout'
import { MdNavigateNext } from "react-icons/md";
import clsx from 'clsx'

const About = () => {
    const [selectedId, setSelectedId] = useState(null);
    const handleToggle = (id) => {
        setSelectedId(prevId => (prevId === id ? null : id));
    }
    return (
        <div className='container border-orange-400 flex justify-center items-center flex-col gap-8 mb-60'>
            <h1 className='text-xl min-[400px]:text-2xl sm:text-3xl text-center font-bold mt-32'>Lưu ý về bảo hành</h1>
            <div className='flex flex-col gap-8 md:w-[80%] w-full'>
                {informations?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='flex flex-col gap-2 bg-[#F4F4F4] rounded-md hover:bg-[#ebebeb]'>
                            {/* title */}
                            <div
                                onClick={() => handleToggle(item.id)}
                                className={clsx('flex flex-row items-center justify-between gap-2 font-bold text-xl py-[16px] mx-[16px] cursor-pointer ',
                                    (selectedId === item.id) && 'border-b-2 border-[#ACACAC]')}>
                                <div
                                    className='flex items-center justify-center gap-2'>
                                    <span
                                        className=''>
                                        {item.icon}
                                    </span>
                                    <div
                                        className='text-base min-[400px]:text-lg sm:text-xl font-medium'>
                                        {item.title}
                                    </div>
                                </div>
                                <span
                                    className=''>
                                    <MdNavigateNext
                                        size={32}
                                        style={{
                                            transform: selectedId === item.id ? 'rotate(-90deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    />
                                </span>
                            </div>

                            {/* context */}
                            {selectedId === item?.id && <div
                                className='flex flex-col gap-4 px-[16px] py-[8px]'>
                                {item?.context?.map((i, idx) => {
                                    return (
                                        <span
                                            className='text-base text-[#424242]'
                                            key={idx}>
                                            {i.content}
                                        </span>
                                    )
                                })}
                            </div>}
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default About