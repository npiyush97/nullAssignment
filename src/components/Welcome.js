import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <div className="navbar-container">
            <nav className="nav-bar">
                <a>
                    <i className="fa-regular fa-waveform-lines"></i>Null Innovations
                </a>
                <Link to="/login" className="login">
                    <a style={{color:'white',marginRight:'5px'}}>
                        Log in
                    </a>
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                </Link>
            </nav>
            <h1>Welcome Page</h1>
        </div>
    );
}
