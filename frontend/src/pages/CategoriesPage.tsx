import React from "react";
import CategoryManager from "../components/categories/CategoryManager";

const CategoriesPage: React.FC = () => {
    return (
        <div className="categories-page">
            <div className="categories-header">
                <h1 style={{ fontSize: "2.5rem", marginTop: "2rem", marginBottom: "5rem", padding: "1rem 1rem", display: "flex", justifyContent: "center", alignItems: "center", color: "white", }}>
                    Manage Categories
                </h1>

                
                <div className="subtitle">Create and manage your income and expense categories</div>
                
            </div>

            <div className="categories-content">
                <CategoryManager />
            </div>
        </div>
    );
};

export default CategoriesPage;