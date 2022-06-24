import { Container } from "@mui/system";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./screens/home";
import Typography from "@mui/material/Typography";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <main>
          <Container>
            <Typography variant="h4" component="h1" align="center">
              Ecommerce App 🛒
            </Typography>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
