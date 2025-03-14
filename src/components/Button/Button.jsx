import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({ children, className, handleOnClick, style, type = 'button' }) => {
    return (
        <button
            type={type}
            onClick={handleOnClick}
            className={twMerge(
                clsx('py-2 text-white bg-[#2962ff] rounded-md flex justify-center items-center w-full', className,)
            )}
            style={style}
            >
            {children}
        </button>
    )
}

export default Button