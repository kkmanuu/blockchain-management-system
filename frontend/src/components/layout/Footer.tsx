import React from "react";

const Footer: React.FC = () => {
    return (
        <footer
            style={{
                backgroundColor: "#2c3e50",
                color: "white",
                padding: "2rem 1rem",
                marginTop: "2rem",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    gap: "2rem",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {/* About Section */}
                <div style={{ flex: 1, minWidth: "200px" }}>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>About Us</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                        We are a blockchain-based finance management platform dedicated to
                        providing secure, transparent, and efficient financial solutions.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div style={{ flex: 1, minWidth: "200px" }}>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Quick Links</h3>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li style={{ marginBottom: "0.5rem" }}>
                            <a
                                href="/homepage"
                                style={{ color: "white", textDecoration: "none", fontSize: "0.9rem" }}
                            >
                                Home
                            </a>
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            <a
                                href="/"
                                style={{ color: "white", textDecoration: "none", fontSize: "0.9rem" }}
                            >
                                Dashboard
                            </a>
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            <a
                                href="/blockchain-stats"
                                style={{ color: "white", textDecoration: "none", fontSize: "0.9rem" }}
                            >
                                Blockchain Stats
                            </a>
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            <a
                                href="/helpandsupport"
                                style={{ color: "white", textDecoration: "none", fontSize: "0.9rem" }}
                            >
                                Help & Support
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div style={{ flex: 1, minWidth: "200px" }}>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Contact Us</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                        Email: Deechep12@gmail.com

                        <br />
                        Phone: + (254) 725127089
                        <br />
                        Address: 1001 Nairobi, Kenya
                    </p>
                </div>

                {/* Social Media Section */}
                <div style={{ flex: 1, minWidth: "200px" }}>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Follow Us</h3>
                    <div
                        style={{
                            display: "flex",
                            gap: "1rem",
                            justifyContent: "center",
                        }}
                    >
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: "none" }}
                        >
                            <i className="fab fa-twitter" style={{ fontSize: "1.5rem" }}></i>
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: "none" }}
                        >
                            <i className="fab fa-facebook" style={{ fontSize: "1.5rem" }}></i>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: "none" }}
                        >
                            <i className="fab fa-linkedin" style={{ fontSize: "1.5rem" }}></i>
                        </a>
                       
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div
                style={{
                    marginTop: "2rem",
                    borderTop: "1px solid #34495e",
                    paddingTop: "1rem",
                    fontSize: "0.8rem",
                }}
            >
                <p>
                    &copy; {new Date().getFullYear()} Blockchain Finance Management. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;