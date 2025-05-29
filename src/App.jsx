import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import NavBar from "./components/NavBar/NavBar"
import { ActiveProvider } from "./context/ActiveContext"


function App() {
  const navItems = [
    {
    href : "/",
    content : "Home"
  },
    {
    href : "#about",
    content : "About me"
  },
    {
    href : "#eduAndExp",
    content : "Education"
  },
    {
    href : "/Projects",
    content : "Projects"
  },
    {
    href : "#contact",
    content : "Contact"
}]
  return (
    <ActiveProvider>
      <NavBar logo="Nour" navItems={navItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </ActiveProvider>
  )
}

export default App
