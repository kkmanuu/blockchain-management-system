import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FaPalette } from "react-icons/fa";

export const Header: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [theme, setTheme] = useState("light"); 

    // Define color schemes
    const themes = {
        light: {
            backgroundColor: "#ffffff",
            textColor: "#000000",
            headerColor: "#3498db",
        },
        dark: {
            backgroundColor: "#1a1a1a",
            textColor: "#ffffff",
            headerColor: "#2c3e50", 
        },
        pastel: {
            backgroundColor: "#f4f4f9",
            textColor: "#333333", 
            headerColor: "#a8d5e2", 
        },
    };

    // Cycle through themes
    const toggleTheme = () => {
        const themeKeys = Object.keys(themes);
        const currentIndex = themeKeys.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themeKeys.length;
        setTheme(themeKeys[nextIndex]);
    };

    // Apply theme styles to the body
    useEffect(() => {
        const currentTheme = themes[theme];
        document.body.style.backgroundColor = currentTheme.backgroundColor;
        document.body.style.color = currentTheme.textColor;
    }, [theme]);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <header
            className="header"
            style={{
                backgroundColor: themes[theme].headerColor, // Header background color
                color: "white", // Header text color
                padding: "1rem 2rem", // Increased horizontal padding
                width: "100%",
                position: "fixed",
                top: 0,
                zIndex: 1000,
                display: "flex",
                // backgroundColor:"black",
                justifyContent: "space-between", // Space between left and right content
                alignItems: "center", // Center items vertically
            }}
        >
            {/* Left side of the header */}
            <div className="header-left">
                <h1 style={{ margin: 0 }}>Blockchain Finance Tracker</h1>
            </div>

            {/* Right side of the header */}
            <div className="header-right" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                <nav className="header-nav" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    {user ? (
                        <>
                            <Link to="/homepage" style={{ color: "white", textDecoration: "none" }}>
                                Home
                            </Link>
                            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                                Dashboard
                            </Link>
                            <Link to="/categories" style={{ color: "white", textDecoration: "none" }}>
                                Categories
                            </Link>
                            <Link to="/helpandsupport" style={{ color: "white", textDecoration: "none" }}>
                                Help & Support
                            </Link>
                            <div className="header-user" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <span>Welcome, {user.name}</span>
                                <button
                                    onClick={handleLogout}
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "1px solid white",
                                        color: "white",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                                Home
                            </Link>
                            <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
                                Login
                            </Link>
                            <Link to="/register" style={{ color: "white", textDecoration: "none" }}>
                                Register
                            </Link>
                        </>
                    )}
                </nav>

                {/* Theme Switcher with FaPalette icon */}
                <div
                    onClick={toggleTheme}
                    style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        padding: "0.5rem",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "5px",
                    }}
                >
                    <FaPalette size={24} color="white" />
                </div>
            </div>
        </header>
    );
};

export default Header;