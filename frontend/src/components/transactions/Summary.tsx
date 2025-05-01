import React from "react";
import { Transaction } from "../../types";

interface SummaryProps {
    transactions: Transaction[]; // List of transactions to calculate summary data
}

// Function to format currency values
const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
};

export const Summary: React.FC<SummaryProps> = ({ transactions }) => {
    // Calculate total income by filtering transactions of type "income"
    const income = transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    // Calculate total expenses by filtering transactions of type "expense"
    const expenses = transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    // Calculate balance as the difference between income and expenses
    const balance = income - expenses;

    return (
        <div className="summary">
            {/* Display total income */}
            <div className="summary-card income">
                <h3>Income</h3>
                <p className="amount">{formatAmount(income)}</p>
            </div>

            {/* Display total expenses */}
            <div className="summary-card expenses">
                <h3>Expenses</h3>
                <p className="amount">{formatAmount(expenses)}</p>
            </div>


            {/* Display account balance with conditional styling */}
            <div className="summary-card balance">
                <h3>Balance</h3>
                <p className={`amount ${balance >= 0 ? "positive" : "negative"}`}>
                    {formatAmount(Math.abs(balance))}
                    {/* Display "Credit" if balance is positive, otherwise "Deficit" */}
                    <span className="balance-type">{balance >= 0 ? "Credit" : "Deficit"}</span>
                </p>
            </div>
        </div>
    );
};

export default Summary;
