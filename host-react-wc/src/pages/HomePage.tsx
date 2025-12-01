import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Security, Storefront, Support } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Storefront sx={{ fontSize: 48 }} />,
      title: "Wide Selection",
      description:
        "Browse through our extensive collection of premium products.",
    },
    {
      icon: <Support sx={{ fontSize: 48 }} />,
      title: "24/7 Support",
      description: "Our customer support team is always here to help you.",
    },
    {
      icon: <Security sx={{ fontSize: 48 }} />,
      title: "Secure Shopping",
      description: "Shop with confidence using our secure payment system.",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          py: 8,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom fontWeight={700}>
          Welcome to ModuleFed Store
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          paragraph
          sx={{ maxWidth: 800, mb: 2 }}
        >
          Web Components Edition
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ maxWidth: 800, mb: 4 }}
        >
          Experience seamless micro-frontend integration using native Web
          Components. No Module Federation, just pure custom elements!
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/products")}
            sx={{ px: 4, py: 1.5 }}
          >
            Shop Now
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/contact")}
            sx={{ px: 4, py: 1.5 }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>

      <Box sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          fontWeight={600}
          mb={6}
        >
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 3,
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2 }}>{feature.icon}</Box>
                <CardContent>
                  <Typography variant="h5" gutterBottom fontWeight={600}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          py: 8,
          px: 4,
          borderRadius: 3,
          background: (theme) =>
            theme.palette.mode === "light"
              ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              : "linear-gradient(135deg, #434343 0%, #000000 100%)",
          color: "white",
          textAlign: "center",
          mb: 8,
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight={600}>
          Ready to Start Shopping?
        </Typography>
        <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
          Discover amazing products at unbeatable prices.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/products")}
          sx={{
            mt: 2,
            bgcolor: "white",
            color: "primary.main",
            "&:hover": { bgcolor: "grey.100" },
            px: 4,
            py: 1.5,
          }}
        >
          Browse Products
        </Button>
      </Box>
    </Container>
  );
};
