import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "../assets/img/pexels-shvetsa-5711772.jpg";

export const About: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "150px 150px",
        gap: 4,
      }}
    >
      <Box sx={{ width: "50%", maxWidth: 750 }}>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontSize: "5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            fontFamily: "Didot",
            color: "#1a1a1a",
            mb: 3,
          }}
        >
          Crafted with Purpose
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 2, lineHeight: 1.8 }}>
          For over three decades, we've been dedicated to creating furniture
          that tells a story. Each piece is thoughtfully designed and
          meticulously crafted by skilled artisans who share our passion for
          quality and sustainability.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          We source our materials responsibly, ensuring that every tree
          harvested is replanted, and every process minimizes our environmental
          footprint. This is furniture made to last generations.
        </Typography>
        <Box sx={{ display: "flex", marginTop: "50px", gap: 5 }}>
          <Box
            sx={{
              display: "block",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                lineHeight: 1.8,
                fontFamily: "Didot",
                color: "#1a1a1a",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              30+
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "-20px", fontWeight: "bold", color: "#1a1a1a" }}
            >
              Years of Excellence
            </Typography>
          </Box>
          <Box
            sx={{
              display: "block",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                lineHeight: 1.8,
                fontFamily: "Didot",
                color: "#1a1a1a",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              100%
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "-20px", fontWeight: "bold", color: "#1a1a1a" }}
            >
              Sustainable Materials
            </Typography>
          </Box>
          <Box
            sx={{
              display: "block",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                lineHeight: 1.8,
                fontFamily: "Didot",
                color: "#1a1a1a",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              5000+
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "-20px", fontWeight: "bold", color: "#1a1a1a" }}
            >
              Happy Customers
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <img
          src={Image}
          alt="About our craftsmanship"
          style={{
            width: "100%",
            maxWidth: 650,
            height: "550px",
            borderRadius: 8,
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};
