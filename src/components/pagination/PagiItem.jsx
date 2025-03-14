import clsx from 'clsx'
import React from 'react'
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const PagiItem = ({ children }) => {
    const navigate = useNavigate()
    const [params] = useSearchParams()
    const location = useLocation()
    const handlePagination = () => {
        const queries = Object.fromEntries([...params])
        if (Number(children)) queries.page = children
        navigate({
            pathname: location.pathname,
            search: createSearchParams(queries).toString()
        })
        // console.log(queries)
    }
    return (
        <button
            type='button'
            disabled={!Number(children)}
            onClick={handlePagination}
            className={clsx('w-10 h-10 flex justify-center p-4 pb-4 shadow-md', !Number(children) && 'items-start ', Number(children) && 'items-center hover:rounded-md hover:bg-gray-400', +params.get('page') === +children && 'rounded-md bg-slate-400', !+params.get('page') && +children === 1 && 'rounded-md bg-slate-400')}>

            {children}
        </button>
    )
}

export default PagiItem