import React from "react"
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material"
import { motion } from "framer-motion"
import { GitHub, LinkedIn, Twitter, ExpandMore } from "@mui/icons-material"

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Form submitted")
  }

  const socialLinks = [
    { icon: <GitHub />, href: "#", label: "GitHub" },
    { icon: <LinkedIn />, href: "#", label: "LinkedIn" },
    { icon: <Twitter />, href: "#", label: "Twitter" },
  ]

  const faqItems = [
    {
      question: "What is your experience in software development?",
      answer:
        "I have over 5 years of experience in full-stack development, specializing in creating modern, scalable web and mobile applications.",
    },
    {
      question: "How do you charge for your services?",
      answer:
        "I offer flexible pricing models based on the project scope, including hourly rates and fixed project costs. Feel free to reach out for a detailed quote.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, I offer maintenance packages that ensure your software stays up-to-date and performs optimally.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in React, React Native, Node.js, Spring Boot, and modern DevOps practices for scalable solutions.",
    },
    {
      question: "How do you handle communication and updates during a project?",
      answer:
        "I ensure transparent communication with regular updates via preferred platforms like email, Slack, or Trello.",
    },
    {
      question: "Can you help with UI/UX design?",
      answer:
        "Absolutely! I collaborate with designers to create visually appealing and user-friendly interfaces.",
    },
  ]

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2A0845 0%, #6441A5 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        py: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  background: "linear-gradient(to right, #fff, #e0e0e0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Let's Connect
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  mb: 4,
                  fontSize: "1.1rem",
                }}
              >
                I'm always open to new opportunities and collaborations. Feel
                free to reach out if you have a project in mind or just want to
                say hello!
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      color: "white",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "rgba(255, 51, 102, 0.1)",
                        borderColor: "#FF3366",
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  p: 4,
                  borderRadius: 3,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.3)",
                }}
              >
                <TextField
                  fullWidth
                  id="name"
                  label="Your Name"
                  name="name"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: "rgba(255, 255, 255, 0.7)" },
                  }}
                  sx={{
                    input: { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF3366",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: "rgba(255, 255, 255, 0.7)" },
                  }}
                  sx={{
                    input: { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF3366",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  id="message"
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  required
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: "rgba(255, 255, 255, 0.7)" },
                  }}
                  sx={{
                    textarea: { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF3366",
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    borderRadius: 30,
                    background: "linear-gradient(to right, #FF3366, #E62E5C)",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(to right, #E62E5C, #FF3366)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 4px 20px rgba(255, 51, 102, 0.4)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* FAQ Section */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              textAlign: "center",
              mb: 4,
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Frequently Asked Questions
          </Typography>
          {faqItems.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "10px",
                mb: 2,
                boxShadow: "none",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "white" }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  "&:hover": { background: "rgba(255, 255, 255, 0.05)" },
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: 1.8,
                }}
              >
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
