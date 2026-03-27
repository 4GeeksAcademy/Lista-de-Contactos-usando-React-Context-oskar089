import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-light bg-light mb-3 px-3">
            {location.pathname !== "/" && (
                <Link term to="/" className="navbar-brand mb-0 h1">
                    <i className="fas fa-chevron-left me-2"></i>
                    Mi Agenda personal
                </Link>
            )}
                        
        </nav>
    );
};