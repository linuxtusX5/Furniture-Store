import React from "react";
import facebookIcon from "../assets/facebook (1).png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";
import { Box, Button, TextField } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        color: "#ccc",
        padding: "40px 150px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            flex: "1",
            minWidth: "250px",
            marginRight: "50px",
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: "45px",
              fontFamily: "Didot",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            LUXE
          </h2>
          <p
            style={{
              lineHeight: 1.6,
              color: "#fff",
              fontSize: "1.1rem",
            }}
          >
            Creating timeless furniture for modern living spaces.
          </p>
          <div
            style={{
              flex: "1",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                color: "#aaa",
                fontSize: "1.2rem",
              }}
            >
              <img
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                src={facebookIcon}
                alt="Facebook"
              />
              <img
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                src={instagramIcon}
                alt="Instagram"
              />
              <img
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                src={twitterIcon}
                alt="Twitter"
              />
            </div>
          </div>
        </div>
        {/* Quick Links\ */}
        <div
          style={{
            flex: "1",
            minWidth: "200px",
            margin: "10px 20px",
          }}
        >
          <h4
            style={{
              color: "#fff",
              fontSize: "1.5rem",
              marginBottom: "10px",
            }}
          >
            Quick Links
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: 1.8,
              color: "#ccc",
              fontSize: "1.1rem",
            }}
          >
            <li>About Us</li>
            <li>Collections</li>
            <li>Custom Orders</li>
            <li>Showroom</li>
          </ul>
        </div>
        {/* Customer Care */}
        <div
          style={{
            flex: "1",
            minWidth: "200px",
            margin: "10px 20px",
          }}
        >
          <h4
            style={{
              color: "#fff",
              fontSize: "1.5rem",
              marginBottom: "10px",
            }}
          >
            Customer Care
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: 1.8,
              color: "#ccc",
              fontSize: "1.1rem",
            }}
          >
            <li>Contact Us</li>
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>Care Guide</li>
          </ul>
        </div>
        {/* Subcribe */}
        <div
          style={{
            flex: "1",
            minWidth: "200px",
            margin: "10px 20px",
          }}
        >
          <h4
            style={{
              color: "#fff",
              fontSize: "1.5rem",
              marginBottom: "10px",
            }}
          >
            Newsletter
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: 1.8,
              color: "#ccc",
              fontSize: "1.1rem",
            }}
          >
            <li>Subscribe for exclusive offers and new arrivals</li>
            <li>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                />
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    background: "#F9F5EE",
                    color: "#2a2a2a",
                  }}
                >
                  Subcribe
                </Button>
              </Box>
            </li>
          </ul>
        </div>
      </div>

      <hr
        style={{
          border: "0.5px solid #2a2a2a",
          margin: "20px 0",
        }}
      />
      <p
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          color: "#fff",
          paddingTop: "20px",
        }}
      >
        © 2025 Luxe. All rights reserved.
      </p>
    </footer>
  );
};
