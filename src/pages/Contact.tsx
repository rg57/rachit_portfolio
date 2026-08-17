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
  MenuItem,
  Chip,
} from "@mui/material"
import { motion } from "framer-motion"
import {
  GitHub,
  LinkedIn,
  ExpandMore,
  ArrowForward,
  CheckCircleOutline,
  BusinessCenter,
} from "@mui/icons-material"
import YouTubeIcon from "@mui/icons-material/YouTube"

export default function Contact() {
  const socialLinks = [
    { icon: <GitHub />, href: "https://github.com/rg57", label: "GitHub" },
    {
      icon: <LinkedIn />,
      href: "https://www.linkedin.com/in/rachit-gupta-767428126",
      label: "LinkedIn",
    },
    {
      icon: <YouTubeIcon />,
      href: "https://www.youtube.com/@codeplaytech6467",
      label: "YouTube",
    },
  ]

  const faqItems = [
    {
      question: "What kind of projects do you usually work on?",
      answer:
        "I mainly work on custom business software such as CRM systems, ERP and internal tools, inventory and sales applications, field-sales apps, admin dashboards and custom mobile applications. I also take on selected web and API development work where it fits the business requirement.",
    },
    {
      question: "Can you understand an existing manual business process first?",
      answer:
        "Yes. In fact, that is usually where I prefer to start. We can first discuss how your current process works — including spreadsheets, WhatsApp, registers, approvals, reporting or existing software — and then identify what is actually worth automating.",
    },
    {
      question: "Do I need to know exactly what software I need?",
      answer:
        "No. You can simply explain the business problem or workflow. I can help map the process, identify the required users and data, and then suggest an appropriate solution instead of starting with a fixed feature list.",
    },
    {
      question: "How do you charge for projects?",
      answer:
        "Pricing depends on the project scope, complexity, number of modules and support requirements. I can work with fixed project pricing or milestone-based development after the requirements are reasonably clear.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes. Ongoing maintenance, bug fixes, deployment support and future improvements can be discussed as part of the project or as a separate support arrangement.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "My core stack includes React, React Native, Node.js, Spring Boot, Java, Firebase, MySQL, MongoDB and AWS. I choose the stack based on the product and business requirements rather than forcing every project into the same architecture.",
    },
    {
      question: "How do you handle communication during development?",
      answer:
        "I prefer clear, regular communication with milestone-based updates. Depending on the project, communication can happen through email, WhatsApp, calls or another agreed platform.",
    },
  ]

  const fieldSx = {
    "& .MuiInputLabel-root": {
      color: "rgba(255,255,255,0.66)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#FF3366",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiSelect-icon": {
      color: "rgba(255,255,255,0.72)",
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(255,255,255,0.025)",
      "& fieldset": {
        borderColor: "rgba(255,255,255,0.18)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(255,255,255,0.34)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FF3366",
      },
    },
  }

  return (
    <Box
      sx={{
        background:
          "radial-gradient(circle at 82% 12%, rgba(255,51,102,0.13), transparent 28%), linear-gradient(135deg, #24073E 0%, #351052 50%, #4A1D6A 100%)",
        minHeight: "100vh",
        color: "white",
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg" sx={{ mt: { xs: 7, md: 8 } }}>
        <Grid container spacing={{ xs: 5, md: 7 }} alignItems="flex-start">
          {/* LEFT SIDE */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Chip
                label="Start a Conversation"
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
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.5rem", sm: "3.2rem", md: "4rem" },
                  lineHeight: 1.06,
                  letterSpacing: "-0.045em",
                }}
              >
                Tell me how your business{" "}
                <Box component="span" sx={{ color: "#FF3366" }}>
                  works today.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.72)",
                  mt: 3,
                  fontSize: { xs: "1rem", md: "1.08rem" },
                  lineHeight: 1.8,
                }}
              >
                You do not need to arrive with a finished software specification.
                Explain the process, where the friction is, and what you want to
                improve. I can help translate that into a practical software
                solution.
              </Typography>

              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: 4,
                  bgcolor: "rgba(255,51,102,0.07)",
                  border: "1px solid rgba(255,51,102,0.22)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 800, mb: 2 }}
                >
                  Useful things to tell me
                </Typography>

                {[
                  "What your business does",
                  "How the process is handled today",
                  "Where you are losing time or visibility",
                  "Who would use the software",
                  "What outcome you want to improve",
                ].map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: "flex",
                      gap: 1.2,
                      alignItems: "flex-start",
                      mb: 1.35,
                    }}
                  >
                    <CheckCircleOutline
                      sx={{
                        color: "#FF3366",
                        fontSize: 19,
                        mt: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.78)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.22)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        backgroundColor: "rgba(255,51,102,0.10)",
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

          {/* FORM */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Box
                component="form"
                action="https://formspree.io/f/xgvebzvl"
                method="POST"
                noValidate
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.4,
                  p: { xs: 3, sm: 4 },
                  borderRadius: 5,
                  background: "rgba(17,5,31,0.46)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 22px 70px rgba(0,0,0,0.22)",
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 800, mb: 0.8 }}
                  >
                    Discuss your project
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.62)",
                      lineHeight: 1.65,
                    }}
                  >
                    A little context helps me understand whether I can genuinely
                    help before we spend time on a call.
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="name"
                      label="Your Name"
                      name="name"
                      required
                      variant="outlined"
                      sx={fieldSx}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      type="email"
                      required
                      variant="outlined"
                      sx={fieldSx}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="contact"
                      label="Contact Number"
                      name="contact"
                      variant="outlined"
                      sx={fieldSx}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="company"
                      label="Company / Business"
                      name="company"
                      variant="outlined"
                      sx={fieldSx}
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  select
                  id="projectType"
                  label="What do you need help with?"
                  name="projectType"
                  defaultValue=""
                  variant="outlined"
                  sx={fieldSx}
                >
                  <MenuItem value="">Select a project type</MenuItem>
                  <MenuItem value="CRM / Customer Management">
                    CRM / Customer Management
                  </MenuItem>
                  <MenuItem value="ERP / Internal Business Software">
                    ERP / Internal Business Software
                  </MenuItem>
                  <MenuItem value="Inventory / Distribution System">
                    Inventory / Distribution System
                  </MenuItem>
                  <MenuItem value="Field Sales Application">
                    Field Sales Application
                  </MenuItem>
                  <MenuItem value="Business Dashboard">
                    Business Dashboard
                  </MenuItem>
                  <MenuItem value="Mobile Application">
                    Mobile Application
                  </MenuItem>
                  <MenuItem value="Website / Web Application">
                    Website / Web Application
                  </MenuItem>
                  <MenuItem value="Not Sure Yet">
                    Not Sure Yet — I want to discuss the process
                  </MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  id="currentProcess"
                  label="How do you handle this process today?"
                  name="currentProcess"
                  multiline
                  rows={3}
                  variant="outlined"
                  placeholder="For example: Excel, WhatsApp, paper registers, existing software, manual follow-ups..."
                  sx={{
                    ...fieldSx,
                    "& textarea": { color: "white" },
                  }}
                />

                <TextField
                  fullWidth
                  id="message"
                  label="What would you like to improve?"
                  name="message"
                  multiline
                  rows={4}
                  required
                  variant="outlined"
                  placeholder="Describe the problem, users involved, main requirements or the result you want from the software."
                  sx={{
                    ...fieldSx,
                    "& textarea": { color: "white" },
                  }}
                />

                <TextField
                  fullWidth
                  select
                  id="budget"
                  label="Approximate Project Budget"
                  name="budget"
                  defaultValue=""
                  variant="outlined"
                  sx={fieldSx}
                >
                  <MenuItem value="">Prefer not to say / Not sure yet</MenuItem>
                  <MenuItem value="Under ₹25,000">Under ₹25,000</MenuItem>
                  <MenuItem value="₹25,000 - ₹50,000">
                    ₹25,000 - ₹50,000
                  </MenuItem>
                  <MenuItem value="₹50,000 - ₹1,00,000">
                    ₹50,000 - ₹1,00,000
                  </MenuItem>
                  <MenuItem value="₹1,00,000 - ₹2,50,000">
                    ₹1,00,000 - ₹2,50,000
                  </MenuItem>
                  <MenuItem value="₹2,50,000+">₹2,50,000+</MenuItem>
                </TextField>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    mt: 1,
                    py: 1.45,
                    fontSize: "1rem",
                    fontWeight: 800,
                    borderRadius: 8,
                    background: "#FF3366",
                    textTransform: "none",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      background: "#E62E5C",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 26px rgba(255,51,102,0.30)",
                    },
                  }}
                >
                  Send Project Details
                </Button>

                <Typography
                  variant="caption"
                  sx={{
                    textAlign: "center",
                    color: "rgba(255,255,255,0.48)",
                  }}
                >
                  No complete specification required. A clear description of the
                  current problem is enough to start.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* SMALL POSITIONING STRIP */}
        <Box
          sx={{
            mt: { xs: 7, md: 9 },
            p: { xs: 3, md: 4 },
            borderRadius: 5,
            bgcolor: "rgba(255,51,102,0.08)",
            border: "1px solid rgba(255,51,102,0.22)",
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    minWidth: 48,
                    borderRadius: 3,
                    bgcolor: "rgba(255,51,102,0.14)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <BusinessCenter sx={{ color: "#FF3366" }} />
                </Box>

                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800 }}
                  >
                    Not sure whether you need custom software?
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.68)",
                      mt: 1,
                      lineHeight: 1.7,
                    }}
                  >
                    That is completely fine. Start with the business process.
                    Sometimes the right answer is a full application; sometimes
                    it is a much smaller internal tool.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.75,
                }}
              >
                My goal is to understand the problem first and recommend a scope
                that is useful for the business — not to add unnecessary features.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* FAQ */}
        <Box sx={{ mt: { xs: 7, md: 9 } }}>
          <Typography
            variant="overline"
            sx={{
              display: "block",
              textAlign: "center",
              color: "#FF3366",
              fontWeight: 800,
              letterSpacing: "0.14em",
              mb: 0.5,
            }}
          >
            Before We Start
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              textAlign: "center",
              mb: 4,
              fontSize: { xs: "2rem", md: "2.7rem" },
            }}
          >
            Frequently asked questions
          </Typography>

          {faqItems.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                background: "rgba(17,5,31,0.40)",
                border: "1px solid rgba(255,255,255,0.11)",
                borderRadius: "14px !important",
                mb: 1.5,
                boxShadow: "none",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "white" }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  color: "rgba(255,255,255,0.92)",
                  minHeight: 64,
                  "&:hover": {
                    background: "rgba(255,255,255,0.03)",
                  },
                }}
              >
                <Typography sx={{ fontWeight: 700 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  color: "rgba(255,255,255,0.68)",
                  lineHeight: 1.8,
                  pt: 0,
                  pb: 3,
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
