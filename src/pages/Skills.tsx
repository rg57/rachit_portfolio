import {
  Container,
  Typography,
  Grid,
  Box,
  Tooltip,
  LinearProgress,
  Chip,
} from "@mui/material"
import { motion } from "framer-motion"
import {
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaJs,
  FaHtml5,
  FaJava,
  FaGitAlt,
  FaAws,
  FaPython,
} from "react-icons/fa"
import {
  SiTypescript,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiFlutter,
  SiFirebase,
} from "react-icons/si"
import { TbBrandRedux } from "react-icons/tb"
import { AiOutlineApi } from "react-icons/ai"
import {
  BusinessCenter,
  Devices,
  Storage,
  Cloud,
  IntegrationInstructions,
  DashboardCustomize,
} from "@mui/icons-material"

const skills = [
  { name: "React", level: 10, icon: FaReact },
  { name: "React Native", level: 10, icon: FaMobileAlt },
  { name: "JavaScript", level: 9, icon: FaJs },
  { name: "TypeScript", level: 7, icon: SiTypescript },
  { name: "Node.js", level: 8, icon: FaNodeJs },
  { name: "Spring Boot", level: 9, icon: SiSpringboot },
  { name: "Java", level: 9, icon: FaJava },
  { name: "REST APIs", level: 10, icon: AiOutlineApi },
  { name: "MySQL", level: 8, icon: SiMysql },
  { name: "MongoDB", level: 8, icon: SiMongodb },
  { name: "Firebase", level: 9, icon: SiFirebase },
  { name: "AWS EC2", level: 8, icon: FaAws },
  { name: "Git", level: 8, icon: FaGitAlt },
  { name: "Redux", level: 8, icon: TbBrandRedux },
  { name: "Flutter", level: 6, icon: SiFlutter },
  { name: "Python", level: 6, icon: FaPython },
  { name: "HTML & CSS", level: 9, icon: FaHtml5 },
]

const capabilities = [
  {
    icon: <BusinessCenter />,
    title: "Business Systems",
    description:
      "Custom CRM, ERP, inventory, sales, purchase, customer and operational workflows designed around real business processes.",
    tools: ["CRM", "ERP", "Inventory", "Sales", "Operations"],
  },
  {
    icon: <Devices />,
    title: "Web & Mobile Products",
    description:
      "Responsive web applications and cross-platform mobile apps for customers, employees, vendors and field teams.",
    tools: ["React", "React Native", "TypeScript", "Flutter"],
  },
  {
    icon: <IntegrationInstructions />,
    title: "Backend & APIs",
    description:
      "Application logic, REST APIs, authentication, integrations and backend services for connected business applications.",
    tools: ["Spring Boot", "Node.js", "Java", "REST APIs", "Fast API"],
  },
  {
    icon: <Storage />,
    title: "Data & Persistence",
    description:
      "Relational, document and cloud-backed data models for operational software and customer-facing products.",
    tools: ["MySQL", "MongoDB", "Firebase", "Postgres"],
  },
  {
    icon: <Cloud />,
    title: "Deployment & Infrastructure",
    description:
      "Deployment and hosting workflows for backend services, web applications and production mobile releases.",
    tools: ["AWS EC2", "Nginx", "Linux", "Play Console"],
  },
  {
    icon: <DashboardCustomize />,
    title: "UI & Product Thinking",
    description:
      "Interfaces built around the task a user needs to complete — whether they are an owner, manager, field employee or customer.",
    tools: ["MUI", "Figma", "Responsive UI", "UX"],
  },
]

const categories = [
  {
    title: "Frontend & Web",
    level: 92,
    description:
      "Modern web interfaces, admin dashboards and responsive business applications.",
    tools: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "MUI", "Redux"],
  },
  {
    title: "Mobile Development",
    level: 92,
    description:
      "Cross-platform applications for customers, employees, vendors and field teams.",
    tools: ["React Native", "Android", "Firebase", "Flutter"],
  },
  {
    title: "Backend & APIs",
    level: 90,
    description:
      "Business logic, server applications, authentication, integrations and REST APIs.",
    tools: ["Spring Boot", "Java", "Node.js", "REST APIs"],
  },
  {
    title: "Database & Data",
    level: 84,
    description:
      "Operational data modelling and persistence for business and product applications.",
    tools: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Cloud & Deployment",
    level: 78,
    description:
      "Production deployment, server setup and application release workflows.",
    tools: ["AWS EC2", "Linux", "Nginx", "Android Play Console"],
  },
  {
    title: "Business Analysis",
    level: 88,
    description:
      "Translating real business processes into practical workflows, modules and software requirements.",
    tools: [
      "Workflow Mapping",
      "CRM",
      "Inventory",
      "Field Sales",
      "Operations",
    ],
  },
]

const accent = "#FF3366"
const muted = "rgba(255,255,255,0.68)"
const border = "rgba(255,255,255,0.11)"
const panel = "rgba(17,5,31,0.42)"

export default function Skills() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 82% 12%, rgba(255,51,102,0.13), transparent 28%), linear-gradient(135deg, #24073E 0%, #351052 50%, #4A1D6A 100%)",
        py: { xs: 9, md: 11 },
        color: "white",
      }}
    >
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 7 } }}>
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Chip
            label="Technical Capabilities"
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
            component="h1"
            sx={{
              maxWidth: 900,
              fontSize: { xs: "2.55rem", sm: "3.5rem", md: "4.3rem" },
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.045em",
            }}
          >
            The technology behind{" "}
            <Box component="span" sx={{ color: accent }}>
              practical business software.
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: 800,
              mt: 3,
              color: muted,
              fontSize: { xs: "1rem", md: "1.16rem" },
              lineHeight: 1.8,
            }}
          >
            My strongest work sits at the intersection of frontend, mobile,
            backend and business logic. I use these technologies to build
            connected systems rather than isolated screens or one-off features.
          </Typography>
        </motion.div>

        {/* CAPABILITY CARDS */}
        <Box sx={{ mt: { xs: 7, md: 9 } }}>
          <Typography
            variant="overline"
            sx={{
              color: accent,
              fontWeight: 800,
              letterSpacing: "0.14em",
            }}
          >
            What I Can Build
          </Typography>

          <Typography
            variant="h3"
            sx={{
              mt: 0.5,
              mb: 4,
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.7rem" },
            }}
          >
            Capabilities before technologies
          </Typography>

          <Grid container spacing={3}>
            {capabilities.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      p: 3,
                      borderRadius: 4,
                      bgcolor: panel,
                      border: `1px solid ${border}`,
                      backdropFilter: "blur(12px)",
                      transition:
                        "transform .22s ease, border-color .22s ease, background .22s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "rgba(255,51,102,0.42)",
                        bgcolor: "rgba(23,7,40,0.56)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 3,
                        color: accent,
                        bgcolor: "rgba(255,51,102,0.12)",
                        mb: 2,
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.2 }}>
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: muted,
                        lineHeight: 1.7,
                        minHeight: { md: 88 },
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Box
                      sx={{
                        mt: 2.5,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.8,
                      }}
                    >
                      {item.tools.map((tool) => (
                        <Chip
                          key={tool}
                          label={tool}
                          size="small"
                          sx={{
                            color: "rgba(255,255,255,0.82)",
                            bgcolor: "rgba(255,255,255,0.06)",
                            border: `1px solid ${border}`,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CORE TECHNOLOGIES */}
        <Box sx={{ mt: { xs: 8, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{
              color: accent,
              fontWeight: 800,
              letterSpacing: "0.14em",
            }}
          >
            Core Stack
          </Typography>

          <Typography
            variant="h3"
            sx={{
              mt: 0.5,
              mb: 1.5,
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.7rem" },
            }}
          >
            Technologies I work with
          </Typography>

          <Typography
            sx={{
              color: muted,
              maxWidth: 740,
              lineHeight: 1.75,
              mb: 4,
            }}
          >
            Hover a technology to see my relative confidence level. The score is
            intended as a practical self-assessment based on project use, not a
            certification or fixed measure of expertise.
          </Typography>

          <Grid container spacing={2}>
            {skills.map((skill, index) => (
              <Grid item key={skill.name} xs={6} sm={4} md={3}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.36,
                    delay: (index % 4) * 0.04,
                  }}
                  whileHover={{ scale: 1.025 }}
                >
                  <Tooltip
                    arrow
                    title={
                      <Box sx={{ p: 1.4, minWidth: 180 }}>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 800, color: "white", mb: 1 }}
                        >
                          {skill.name}
                        </Typography>

                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            color: "rgba(255,255,255,0.7)",
                            mb: 1,
                          }}
                        >
                          Practical confidence: {skill.level}/10
                        </Typography>

                        <LinearProgress
                          variant="determinate"
                          value={skill.level * 10}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: "rgba(255,255,255,0.16)",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: accent,
                              borderRadius: 3,
                            },
                          }}
                        />
                      </Box>
                    }
                    PopperProps={{
                      sx: {
                        "& .MuiTooltip-tooltip": {
                          backgroundColor: "rgba(18,7,30,0.97)",
                          backdropFilter: "blur(8px)",
                          borderRadius: "12px",
                          border: `1px solid ${border}`,
                          boxShadow: "0 12px 40px rgba(0,0,0,0.28)",
                        },
                        "& .MuiTooltip-arrow": {
                          color: "rgba(18,7,30,0.97)",
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        minHeight: 78,
                        px: 2,
                        py: 2.2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1.3,
                        bgcolor: "rgba(255,255,255,0.045)",
                        border: `1px solid ${border}`,
                        borderRadius: 3.5,
                        transition: "all .22s ease",
                        "&:hover": {
                          bgcolor: "rgba(255,51,102,0.10)",
                          borderColor: "rgba(255,51,102,0.38)",
                        },
                      }}
                    >
                      <skill.icon
                        size={25}
                        style={{
                          color: accent,
                          flexShrink: 0,
                        }}
                      />

                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 700,
                          lineHeight: 1.2,
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Box>
                  </Tooltip>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* DOMAIN DEPTH */}
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            p: { xs: 3, sm: 4, md: 4.5 },
            borderRadius: 5,
            background: "rgba(17,5,31,0.42)",
            border: `1px solid ${border}`,
            backdropFilter: "blur(12px)",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: accent,
              fontWeight: 800,
              letterSpacing: "0.14em",
            }}
          >
            Practical Depth
          </Typography>

          <Typography
            variant="h3"
            sx={{
              mt: 0.5,
              mb: 1.5,
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Where my experience is strongest
          </Typography>

          <Typography
            sx={{
              color: muted,
              maxWidth: 760,
              lineHeight: 1.75,
              mb: 4,
            }}
          >
            These ratings represent the areas where I have the most practical
            experience combining architecture, development and real project use.
          </Typography>

          <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
            {categories.map((category, index) => (
              <Grid item xs={12} sm={6} key={category.title}>
                <motion.div
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ delay: (index % 2) * 0.06 }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2,
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>
                        {category.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: accent,
                          fontWeight: 800,
                        }}
                      >
                        {category.level}%
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: muted,
                        fontSize: "0.92rem",
                        lineHeight: 1.6,
                        mb: 1.8,
                      }}
                    >
                      {category.description}
                    </Typography>

                    <LinearProgress
                      variant="determinate"
                      value={category.level}
                      sx={{
                        height: 5,
                        borderRadius: 4,
                        backgroundColor: "rgba(255,255,255,0.10)",
                        "& .MuiLinearProgress-bar": {
                          background:
                            "linear-gradient(90deg, #FF3366, #FF66A1)",
                          borderRadius: 4,
                        },
                      }}
                    />

                    <Box
                      sx={{
                        mt: 1.8,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.8,
                      }}
                    >
                      {category.tools.map((tool) => (
                        <Chip
                          key={tool}
                          label={tool}
                          size="small"
                          sx={{
                            color: "rgba(255,255,255,0.76)",
                            bgcolor: "rgba(255,255,255,0.055)",
                            border: `1px solid ${border}`,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CLOSING POSITIONING */}
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            p: { xs: 3.5, md: 5 },
            borderRadius: 5,
            textAlign: "center",
            bgcolor: "rgba(255,51,102,0.08)",
            border: "1px solid rgba(255,51,102,0.22)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.9rem", md: "2.6rem" },
              mb: 2,
            }}
          >
            The stack matters. Understanding the problem matters more.
          </Typography>

          <Typography
            sx={{
              maxWidth: 760,
              mx: "auto",
              color: muted,
              lineHeight: 1.8,
            }}
          >
            I am comfortable working across frontend, mobile, backend, databases
            and deployment, but I do not start a project by choosing technology.
            I start by understanding the users, workflow and business objective
            — then choose the architecture that fits.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
