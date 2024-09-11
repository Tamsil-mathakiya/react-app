import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './componets/login'; // Adjust the import path as necessary
import Register from './componets/Register'; // Adjust the import path as necessary
import Account from './componets/acount'; // Adjust the import path as necessary
import { Container } from 'react-bootstrap';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/account" element={isAuthenticated ? <Account /> : <Navigate to="/login" />} />
                </Routes>
            </Container>
        </Router>
    );
}

const Home = () => (
    <div className="text-center">
        <h1>Welcome to User Management App</h1>
        <a href="/login" className="btn btn-primary m-2">Login</a>
        <a href="/register" className="btn btn-secondary m-2">Register</a>
    </div>
);

export default App;
