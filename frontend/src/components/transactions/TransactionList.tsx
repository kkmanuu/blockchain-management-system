import React from "react";
import { Transaction, Category } from "../../types";

interface TransactionListProps {
    transactions: Transaction[];
    onDelete: (id: string) => void;
    isLoading?: boolean;
}

// Helper function to format the date for better readability
const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
};

// Helper function to format the amount with currency styling
const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
};

// TransactionList component responsible for displaying the list of transactions
export const TransactionList: React.FC<TransactionListProps> = ({
    transactions,
    onDelete,
    isLoading = false,
}) => {
    // Display a loading message when data is being fetched
    if (isLoading) {
        return <div className="loading">Loading transactions...</div>;
    }

    // Display a message when there are no transactions
    if (transactions.length === 0) {
        return (
            <div className="no-data">No transactions found. Add one to get started!</div>
        );
    }

    return (
        <div className="transaction-list">
            {transactions.map((transaction) => (
                <div
                    key={transaction._id} // Ensures each transaction has a unique key
                    className={`transaction-item ${transaction.type}`} // Dynamically applies class based on type (income/expense)
                >
                    <div className="transaction-main">
                        <div className="transaction-info">
                            {/* Ensure category exists before accessing its name */}
                            <span className="transaction-category">
                                {typeof transaction.category === "object"
                                    ? transaction.category.name
                                    : "Unknown Category"}
                            </span>

                            {/* Conditionally render description only if it exists */}
                            {transaction.description && (
                                <span className="transaction-description">
                                    {transaction.description}
                                </span>
                            )}
                        </div>

                        {/* Display the amount with a sign based on transaction type */}
                        <div className="transaction-amount">
                            <span className={`amount ${transaction.type}`}>
                                {transaction.type === "expense" ? "-" : "+"}
                                {formatAmount(transaction.amount)}
                            </span>
                        </div>
                    </div>

                    <div className="transaction-footer">
                        {/* Format and display the transaction date */}
                        <span className="transaction-date">
                            {formatDate(transaction.date)}
                        </span>

                        {/* Prevent deletion when loading */}
                        <button
                            onClick={() => transaction._id && onDelete(transaction._id)}
                            disabled={isLoading}
                            className="delete-button"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TransactionList;
