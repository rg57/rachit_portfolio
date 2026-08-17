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
  BusinessCenter,
  Devices,
  Storage,
  Insights,
  ArrowForward,
  CheckCircleOutline,
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
    "React Native",
    "Node.js",
    "Spring Boot",
    "Firebase",
    "MySQL",
    "MongoDB",
    "AWS",
    "EC2",
    "Python",
    "Flutter",
    "GraphQL",
    "Figma",
    "System Architecture",
  ]

  const experiencePoints = [
    "Custom CRM and internal business applications",
    "Mobile apps for field teams and customers",
    "Inventory, sales, purchase and operational workflows",
    "Admin dashboards, APIs and backend systems",
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.14 },
    },
  }

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        color: "white",
        background:
          "radial-gradient(circle at 82% 12%, rgba(255,51,102,0.13), transparent 28%), linear-gradient(135deg, #24073E 0%, #351052 50%, #4A1D6A 100%)",
        padding: { xs: "1rem", sm: "1.5rem", md: "2rem" },
        mt: { xs: 8 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          zIndex: 1,
          px: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 6, md: 8 },
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* HERO */}
          <motion.div variants={fadeIn}>
            <Chip
              label="About Me"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "rgba(255,51,102,0.62)",
                bgcolor: "rgba(255,51,102,0.08)",
                fontWeight: 700,
                mb: 3,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                maxWidth: 930,
                fontSize: {
                  xs: "2.45rem",
                  sm: "3.35rem",
                  md: "4.35rem",
                },
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.045em",
              }}
            >
              I understand both{" "}
              <Box component="span" sx={{ color: "#FF3366" }}>
                software
              </Box>{" "}
              and the business behind it.
            </Typography>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Typography
              sx={{
                maxWidth: 820,
                mt: 3,
                color: "rgba(255,255,255,0.72)",
                fontSize: { xs: "1rem", md: "1.18rem" },
                lineHeight: 1.8,
              }}
            >
              I am a full-stack developer focused on building practical business
              software — CRM systems, internal dashboards, mobile applications,
              inventory workflows and operational tools designed around how a
              company actually works.
            </Typography>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                flexWrap: "wrap",
                mt: 4,
              }}
            >
              <Button
                variant="contained"
                component={RouterLink}
                to="/work"
                endIcon={<ArrowForward />}
                sx={{
                  backgroundColor: "#FF3366",
                  color: "white",
                  px: 3,
                  py: 1.2,
                  borderRadius: 7,
                  textTransform: "none",
                  fontWeight: 800,
                  "&:hover": { backgroundColor: "#E62E5C" },
                }}
              >
                View My Work
              </Button>

              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.42)",
                  px: 3,
                  py: 1.2,
                  borderRadius: 7,
                  textTransform: "none",
                  fontWeight: 800,
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.06)",
                  },
                }}
              >
                Discuss a Project
              </Button>
            </Box>
          </motion.div>

          {/* STORY */}
          <Grid
            container
            spacing={{ xs: 3, md: 4 }}
            sx={{ mt: { xs: 6, md: 8 } }}
          >
            <Grid item xs={12} md={7}>
              <motion.div variants={fadeIn} style={{ height: "100%" }}>
                <Box
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 4 },
                    borderRadius: 5,
                    bgcolor: "rgba(18,6,32,0.42)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#FF3366",
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                    }}
                  >
                    My Journey
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      mt: 1,
                      mb: 2.5,
                      lineHeight: 1.2,
                    }}
                  >
                    From writing code to understanding operations.
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.76)",
                      lineHeight: 1.85,
                      mb: 2.5,
                    }}
                  >
                    My experience began with full-stack and mobile development,
                    where I worked on real client requirements and built custom
                    applications for business use. That experience taught me that
                    the hardest part of a software project is often not the code —
                    it is understanding the process behind it.
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.76)",
                      lineHeight: 1.85,
                      mb: 2.5,
                    }}
                  >
                    Working closely with a construction business gave me direct
                    experience building technology around company workflows,
                    field activity and operational requirements rather than
                    generic product ideas.
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.76)",
                      lineHeight: 1.85,
                    }}
                  >
                    Today, I also work directly inside an FMCG business. That has
                    given me firsthand exposure to inventory, purchases, sales,
                    customers, distributors, field teams, payments and everyday
                    business decisions. I use that operational understanding when
                    I design software — so the system fits the business instead of
                    forcing the business to fit the software.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={5}>
              <motion.div variants={fadeIn} style={{ height: "100%" }}>
                <Box
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 4 },
                    borderRadius: 5,
                    bgcolor: "rgba(255,51,102,0.08)",
                    border: "1px solid rgba(255,51,102,0.24)",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#FF3366",
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                    }}
                  >
                    What I Bring
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, mt: 1, mb: 3 }}
                  >
                    Technical execution with business context.
                  </Typography>

                  <Box sx={{ display: "grid", gap: 1.7 }}>
                    {experiencePoints.map((item) => (
                      <Box
                        key={item}
                        sx={{
                          display: "flex",
                          gap: 1.3,
                          alignItems: "flex-start",
                        }}
                      >
                        <CheckCircleOutline
                          sx={{
                            color: "#FF3366",
                            fontSize: 20,
                            mt: "2px",
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            color: "rgba(255,255,255,0.8)",
                            lineHeight: 1.65,
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* BUSINESS + DEVELOPMENT */}
          <motion.div variants={fadeIn}>
            <Box sx={{ mt: { xs: 7, md: 9 } }}>
              <Typography
                variant="overline"
                sx={{
                  color: "#FF3366",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                }}
              >
                My Perspective
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mt: 0.5,
                  mb: 4,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                }}
              >
                Why business experience matters when building software.
              </Typography>

              <Grid container spacing={3}>
                {[
                  {
                    icon: <BusinessCenter />,
                    title: "I understand the workflow",
                    desc: "Before proposing features, I look at how work currently moves through the business — people, data, approvals, follow-ups and decisions.",
                  },
                  {
                    icon: <Insights />,
                    title: "I focus on the useful data",
                    desc: "A good system should make decisions easier. I think about what owners, managers and teams actually need to see and act on.",
                  },
                  {
                    icon: <Devices />,
                    title: "I design for the people using it",
                    desc: "Office dashboards and field applications have very different needs. I build interfaces around the user and the context in which they work.",
                  },
                  {
                    icon: <Storage />,
                    title: "I build connected systems",
                    desc: "Frontend, mobile, backend, databases and APIs are planned as one operational system instead of a collection of disconnected features.",
                  },
                ].map((item) => (
                  <Grid item xs={12} sm={6} key={item.title}>
                    <Box
                      sx={{
                        height: "100%",
                        p: 3,
                        borderRadius: 4,
                        bgcolor: "rgba(18,6,32,0.38)",
                        border: "1px solid rgba(255,255,255,0.10)",
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 3,
                          bgcolor: "rgba(255,51,102,0.12)",
                          color: "#FF3366",
                          display: "grid",
                          placeItems: "center",
                          mb: 2,
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 800, mb: 1 }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.68)",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* SERVICES */}
          <motion.div variants={fadeIn}>
            <Box sx={{ mt: { xs: 7, md: 9 } }}>
              <Typography
                variant="overline"
                sx={{
                  color: "#FF3366",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                }}
              >
                What I Build
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mt: 0.5,
                  mb: 4,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                }}
              >
                Software for real business operations.
              </Typography>

              <Grid container spacing={2.5}>
                {[
                  {
                    title: "CRM & Customer Systems",
                    desc: "Customer records, leads, follow-ups, orders, payments and relationship workflows.",
                  },
                  {
                    title: "ERP & Internal Tools",
                    desc: "Custom business systems for products, purchases, expenses, operations and reporting.",
                  },
                  {
                    title: "Field Sales Applications",
                    desc: "Mobile workflows for sales teams, visits, retailers, orders, attendance and collections.",
                  },
                  {
                    title: "Inventory & Distribution",
                    desc: "Stock, SKUs, purchases, movement, distributors and operational inventory visibility.",
                  },
                  {
                    title: "Business Dashboards",
                    desc: "Management interfaces that turn scattered operational information into useful decisions.",
                  },
                  {
                    title: "Custom Mobile Apps",
                    desc: "Android and iOS applications designed around a specific company workflow or customer journey.",
                  },
                ].map((service) => (
                  <Grid item xs={12} sm={6} md={4} key={service.title}>
                    <Box
                      sx={{
                        height: "100%",
                        p: 3,
                        borderRadius: 4,
                        bgcolor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.10)",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 800, color: "white", mb: 1 }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.68)",
                          lineHeight: 1.7,
                        }}
                      >
                        {service.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* TECH STACK */}
          <motion.div variants={fadeIn}>
            <Box
              sx={{
                mt: { xs: 7, md: 9 },
                p: { xs: 3, md: 4 },
                borderRadius: 5,
                bgcolor: "rgba(18,6,32,0.38)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "#FF3366",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                }}
              >
                Technology
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  mt: 0.5,
                  mb: 1.5,
                }}
              >
                The tools behind the solutions.
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.68)",
                  maxWidth: 720,
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                I choose technology based on the product and business
                requirements. My core experience spans modern web, mobile,
                backend and cloud development.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "rgba(255,51,102,0.14)",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div variants={fadeIn}>
            <Box
              sx={{
                mt: { xs: 7, md: 9 },
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#FF3366",
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                LET&apos;S CONNECT
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    component={Link}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.20)",
                      "&:hover": {
                        backgroundColor: "rgba(255,51,102,0.10)",
                        borderColor: "#FF3366",
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </motion.div>

          {/* FINAL CTA */}
          <motion.div variants={fadeIn}>
            <Box
              sx={{
                mt: { xs: 7, md: 9 },
                textAlign: "center",
                p: { xs: 4, md: 6 },
                borderRadius: 5,
                bgcolor: "rgba(255,51,102,0.08)",
                border: "1px solid rgba(255,51,102,0.23)",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  mb: 2,
                }}
              >
                Have a business process that could work better?
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  maxWidth: 660,
                  mx: "auto",
                  lineHeight: 1.75,
                }}
              >
                Tell me how it works today. I can help map the workflow and
                understand whether custom software would make it simpler, faster
                or easier to manage.
              </Typography>

              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  mt: 3.5,
                  backgroundColor: "#FF3366",
                  color: "white",
                  px: 3.5,
                  py: 1.25,
                  borderRadius: 7,
                  textTransform: "none",
                  fontWeight: 800,
                  "&:hover": { backgroundColor: "#E62E5C" },
                }}
              >
                Discuss Your Project
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}
