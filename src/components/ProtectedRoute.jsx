import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem('role');
        if (role!= 'admin') {
            navigate('/login');
            toast.error('Please login with an Administrator');
        }
    }, [navigate]);

    return <>{children}</>;
};

export default ProtectedRoute;
