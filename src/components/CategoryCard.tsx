import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import type { Category } from "../types";
import { useNavigate } from "react-router-dom";

interface Props {
  category: Category;
}
export const CategoryCard: React.FC<Props> = ({ category }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: "#F9F5EE" }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <Card
          onClick={() => navigate(`/${category.slug}`)}
          sx={{ minWidth: 350, background: "#F9F5EE", borderStyle: "none" }}
        >
          <CardContent sx={{ padding: "0px" }}>
            <CardMedia
              component="img"
              sx={{ height: 250 }}
              image={category.image || ""}
              alt={category.name}
              title={category.name}
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
                {category.name}
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                {category.description}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default CategoryCard;
