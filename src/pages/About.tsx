import React from "react"
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  IconButton,
  Link,
} from "@mui/material"
import {
  GitHub,
  LinkedIn,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material"
import { motion } from "framer-motion"

export default function About() {
  const socialLinks = [
    { icon: <GitHub />, href: "#", label: "GitHub" },
    { icon: <LinkedIn />, href: "#", label: "LinkedIn" },
    { icon: <Twitter />, href: "#", label: "Twitter" },
    { icon: <Instagram />, href: "#", label: "Instagram" },
    { icon: <YouTube />, href: "#", label: "YouTube" },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  }

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: "url('/file-QAR9bo8c6W3f84TAILrPqyml')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ zIndex: 1, textAlign: "center" }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Title Section */}
          <motion.div variants={fadeIn}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: "bold",
                mb: 2,
              }}
            >
              I'm Rachit, a Full Stack Developer
            </Typography>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: { xs: "1rem", md: "1.25rem" },
                mb: 4,
              }}
            >
              I have 3+ years of experience developing web and mobile
              applications, specializing in enterprise solutions like CRM and
              ERP.
            </Typography>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                mb: 4,
              }}
              href="#"
            >
              Explore My Work
            </Button>
          </motion.div>

          {/* Grid Section */}
          <Grid container spacing={4} sx={{ textAlign: "left" }}>
            {/* About Me */}
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeIn}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "#FF3366", fontWeight: "bold", mb: 2 }}
                  >
                    ABOUT ME
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.8,
                      mb: 2,
                    }}
                  >
                    As a Full Stack Developer, I specialize in crafting dynamic,
                    scalable applications. My expertise spans JavaScript, React,
                    Node.js, and more.
                  </Typography>
                  <Button
                    variant="text"
                    sx={{
                      color: "#FF3366",
                      textTransform: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                    href="#"
                  >
                    Learn More →
                  </Button>
                </Box>
              </motion.div>
            </Grid>

            {/* My Work */}
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeIn}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "#FF3366", fontWeight: "bold", mb: 2 }}
                  >
                    MY WORK
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.8,
                      mb: 2,
                    }}
                  >
                    I have hands-on experience building enterprise solutions
                    like CRM and ERP systems, creating robust platforms that
                    improve efficiency and user experience.
                  </Typography>
                  <Button
                    variant="text"
                    sx={{
                      color: "#FF3366",
                      textTransform: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                    href="#"
                  >
                    Browse Portfolio →
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Social Links */}
          <Box sx={{ mt: 4 }}>
            <motion.div variants={fadeIn}>
              <Typography
                variant="h6"
                sx={{ color: "#FF3366", fontWeight: "bold", mb: 2 }}
              >
                FOLLOW ME
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    component={Link}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      color: "white",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 51, 102, 0.1)",
                        borderColor: "#FF3366",
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
