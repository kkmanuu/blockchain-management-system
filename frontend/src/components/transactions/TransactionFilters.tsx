import React, { useState } from "react";

interface TransactionFiltersProps {
  // Function to update filter values in the parent component
  onFilterChange: (filters: {
    filter: string;
    sort: string;
    order: string;
    startDate?: string;
    endDate?: string;
  }) => void;

  // Optional loading state to disable inputs while processing
  isLoading?: boolean;
}

export const TransactionFilters: React.FC<TransactionFiltersProps> = ({
  onFilterChange,
  isLoading = false,
}) => {
  // State variables for filter values
  const [filter, setFilter] = useState("all"); // Filter type (all, income, expense)
  const [sort, setSort] = useState("date"); // Sorting option (date, amount)
  const [order, setOrder] = useState("desc"); // Order of sorting (asc, desc)
  const [startDate, setStartDate] = useState(""); // Start date for filtering
  const [endDate, setEndDate] = useState(""); // End date for filtering

  // Function to apply filters by calling the parent function with the selected values
  const handleApplyFilters = () => {
    onFilterChange({
      filter,
      sort,
      order,
      startDate: startDate || undefined, // Avoid sending empty string
      endDate: endDate || undefined, // Avoid sending empty string
    });
  };

  // Function to reset all filter values to default
  const handleReset = () => {
    setFilter("all");
    setSort("date");
    setOrder("desc");
    setStartDate("");
    setEndDate("");

    // Notify parent component of the reset filters
    onFilterChange({
      filter: "all",
      sort: "date",
      order: "desc",
    });
  };

  return (
    <div className="transaction-filters">
      <div className="filters-row">
        {/* Dropdown for selecting transaction type */}
        <div className="filter-group">
          <label htmlFor="filter">Type</label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            disabled={isLoading}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        {/* Dropdown for selecting sorting criteria */}
        <div className="filter-group">
          <label htmlFor="sort">Sort By</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            disabled={isLoading}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>

        {/* Dropdown for selecting sorting order */}
        <div className="filter-group">
          <label htmlFor="order">Order</label>
          <select
            id="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            disabled={isLoading}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
      </div>

      <div className="filters-row">
        {/* Input field for selecting start date */}
        <div className="filter-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            disabled={isLoading}
          />
        </div>

        {/* Input field for selecting end date */}
        <div className="filter-group">
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            disabled={isLoading}
            min={startDate} // Prevents selecting an end date earlier than start date
          />
        </div>

        {/* Buttons to apply or reset filters */}
        <div className="filter-actions">
          <button
            onClick={handleApplyFilters}
            disabled={isLoading}
            className="apply-button"
          >
            Apply Filters
          </button>
          <button
            onClick={handleReset}
            disabled={isLoading}
            className="reset-button"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionFilters;
