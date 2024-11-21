import {
  Container,
  Typography,
  Grid,
  Box,
  Tooltip,
  LinearProgress,
} from "@mui/material"
import { motion } from "framer-motion"

const skills = [
  { name: "React", level: 10 },
  { name: "Node.js", level: 8 },
  { name: "React Native", level: 10 },
  { name: "JavaScript", level: 9 },
  { name: "TypeScript", level: 6 },
  { name: "HTML & CSS", level: 8 },
  { name: "Spring Boot", level: 9 },
  { name: "MySQL", level: 7 },
  { name: "MongoDB", level: 7 },
  { name: "AWS EC2", level: 8 },
  { name: "Git", level: 8 },
  { name: "REST APIs", level: 10 },
  { name: "Flutter", level: 8 },
  { name: "Firebase", level: 9 },
  { name: "Java", level: 10 },
  { name: "Python", level: 8 },
]

export default function Skills() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2A0845 0%, #6441A5 100%)",
        py: 10,
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
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

        {/* Skills Grid */}
        <Grid container spacing={4}>
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
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
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
      </Container>
    </Box>
  )
}
