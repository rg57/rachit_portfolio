import { Box, Container, Typography, Link, IconButton } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import YouTubeIcon from "@mui/icons-material/YouTube"

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "grey.900", py: 6 }}>
      {" "}
      {/* Dark background */}
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{
            color: "white", // White text for contrast
            fontWeight: 400, // Matching font weight for consistency
          }}
        >
          © {new Date().getFullYear()} Rachit Gupta. All rights reserved.
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <IconButton
            color="inherit"
            component={Link}
            href="https://github.com/rg57"
            target="_blank"
            rel="noopener"
            sx={{ color: "white", "&:hover": { color: "primary.main" } }} // White icon with hover effect
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            href="https://www.linkedin.com/in/rachit-gupta-767428126"
            target="_blank"
            rel="noopener"
            sx={{ color: "white", "&:hover": { color: "primary.main" } }} // White icon with hover effect
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            href="https://www.youtube.com/@codeplaytech6467"
            target="_blank"
            rel="noopener"
            sx={{ color: "white", "&:hover": { color: "primary.main" } }} // White icon with hover effect
          >
            <YouTubeIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}
