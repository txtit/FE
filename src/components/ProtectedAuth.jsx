import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedAuth = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            toast.error('token is not available ! Please login again');
        }
    }, [navigate]);

    return <>{children}</>;
};

export default ProtectedAuth;
