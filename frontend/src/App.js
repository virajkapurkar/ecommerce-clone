import { Container } from "@mui/system";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./screens/home";
//mport Typography from "@mui/material/Typography";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./screens/productDetail";
import Cart from "./screens/cart.js";
import Login from "./screens/login.js";
import Register from "./screens/register.js";
import Profile from "./screens/profile.js";
import Shipping from "./screens/shipping.js";
import Payment from "./screens/payment.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <main id="main-container">
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/profile" element={<Profile />}></Route>
              <Route exact path="/shipping" element={<Shipping />}></Route>
              <Route exact path="/payment" element={<Payment />}></Route>
              <Route
                exact
                path="/product/:id"
                element={<ProductDetail />}
              ></Route>
              <Route exact path="/cart/" element={<Cart />}></Route>
              <Route exact path="/cart/:id" element={<Cart />}></Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
