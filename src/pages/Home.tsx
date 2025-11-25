import Header from "../components/Header";
import Banner from "../assets/img/pexels-atbo-66986-245208.jpg";
import { Box } from "@mui/material";
import Categories from "./Categories";
import ProductList from "./ProductList";
import { About } from "./About";
import MarQuee from "../components/Marquee";
import ReviewCarousel from "../components/ProductReviews";
import { Footer } from "../components/Footer";
// import { useNavigate } from "react-router-dom";

function Home() {
  //   const navigate = useNavigate();
  return (
    <>
      <Header />
      {/* Banner */}
      <Box sx={{ position: "relative", width: "100%", height: "95vh" }}>
        <img
          src={Banner}
          alt="Banner Tech"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.3)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <h1
            style={{
              fontSize: "5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              fontFamily: "Didot",
            }}
          >
            Timeless Elegance
          </h1>
          <p
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              width: "50%",
            }}
          >
            Discover our curated collection of premium furniture crafted for the
            modern home
          </p>
          <button
            // onClick={() => navigate("/")}
            style={{
              background: "#E6CDA5",
              color: "#1a1a1a",
              border: "none",
              padding: "1.5rem 1.5rem",
              borderRadius: "50px",
              fontSize: "18px",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            Shop The Collection
          </button>
        </Box>
      </Box>
      <MarQuee />
      <Categories />
      <ProductList />
      <MarQuee />
      <About />
      <ReviewCarousel />
      <Footer />
    </>
  );
}

export default Home;
