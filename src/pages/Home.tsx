"use client"

import { Link as RouterLink } from "react-router-dom"
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material"
import {
  Api as ApiIcon,
  ArrowForward as ArrowForwardIcon,
  Assessment as AssessmentIcon,
  Bolt as BoltIcon,
  Build as BuildIcon,
  BusinessCenter as BusinessCenterIcon,
  CheckCircle as CheckCircleIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  DataObject as DataObjectIcon,
  GitHub as GitHubIcon,
  Inventory2 as InventoryIcon,
  Language as LanguageIcon,
  MobileFriendly as MobileIcon,
  PeopleAlt as PeopleAltIcon,
  PhoneAndroid as PhoneAndroidIcon,
  SettingsSuggest as SettingsSuggestIcon,
  Storage as StorageIcon,
  TrendingUp as TrendingUpIcon,
  Web as WebIcon,
} from "@mui/icons-material"
import homePageAboutImage from "../assets/homepageabout.png"

const accent = "#FF3366"
const accentHover = "#E62E5C"
const pageBackground = "linear-gradient(135deg, #2A0845 0%, #6441A5 100%)"
const glassBackground = "rgba(255, 255, 255, 0.06)"
const glassBorder = "1px solid rgba(255, 255, 255, 0.12)"
const mutedText = "rgba(255, 255, 255, 0.76)"

const sectionTitleSx = {
  color: accent,
  fontWeight: 800,
  mb: { xs: 4, md: 6 },
  fontSize: { xs: "2rem", md: "2.5rem" },
  position: "relative",
  "&::after": {
    content: '\"\"',
    position: "absolute",
    width: "60px",
    height: "4px",
    background: accent,
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "4px",
  },
}

export default function Home() {
  const skills = [
    { name: "React", icon: <CodeIcon color="primary" fontSize="large" /> },
    { name: "Node.js", icon: <BuildIcon color="secondary" fontSize="large" /> },
    { name: "React Native", icon: <MobileIcon color="action" fontSize="large" /> },
    { name: "JavaScript", icon: <LanguageIcon color="warning" fontSize="large" /> },
    { name: "TypeScript", icon: <CodeIcon color="info" fontSize="large" /> },
    { name: "HTML & CSS", icon: <WebIcon color="error" fontSize="large" /> },
    { name: "Spring Boot", icon: <BoltIcon color="success" fontSize="large" /> },
    { name: "MySQL", icon: <StorageIcon color="primary" fontSize="large" /> },
    { name: "MongoDB", icon: <StorageIcon color="success" fontSize="large" /> },
    { name: "AWS", icon: <CloudIcon color="warning" fontSize="large" /> },
    { name: "Git", icon: <GitHubIcon color="action" fontSize="large" /> },
    { name: "REST APIs", icon: <ApiIcon color="info" fontSize="large" /> },
    { name: "Flutter", icon: <MobileIcon color="secondary" fontSize="large" /> },
    { name: "Firebase", icon: <CloudIcon color="error" fontSize="large" /> },
    { name: "Java", icon: <CodeIcon color="secondary" fontSize="large" /> },
    { name: "Python", icon: <DataObjectIcon color="primary" fontSize="large" /> },
  ]

  const businessSolutions = [
    {
      title: "CRM & Customer Management",
      desc: "Bring leads, customers, follow-ups, order history, payments and relationship data into one usable system.",
      icon: <PeopleAltIcon sx={{ fontSize: 38, color: accent }} />,
    },
    {
      title: "Inventory & Operations",
      desc: "Track products, purchases, stock movement, expenses and day-to-day operations without scattered spreadsheets.",
      icon: <InventoryIcon sx={{ fontSize: 38, color: accent }} />,
    },
    {
      title: "Field Sales Systems",
      desc: "Manage retailer visits, orders, collections, attendance and salesperson activity from the field to management.",
      icon: <TrendingUpIcon sx={{ fontSize: 38, color: accent }} />,
    },
    {
      title: "Dashboards & Internal Tools",
      desc: "Turn disconnected business workflows into clear dashboards, reports and custom tools built around your process.",
      icon: <AssessmentIcon sx={{ fontSize: 38, color: accent }} />,
    },
  ]

  const featuredSystems = [
    {
      label: "CRM / Operations",
      title: "Business CRM Platform",
      desc: "Customer, field-team and admin workflows connected through a custom business management ecosystem.",
    },
    {
      label: "Construction",
      title: "Construction Operations App",
      desc: "Project information, documents, drawings, assignments and reporting organized in one internal application.",
    },
    {
      label: "FMCG",
      title: "FMCG Operations System",
      desc: "Inventory, purchases, expenses, customers, products, pricing and everyday sales operations managed digitally.",
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Understand",
      desc: "We start with how your business works today, including the manual steps and bottlenecks.",
    },
    {
      number: "02",
      title: "Map",
      desc: "I convert that workflow into a clear software plan with practical modules and priorities.",
    },
    {
      number: "03",
      title: "Build",
      desc: "The product is developed in clear milestones so progress stays visible and testable.",
    },
    {
      number: "04",
      title: "Launch & Improve",
      desc: "After testing against the real workflow, the system is deployed and refined from actual usage.",
    },
  ]

  return (
    <Box
      sx={{
        background: pageBackground,
        minHeight: "100vh",
        color: "white",
        mt: { xs: 8 },
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
          py: { xs: 7, sm: 8, md: 4 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: 280, md: 520 },
            height: { xs: 280, md: 520 },
            borderRadius: "50%",
            background: "rgba(255, 51, 102, 0.12)",
            filter: "blur(30px)",
            right: { xs: -160, md: -140 },
            top: { xs: 30, md: 40 },
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: 650 }}>
                <Chip
                  label="Custom Business Software"
                  sx={{
                    mb: 3,
                    color: "white",
                    bgcolor: "rgba(255, 51, 102, 0.18)",
                    border: "1px solid rgba(255, 51, 102, 0.5)",
                    fontWeight: 700,
                  }}
                />

                <Typography
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    fontSize: { xs: "2.65rem", sm: "3.4rem", md: "4.15rem" },
                    lineHeight: 1.08,
                    letterSpacing: "-0.04em",
                    background: "linear-gradient(to right, #fff, #ded7ea)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Software built around how your business actually works.
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: mutedText,
                    lineHeight: 1.65,
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                    maxWidth: 620,
                  }}
                >
                  I design and develop custom CRM, ERP, inventory, field-sales,
                  dashboard and internal applications that replace manual
                  workflows, spreadsheets and disconnected tools.
                </Typography>

                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 4 }}>
                  {["CRM", "ERP", "Inventory", "Field Sales", "Dashboards", "Mobile Apps"].map(
                    (item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        sx={{
                          color: "rgba(255,255,255,0.86)",
                          bgcolor: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      />
                    )
                  )}
                </Stack>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: accent,
                      color: "white",
                      px: 4,
                      py: 1.5,
                      borderRadius: "30px",
                      fontSize: "1rem",
                      boxShadow: "0 12px 30px rgba(255, 51, 102, 0.25)",
                      "&:hover": { bgcolor: accentHover },
                    }}
                  >
                    Discuss Your Project
                  </Button>

                  <Button
                    component={RouterLink}
                    to="/work"
                    variant="outlined"
                    sx={{
                      color: "white",
                      borderColor: "rgba(255,255,255,0.6)",
                      px: 4,
                      py: 1.5,
                      borderRadius: "30px",
                      fontSize: "1rem",
                      "&:hover": {
                        borderColor: accent,
                        bgcolor: "rgba(255, 51, 102, 0.1)",
                      },
                    }}
                  >
                    View My Work
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              {/* Business workflow visual - no external asset or random positioning */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 540,
                  mx: "auto",
                  p: { xs: 2, sm: 3 },
                }}
              >
                <Box
                  sx={{
                    p: { xs: 2.5, sm: 3.5 },
                    bgcolor: "rgba(17, 10, 31, 0.5)",
                    border: glassBorder,
                    backdropFilter: "blur(18px)",
                    borderRadius: "28px",
                    boxShadow: "0 30px 70px rgba(0,0,0,0.28)",
                  }}
                >
                  <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
                    <Box>
                      <Typography sx={{ fontWeight: 800, fontSize: "1.15rem" }}>
                        Business Operations
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
                        One connected system
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: "12px",
                        bgcolor: "rgba(255,51,102,0.15)",
                      }}
                    >
                      <BusinessCenterIcon sx={{ color: accent }} />
                    </Box>
                  </Stack>

                  <Grid container spacing={2}>
                    {[
                      { title: "Customers", value: "CRM", icon: <PeopleAltIcon /> },
                      { title: "Stock", value: "Inventory", icon: <InventoryIcon /> },
                      { title: "Field Team", value: "Sales", icon: <TrendingUpIcon /> },
                      { title: "Insights", value: "Reports", icon: <AssessmentIcon /> },
                    ].map((item) => (
                      <Grid item xs={6} key={item.title}>
                        <Box
                          sx={{
                            p: 2,
                            minHeight: 118,
                            borderRadius: "18px",
                            bgcolor: "rgba(255,255,255,0.055)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          <Box sx={{ color: accent, mb: 1 }}>{item.icon}</Box>
                          <Typography sx={{ fontWeight: 700 }}>{item.value}</Typography>
                          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.58)" }}>
                            {item.title}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Box
                    sx={{
                      mt: 2,
                      p: 2,
                      display: "flex",
                      gap: 1.5,
                      alignItems: "center",
                      borderRadius: "16px",
                      bgcolor: "rgba(255,51,102,0.11)",
                      border: "1px solid rgba(255,51,102,0.2)",
                    }}
                  >
                    <SettingsSuggestIcon sx={{ color: accent }} />
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.82)" }}>
                      Designed around the workflow you already use — then simplified.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Business Problems / Solutions */}
      <Container sx={{ py: { xs: 7, md: 10 } }} maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom sx={sectionTitleSx}>
          Business Problems I Solve
        </Typography>
        <Typography
          align="center"
          sx={{
            color: mutedText,
            maxWidth: 760,
            mx: "auto",
            mb: { xs: 5, md: 7 },
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          The goal is not to add more software to your business. It is to replace
          repetitive work and disconnected information with one practical system.
        </Typography>

        <Grid container spacing={3}>
          {businessSolutions.map((solution) => (
            <Grid item key={solution.title} xs={12} sm={6}>
              <Card
                sx={{
                  height: "100%",
                  bgcolor: glassBackground,
                  backdropFilter: "blur(10px)",
                  border: glassBorder,
                  borderRadius: "22px",
                  transition: "transform 0.25s ease, border-color 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(255, 51, 102, 0.45)",
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "18px",
                      bgcolor: "rgba(255,51,102,0.11)",
                      mb: 3,
                    }}
                  >
                    {solution.icon}
                  </Box>
                  <Typography variant="h5" sx={{ color: "white", fontWeight: 700, mb: 1.5 }}>
                    {solution.title}
                  </Typography>
                  <Typography sx={{ color: mutedText, lineHeight: 1.7 }}>
                    {solution.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Business Systems */}
      <Box sx={{ bgcolor: "rgba(10, 5, 20, 0.16)" }}>
        <Container sx={{ py: { xs: 7, md: 10 } }} maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={sectionTitleSx}>
            Selected Business Systems
          </Typography>
          <Typography
            align="center"
            sx={{ color: mutedText, maxWidth: 720, mx: "auto", mb: { xs: 5, md: 7 } }}
          >
            A selection of systems built around real operational requirements — not
            just portfolio demos.
          </Typography>

          <Grid container spacing={3}>
            {featuredSystems.map((project, index) => (
              <Grid item xs={12} md={4} key={project.title}>
                <Card
                  sx={{
                    height: "100%",
                    bgcolor: "rgba(255,255,255,0.055)",
                    border: glassBorder,
                    borderRadius: "22px",
                  }}
                >
                  <CardContent sx={{ p: 3.5 }}>
                    <Typography
                      variant="caption"
                      sx={{ color: accent, fontWeight: 800, letterSpacing: "0.08em" }}
                    >
                      {String(index + 1).padStart(2, "0")} · {project.label.toUpperCase()}
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 1.5, mb: 2, color: "white", fontWeight: 700 }}>
                      {project.title}
                    </Typography>
                    <Typography sx={{ color: mutedText, lineHeight: 1.7, mb: 3 }}>
                      {project.desc}
                    </Typography>
                    <Button
                      component={RouterLink}
                      to="/work"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ color: accent, px: 0, "&:hover": { bgcolor: "transparent" } }}
                    >
                      View Case Studies
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Differentiator Section */}
      <Container sx={{ py: { xs: 7, md: 10 } }} maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ color: accent, fontWeight: 800, mb: 2, letterSpacing: "0.04em" }}
            >
              SOFTWARE + BUSINESS PERSPECTIVE
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: "2rem", md: "2.7rem" },
                lineHeight: 1.2,
              }}
            >
              Technology backed by real operational understanding.
            </Typography>
            <Typography sx={{ color: mutedText, fontSize: "1.08rem", lineHeight: 1.8, mb: 3 }}>
              I approach software as a business tool first. Alongside development,
              I have worked directly with day-to-day operations involving inventory,
              customers, sales, field activity, purchases, payments and reporting.
              That experience helps me ask better questions before writing code.
            </Typography>

            <Stack spacing={1.5}>
              {[
                "Understand the current process before proposing features",
                "Prioritize workflows that save time or improve visibility",
                "Build systems employees can actually use every day",
              ].map((item) => (
                <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
                  <CheckCircleIcon sx={{ color: accent, mt: "2px" }} />
                  <Typography sx={{ color: "rgba(255,255,255,0.86)" }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "24px",
                bgcolor: "rgba(255,255,255,0.055)",
                border: glassBorder,
              }}
            >
              <Stack spacing={2}>
                {[
                  {
                    icon: <BusinessCenterIcon sx={{ color: accent }} />,
                    title: "Business workflows",
                    desc: "Customers, orders, teams, payments and everyday operations.",
                  },
                  {
                    icon: <CodeIcon sx={{ color: accent }} />,
                    title: "Full-stack execution",
                    desc: "Web, mobile, APIs, databases, deployment and integrations.",
                  },
                  {
                    icon: <PhoneAndroidIcon sx={{ color: accent }} />,
                    title: "Practical interfaces",
                    desc: "Software designed for the people who will actually use it.",
                  },
                ].map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      p: 2.5,
                      borderRadius: "18px",
                      bgcolor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box>{item.icon}</Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, color: "white", mb: 0.5 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: mutedText }}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Process Section */}
      <Box sx={{ bgcolor: "rgba(10, 5, 20, 0.16)" }}>
        <Container sx={{ py: { xs: 7, md: 10 } }} maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={sectionTitleSx}>
            How I Work
          </Typography>
          <Typography align="center" sx={{ color: mutedText, maxWidth: 720, mx: "auto", mb: 6 }}>
            Custom software works best when development starts with the real business
            process instead of a list of random features.
          </Typography>

          <Grid container spacing={3}>
            {processSteps.map((step) => (
              <Grid item xs={12} sm={6} md={3} key={step.number}>
                <Box
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: "20px",
                    bgcolor: "rgba(255,255,255,0.045)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Typography sx={{ color: accent, fontWeight: 800, fontSize: "0.9rem", mb: 2 }}>
                    {step.number}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "white", fontWeight: 700, mb: 1.5 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: mutedText, lineHeight: 1.7 }}>
                    {step.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Skills Section - retained, but repositioned as supporting proof */}
      <Container sx={{ py: { xs: 7, md: 10 } }} maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom sx={sectionTitleSx}>
          Technology Behind the Solutions
        </Typography>
        <Typography align="center" sx={{ color: mutedText, maxWidth: 700, mx: "auto", mb: 6 }}>
          I choose the stack based on the product and business requirement rather than
          forcing every project into the same technology.
        </Typography>

        <Grid container spacing={3}>
          {skills.map((skill) => (
            <Grid item key={skill.name} xs={6} sm={4} md={3}>
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
                    bgcolor: "rgba(255, 51, 102, 0.14)",
                  },
                }}
              >
                <Box sx={{ mr: 2 }}>{skill.icon}</Box>
                <Typography sx={{ color: "white", fontWeight: 500, fontSize: "1rem" }}>
                  {skill.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Me Section - existing asset retained */}
      <Container sx={{ py: { xs: 7, md: 10 } }} maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom sx={sectionTitleSx}>
          About Me
        </Typography>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: "rgba(255, 255, 255, 0.07)",
                border: glassBorder,
                borderRadius: "22px",
                p: { xs: 3, md: 4 },
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="h5" sx={{ color: "white", fontWeight: 700, mb: 3 }}>
                I build software for real business problems.
              </Typography>
              <Typography
                paragraph
                sx={{ color: mutedText, mb: 3, fontSize: "1.08rem", lineHeight: 1.75 }}
              >
                I am a full-stack developer focused on custom web, mobile and business
                applications. My experience includes client software, internal tools
                and operational systems that solve practical problems rather than only
                demonstrate technical skills.
              </Typography>
              <Typography sx={{ color: mutedText, fontSize: "1.08rem", lineHeight: 1.75, mb: 3 }}>
                Working close to actual business operations has shaped how I build:
                understand the process, remove unnecessary complexity, then create a
                system that gives teams better control and visibility.
              </Typography>
              <Button
                component={RouterLink}
                to="/about"
                endIcon={<ArrowForwardIcon />}
                sx={{ color: accent, px: 0, "&:hover": { bgcolor: "transparent" } }}
              >
                More About Me
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                overflow: "hidden",
                borderRadius: "22px",
                position: "relative",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.24)",
                border: glassBorder,
              }}
            >
              <img
                src={homePageAboutImage}
                alt="Rachit Gupta - business software developer"
                style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Final CTA */}
      <Container sx={{ py: { xs: 7, md: 11 } }} maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            p: { xs: 4, sm: 6, md: 7 },
            borderRadius: "28px",
            bgcolor: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.7rem" },
              mb: 2.5,
            }}
          >
            Have a business process that should not still be manual?
          </Typography>
          <Typography
            sx={{
              color: mutedText,
              mb: 4,
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: 650,
              mx: "auto",
              lineHeight: 1.75,
            }}
          >
            Tell me how your current workflow works. We can identify what should be
            automated and what kind of software would make practical sense for your
            business.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: accent,
                color: "white",
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                fontSize: "1rem",
                "&:hover": { bgcolor: accentHover },
              }}
            >
              Start a Conversation
            </Button>
            <Button
              component={RouterLink}
              to="/work"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.6)",
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                fontSize: "1rem",
                "&:hover": {
                  borderColor: accent,
                  bgcolor: "rgba(255,51,102,0.08)",
                },
              }}
            >
              See My Work
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
