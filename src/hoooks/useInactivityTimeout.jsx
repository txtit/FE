import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useInactivityTimeout = (timeout = 4800000) => { // 8 hours
    const navigate = useNavigate();

    const handleLogout = useCallback(() => {
        localStorage.removeItem('user');
        navigate('/login');
        toast.info('You have been logged out due to inactivity');
    }, [navigate]);

    useEffect(() => {
        let timeoutId;

        const resetTimeout = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleLogout, timeout);
        };

        const handleActivity = () => {
            resetTimeout();
        };

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);
        window.addEventListener('scroll', handleActivity);
        window.addEventListener('click', handleActivity);

        resetTimeout();

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
            window.removeEventListener('scroll', handleActivity);
            window.removeEventListener('click', handleActivity);
        };
    }, [handleLogout, timeout]);

    return null;
};

export default useInactivityTimeout;
