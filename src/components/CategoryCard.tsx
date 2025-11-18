import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import type { Product } from "../types";
import { useNavigate } from "react-router-dom";

interface Props {
  product: Product;
}
export const CategoryCard: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: "#F9F5EE" }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <Card
          onClick={() => navigate(`/products/${product.slug}`)}
          sx={{ minWidth: 350, background: "#F9F5EE", borderStyle: "none" }}
        >
          <CardContent sx={{ padding: "0px" }}>
            <CardMedia
              sx={{ height: 250 }}
              image="/src/assets/img/pexels-fotoaibe-1643383.jpg"
              title="green iguana"
            />
            <Box sx={{ margin: "20px" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontFamily: "Didot",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Living Room
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Comfort Meets Style
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default CategoryCard;
