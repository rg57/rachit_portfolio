"use client"

import { SetStateAction, useState } from "react"
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Dialog,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material"
import {
  ArrowForward,
  BusinessCenter,
  CheckCircleOutline,
  Close as CloseIcon,
  Inventory2,
  Launch,
  TrendingUp,
} from "@mui/icons-material"
import { AnimatePresence, motion } from "framer-motion"
import { Link as RouterLink } from "react-router-dom"

import dscc1 from "../assets/dsccscreenshot1.png"
import dscc2 from "../assets/dsccscreenshot2.png"
import instafood1 from "../assets/instafood1.png"
import instafood2 from "../assets/instafood2.png"
import instafood3 from "../assets/instafood3.png"
import instafood4 from "../assets/instafood4.png"
import instafood5 from "../assets/instafood5.png"
import instafoodcover from "../assets/instafoodcover.png"
import nirman1 from "../assets/nirman1.png"
import nirman2 from "../assets/nirman2.png"
import nirman3 from "../assets/nirman3.png"
import nirman4 from "../assets/nirman4.png"
import nirmanlogo from "../assets/nirmanlogo.png"
import teslogo from "../assets/teslogo.png"
import nabslogo from "../assets/nabslogo.jpeg"
import nabsadmin1 from "../assets/nabsadmin1.png"
import nabsadmin2 from "../assets/nabsadmin2.png"
import nabsvendor1 from "../assets/nabsvendor1.png"
import nabsvendor2 from "../assets/nabsvendor2.png"
import nabsvendor3 from "../assets/nabsvendor3.png"
import nabscustomer1 from "../assets/nabscustomer1.png"
import nabscustomer2 from "../assets/nabscustomer2.png"
import nabscustomer3 from "../assets/nabscustomer3.png"

interface Project {
  title: string
  industry: string
  category: string
  description: string
  challenge: string
  solution: string
  outcome: string
  image?: string
  skills: string[]
  link?: string
  linkLabel?: string
  details: string[]
  screenshots: string[]
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "NABS Business Management Platform",
    industry: "Building Solutions",
    category: "CRM • Field Operations • Admin",
    description:
      "A connected business platform for Next Age Building Solutions with customer and vendor mobile apps, an admin dashboard, backend APIs and centralized data management.",
    challenge:
      "Customer requests, vendor activity, surveys, orders, AMC workflows and operational reporting needed to work together instead of being handled as disconnected processes.",
    solution:
      "Built a multi-application ecosystem with React Native apps for customers and field vendors, a React admin dashboard, a Spring Boot backend and MySQL database.",
    outcome:
      "Created one connected operational system for customer service, field activity, order management, surveys, AMC management and reporting.",
    image: nabslogo,
    skills: [
      "React Native",
      "React.js",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "Full-Stack Development",
    ],
    link: "https://github.com/rg57/nabsCRM_Server.git",
    linkLabel: "View Repository",
    details: [
      "Customer mobile app for interactions, requests and account-related workflows.",
      "Vendor mobile app for field workers and service providers.",
      "Admin web dashboard for management, monitoring and reporting.",
      "Spring Boot server for business logic, API endpoints and data processing.",
      "MySQL database for centralized system data.",
      "Modules include survey handling, reporting, order management and AMC management.",
    ],
    screenshots: [
      nabsadmin1,
      nabsadmin2,
      nabscustomer1,
      nabscustomer2,
      nabscustomer3,
      nabsvendor1,
      nabsvendor2,
      nabsvendor3,
    ],
    featured: true,
  },
  {
    title: "Nirman Construction Operations App",
    industry: "Construction",
    category: "Project Operations • Mobile",
    description:
      "A custom internal mobile application designed around the workflow of a construction company for project tracking, drawings, documents and reporting.",
    challenge:
      "Project teams needed a simpler way to access current project information, drawings, architect assignments and process-stage documentation from the field.",
    solution:
      "Developed a React Native application that centralizes project status, drawings, architectural documents, architect assignments and PDF report generation.",
    outcome:
      "Turned important project information into a structured mobile workflow that is easier for the internal team to access and update.",
    image: nirmanlogo,
    skills: [
      "React Native",
      "Business Workflow",
      "PDF Generation",
      "File Management",
      "Mobile Development",
    ],
    link: "https://github.com/rg57/nirman_RN0.71_Updated.git",
    linkLabel: "View Repository",
    details: [
      "Custom internal solution for a construction company's operational team.",
      "Project updates and process-status tracking.",
      "Access to drawings and architectural plans.",
      "Architect assignment and management.",
      "Document-oriented workflow for project information.",
      "PDF generation for current process-stage reports.",
    ],
    screenshots: [nirman1, nirman2, nirman3, nirman4],
    featured: true,
  },
  {
    title: "FMCG Operations & Inventory System",
    industry: "FMCG / Distribution",
    category: "Inventory • Sales • Operations",
    description:
      "An internal business application designed from real FMCG operations to manage products, purchases, inventory, customers, sales, rates, payments and expenses.",
    challenge:
      "Day-to-day FMCG operations involve stock, purchases, customer records, pricing, expenses, sales and payment follow-ups that can easily become fragmented across registers, spreadsheets and messages.",
    solution:
      "Designed a centralized business-management workflow around actual operating requirements, bringing core commercial and inventory processes into one internal system.",
    outcome:
      "Provides a single operational view of the business and serves as a real-world test environment for improving workflows as the company grows.",
    skills: [
      "Business Analysis",
      "CRM",
      "Inventory",
      "Sales Management",
      "Product Management",
      "Full-Stack Development",
    ],
    details: [
      "Product and SKU management.",
      "Purchase and inventory tracking.",
      "Customer and sales records.",
      "Rate and payment management.",
      "Expense tracking.",
      "Designed around real operational use rather than a demo-only workflow.",
    ],
    screenshots: [],
    featured: true,
  },
  {
    title: "InstaFood",
    industry: "Food & Commerce",
    category: "Ordering • Admin • Mobile",
    description:
      "A mobile food-ordering ecosystem with customer ordering flows and restaurant-side product, pricing and inventory management.",
    challenge:
      "The client needed a mobile experience that connected customer ordering with restaurant-side management without requiring a large traditional backend stack.",
    solution:
      "Built the application in React Native and used Firebase services for authentication, data and backend functionality, including customer and admin workflows.",
    outcome:
      "Delivered a complete mobile ordering experience with user accounts, order history and restaurant-side product and inventory controls.",
    image: instafoodcover,
    skills: ["React Native", "Firebase", "Serverless Architecture"],
    link: "https://github.com/rg57/InstaFood.git",
    linkLabel: "View Repository",
    details: [
      "Food ordering and delivery solution built for a client in the food sector.",
      "Customer menu browsing and ordering workflow.",
      "User profiles and order history.",
      "Restaurant admin functionality for products, pricing and inventory.",
      "Firebase-backed serverless architecture.",
    ],
    screenshots: [instafood1, instafood2, instafood3, instafood4, instafood5],
  },
  {
    title: "DSCC India Digital Platform",
    industry: "Construction",
    category: "Website • CMS",
    description:
      "Redesigned and enhanced the DSCC India website with a cleaner interface and improved content-management functionality.",
    challenge:
      "The existing website needed a more polished user experience while making project-related content easier to manage internally.",
    solution:
      "Improved the interface and extended the Laravel-based admin workflow with content-management features and project-photo assignment.",
    outcome:
      "Created a more usable public-facing website while giving the internal team better control over project content.",
    image: dscc1,
    skills: ["Laravel", "PHP", "UI/UX Design", "Content Management"],
    link: "https://dsccindia.com/",
    linkLabel: "Visit Website",
    details: [
      "Redesigned the interface for improved usability and presentation.",
      "Added content-management functionality to the admin portal.",
      "Implemented project-specific photo assignment.",
      "Worked within the existing Laravel application.",
    ],
    screenshots: [dscc1, dscc2],
  },
  {
    title: "Business Ticketing Tool",
    industry: "Service Operations",
    category: "Support • App Ecosystem",
    description:
      "A connected complaint and appointment management system with client and admin mobile applications backed by a Node.js server.",
    challenge:
      "Customer complaints, appointments and administrative handling needed to work in one coordinated workflow.",
    solution:
      "Built separate React Native experiences for customers and administrators, connected through a Node.js API and MongoDB.",
    outcome:
      "Created a cohesive ticketing workflow for complaint submission, appointment handling and administrative management.",
    skills: ["React Native", "Node.js", "MongoDB", "REST APIs"],
    link: "https://github.com/rg57/CC-SERVER.git",
    linkLabel: "View Repository",
    details: [
      "Customer app for complaints, appointments and user profiles.",
      "Admin app for ticket and appointment management.",
      "Node.js server for application logic and APIs.",
      "MongoDB data layer.",
      "Built as a connected client/admin system rather than isolated screens.",
    ],
    screenshots: [],
  },
  {
    title: "TES Market",
    industry: "Financial Technology",
    category: "Trading • API Integration",
    description:
      "Frontend development and API integration work for a stock-market platform with client/admin interfaces and trading-related workflows.",
    challenge:
      "The platform required additional user interfaces, wallet functionality and market transaction flows connected to external market data.",
    solution:
      "Developed and modified React interfaces, implemented wallet and buy/sell modules and integrated Alpaca Market API data.",
    outcome:
      "Expanded the platform's frontend capabilities and connected important trading workflows with live market-data services.",
    image: teslogo,
    skills: ["React.js", "API Integration", "Financial Systems"],
    link: "http://theelsystem.com/",
    linkLabel: "Visit Project",
    details: [
      "Modified interfaces for client and admin user types.",
      "Implemented wallet-management functionality.",
      "Developed buy and sell transaction modules.",
      "Created additional product pages and user flows.",
      "Integrated Alpaca Market API data.",
    ],
    screenshots: [],
  },
  {
    title: "Divine Masale Brand Website",
    industry: "FMCG / Spice Brand",
    category: "Brand Website • Product Showcase",
    description:
      "A responsive brand website created for Divine Masale to present its spice range, brand identity and product information through a clean, professional digital experience.",
    challenge:
      "Divine Masale needed an official online presence that could build brand credibility, showcase its growing product range and give customers, retailers and distributors one reliable place to understand the brand.",
    solution:
      "Designed and developed a responsive React website using MUI with reusable components, product-focused sections and a visual experience aligned with the Divine Masale brand.",
    outcome:
      "Created a dedicated digital presence that strengthens brand credibility, supports customer discovery and provides retailers and distributors with a professional reference point during sales outreach.",
    skills: ["React.js", "MUI", "UI/UX Design", "Responsive Web Design"],
    link: "https://www.divinemasale.com",
    linkLabel: "Visit Website",
    details: [
      "Responsive React-based website for the Divine Masale brand.",
      "Product-focused presentation for the spice and masala range.",
      "Brand, company and product information presented in one digital experience.",
      "Designed to strengthen customer trust and support retailer and distributor outreach.",
      "Optimized for modern desktop and mobile browsers.",
    ],
    screenshots: [],
  },
]

const featuredProjects = projects.filter((project) => project.featured)
const additionalProjects = projects.filter((project) => !project.featured)

const accent = "#FF3366"
const muted = "rgba(255, 255, 255, 0.68)"
const border = "rgba(255, 255, 255, 0.12)"
const panel = "rgba(17, 5, 31, 0.46)"

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Box
        sx={{
          height: { xs: 220, md: 250 },
          bgcolor: "rgba(255,255,255,0.96)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit:
              project.title.includes("NABS") ||
              project.title.includes("Nirman") ||
              project.title.includes("TES")
                ? "contain"
                : "cover",
          }}
        />
      </Box>
    )
  }

  return (
    <Box
      sx={{
        height: { xs: 220, md: 250 },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(145deg, rgba(255,51,102,0.20), rgba(100,65,165,0.24))",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(255,51,102,0.16)",
          filter: "blur(20px)",
          top: -70,
          right: -40,
        }}
      />
      <Box
        sx={{
          width: 150,
          height: 150,
          borderRadius: 5,
          border: `1px solid ${border}`,
          bgcolor: "rgba(14,5,27,0.52)",
          backdropFilter: "blur(12px)",
          display: "grid",
          placeItems: "center",
          position: "relative",
          boxShadow: "0 24px 70px rgba(0,0,0,0.22)",
        }}
      >
        <Inventory2 sx={{ fontSize: 58, color: accent }} />
      </Box>
    </Box>
  )
}

export default function Work(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [open, setOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState("")

  const handleOpen = (image: SetStateAction<string>) => {
    setCurrentImage(image)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setCurrentImage("")
  }

  const handleCardClick = (project: Project): void => {
    setSelectedProject(project)
  }

  const handleCloseProject = (): void => {
    setSelectedProject(null)
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: "white",
        background:
          "radial-gradient(circle at 82% 12%, rgba(255,51,102,0.13), transparent 28%), linear-gradient(135deg, #24073E 0%, #351052 50%, #4A1D6A 100%)",
        pb: 10,
      }}
    >
      <Container maxWidth="lg">
        {/* PAGE INTRO */}
        <Box sx={{ pt: { xs: 16, md: 18 }, pb: { xs: 7, md: 9 } }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Chip
              label="Selected Work"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "rgba(255,51,102,0.65)",
                bgcolor: "rgba(255,51,102,0.08)",
                mb: 3,
                fontWeight: 700,
              }}
            />

            <Typography
              component="h1"
              sx={{
                maxWidth: 820,
                fontSize: { xs: "2.6rem", sm: "3.7rem", md: "4.4rem" },
                lineHeight: 1.03,
                letterSpacing: "-0.045em",
                fontWeight: 800,
              }}
            >
              Business software built for{" "}
              <Box component="span" sx={{ color: accent }}>
                real workflows.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: muted,
                maxWidth: 760,
                mt: 3,
                fontSize: { xs: "1rem", md: "1.16rem" },
                lineHeight: 1.8,
              }}
            >
              Selected CRM, mobile, operations and internal business systems I
              have designed or developed — with the focus on the problem being
              solved, not only the technology used.
            </Typography>
          </motion.div>
        </Box>

        {/* FEATURED CASE STUDIES */}
        <Box sx={{ mb: 10 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "flex-end" }}
            spacing={2}
            sx={{ mb: 4 }}
          >
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: accent,
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                }}
              >
                Flagship Systems
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mt: 0.5,
                  fontSize: { xs: "2rem", md: "2.7rem" },
                }}
              >
                Selected business systems
              </Typography>
            </Box>

            <Typography sx={{ color: muted, maxWidth: 430, lineHeight: 1.7 }}>
              These projects best represent how I approach business problems,
              workflows and software architecture.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {featuredProjects.map((project, index) => (
              <Grid item xs={12} md={index === 0 ? 12 : 6} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  style={{ height: "100%" }}
                >
                  <Card
                    onClick={() => handleCardClick(project)}
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                      bgcolor: panel,
                      backdropFilter: "blur(16px)",
                      border: `1px solid ${border}`,
                      borderRadius: 5,
                      overflow: "hidden",
                      color: "white",
                      boxShadow: "0 18px 60px rgba(0,0,0,0.16)",
                      transition:
                        "transform .25s ease, border-color .25s ease, box-shadow .25s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        borderColor: "rgba(255,51,102,0.48)",
                        boxShadow: "0 26px 80px rgba(0,0,0,0.26)",
                      },
                    }}
                  >
                    <Grid container>
                      <Grid item xs={12} md={index === 0 ? 5 : 12}>
                        <ProjectVisual project={project} />
                      </Grid>

                      <Grid item xs={12} md={index === 0 ? 7 : 12}>
                        <Box sx={{ p: { xs: 3, md: index === 0 ? 4.5 : 3.5 } }}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                            sx={{ mb: 2 }}
                          >
                            <Typography
                              variant="caption"
                              sx={{
                                color: accent,
                                fontWeight: 800,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                              }}
                            >
                              {project.industry}
                            </Typography>

                            <Typography
                              variant="caption"
                              sx={{ color: "rgba(255,255,255,0.52)" }}
                            >
                              {project.category}
                            </Typography>
                          </Stack>

                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 800,
                              fontSize: {
                                xs: "1.55rem",
                                md: index === 0 ? "2.1rem" : "1.7rem",
                              },
                              lineHeight: 1.2,
                            }}
                          >
                            {project.title}
                          </Typography>

                          <Typography
                            sx={{
                              color: muted,
                              mt: 2,
                              lineHeight: 1.75,
                              minHeight: index === 0 ? "auto" : 86,
                            }}
                          >
                            {project.description}
                          </Typography>

                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                            sx={{ mt: 3, color: "white", fontWeight: 700 }}
                          >
                            <Typography
                              sx={{ fontWeight: 800, fontSize: "0.95rem" }}
                            >
                              View case study
                            </Typography>
                            <ArrowForward
                              sx={{ fontSize: 18, color: accent }}
                            />
                          </Stack>
                        </Box>
                      </Grid>
                    </Grid>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* BUSINESS APPROACH STRIP */}
        <Box
          sx={{
            mb: 10,
            p: { xs: 3, md: 4 },
            borderRadius: 5,
            bgcolor: "rgba(255,51,102,0.08)",
            border: "1px solid rgba(255,51,102,0.25)",
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack direction="row" spacing={2.2} alignItems="flex-start">
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    minWidth: 48,
                    borderRadius: 3,
                    bgcolor: "rgba(255,51,102,0.16)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <BusinessCenter sx={{ color: accent }} />
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    I look at the workflow before I look at the feature list.
                  </Typography>
                  <Typography sx={{ color: muted, mt: 1, lineHeight: 1.75 }}>
                    The goal is not to add more screens. It is to understand how
                    the business currently operates and build the smallest
                    useful system that makes that process clearer, faster and
                    easier to manage.
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Stack spacing={1.25}>
                {[
                  "Understand the current process",
                  "Map users, data and decisions",
                  "Build around actual operations",
                ].map((item) => (
                  <Stack
                    direction="row"
                    spacing={1.2}
                    alignItems="center"
                    key={item}
                  >
                    <CheckCircleOutline sx={{ color: accent, fontSize: 19 }} />
                    <Typography sx={{ color: "rgba(255,255,255,0.82)" }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* ADDITIONAL PROJECTS */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="overline"
            sx={{
              color: accent,
              fontWeight: 800,
              letterSpacing: "0.15em",
            }}
          >
            Additional Work
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mt: 0.5,
              mb: 4,
              fontSize: { xs: "2rem", md: "2.7rem" },
            }}
          >
            More systems & products
          </Typography>

          <Grid container spacing={3}>
            {additionalProjects.map((project, index) => (
              <Grid item xs={12} sm={6} lg={4} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
                  style={{ height: "100%" }}
                >
                  <Card
                    onClick={() => handleCardClick(project)}
                    sx={{
                      height: "100%",
                      minHeight: 385,
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                      bgcolor: "rgba(18,6,32,0.40)",
                      border: `1px solid ${border}`,
                      borderRadius: 4,
                      overflow: "hidden",
                      color: "white",
                      boxShadow: "none",
                      transition:
                        "transform .22s ease, border-color .22s ease, background .22s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "rgba(255,51,102,0.42)",
                        bgcolor: "rgba(25,8,43,0.58)",
                      },
                    }}
                  >
                    <Box sx={{ height: 170 }}>
                      <ProjectVisual project={project} />
                    </Box>

                    <Box
                      sx={{
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: accent,
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.07em",
                        }}
                      >
                        {project.industry}
                      </Typography>

                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 800, mt: 1, lineHeight: 1.25 }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: muted,
                          mt: 1.5,
                          lineHeight: 1.65,
                          fontSize: "0.94rem",
                          flexGrow: 1,
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ mt: 2.5 }}
                      >
                        <Typography
                          sx={{ fontWeight: 800, fontSize: "0.9rem" }}
                        >
                          View project
                        </Typography>
                        <ArrowForward sx={{ fontSize: 17, color: accent }} />
                      </Stack>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FINAL CTA */}
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 6, md: 8 },
            px: 3,
            borderRadius: 6,
            border: `1px solid ${border}`,
            bgcolor: "rgba(14,5,27,0.38)",
          }}
        >
          <TrendingUp sx={{ color: accent, fontSize: 34, mb: 1.5 }} />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
              letterSpacing: "-0.03em",
            }}
          >
            Have a business process that should not still be manual?
          </Typography>
          <Typography
            sx={{
              color: muted,
              maxWidth: 660,
              mx: "auto",
              mt: 2,
              lineHeight: 1.75,
            }}
          >
            Tell me how the process works today. We can identify what is worth
            automating and what kind of software would actually make sense.
          </Typography>

          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{
              mt: 3.5,
              bgcolor: accent,
              color: "white",
              px: 3.4,
              py: 1.35,
              borderRadius: 8,
              textTransform: "none",
              fontWeight: 800,
              boxShadow: "0 12px 30px rgba(255,51,102,0.20)",
              "&:hover": {
                bgcolor: "#E62E5C",
              },
            }}
          >
            Discuss Your Project
          </Button>
        </Box>
      </Container>

      {/* PROJECT CASE STUDY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1300,
              backgroundColor: "rgba(8, 2, 14, 0.88)",
              backdropFilter: "blur(9px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
            onClick={handleCloseProject}
          >
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              style={{ width: "100%", maxWidth: 960, maxHeight: "90vh" }}
              onClick={(event) => event.stopPropagation()}
            >
              <Card
                sx={{
                  bgcolor: "#1B0A2B",
                  color: "white",
                  border: `1px solid ${border}`,
                  borderRadius: 5,
                  maxHeight: "90vh",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 30px 100px rgba(0,0,0,0.48)",
                }}
              >
                <Box
                  sx={{
                    px: { xs: 2.5, md: 4 },
                    pt: { xs: 2.5, md: 3.5 },
                    pb: 2.5,
                    borderBottom: `1px solid ${border}`,
                    position: "relative",
                  }}
                >
                  <IconButton
                    onClick={handleCloseProject}
                    aria-label="Close project details"
                    sx={{
                      position: "absolute",
                      right: 18,
                      top: 18,
                      color: "white",
                      bgcolor: "rgba(255,255,255,0.07)",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>

                  <Typography
                    variant="caption"
                    sx={{
                      color: accent,
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {selectedProject.industry} • {selectedProject.category}
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      pr: 7,
                      mt: 1,
                      fontSize: { xs: "1.8rem", md: "2.6rem" },
                      lineHeight: 1.15,
                    }}
                  >
                    {selectedProject.title}
                  </Typography>

                  <Typography sx={{ color: muted, mt: 1.5, lineHeight: 1.7 }}>
                    {selectedProject.description}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    overflowY: "auto",
                    px: { xs: 2.5, md: 4 },
                    py: { xs: 3, md: 4 },
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                      <CaseStudyBlock
                        title="Business challenge"
                        text={selectedProject.challenge}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CaseStudyBlock
                        title="What I built"
                        text={selectedProject.solution}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CaseStudyBlock
                        title="Outcome"
                        text={selectedProject.outcome}
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
                      Key capabilities
                    </Typography>

                    <Grid container spacing={1.25}>
                      {selectedProject.details.map((detail) => (
                        <Grid item xs={12} md={6} key={detail}>
                          <Stack
                            direction="row"
                            spacing={1.2}
                            alignItems="flex-start"
                          >
                            <CheckCircleOutline
                              sx={{
                                color: accent,
                                fontSize: 19,
                                mt: "2px",
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              sx={{
                                color: "rgba(255,255,255,0.76)",
                                lineHeight: 1.65,
                                fontSize: "0.94rem",
                              }}
                            >
                              {detail}
                            </Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5 }}>
                      Technology
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {selectedProject.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            color: "white",
                            bgcolor: "rgba(255,255,255,0.07)",
                            border: `1px solid ${border}`,
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>

                  {selectedProject.screenshots.length > 0 && (
                    <Box sx={{ mt: 4 }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
                        Screenshots
                      </Typography>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                          },
                          gap: 1.5,
                        }}
                      >
                        {selectedProject.screenshots.map((item, index) => (
                          <Box
                            key={`${selectedProject.title}-${index}`}
                            onClick={() => handleOpen(item)}
                            sx={{
                              height: 190,
                              bgcolor: "white",
                              borderRadius: 3,
                              overflow: "hidden",
                              cursor: "zoom-in",
                              border: `1px solid ${border}`,
                            }}
                          >
                            <Box
                              component="img"
                              src={item}
                              alt={`${selectedProject.title} screenshot ${
                                index + 1
                              }`}
                              loading="lazy"
                              sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  )}

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.5}
                    sx={{ mt: 4 }}
                  >
                    {selectedProject.link && (
                      <Button
                        variant="contained"
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<Launch />}
                        sx={{
                          bgcolor: accent,
                          color: "white",
                          borderRadius: 7,
                          textTransform: "none",
                          fontWeight: 800,
                          px: 3,
                          "&:hover": { bgcolor: "#E62E5C" },
                        }}
                      >
                        {selectedProject.linkLabel || "View Project"}
                      </Button>
                    )}

                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="outlined"
                      onClick={handleCloseProject}
                      endIcon={<ArrowForward />}
                      sx={{
                        color: "white",
                        borderColor: "rgba(255,255,255,0.34)",
                        borderRadius: 7,
                        textTransform: "none",
                        fontWeight: 800,
                        px: 3,
                        "&:hover": {
                          borderColor: "white",
                          bgcolor: "rgba(255,255,255,0.05)",
                        },
                      }}
                    >
                      Discuss a similar project
                    </Button>
                  </Stack>
                </Box>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULL SCREENSHOT VIEWER */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "#100719",
            borderRadius: 3,
            overflow: "hidden",
          },
        }}
      >
        <Box sx={{ position: "relative", bgcolor: "#0B0411" }}>
          <IconButton
            onClick={handleClose}
            aria-label="Close screenshot"
            sx={{
              position: "absolute",
              right: 12,
              top: 12,
              zIndex: 2,
              color: "white",
              bgcolor: "rgba(0,0,0,0.55)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.72)" },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={currentImage}
            alt="Project screenshot"
            sx={{
              display: "block",
              width: "100%",
              maxHeight: "88vh",
              objectFit: "contain",
            }}
          />
        </Box>
      </Dialog>
    </Box>
  )
}

function CaseStudyBlock({ title, text }: { title: string; text: string }) {
  return (
    <Box
      sx={{
        height: "100%",
        p: 2.4,
        borderRadius: 3,
        bgcolor: "rgba(255,255,255,0.045)",
        border: `1px solid ${border}`,
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          color: accent,
          fontWeight: 800,
          mb: 1,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          fontSize: "0.74rem",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.7,
          fontSize: "0.93rem",
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}
