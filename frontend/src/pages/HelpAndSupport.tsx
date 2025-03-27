import React from "react";

const HelpAndSupport: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Help & Support</h1>
            <p style={styles.subheading}>
                We're here to help! If you have any questions or need assistance, please
                explore the options below or contact our support team.
            </p>

            {/* Frequently Asked Questions (FAQs) */}
            <section style={styles.section}>
                <h2 style={styles.sectionHeading}>Frequently Asked Questions</h2>
                <div style={styles.faqContainer}>
                    <div style={styles.faqItem}>
                        <h3 style={styles.faqQuestion}>How do I reset my password?</h3>
                        <p style={styles.faqAnswer}>
                            To reset your password, go to the Login page and click on the
                            "Forgot Password" link. Follow the instructions to reset your
                            password.
                        </p>
                    </div>
                    <div style={styles.faqItem}>
                        <h3 style={styles.faqQuestion}>How do I contact support?</h3>
                        <p style={styles.faqAnswer}>
                            You can contact our support team by emailing{" "}
                            <a href="mailto:Deechep12@gmail.com" style={styles.link}>
                            Deechep12@gmail.com
                            </a>{" "}
                            or calling + (254) 254725127089.
                        </p>
                    </div>
                    <div style={styles.faqItem}>
                        <h3 style={styles.faqQuestion}>How do I update my profile?</h3>
                        <p style={styles.faqAnswer}>
                            You can update your profile by navigating to the Dashboard and
                            clicking on the "Profile" section. From there, you can edit your
                            information.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Support Section */}
            <section style={styles.section}>
                <h2 style={styles.sectionHeading}>Contact Support</h2>
                <p style={styles.contactText}>
                    If you need further assistance, please don't hesitate to reach out to our
                    support team. We're available 24/7 to help you.
                </p>
                <div style={styles.contactMethods}>
                    <div style={styles.contactMethod}>
                        <h3 style={styles.contactMethodHeading}>Email Support</h3>
                        <p>
                            Email us at:{" "}
                            <a href="mailto:Deechep12@gmail.com" style={styles.link}>
                                Deechep12@gmail.com
                            </a>
                        </p>
                    </div>
                    <div style={styles.contactMethod}>
                        <h3 style={styles.contactMethodHeading}>Phone Support</h3>
                        <p>Call us at: + (254) 725127089</p>
                    </div>
                    <div style={styles.contactMethod}>
                        <h3 style={styles.contactMethodHeading}>Live Chat</h3>
                        <p>
                            Click the chat icon in the bottom right corner to start a live chat
                            with our support team.
                        </p>
                    </div>
                </div>
            </section>

            {/* Additional Resources */}
            <section style={styles.section}>
                <h2 style={styles.sectionHeading}>Additional Resources</h2>
                <ul style={styles.resourceList}>
                    <li style={styles.resourceItem}>
                        <a href="/user-guide" style={styles.link}>
                            User Guide
                        </a>
                    </li>
                    <li style={styles.resourceItem}>
                        <a href="/privacy-policy" style={styles.link}>
                            Privacy Policy
                        </a>
                    </li>
                    <li style={styles.resourceItem}>
                        <a href="/terms-of-service" style={styles.link}>
                            Terms of Service
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
};

// Inline styles
const styles = {
    container: {
        maxWidth: "120rem",
        margin: "0 auto",
        padding: "2rem 1rem",
        fontFamily: "Arial, sans-serif",
    },
    heading: {
        fontSize: "2.1rem",
        color: "#2c3e50",
        display : "flex",
        padding: "2rem 1rem",
        justifyContent: "center",
        marginBottom: "2rem",
        bagroundColor: "#3498db",
    },
    subheading: {
        fontSize: "1.2rem",
        color: "#666",
        marginBottom: "2rem",
    },
    section: {
        marginBottom: "5rem",
    },
    sectionHeading: {
        fontSize: "2rem",
        color: "#2c3e50",
        marginBottom: "4rem",
    },
    faqContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    faqItem: {
        backgroundColor: "#f9f9f9",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    faqQuestion: {
        fontSize: "1.25rem",
        color: "#2c3e50",
        marginBottom: "0.5rem",
    },
    faqAnswer: {
        fontSize: "1rem",
        color: "#666",
    },
    contactText: {
        fontSize: "1.1rem",
        color: "#666",
        marginBottom: "1rem",
    },
    contactMethods: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        "@media (min-width: 768px)": {
            flexDirection: "row",
        },
    },
    contactMethod: {
        backgroundColor: "#f9f9f9",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        flex: 1,
    },
    contactMethodHeading: {
        fontSize: "1.25rem",
        color: "#2c3e50",
        marginBottom: "0.5rem",
    },
    resourceList: {
        listStyle: "none",
        padding: 0,
    },
    resourceItem: {
        marginBottom: "0.5rem",
    },
    link: {
        color: "#3498db",
        textDecoration: "none",
    },
};

export default HelpAndSupport;