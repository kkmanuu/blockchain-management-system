import React, { useState, useEffect } from "react";
import { Category } from "../../types";

interface CategoryFormProps {
    onSubmit: (name: string, type: string) => void;
    initialCategory?: Category;
    isLoading?: boolean;
}

export const CategoryForm: React.FC<CategoryFormProps> = ({
    onSubmit,
    initialCategory,
    isLoading = false,
}) => {
    const [name, setName] = useState("");
    const [type, setType] = useState<"income" | "expense" | "any">("any");

    useEffect(() => {
        if (initialCategory) {
            setName(initialCategory.name);
            setType(initialCategory.type);
        }
    }, [initialCategory]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(name, type);
        if (!initialCategory) {
            // Only clear form if we're creating a new category
            setName("");
            setType("any");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="category-form"
            style={{
                marginTop: "6rem", 
                padding: "2rem", // Add padding for better spacing
                maxWidth: "500px", // Limit form width
                marginLeft: "auto", // Center the form horizontally
                marginRight: "auto",
                backgroundColor: "#ffffff", // White background
                borderRadius: "8px", // Rounded corners
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
            }}
        >
            <div className="form-group" style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                    Category Name
                </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter category name"
                    required
                    disabled={isLoading}
                    style={{
                        width: "100%",
                        padding: "0.75rem",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        fontSize: "1rem",
                    }}
                />
            </div>
            <div className="form-group" style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="type" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                    Type
                </label>
                <select
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value as "income" | "expense" | "any")}
                    disabled={isLoading}
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
            <button
                type="submit"
                disabled={isLoading}
                style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "#3498db",
                    color: "#fff",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                }}
            >
                {isLoading
                    ? "Saving..."
                    : initialCategory
                        ? "Update Category"
                        : "Add Category"}
            </button>
        </form>
    );
};

export default CategoryForm;