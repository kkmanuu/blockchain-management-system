import React from "react";
import { useAuth } from "../contexts/AuthContext";
import TransactionManager from "../components/transactions/TransactionManager";
// import BlockchainStats from "../components/blockchain/BlockchainStats";

const DashboardPage: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="dashboard-page">
            <div className="dashboard-header">
            <h1 style={{ fontSize: "2.5rem", marginTop: "2rem", marginBottom: "5rem", padding: "1rem 1rem" }}>
                   
                </h1>
            </div>

            <div className="dashboard-content">
                {/* Display blockchain-related stats */}
                <TransactionManager /> {/* Manage transactions */}
            </div>
        </div>
    );
};

export default DashboardPage;