import React, { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Logo from "../assets/logo.png" // Replace with the path to your logo

const navItems = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Skills", path: "/skills" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
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
            {/* <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#ffffff", // Logo text color
              }}
            >
              RACHIT GUPTA
            </Typography> */}
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
                    backgroundColor: "#2e305e", // Hover background color
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
            width: 240,
            backgroundColor: "#1b1d3a", // Dark background for mobile drawer
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}
