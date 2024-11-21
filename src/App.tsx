import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider, CssBaseline, Box } from "@mui/material"
import theme from "./theme"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Work from "./pages/Work"
import Skills from "./pages/Skills"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  const portfolioUrl = import.meta.env.VITE_REACT_PORTFOLIO

  console.log("Portfolio URL:", portfolioUrl) // Log the value to verify

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          {/* Header at the top */}
          <Header />

          {/* Main content with Routes */}
          <Box component="main" sx={{ flex: 1, width: "100%", px: 2 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>

          {/* Footer at the bottom */}
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
