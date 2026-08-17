import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Grid,
  Button,
  Divider,
} from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import YouTubeIcon from "@mui/icons-material/YouTube"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link as RouterLink } from "react-router-dom"
import Logo from "../assets/logo.png"

const navigation = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "Skills", path: "/skills" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
]

const services = [
  "CRM & Business Systems",
  "ERP & Internal Tools",
  "Field Sales Applications",
  "Inventory & Distribution",
  "Web & Mobile Apps",
]

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#12051F",
        color: "white",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          bgcolor: "rgba(255,51,102,0.07)",
          filter: "blur(40px)",
          right: -100,
          top: -120,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 7, md: 8 } }}>
        {/* Main Footer */}
        <Grid container spacing={{ xs: 5, md: 6 }}>
          <Grid item xs={12} md={5}>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.3,
                textDecoration: "none",
                color: "white",
                mb: 2.5,
              }}
            >
              <Box
                component="img"
                src={Logo}
                alt="CodePlay"
                sx={{
                  height: 44,
                  width: "auto",
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    lineHeight: 1.05,
                  }}
                >
                  CodePlay
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.48)" }}
                >
                  Business Software by Rachit Gupta
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                maxWidth: 470,
                color: "rgba(255,255,255,0.64)",
                lineHeight: 1.8,
              }}
            >
              Custom software for growing businesses — from CRM and inventory
              systems to field-sales apps, internal dashboards and connected
              web/mobile products.
            </Typography>

            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 3,
                bgcolor: "#FF3366",
                color: "white",
                textTransform: "none",
                fontWeight: 800,
                borderRadius: 8,
                px: 2.8,
                "&:hover": {
                  bgcolor: "#E62E5C",
                },
              }}
            >
              Discuss Your Project
            </Button>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: "white",
              }}
            >
              Navigation
            </Typography>

            <Box sx={{ display: "grid", gap: 1.2 }}>
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.58)",
                    fontSize: "0.92rem",
                    width: "fit-content",
                    "&:hover": {
                      color: "#FF3366",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={8} md={3}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: "white",
              }}
            >
              What I Build
            </Typography>

            <Box sx={{ display: "grid", gap: 1.15 }}>
              {services.map((service) => (
                <Typography
                  key={service}
                  sx={{
                    color: "rgba(255,255,255,0.56)",
                    fontSize: "0.92rem",
                    lineHeight: 1.45,
                  }}
                >
                  {service}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: "white",
              }}
            >
              Connect
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                component={Link}
                href="https://github.com/rg57"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={{
                  color: "rgba(255,255,255,0.72)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  "&:hover": {
                    color: "#FF3366",
                    borderColor: "rgba(255,51,102,0.38)",
                    bgcolor: "rgba(255,51,102,0.08)",
                  },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>

              <IconButton
                component={Link}
                href="https://www.linkedin.com/in/rachit-gupta-767428126"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{
                  color: "rgba(255,255,255,0.72)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  "&:hover": {
                    color: "#FF3366",
                    borderColor: "rgba(255,51,102,0.38)",
                    bgcolor: "rgba(255,51,102,0.08)",
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>

              <IconButton
                component={Link}
                href="https://www.youtube.com/@codeplaytech6467"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                sx={{
                  color: "rgba(255,255,255,0.72)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  "&:hover": {
                    color: "#FF3366",
                    borderColor: "rgba(255,51,102,0.38)",
                    bgcolor: "rgba(255,51,102,0.08)",
                  },
                }}
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 5,
            borderColor: "rgba(255,255,255,0.08)",
          }}
        />

        {/* Bottom Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 1.5,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.46)",
            }}
          >
            © {new Date().getFullYear()} Rachit Gupta. All rights reserved.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.38)",
            }}
          >
            CodePlay • Custom software built around real business workflows.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
