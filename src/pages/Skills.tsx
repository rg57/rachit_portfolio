import {
  Container,
  Typography,
  Grid,
  Box,
  Tooltip,
  LinearProgress,
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
import { AiOutlineApi } from "react-icons/ai"

const skills = [
  { name: "React", level: 10, icon: FaReact },
  { name: "Node.js", level: 8, icon: FaNodeJs },
  { name: "React Native", level: 10, icon: FaMobileAlt },
  { name: "JavaScript", level: 9, icon: FaJs },
  { name: "TypeScript", level: 6, icon: SiTypescript },
  { name: "HTML & CSS", level: 8, icon: FaHtml5 },
  { name: "Spring Boot", level: 9, icon: SiSpringboot },
  { name: "MySQL", level: 7, icon: SiMysql },
  { name: "MongoDB", level: 7, icon: SiMongodb },
  { name: "AWS EC2", level: 8, icon: FaAws },
  { name: "Git", level: 8, icon: FaGitAlt },
  { name: "REST APIs", level: 10, icon: AiOutlineApi },
  { name: "Flutter", level: 8, icon: SiFlutter },
  { name: "Firebase", level: 9, icon: SiFirebase },
  { name: "Java", level: 10, icon: FaJava },
  { name: "Python", level: 8, icon: FaPython },
]

const categories = [
  {
    title: "UI Design and Wireframes",
    level: 90,
    tools: ["Figma", "Sketch", "FigJam"],
  },
  {
    title: "FrontEnd",
    level: 95,
    tools: [
      "React",
      "React Native",
      "Flutter",
      "HTML",
      "CSS",
      "Javscript",
      "typeScript",
    ],
  },
  {
    title: "BackEnd",
    level: 100,
    tools: ["Java", "Python", "Spring-Boot", "Rest Api"],
  },
  { title: "Database", level: 85, tools: ["MongoDB", "MYSQL", "Firebase"] },
  { title: "Deployment", level: 75, tools: ["EC2", "Android Play Console"] },
  {
    title: "No Code Tools",
    level: 70,
    tools: ["Wordpress", "Shopify"],
  },
]

export default function Skills() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2A0845 0%, #6441A5 100%)",
        py: 10,
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              color: "#FF3366",
              fontWeight: 700,
              mb: 6,
              mt: 10,
            }}
          >
            Skills & Technologies
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 6 }}>
          {skills.map((skill, index) => (
            <Grid item key={index} xs={6} sm={4} md={3}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                }}
              >
                <Tooltip
                  title={
                    <Box sx={{ p: 1.5, maxWidth: 200 }}>
                      <Typography
                        variant="body2"
                        gutterBottom
                        fontWeight="bold"
                        color="white"
                      >
                        {skill.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="rgba(255,255,255,0.8)"
                        gutterBottom
                      >
                        Skill Level: {skill.level}/10
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level * 10}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "#FF3366",
                            borderRadius: 3,
                          },
                        }}
                      />
                    </Box>
                  }
                  arrow
                  PopperProps={{
                    sx: {
                      "& .MuiTooltip-tooltip": {
                        backgroundColor: "rgba(26, 32, 53, 0.95)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "12px",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      },
                      "& .MuiTooltip-arrow": {
                        color: "rgba(26, 32, 53, 0.95)",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      p: 2,
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "15px",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        bgcolor: "rgba(255, 51, 102, 0.2)",
                      },
                    }}
                  >
                    {skill.icon && (
                      <skill.icon
                        size={24}
                        style={{
                          marginBottom: "8px",
                          color: "#FF3366",
                          marginRight: "10px",
                          marginTop: "10px",
                        }}
                      />
                    )}
                    <Typography
                      variant="body1"
                      align="center"
                      sx={{ fontWeight: 500 }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                </Tooltip>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: { xs: 4, sm: 6 },
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: { xs: "16px", sm: "24px" },
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Grid container spacing={{ xs: 3, sm: 4, md: 6 }}>
            {categories.map((category, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Box sx={{ mb: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: { xs: 1, sm: 2 },
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          fontSize: { xs: "1rem", sm: "1.25rem" },
                        }}
                      >
                        {category.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          fontSize: { xs: "1rem", sm: "1.25rem" },
                        }}
                      >
                        {category.level}%
                      </Typography>
                    </Box>
                    <Box sx={{ position: "relative" }}>
                      <Box
                        sx={{
                          height: "2px",
                          width: "100%",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "1px",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          height: "2px",
                          width: `${category.level}%`,
                          background:
                            "linear-gradient(90deg, #FF3366, #FF33FF)",
                          borderRadius: "1px",
                          transition: "width 1s ease-in-out",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: "-4px",
                          left: `${category.level}%`,
                          transform: "translateX(-50%)",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor: "#FF3366",
                          border: "2px solid white",
                          transition: "left 1s ease-in-out",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}
                    >
                      {category.tools.map((tool, toolIndex) => (
                        <Typography
                          key={toolIndex}
                          variant="caption"
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            padding: "4px 8px",
                            borderRadius: "12px",
                            fontSize: { xs: "0.65rem", sm: "0.75rem" },
                            marginBottom: 1,
                          }}
                        >
                          {tool}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
