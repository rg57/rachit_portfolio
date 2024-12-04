"use client"

import { Link as RouterLink } from "react-router-dom"
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material"
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
  Cloud as CloudIcon,
  GitHub as GitHubIcon,
  Api as ApiIcon,
  MobileFriendly as MobileIcon,
  Web as WebIcon,
  Language as LanguageIcon,
  Bolt as BoltIcon,
  DataObject as DataObjectIcon,
} from "@mui/icons-material"

import SmartphoneIcon from "@mui/icons-material/Smartphone"
import homePageAboutImage from "../assets/homepageabout.png"

export default function Home() {
  const skills = [
    { name: "React", icon: <CodeIcon color="primary" fontSize="large" /> },
    { name: "Node.js", icon: <BuildIcon color="secondary" fontSize="large" /> },
    {
      name: "React Native",
      icon: <MobileIcon color="action" fontSize="large" />,
    },
    {
      name: "JavaScript",
      icon: <LanguageIcon color="warning" fontSize="large" />,
    },
    { name: "TypeScript", icon: <CodeIcon color="info" fontSize="large" /> },
    { name: "HTML & CSS", icon: <WebIcon color="error" fontSize="large" /> },
    {
      name: "Spring Boot",
      icon: <BoltIcon color="success" fontSize="large" />,
    },
    { name: "MySQL", icon: <StorageIcon color="primary" fontSize="large" /> },
    { name: "MongoDB", icon: <StorageIcon color="success" fontSize="large" /> },
    { name: "AWS", icon: <CloudIcon color="warning" fontSize="large" /> },
    { name: "Git", icon: <GitHubIcon color="action" fontSize="large" /> },
    { name: "REST APIs", icon: <ApiIcon color="info" fontSize="large" /> },
    {
      name: "Flutter",
      icon: <MobileIcon color="secondary" fontSize="large" />,
    },
    { name: "Firebase", icon: <CloudIcon color="error" fontSize="large" /> },
    { name: "Java", icon: <CodeIcon color="secondary" fontSize="large" /> },
    {
      name: "Python",
      icon: <DataObjectIcon color="primary" fontSize="large" />,
    },
  ]

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2A0845 0%, #6441A5 100%)",
        minHeight: "100vh",
        color: "white",
        mt: {
          xs: 8,
        },
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          py: { xs: 4, sm: 6, md: 0 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: "600px" }}>
                <Typography
                  component="h1"
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    fontSize: { xs: "2.5rem", md: "3.75rem" },
                    background: "linear-gradient(to right, #fff, #e0e0e0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Full Stack Developer
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: 1.6,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                  }}
                >
                  Building innovative and scalable web & mobile applications
                  with a focus on delivering seamless user experiences.
                  Passionate about problem-solving and writing clean, efficient
                  code.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    component={RouterLink}
                    to="/work"
                    variant="contained"
                    sx={{
                      bgcolor: "#FF3366",
                      color: "white",
                      px: 4,
                      py: 1.5,
                      borderRadius: "30px",
                      fontSize: "1rem",
                      "&:hover": {
                        bgcolor: "#E62E5C",
                      },
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/resume.pdf"
                    download
                    variant="outlined"
                    sx={{
                      color: "white",
                      borderColor: "white",
                      px: 4,
                      py: 1.5,
                      borderRadius: "30px",
                      fontSize: "1rem",
                      "&:hover": {
                        borderColor: "#FF3366",
                        bgcolor: "rgba(255, 51, 102, 0.1)",
                      },
                    }}
                  >
                    Download Resume
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Isometric Illustration */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: "300px", sm: "400px", md: "500px" },
                  display: "block",
                }}
              >
                {/* Laptop Base */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: { xs: "50%", md: "80%" },
                    transform: {
                      xs: "translate(-50%, -50%) rotate(-45deg) skew(20deg, 20deg) scale(0.6)",
                      sm: "translate(-50%, -50%) rotate(-45deg) skew(20deg, 20deg) scale(0.8)",
                      md: "translate(-50%, -50%) rotate(-45deg) skew(20deg, 20deg)",
                    },
                    width: "400px",
                    height: "250px",
                    bgcolor: "#1a1a1a",
                    borderRadius: "20px",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Screen */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-180px",
                      left: "10px",
                      right: "10px",
                      height: "170px",
                      bgcolor: "#333",
                      borderRadius: "10px 10px 0 0",
                      padding: "20px",
                      overflow: "hidden",
                    }}
                  >
                    {/* Code Lines */}
                    {[...Array(5)].map((_, i) => (
                      <Box
                        key={i}
                        sx={{
                          height: "10px",
                          width: `${Math.random() * 60 + 20}%`,
                          bgcolor: i % 2 === 0 ? "#FF3366" : "#4CAF50",
                          opacity: 0.6,
                          borderRadius: "5px",
                          mb: 1,
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Floating Elements */}
                {[
                  "Web Developer",
                  "App Developer",
                  "FrontEnd",
                  "Backend",
                  "CRM Solutions",
                ].map((tech, index) => (
                  <Box
                    key={tech}
                    sx={{
                      position: "absolute",
                      top: `${Math.random() * 60 + 20}%`,
                      left: `${Math.random() * 60 + 20}%`,
                      transform: "rotate(-45deg)",
                      bgcolor: "#FF3366",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: { xs: "12px", sm: "14px" },
                      fontWeight: "bold",
                      boxShadow: "0 4px 15px rgba(255, 51, 102, 0.3)",
                      zIndex: index,
                      animation: `float ${
                        Math.random() * 2 + 2
                      }s ease-in-out infinite`,
                      "@keyframes float": {
                        "0%, 100%": {
                          transform: "translateY(0) rotate(-45deg)",
                        },
                        "50%": {
                          transform: "translateY(-20px) rotate(-45deg)",
                        },
                      },
                      animationDelay: `${index * 0.5}s`,
                      display: {
                        xs: index < 3 ? "block" : "none",
                        sm: "block",
                      },
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Container sx={{ py: { xs: 6, md: 10 } }} maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: "#FF3366",
            fontWeight: 800,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "2rem", md: "2.5rem" },
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "60px",
              height: "4px",
              background: "#FF3366",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "4px",
            },
          }}
        >
          Works On
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Web Application",
              desc: "Full stack web application using multiple and suitable languages",
              icon: <CodeIcon fontSize="large" sx={{ color: "#FF3366" }} />,
            },
            {
              title: "Mobile Application",
              desc: "Cross-platform app built with React Native and Flutter",
              icon: (
                <SmartphoneIcon fontSize="large" sx={{ color: "#FF3366" }} />
              ),
            },
            {
              title: "Enterprise Solution",
              desc: "Scalable solution (CRM or ERP) for enterprises and customers",
              icon: <StorageIcon fontSize="large" sx={{ color: "#FF3366" }} />,
            },
          ].map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 4,
                  }}
                >
                  <Box sx={{ mb: 3 }}>{project.icon}</Box>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    align="center"
                    sx={{ color: "white", fontWeight: 600, mb: 2 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    {project.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Skills Section */}
      <Container sx={{ py: { xs: 6, md: 10 } }} maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: "#FF3366",
            fontWeight: 800,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "2rem", md: "2.5rem" },
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "60px",
              height: "4px",
              background: "#FF3366",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "4px",
            },
          }}
        >
          Skills
        </Typography>
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item key={index} xs={6} sm={4} md={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  p: 2,
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    bgcolor: "rgba(255, 51, 102, 0.2)",
                  },
                }}
              >
                <Box sx={{ mr: 2 }}>{skill.icon}</Box>
                <Typography
                  variant="body1"
                  sx={{ color: "white", fontWeight: 500, fontSize: "1rem" }}
                >
                  {skill.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Me Section */}
      <Container sx={{ py: { xs: 6, md: 10 } }} maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: "#FF3366",
            fontWeight: 800,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "2rem", md: "2.5rem" },
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "60px",
              height: "4px",
              background: "#FF3366",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "4px",
            },
          }}
        >
          About Me
        </Typography>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: 4,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "white", fontWeight: 600, mb: 3 }}
              >
                A Passion for Innovation
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  mb: 3,
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                }}
              >
                I'm a full stack developer with over 5 years of experience
                crafting intuitive and scalable web & mobile applications. My
                expertise lies in delivering tailored solutions that enhance
                user engagement while solving real-world challenges.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                }}
              >
                From building robust APIs to creating sleek user interfaces, I
                thrive on bridging the gap between functionality and design.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                overflow: "hidden",
                borderRadius: "20px",
                position: "relative",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              <img
                src={homePageAboutImage}
                alt="About Me"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Get in Touch Section */}
      <Container sx={{ py: { xs: 6, md: 10 } }} maxWidth="sm">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: "#FF3366",
            fontWeight: 800,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "2rem", md: "2.5rem" },
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "60px",
              height: "4px",
              background: "#FF3366",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "4px",
            },
          }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            mb: 4,
            fontSize: "1.1rem",
            lineHeight: 1.6,
          }}
        >
          I'd love to collaborate on exciting projects or discuss how I can help
          bring your ideas to life. Feel free to reach out!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            href="mailto:your-email@example.com"
            sx={{
              bgcolor: "#FF3366",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontSize: "1rem",
              "&:hover": {
                bgcolor: "#E62E5C",
              },
            }}
          >
            Email Me
          </Button>
          <Button
            variant="outlined"
            href="/contact"
            sx={{
              color: "white",
              borderColor: "white",
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontSize: "1rem",
              "&:hover": {
                borderColor: "#FF3366",
                bgcolor: "rgba(255, 51, 102, 0.1)",
              },
            }}
          >
            Contact Form
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
