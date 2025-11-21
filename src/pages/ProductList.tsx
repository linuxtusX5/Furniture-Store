import React, { useState, useEffect } from "react";
import { productAPI } from "../services/api";
import type { Product } from "../types";
import { ProductCard } from "../components/ProductCard";
import { Box } from "@mui/material";

export const ProductList: React.FC = () => {
  const [categories, setCategories] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const response = await productAPI.getAll();
      setCategories(response.data);
    } catch (error) {
      console.error("Error loading categories: ", error);
    }
  };
  return (
    <Box sx={{ background: "#fff", padding: "20px 0" }}>
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
        Featured Products
      </h1>
      <p
        style={{
          marginBottom: "1rem",
          textAlign: "center",
          color: "#1a1a1a",
        }}
      >
        Handpicked pieces for discerning Tastes
      </p>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          paddingBottom: "50px",
        }}
      >
        {categories.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
