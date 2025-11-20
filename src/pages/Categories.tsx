import React, { useState, useEffect } from "react";
import { categoryAPI } from "../services/api";
import type { Category } from "../types";
import { CategoryCard } from "../components/CategoryCard";
import { Box } from "@mui/material";

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const response = await categoryAPI.getAll();
      setCategories(response.data);
    } catch (error) {
      console.error("Error loading categories: ", error);
    }
  };
  return (
    <Box sx={{ background: "#F9F5EE" }}>
      <h1
        style={{
          fontSize: "5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          fontFamily: "Didot",
          textAlign: "center",
          color: "#1a1a1a",
        }}
      >
        Shop By Category
      </h1>
      <p
        style={{
          marginBottom: "1rem",
          textAlign: "center",
          color: "#1a1a1a",
        }}
      >
        Explore our carefully curated collections
      </p>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          paddingBottom: "50px",
        }}
      >
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
