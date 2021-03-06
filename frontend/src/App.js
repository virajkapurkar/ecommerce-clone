import { Container } from "@mui/system";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./screens/home";
//mport Typography from "@mui/material/Typography";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./screens/productDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <main>
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />}></Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
