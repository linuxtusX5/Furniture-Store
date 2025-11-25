import React from "react";
import Slider from "react-slick";
import reviewsData from "../data/reviewsData";

const ReviewCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        background: "#fff",
        padding: "1rem 2rem",
        paddingBottom: "150px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem 2rem",
        }}
      >
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
          What Our Customers Say
        </h1>
        <Slider {...settings}>
          {reviewsData.map((review) => (
            <div key={review.id}>
              <div
                style={{
                  background: "#F9F5EE",
                  borderRadius: "15px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  padding: "80px 20px",
                  maxWidth: "520px",
                  margin: "30px auto",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-5px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 20px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "none";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.1)";
                }}
              >
                <p
                  style={{
                    fontStyle: "italic",
                    color: "#000",
                    marginBottom: "10px",
                  }}
                >
                  “{review.comment}”
                </p>
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    marginTop: "10px",
                    color: "#000",
                  }}
                >
                  — {review.name}
                </p>
                <p
                  style={{
                    color: "#f5a623",
                    fontWeight: "500",
                  }}
                >
                  ⭐⭐⭐⭐⭐ {review.rating}/5
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default ReviewCarousel;
