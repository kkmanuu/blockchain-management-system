import React from "react";
import { Category } from "../../types"; // Import the Category type definition

// Define the props for the CategoryList component
interface CategoryListProps {
    categories: Category[]; // Array of category objects
    onEdit: (category: Category) => void; // Function to handle category editing
    onDelete: (id: string) => void; // Function to handle category deletion
    isLoading?: boolean; // Optional prop to indicate loading state
}

// CategoryList functional component
export const CategoryList: React.FC<CategoryListProps> = ({
    categories,
    onEdit,
    onDelete,
    isLoading = false, // Default value for isLoading is false
}) => {
    // Show a loading message while data is being fetched
    if (isLoading) {
        return <div className="loading">Loading categories...</div>;
    }

    // Show a message when there are no categories available
    if (categories.length === 0) {
        return (
            <div className="no-data">No categories found. Create one to get started!</div>
        );
    }

    return (
        <div className="category-list">
            {/* Loop through categories and display each one */}
            {categories.map((category) => (
                <div key={category._id} className="category-item">
                    <div className="category-info">
                        {/* Display the category name */}
                        <span className="category-name">{category.name}</span>
                        {/* Display the category type with a dynamic class */}
                        <span className={`category-type type-${category.type}`}>
                            {category.type}
                        </span>
                    </div>
                    <div className="category-actions">
                        {/* Edit button to trigger the onEdit function */}
                        <button
                            onClick={() => onEdit(category)}
                            disabled={isLoading}
                            className="edit-button"
                        >
                            Edit
                        </button>
                        {/* Delete button to trigger the onDelete function */}
                        <button
                            onClick={() => onDelete(category._id)}
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

export default CategoryList;
