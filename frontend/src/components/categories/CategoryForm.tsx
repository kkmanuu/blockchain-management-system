import React, { useState, useEffect } from "react";
import { Category } from "../../types"; // Import the Category type definition

// Define the props for the CategoryForm component
interface CategoryFormProps {
  onSubmit: (name: string, type: string) => void; // Function to handle form submission
  initialCategory?: Category; // Optional initial category for editing
  isLoading?: boolean; // Optional loading state
}

// CategoryForm functional component
export const CategoryForm: React.FC<CategoryFormProps> = ({
  onSubmit,
  initialCategory,
  isLoading = false, // Default value for isLoading is false
}) => {
  // State to store the category name
  const [name, setName] = useState("");

  // State to store the category type (income, expense, or any)
  const [type, setType] = useState<"income" | "expense" | "any">("any");

  // Effect hook to pre-fill form when editing an existing category
  useEffect(() => {
    if (initialCategory) {
      setName(initialCategory.name);
      setType(initialCategory.type);
    }
  }, [initialCategory]);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    onSubmit(name, type); // Call the onSubmit function with form data

    // Reset the form fields only if creating a new category
    if (!initialCategory) {
      setName("");
      setType("any");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="category-form"
      style={{
        marginTop: "6rem", // Add margin from the top
        padding: "2rem", // Add padding for better spacing
        maxWidth: "500px", // Limit form width
        marginLeft: "auto", // Center the form horizontally
        marginRight: "auto",
        backgroundColor: "#ffffff", // White background
        borderRadius: "8px", // Rounded corners
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
      }}
    >
      {/* Category Name Input */}
      <div className="form-group" style={{ marginBottom: "1.5rem" }}>
        <label
          htmlFor="name"
          style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "bold",
          }}
        >
          Category Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter category name"
          required
          disabled={isLoading} // Disable input if data is loading
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
      </div>

      {/* Category Type Selection */}
      <div className="form-group" style={{ marginBottom: "1.5rem" }}>
        <label
          htmlFor="type"
          style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "bold",
          }}
        >
          Type
        </label>
        <select
          id="type"
          value={type}
          onChange={(e) =>
            setType(e.target.value as "income" | "expense" | "any")
          }
          disabled={isLoading} // Disable select if data is loading
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            backgroundColor: "#fff",
          }}
        >
          <option value="any">Any</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading} // Disable button if data is loading
        style={{
          width: "100%",
          padding: "0.75rem",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#3498db", // Blue button
          color: "#fff", // White text
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        {isLoading
          ? "Saving..." // Show saving state when loading
          : initialCategory
          ? "Update Category" // Show update button if editing
          : "Add Category"}{" "}
        // Show add button if creating
      </button>
    </form>
  );
};

export default CategoryForm;
