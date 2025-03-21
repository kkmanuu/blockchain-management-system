// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchBlockchainStats } from "../../api/blockchainApi"; // Mock API function

// interface BlockchainStatsData {
//     totalTransactions: number;
//     totalAssets: number;
//     walletBalance: number;
//     pendingTransactions: number;
//     networkFees: number;
//     blockHeight: number;
// }

// const BlockchainStats: React.FC = () => {
//     // Fetch blockchain stats
//     const { data: stats, isLoading, isError } = useQuery<BlockchainStatsData>(
//         ["blockchainStats"],
//         fetchBlockchainStats
//     );

//     if (isLoading) {
//         return <div>Loading blockchain stats...</div>;
//     }

//     if (isError) {
//         return <div>Error loading blockchain stats</div>;
//     }

//     return (
//         <div className="blockchain-stats">
//             <h2>Blockchain Financial Metrics</h2>
//             <div className="stats-grid">
//                 <div className="stat-item">
//                     <span className="stat-label">Total Transactions</span>
//                     <span className="stat-value">{stats?.totalTransactions}</span>
//                 </div>
//                 <div className="stat-item">
//                     <span className="stat-label">Total Assets (AUM)</span>
//                     <span className="stat-value">${stats?.totalAssets?.toLocaleString()}</span>
//                 </div>
//                 <div className="stat-item">
//                     <span className="stat-label">Wallet Balance</span>
//                     <span className="stat-value">{stats?.walletBalance} BTC</span>
//                 </div>
//                 <div className="stat-item">
//                     <span className="stat-label">Pending Transactions</span>
//                     <span className="stat-value">{stats?.pendingTransactions}</span>
//                 </div>
//                 <div className="stat-item">
//                     <span className="stat-label">Network Fees</span>
//                     <span className="stat-value">{stats?.networkFees} sat/byte</span>
//                 </div>
//                 <div className="stat-item">
//                     <span className="stat-label">Block Height</span>
//                     <span className="stat-value">{stats?.blockHeight}</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlockchainStats;