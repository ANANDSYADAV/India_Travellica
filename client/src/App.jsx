import Home from "./pages/Home"
import Footer from "./pages/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import AboutUs from "./pages/AboutUs"
import Error from "./pages/Error"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
