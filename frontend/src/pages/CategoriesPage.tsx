import React from "react";
import CategoryManager from "../components/categories/CategoryManager";

const CategoriesPage: React.FC = () => {
  return (
    <div className="categories-page">
      <div className="categories-header">
        <div
          className="subtitle"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            marginBottom: "2rem",
            fontSize: "1.2rem",
            padding: "4rem 3rem",
          }}
        >
          Create and manage your income and expense categories
        </div>
      </div>

      <div className="categories-content">
        <CategoryManager />
      </div>
    </div>
  );
};

export default CategoriesPage;
