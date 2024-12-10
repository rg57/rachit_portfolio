import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Chip,
} from "@mui/material"
import {
  GitHub,
  LinkedIn,
  YouTube,
  Code,
  Build,
  Devices,
  Storage,
} from "@mui/icons-material"
import { motion } from "framer-motion"
import { Link as RouterLink } from "react-router-dom"

export default function About() {
  const socialLinks = [
    {
      icon: <GitHub />,
      href: "https://github.com/rg57",
      label: "GitHub",
    },
    {
      icon: <LinkedIn />,
      href: "https://www.linkedin.com/in/rachit-gupta-767428126",
      label: "LinkedIn",
    },
    {
      icon: <YouTube />,
      href: "https://www.youtube.com/@codeplaytech6467",
      label: "YouTube",
    },
  ]

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Spring-Boot",
    "Firebase",
    "React Native",
    "Flutter",
    "GraphQL",
    "MongoDB",
    "EC2",
    "Figma",
    "Architecture",
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
        padding: { xs: "1rem", sm: "1.5rem", md: "2rem" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: {
          xs: 10,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ zIndex: 1, textAlign: "center", px: { xs: 2, sm: 3, md: 4 } }}
      >
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
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3.5rem",
                  lg: "4rem",
                },
                fontWeight: "bold",
                mb: { xs: 2, sm: 3, md: 4 },
                lineHeight: 1.2,
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
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                mb: { xs: 3, sm: 4 },
                lineHeight: 1.6,
              }}
            >
              With 5 years of experience, I craft innovative web and mobile
              solutions that drive business growth and enhance user experiences.
            </Typography>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Button
              variant="contained"
              component={RouterLink}
              to="/work"
              sx={{
                backgroundColor: "#FF3366",
                color: "white",
                "&:hover": { backgroundColor: "#E62E5C" },
                mb: 2,
                mr: 2,
              }}
              href="#portfolio"
            >
              View My Projects
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                mb: 2,
              }}
              // href="#contact"
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={fadeIn}>
            <Box sx={{ mt: 4, mb: 6 }}>
              <Typography variant="h6" sx={{ mb: 2, color: "#FF3366" }}>
                My Tech Stack
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      "&:hover": { backgroundColor: "rgba(255, 51, 102, 0.2)" },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </motion.div>

          {/* Grid Section */}
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ textAlign: "left" }}>
            {/* About Me */}
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeIn}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#FF3366",
                      fontWeight: "bold",
                      mb: { xs: 2, sm: 3 },
                    }}
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
                    As a passionate Full Stack Developer, I thrive on turning
                    complex problems into elegant, efficient solutions. My
                    journey in tech has equipped me with a diverse skill set and
                    a keen eye for detail, allowing me to create seamless,
                    user-centric applications that make a real impact.
                  </Typography>
                  {/* <Button
                    variant="text"
                    sx={{
                      color: "#FF3366",
                      textTransform: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                    href="/about"
                  >
                    Learn More About My Journey →
                  </Button> */}
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
                    From developing robust CRM systems to creating intuitive
                    mobile apps, my portfolio showcases a range of projects that
                    demonstrate my technical expertise and creative
                    problem-solving skills. Each project is a testament to my
                    commitment to delivering high-quality, scalable solutions.
                  </Typography>
                  {/* <Button
                    variant="text"
                    sx={{
                      color: "#FF3366",
                      textTransform: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                    href="/portfolio"
                  >
                    Explore My Portfolio →
                  </Button> */}
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Services Section */}
          <motion.div variants={fadeIn}>
            <Box sx={{ mt: 6, mb: 4 }}>
              <Typography
                variant="h5"
                sx={{ color: "#FF3366", fontWeight: "bold", mb: 3 }}
              >
                SERVICES I OFFER
              </Typography>
              <Grid container spacing={2}>
                {[
                  {
                    icon: <Code />,
                    title: "Web Development",
                    desc: "Custom websites and web applications",
                  },
                  {
                    icon: <Devices />,
                    title: "Mobile App Development",
                    desc: "Cross-platform mobile solutions",
                  },
                  {
                    icon: <Build />,
                    title: "API Development",
                    desc: "Robust and scalable API architectures",
                  },

                  {
                    icon: <Storage />,
                    title: "Enterprise Solutions",
                    desc: "CRM and ERP Software Services",
                  },
                ].map((service, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box
                      sx={{
                        p: 2,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      {service.icon}
                      <Typography variant="h6" sx={{ my: 1, color: "white" }}>
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        {service.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* Social Links */}
          <Box sx={{ mt: 4 }}>
            <motion.div variants={fadeIn}>
              <Typography
                variant="h6"
                sx={{ color: "#FF3366", fontWeight: "bold", mb: 2 }}
              >
                LET'S CONNECT
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

          {/* Call to Action */}
          <motion.div variants={fadeIn}>
            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" sx={{ color: "white", mb: 2 }}>
                Ready to start your next project?
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF3366",
                  color: "white",
                  "&:hover": { backgroundColor: "#E62E5C" },
                  px: 4,
                  py: 1,
                }}
                href="/contact"
              >
                Let's Work Together
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}
