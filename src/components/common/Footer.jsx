import React from 'react';
import {
    FaYoutube,
    FaFacebook,
    FaTiktok,
    FaInstagram,
} from "react-icons/fa";
import { footer } from '../../utils/common/dataFooter';

const Footer = () => {

    return (
        <div className='border-t-2 mt-[50px]'>
            <div className='container py-[32px]'>
                {<div
                    className='flex lg:flex-row flex-col lg:gap-0 gap-2 items-center justify-between'
                >
                    <div className='flex flex-col items-start gap-1 text-xs text-[#59595]'>
                        <span>{footer?.copyright}</span>
                        <span>&copy;{footer?.copyright1}</span>
                    </div>
                    <div className='flex flex-col justify-center lg:items-start items-center gap-2'>
                        <h2 className='text-xs'>Connect With Us</h2>
                        <div className='flex items-center justify-center gap-4'>
                            <span className='cursor-pointer hover:text-gray-600'><FaYoutube size={28} /></span>
                            <span className='cursor-pointer hover:text-gray-600'><FaFacebook size={28} /></span>
                            <span className='cursor-pointer hover:text-gray-600'><FaTiktok size={28} /></span>
                            <span className='cursor-pointer hover:text-gray-600'><FaInstagram size={28} /></span>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Footer