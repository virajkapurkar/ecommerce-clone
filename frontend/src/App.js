import { Container } from "@mui/system";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./screens/home";
import Typography from "@mui/material/Typography";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Container>
          <Typography variant="h4" component="h1" align="center">
            Ecommerce App 🛒
          </Typography>

          <Home />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
