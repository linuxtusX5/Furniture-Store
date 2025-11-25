import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";

const MarQuee: React.FC = () => {
  return (
    <Box
      sx={{
        background: "#E6CDA5",
        color: "#1a1a1a",
        padding: "1rem 0",
        fontSize: "1.1rem",
        fontWeight: 500,
        letterSpacing: "0.5px",
      }}
    >
      <Marquee speed={50} gradient={false} pauseOnHover>
        <span
          style={{
            whiteSpace: "nowrap",
          }}
        >
          | &nbsp; 🎉 Free shipping on orders over $50! &nbsp; | &nbsp; 🔥 New
          arrivals every week! &nbsp; | &nbsp; 💻 Exclusive deals on laptops &
          accessories! | &nbsp; 🎉 Free shipping on orders over $50! &nbsp; |
          &nbsp; 🔥 New arrivals every week! &nbsp; | &nbsp; 💻 Exclusive deals
          on laptops & accessories!
        </span>
      </Marquee>
    </Box>
  );
};

export default MarQuee;
