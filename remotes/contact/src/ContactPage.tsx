import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Alert,
  Snackbar,
  CircularProgress,
  Chip,
} from "@mui/material";
import { Email, Phone, LocationOn, Send } from "@mui/icons-material";
import { ContactApiService, ContactConfig } from "./services/apiService";

// API service instance
let apiService: ContactApiService;

interface ContactPageProps {
  apiBasePath?: string;
}

export default function ContactPage({ apiBasePath }: ContactPageProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [config, setConfig] = useState<ContactConfig | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize API service
  useEffect(() => {
    apiService = new ContactApiService(apiBasePath);
    console.log(
      `[Contact Remote] Initialized with API base: ${apiService.getBasePath()}`
    );
  }, [apiBasePath]);

  // Fetch contact config
  useEffect(() => {
    const loadConfig = async () => {
      try {
        setLoading(true);
        const data = await apiService.fetchContactConfig();
        setConfig(data);
      } catch (err) {
        console.error("Failed to load contact config:", err);
      } finally {
        setLoading(false);
      }
    };

    if (apiService) {
      loadConfig();
    }
  }, [apiBasePath]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await apiService.submitContactForm(formData);
      setSnackbarMessage(
        response.message + (response.ticketId ? ` (${response.ticketId})` : "")
      );
      setOpenSnackbar(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setSnackbarMessage("Failed to submit form. Please try again.");
      setOpenSnackbar(true);
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: "Email",
      detail: config?.supportEmail || "Loading...",
      link: `mailto:${config?.supportEmail}`,
    },
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: "Phone",
      detail: config?.phone || "Loading...",
      link: `tel:${config?.phone?.replace(/\D/g, "")}`,
    },
    {
      icon: <LocationOn sx={{ fontSize: 40 }} />,
      title: "Address",
      detail: config?.address || "Loading...",
      link: "#",
    },
  ];

  if (loading) {
    return (
      <Container sx={{ py: 4, textAlign: "center" }}>
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Loading contact information...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom fontWeight={600}>
          Contact Us
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </Typography>
        <Chip
          label={`API: ${apiService?.getBasePath() || "Not set"}`}
          size="small"
          color="primary"
          variant="outlined"
          sx={{ mt: 1 }}
        />
      </Box>

      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent sx={{ textAlign: "center", py: 3 }}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>{info.icon}</Box>
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    {info.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="a"
                    href={info.link}
                    sx={{
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {info.detail}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom fontWeight={600} mb={3}>
                Send us a Message
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={
                        submitting ? <CircularProgress size={20} /> : <Send />
                      }
                      fullWidth
                      disabled={submitting}
                      sx={{ py: 1.5 }}
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Map Section */}
      <Box sx={{ mt: 6 }}>
        <Card>
          <CardContent sx={{ p: 0 }}>
            <Box
              sx={{
                height: 400,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <Typography variant="h5">Map Integration Area</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage || "Thank you for your message!"}
        </Alert>
      </Snackbar>
    </Container>
  );
}
