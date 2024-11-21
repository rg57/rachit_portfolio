"use client"

import { useState } from "react"
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Box,
  IconButton,
  Chip,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import { Close as CloseIcon } from "@mui/icons-material"
import { motion, AnimatePresence } from "framer-motion"

interface Project {
  title: string
  description: string
  image: string
  skills: string[]
  link: string
  details: string[]
  screenshots: string[]
}

const projects: Project[] = [
  {
    title: "Ticketing Tool",
    description:
      "A comprehensive ticketing system with client and admin mobile apps, and a Node.js server.",
    image: "/placeholder.svg?height=200&width=300",
    skills: ["React Native", "Node.js", "MongoDB"],
    link: "https://github.com/rg57/CC-SERVER.git",
    details: [
      "Full-stack solution designed to streamline complaint handling and appointment management.",
      "Client mobile app (React Native): Allows users to submit complaints, schedule appointments, and manage their profiles.",
      "Admin mobile app (React Native): Enables administrators to handle tickets, manage appointments, and oversee user profiles.",
      "Server (Node.js): Handles data processing, storage, and API endpoints for both client and admin apps.",
      "Showcases ability to create a cohesive ecosystem of applications that work together to solve complex business problems.",
    ],

    screenshots: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    title: "InstaFood",
    description:
      "A React Native mobile app for food ordering and delivery, using Firebase for backend services.",
    image: "/placeholder.svg?height=200&width=300",
    skills: ["React Native", "Firebase", "Serverless Architecture"],
    link: "https://github.com/rg57/InstaFood.git",
    details: [
      "Comprehensive food ordering and delivery solution built for a client in the food sector.",
      "Leverages React Native for the frontend and Firebase for backend services, embracing a serverless architecture.",
      "Order management system for customers to browse menus, place orders, and track deliveries.",
      "User profiles for personalized experiences and order history.",
      "Admin app for restaurant owners to manage product listings, pricing, and inventory.",
      "Demonstrates ability to create efficient, scalable mobile solutions using modern technologies and architectures.",
    ],

    screenshots: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    title: "Nirman App",
    description:
      "A React Native app for DS Constructions company, facilitating project updates and document management.",
    image: "/placeholder.svg?height=200&width=300",
    skills: ["React Native", "PDF Generation", "File Management"],
    link: "https://github.com/rg57/nirman_RN0.71_Updated.git",
    details: [
      "Custom solution for DS Constructions company's internal team.",
      "Real-time project updates and status tracking.",
      "Access to project drawings and architectural plans.",
      "Architect assignment and management.",
      "PDF generation for current process stage reports.",
    ],
    screenshots: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    title: "DSCCINDIA Website",
    description:
      "Redesigned and enhanced the DSCCINDIA website with improved UI and content management features.",
    image: "/placeholder.svg?height=200&width=300",
    skills: ["Laravel", "PHP", "UI/UX Design", "Content Management"],
    link: "#",
    details: [
      "Redesigned the user interface for improved aesthetics and usability.",
      "Implemented new content management features in the admin portal.",
      "Added functionality to assign photos to specific projects.",
      "Utilized Laravel for robust backend development and efficient content handling.",
    ],
    screenshots: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    title: "TES Market",
    description:
      "Developed frontend components for a stock market platform using React.js and integrated with Alpaca Market API.",
    image: "/placeholder.svg?height=200&width=300",
    skills: ["React.js", "API Integration", "Financial Systems"],
    link: "#",
    details: [
      "Created user interfaces for both client and admin user types.",
      "Implemented a wallet system for managing user funds.",
      "Developed buy and sell modules for stock transactions.",
      "Designed various pages to enhance user experience.",
      "Integrated with the Alpaca Market API for real-time stock data.",
    ],
    screenshots: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    title: "NABS CRM",
    description:
      "A comprehensive enterprise solution for Next Age Building Solutions, featuring mobile apps and a web dashboard.",
    image: "/placeholder.svg?height=200&width=300",
    skills: [
      "React Native",
      "React.js",
      "Spring Boot",
      "MySQL",
      "Full-Stack Development",
    ],
    link: "https://github.com/rg57/nabsCRM_Server.git",
    details: [
      "Client mobile app (React Native): For customer interactions and service requests.",
      "Vendor mobile app (React Native): For field workers and service providers.",
      "Admin web dashboard (React.js): For overall system management and reporting.",
      "Server (Spring Boot): Handles data processing, business logic, and API endpoints.",
      "Database (MySQL): Stores and manages all system data.",
      "Key modules include survey handling, comprehensive reporting, order management, and AMC management.",
    ],
    screenshots: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
]

export default function Work(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleCardClick = (project: Project): void => {
    setSelectedProject(project)
  }

  const handleCloseProject = (): void => {
    setSelectedProject(null)
  }

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2A0845 0%, #6441A5 100%)",
        minHeight: "100vh",
        py: 8,
        color: "white",
        "@keyframes glowingBorder": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "#FF3366",
            mb: 6,
            mt: 12,
          }}
        >
          My Work
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
                <Card
                  sx={{
                    height: 400,
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: -5,
                      left: -5,
                      right: -5,
                      bottom: -5,
                      background:
                        "linear-gradient(45deg, #FF3366, #2A0845, #6441A5, #FF3366)",
                      backgroundSize: "400% 400%",
                      zIndex: -1,
                      filter: "blur(10px)",
                      opacity: 0,
                      transition: "opacity 0.3s ease-in-out",
                    },
                    "&:hover::before": {
                      opacity: 1,
                      animation: "glowingBorder 3s ease-in-out infinite",
                    },
                  }}
                  onClick={() => handleCardClick(project)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ borderRadius: "20px 20px 0 0" }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      p: 3,
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                      sx={{
                        color: "white",
                        fontWeight: 600,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="rgba(255, 255, 255, 0.7)"
                      align="center"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "center",
                      pb: 2,
                    }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        backgroundColor: "#FF3366",
                        color: "white",
                        borderRadius: "30px",
                        px: 2,
                        "&:hover": {
                          backgroundColor: "#E62E5C",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
          >
            <Card
              sx={{
                width: "90%",
                height: "80%",
                maxWidth: 800,
                bgcolor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "20px",
                p: 4,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                mt: 8,
              }}
            >
              <IconButton
                onClick={handleCloseProject}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  color: "white",
                }}
                aria-label="Close project details"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h4" gutterBottom sx={{ color: "#FF3366" }}>
                {selectedProject.title}
              </Typography>
              <Box sx={{ flexGrow: 1, overflowY: "auto", pr: 2 }}>
                <Typography variant="body1" paragraph sx={{ color: "white" }}>
                  {selectedProject.description}
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "#FF3366", mt: 2 }}
                >
                  Skills Used:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  {selectedProject.skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      sx={{
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        color: "white",
                      }}
                    />
                  ))}
                </Box>
                <List sx={{ color: "white" }}>
                  {selectedProject.details.map((detail, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={`• ${detail}`} />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Button
                variant="contained"
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 2,
                  backgroundColor: "#FF3366",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#E62E5C",
                  },
                }}
              >
                View Project
              </Button>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}
