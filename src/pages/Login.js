import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to validate the user and log them in
        // If successful, navigate to the dashboard
        navigate('/dashboard/home');
    }

    return (
        <div className="container">
            <img src="picture/login.jpg" alt="Telemedicine System Logo" className="logo"/>
            <h2>Telemedicine System</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="username" placeholder="Username" required />
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder="Password" required />
                </div>
                
                <div className="form-group">
                    <button type="submit"><Link to="/addmindash">Login</Link></button>
                </div>
                <div className="links">
                    <Link to="/dashboard">PatientAccount</Link>
                    <Link to="/forgot-password">Forgot Password</Link>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;