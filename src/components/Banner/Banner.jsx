import React, { useEffect, useState } from 'react'
import { ImSearch } from "react-icons/im";
import { apiGetUser } from '../../apis/user';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import moment from 'moment';
import { toast } from 'react-toastify';
import { FaUser, FaCalendarAlt, FaHotel, FaTooth, FaQuoteRight } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";


const Banner = () => {
    const [inputValue, setInputValue] = useState('')
    const [user, setUser] = useState(null)
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        setUser(null)
        navigate(`/`)
    }, [params])
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSearchClick = async () => {
        const search = inputValue ? { keyword: inputValue } : undefined;
        // console.log(search)
        if (!search) {
            return toast.error('Missing input')
        }
        setParams(search, { replace: true });
        const response = await apiGetUser(search)
        if (response.success) {
            setUser(response)
        } else toast.error(response.mes)
    }
    return (
        <div>Banner</div>
    )
}

export default Banner