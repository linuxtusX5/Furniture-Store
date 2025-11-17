import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

function Categories() {
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
      <Box sx={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <Card
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
}

export default Categories;
