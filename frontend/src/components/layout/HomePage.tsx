import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import blockchainImage from "../images/Blockchain.jpg";

const HomePage: React.FC = () => {
    const { user, isLoading } = useAuth(); // Get user and loading state from AuthContext

    if (isLoading) {
        return <div>Loading...</div>; // Show a loading state while fetching user data
    }

    return (
        <div
            style={{
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#f4f4f9",
                color: "#333",
                margin: 0,
                padding: 0,
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Hero Section */}
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                    padding: "4rem 1rem",
                    backgroundColor: "#3498db",
                    color: "white",
                }}
            >
                {/* Personalized Welcome Message */}
                <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                    Welcome, {user?.name || "User"}!
                </h1>
                <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
                    Manage your finances securely with blockchain.
                </p>
                <Link
                    to="/"
                    style={{
                        backgroundColor: "#2ecc71",
                        color: "white",
                        padding: "0.75rem 1.5rem",
                        borderRadius: "5px",
                        textDecoration: "none",
                        fontSize: "1rem",
                    }}
                >
                    Get Started
                </Link>
            </div>

            {/* About Blockchain Section */}
            <div
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "2rem 1rem",
                }}
            >
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                    What is Blockchain?
                </h2>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2rem",
                        width: "100%",
                    }}
                >
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.6", textAlign: "center" }}>
                        Blockchain is a decentralized ledger technology that ensures
                        transparency and security in financial transactions. It eliminates
                        the need for intermediaries, reducing costs and increasing trust.
                    </p>
                    <img
                        src={blockchainImage}
                        alt="Blockchain"
                        style={{
                            width: "100%",
                            maxWidth: "400px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                </div>
            </div>

            {/* Features Section */}
            <div
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    padding: "2rem 1rem",
                }}
            >
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}>
                    Why Choose Us?
                </h2>
                <ul
                    style={{
                        listStyle: "none",
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        width: "100%",
                        "@media (min-width: 768px)": {
                            flexDirection: "row",
                        },
                    }}
                >
                    <li
                        style={{
                            backgroundColor: "white",
                            padding: "1rem",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            textAlign: "center",
                            flex: 1,
                        }}
                    >
                        Secure and tamper-proof transactions
                    </li>
                    <li
                        style={{
                            backgroundColor: "white",
                            padding: "1rem",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            textAlign: "center",
                            flex: 1,
                        }}
                    >
                        Real-time tracking of finances
                    </li>
                    <li
                        style={{
                            backgroundColor: "white",
                            padding: "1rem",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            textAlign: "center",
                            flex: 1,
                        }}
                    >
                        Decentralized and transparent
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;