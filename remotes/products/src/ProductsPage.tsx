import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
  Rating,
  TextField,
  InputAdornment,
  CircularProgress,
  Alert,
} from "@mui/material";
import { ShoppingCart, Search } from "@mui/icons-material";
import { ProductApiService, ProductApiData } from "./services/apiService";

// API service instance (will be initialized with basePath)
let apiService: ProductApiService;

interface ProductsPageProps {
  apiBasePath?: string; // Passed from host
}

export default function ProductsPage({ apiBasePath }: ProductsPageProps = {}) {
  const [products, setProducts] = useState<ProductApiData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Initialize API service with basePath
  useEffect(() => {
    apiService = new ProductApiService(apiBasePath);
    console.log(
      `[Products Remote] Initialized with API base: ${apiService.getBasePath()}`
    );
  }, [apiBasePath]);

  // Fetch products on mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load products"
        );
      } finally {
        setLoading(false);
      }
    };

    if (apiService) {
      loadProducts();
    }
  }, [apiBasePath]);

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (productId: number) => {
    console.log(`[Products Remote] Add to cart: ${productId}`);
  };

  if (loading) {
    return (
      <Container sx={{ py: 4, textAlign: "center" }}>
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Loading products...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom fontWeight={600}>
          Our Products
        </Typography>
        <Chip
          label={`API: ${apiService?.getBasePath() || "Not set"}`}
          size="small"
          color="primary"
          variant="outlined"
          sx={{ mt: 1 }}
        />
      </Box>

      {/* Search and Filter */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              color={selectedCategory === category ? "primary" : "default"}
              variant={selectedCategory === category ? "filled" : "outlined"}
            />
          ))}
        </Box>
      </Box>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
              >
                <Box sx={{ mb: 1 }}>
                  <Chip
                    label={product.category}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Box>

                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {product.name}
                </Typography>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>

                <Box sx={{ mt: "auto" }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Rating
                      value={product.rating}
                      precision={0.1}
                      readOnly
                      size="small"
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ ml: 1 }}
                    >
                      ({product.rating})
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                      Stock: {product.stock}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" color="primary" fontWeight={600}>
                      ${product.price}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<ShoppingCart />}
                      onClick={() => handleAddToCart(product.id)}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredProducts.length === 0 && (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No products found matching your criteria.
          </Typography>
        </Box>
      )}
    </Container>
  );
}
