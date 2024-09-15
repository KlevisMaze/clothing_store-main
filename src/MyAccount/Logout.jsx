import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider'; // Import the context

const Logout = () => {
    const { logout } = useContext(AuthContext); // Access the logout function

    const handleLogout = () => {
        logout(); // Call the logout function when button is clicked
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
