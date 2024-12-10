import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
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
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import WorkIcon from "@mui/icons-material/Work"
import CodeIcon from "@mui/icons-material/Code"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import MenuIcon from "@mui/icons-material/Menu"
import Logo from "../assets/logo.png" // Replace with the path to your logo

const navItems = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "Work", path: "/work", icon: <WorkIcon /> },
  { name: "Skills", path: "/skills", icon: <CodeIcon /> },
  { name: "About", path: "/about", icon: <PersonIcon /> },
  { name: "Contact", path: "/contact", icon: <EmailIcon /> },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "#ffffff",
        }}
      >
        RACHIT GUPTA
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={RouterLink}
            to={item.path}
            sx={{
              "&:hover": {
                backgroundColor: "#2e305e", // Hover effect for drawer items
              },
            }}
          >
            <ListItemIcon sx={{ color: "#FF3366", minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                color: "#ffffff",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(135deg, #2A0845 0%, #6441A5 100%)", // Gradient background
          backdropFilter: "blur(10px)", // Add blur effect
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)", // Enhanced shadow for depth
          maxWidth: "90%", // Limit header width
          left: "50%",
          transform: "translateX(-50%)",
          mt: 1,
          borderRadius: 2,
        }}
      >
        <Toolbar
          sx={{
            px: 2,
            display: "flex",
            justifyContent: "space-between", // Align content in toolbar
          }}
        >
          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img src={Logo} alt="Logo" style={{ height: 40, marginRight: 8 }} />
            {/* You can uncomment the text logo if needed */}
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, ml: "auto" }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={RouterLink}
                to={item.path}
                sx={{
                  mx: 1,
                  color: "#ffffff", // Text color
                  backgroundColor: "transparent", // Transparent background for buttons
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#FF3366", // Hover background color
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, ml: "auto" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: "#1b1d3a",
            backgroundImage:
              "linear-gradient(135deg, #2A0845 0%, #6441A5 100%)",
            padding: 2,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}
