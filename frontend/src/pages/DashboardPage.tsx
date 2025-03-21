import React from "react";
import { useAuth } from "../contexts/AuthContext";
import TransactionManager from "../components/transactions/TransactionManager";
// import BlockchainStats from "../components/blockchain/BlockchainStats";

const DashboardPage: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="dashboard-page">
            <div className="dashboard-header">
                {/* <h1>Welcome, {user?.name}!</h1>
                <p className="subtitle">Manage your finances securely with blockchain</p> */}
            </div>

            <div className="dashboard-content">
                 {/* Display blockchain-related stats */}
                <TransactionManager /> {/* Manage transactions */}
            </div>
        </div>
    );
};

export default DashboardPage;