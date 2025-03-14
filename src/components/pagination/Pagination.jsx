import React, { memo } from 'react'
import { useSearchParams } from 'react-router-dom'
import PagiItem from './PagiItem'
import usePagination from '../../hoooks/usePagination'

const Pagination = ({ totalCount }) => {
    const [params] = useSearchParams()
    const pagination = usePagination(totalCount, +params.get('page') || 1)

    const range = () => {
        const currentPage = +params.get('page')
        const pageSize = Math.min(+import.meta.env.VITE_REACT_APP_LIMIT, totalCount) || 10
        const start = Math.min(((currentPage - 1) * pageSize) + 1, totalCount)
        const end = Math.min(currentPage * pageSize, totalCount)

        return `${start} đến ${end}`
    }
    return (
        <div className='flex w-full justify-between items-center'>
            {!+params.get('page')
                ? <span className='text-sm italic'>{`Hiển thị mục từ ${Math.min(totalCount, 1)} đến ${Math.min(+import.meta.env.VITE_REACT_APP_LIMIT, totalCount)} trong tổng số ${totalCount} mục`}</span>
                : ''}

            {+params.get('page')
                ? <span className='text-sm italic'>{`Hiển thị mục từ ${range()} của ${totalCount} mục`}</span>
                : ''}
            <div className='flex items-center gap-2'>
                {pagination?.map((el, index) => (
                    <PagiItem key={index}>
                        {el}
                    </PagiItem>
                ))}
            </div>
        </div>
    )
}

export default memo(Pagination)