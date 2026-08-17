import { useState } from "react"
import { Link as RouterLink, useLocation } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
  Typography,
  Container,
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import WorkIcon from "@mui/icons-material/Work"
import CodeIcon from "@mui/icons-material/Code"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Logo from "../assets/logo.png"

const navItems = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "Work", path: "/work", icon: <WorkIcon /> },
  { name: "Skills", path: "/skills", icon: <CodeIcon /> },
  { name: "About", path: "/about", icon: <PersonIcon /> },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev)
  }

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/"
    return location.pathname.startsWith(path)
  }

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Box
          component={RouterLink}
          to="/"
          onClick={() => setMobileOpen(false)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            textDecoration: "none",
            color: "white",
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="CodePlay"
            sx={{
              height: 38,
              width: "auto",
              display: "block",
            }}
          />

          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              CodePlay
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "rgba(255,255,255,0.52)",
                lineHeight: 1.2,
              }}
            >
              Business Software
            </Typography>
          </Box>
        </Box>

        <IconButton
          onClick={handleDrawerToggle}
          aria-label="close navigation"
          sx={{ color: "white" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ p: 0 }}>
        {navItems.map((item) => {
          const active = isActive(item.path)

          return (
            <ListItem
              key={item.name}
              component={RouterLink}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              sx={{
                borderRadius: 2.5,
                mb: 0.8,
                px: 1.5,
                color: "white",
                textDecoration: "none",
                bgcolor: active
                  ? "rgba(255,51,102,0.14)"
                  : "transparent",
                border: active
                  ? "1px solid rgba(255,51,102,0.24)"
                  : "1px solid transparent",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.06)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: active ? "#FF3366" : "rgba(255,255,255,0.72)",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontWeight: active ? 800 : 600,
                  color: "white",
                }}
              />
            </ListItem>
          )
        })}
      </List>

      <Box sx={{ mt: "auto", pt: 3 }}>
        <Button
          component={RouterLink}
          to="/contact"
          onClick={() => setMobileOpen(false)}
          variant="contained"
          fullWidth
          endIcon={<ArrowForwardIcon />}
          sx={{
            bgcolor: "#FF3366",
            color: "white",
            textTransform: "none",
            fontWeight: 800,
            borderRadius: 8,
            py: 1.35,
            "&:hover": {
              bgcolor: "#E62E5C",
            },
          }}
        >
          Discuss a Project
        </Button>
      </Box>
    </Box>
  )

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "transparent",
          boxShadow: "none",
          mt: 1.5,
          px: { xs: 1.25, sm: 2 },
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Toolbar
            sx={{
              minHeight: { xs: 66, md: 70 },
              px: { xs: 1.6, sm: 2.2 },
              borderRadius: 3.5,
              background:
                "linear-gradient(135deg, rgba(42,8,69,0.90) 0%, rgba(100,65,165,0.82) 100%)",
              backdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 14px 45px rgba(0,0,0,0.24)",
            }}
          >
            {/* Brand */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.15,
                textDecoration: "none",
                color: "white",
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src={Logo}
                alt="CodePlay"
                sx={{
                  height: { xs: 38, md: 42 },
                  width: "auto",
                  display: "block",
                }}
              />

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "1rem",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                  }}
                >
                  CodePlay
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: "rgba(255,255,255,0.50)",
                    lineHeight: 1.1,
                  }}
                >
                  Business Software
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                ml: "auto",
                gap: 0.5,
              }}
            >
              {navItems.map((item) => {
                const active = isActive(item.path)

                return (
                  <Button
                    key={item.name}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      position: "relative",
                      px: 1.7,
                      py: 1,
                      color: active ? "white" : "rgba(255,255,255,0.74)",
                      textTransform: "none",
                      fontWeight: active ? 800 : 650,
                      borderRadius: 7,
                      "&:hover": {
                        color: "white",
                        bgcolor: "rgba(255,255,255,0.055)",
                      },
                      "&::after": active
                        ? {
                            content: '""',
                            position: "absolute",
                            left: "50%",
                            bottom: 4,
                            width: 18,
                            height: 2,
                            borderRadius: 2,
                            bgcolor: "#FF3366",
                            transform: "translateX(-50%)",
                          }
                        : {},
                    }}
                  >
                    {item.name}
                  </Button>
                )
              })}

              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
                sx={{
                  ml: 1.2,
                  bgcolor: "#FF3366",
                  color: "white",
                  px: 2.3,
                  py: 1,
                  borderRadius: 8,
                  textTransform: "none",
                  fontWeight: 800,
                  boxShadow: "0 10px 25px rgba(255,51,102,0.18)",
                  "&:hover": {
                    bgcolor: "#E62E5C",
                  },
                }}
              >
                Discuss Project
              </Button>
            </Box>

            {/* Mobile Menu */}
            <IconButton
              color="inherit"
              aria-label="open navigation"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: "none" },
                ml: "auto",
                color: "white",
                border: "1px solid rgba(255,255,255,0.10)",
                bgcolor: "rgba(255,255,255,0.04)",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: "86%", sm: 340 },
            maxWidth: 360,
            p: 2.5,
            background:
              "linear-gradient(160deg, #1B082D 0%, #31104A 55%, #451A62 100%)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}
